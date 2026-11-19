import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://updaily.uz',
  i18n: {
    defaultLocale: 'uz',
    locales: ['uz', 'cyrl', 'ru', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'uz',
        locales: { uz: 'uz-Latn', cyrl: 'uz-Cyrl', ru: 'ru', en: 'en' },
      },
    }),
  ],
});
