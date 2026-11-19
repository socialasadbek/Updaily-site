import { getCollection, type CollectionEntry } from 'astro:content';
import settings from '../data/settings.json';
import { localePath, type Locale } from '../i18n/config';

export { settings };
export type Article = CollectionEntry<'articles'>;

export const slugOf = (a: Article) => a.id.split('/').slice(1).join('/');
export const localeOf = (a: Article) => a.id.split('/')[0] as Locale;
export const articleUrl = (a: Article) => localePath(localeOf(a), `/a/${slugOf(a)}`);
export const byLocale = (all: Article[], l: Locale) => all.filter((a) => localeOf(a) === l);

export async function allArticles() {
  const now = Date.now();
  const list = (await getCollection('articles')).filter((a) => a.data.published && a.data.date.getTime() <= now);
  return list.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
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
