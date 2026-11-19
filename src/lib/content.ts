import { getCollection, type CollectionEntry } from 'astro:content';
import settings from '../data/settings.json';
import { localePath, type Locale } from '../i18n/config';

export { settings };
export type Article = CollectionEntry<'articles'>;
export const PAGE_SLUGS = ['about', 'editorial-policy', 'privacy', 'terms', 'contact', 'advertising'];

export const slugOf = (a: Article) => a.id.split('/').slice(1).join('/');
export const localeOf = (a: Article) => a.id.split('/')[0] as Locale;
export const articleUrl = (a: Article) => localePath(localeOf(a), `/a/${slugOf(a)}`);
export const byLocale = (all: Article[], l: Locale) => all.filter((a) => localeOf(a) === l);

// Admin panelda kiritilgan sana Toshkent vaqti (UTC+5) sifatida saqlanadi.
const H5 = 5 * 3600 * 1000;
const fixed = new WeakSet<object>();

export async function allArticles() {
  const raw = await getCollection('articles');
  for (const a of raw) {
    if (fixed.has(a)) continue;
    fixed.add(a);
    a.data.date = new Date(a.data.date.getTime() - H5);
    if (a.data.updated) a.data.updated = new Date(a.data.updated.getTime() - H5);
  }
  const now = Date.now();
  return raw.filter((a) => a.data.published && a.data.date.getTime() <= now).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function alternates(all: Article[], a: Article) {
  const out: Partial<Record<Locale, string>> = { [localeOf(a)]: articleUrl(a) };
  const key = a.data.translationKey;
  if (key) for (const b of all) if (b.data.translationKey === key) out[localeOf(b)] = articleUrl(b);
  return out;
}

export const readMin = (body = '') => Math.max(1, Math.round(body.split(/\s+/).length / 200));

const f = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Asia/Tashkent', day: '2-digit', month: '2-digit', year: 'numeric',
  hour: '2-digit', minute: '2-digit', hour12: false,
});
export const fmtDate = (d: Date) => f.format(d).replace(',', '').replace(/\//g, '.');

export async function eventsFor(l: Locale) {
  const all = (await getCollection('events')).filter((e) => e.data.lang === 'all' || e.data.lang === l);
  const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Tashkent' });
  const key = (e: (typeof all)[number]) => e.data.date.toISOString().slice(0, 10);
  const up = all.filter((e) => key(e) >= today).sort((a, b) => key(a).localeCompare(key(b)));
  const past = all.filter((e) => key(e) < today).sort((a, b) => key(b).localeCompare(key(a)));
  return { up, past };
}

export async function getPage(slug: string, l: Locale) {
  const all = await getCollection('pages');
  return all.find((p) => p.id === `${l}/${slug}`) ?? all.find((p) => p.id === `uz/${slug}`);
}
