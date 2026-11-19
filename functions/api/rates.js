// Markaziy bank kurslari. Kuniga bir marta o'zgaradi, shuning uchun 1 soat keshlanadi.
export async function onRequestGet({ request, waitUntil }) {
  const cache = caches.default;
  const key = new Request(new URL('/api/rates', request.url).toString());
  const hit = await cache.match(key);
  if (hit) return hit;

  const up = await fetch('https://cbu.uz/uz/arkhiv-kursov-valyut/json/', { headers: { accept: 'application/json' } });
  if (!up.ok) {
    return new Response(JSON.stringify({ error: 'upstream' }), { status: 502, headers: { 'content-type': 'application/json' } });
  }
  const all = await up.json();
  const want = ['USD', 'EUR', 'RUB', 'GBP', 'CNY', 'KZT', 'TRY', 'AED'];
  const rates = want
    .map((c) => all.find((x) => x.Ccy === c))
    .filter(Boolean)
    .map((x) => ({ ccy: x.Ccy, rate: Number(x.Rate), diff: Number(x.Diff), date: x.Date }));

  const res = new Response(JSON.stringify({ rates }), {
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'public, max-age=3600' },
  });
  waitUntil(cache.put(key, res.clone()));
  return res;
}
