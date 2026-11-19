# Updaily site

1. GitHub'da `updaily-site` repo oching va shu fayllarni yuklang.
2. Cloudflare -> Workers & Pages -> Create -> Pages -> Connect to Git.
   Build command: `npm run build`, output directory: `dist`, o'zgaruvchi: `NODE_VERSION=20`.
3. `https://<loyiha>.pages.dev/admin` -> GitHub token bilan kirish.
4. Kurslar API: `/api/rates` (Cloudflare Pages Function, 1 soat kesh).
