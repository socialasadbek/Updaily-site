export const locales = ['uz', 'cyrl', 'ru', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'uz';

export const hreflang: Record<Locale, string> = { uz: 'uz-Latn', cyrl: 'uz-Cyrl', ru: 'ru', en: 'en' };
export const langName: Record<Locale, string> = { uz: "O'zbek", cyrl: 'Ўзбек', ru: 'Русский', en: 'English' };

export const categories = ['news', 'startups', 'business', 'investments', 'technology', 'research', 'interviews'] as const;

export const ui: Record<Locale, Record<string, string>> = {
  uz: {
    news: 'Yangiliklar', startups: 'Startaplar', business: 'Biznes', investments: 'Investitsiyalar',
    technology: 'Texnologiya', research: 'Tadqiqotlar', interviews: 'Intervyular',
    latest: "So'nggi yangiliklar", search: 'Qidirish', summary: 'Qisqacha', sources: 'Manbalar',
    author: 'Maqola muallifi', tags: 'Teglar', share: "Do'stlaringiz bilan ulashing",
    ad: 'Reklama', sponsored: 'Homiylik materiali', minRead: 'daqiqa o‘qish', updated: 'Yangilandi',
    admin: 'Admin panel', channels: 'Kanallar', notFound: 'Sahifa topilmadi', home: 'Bosh sahifa',
  },
  cyrl: {
    news: 'Янгиликлар', startups: 'Стартаплар', business: 'Бизнес', investments: 'Инвестициялар',
    technology: 'Технология', research: 'Тадқиқотлар', interviews: 'Интервьюлар',
    latest: 'Сўнгги янгиликлар', search: 'Қидириш', summary: 'Қисқача', sources: 'Манбалар',
    author: 'Мақола муаллифи', tags: 'Теглар', share: 'Дўстларингиз билан улашинг',
    ad: 'Реклама', sponsored: 'Хомийлик материали', minRead: 'дақиқа ўқиш', updated: 'Янгиланди',
    admin: 'Админ панел', channels: 'Каналлар', notFound: 'Саҳифа топилмади', home: 'Бош саҳифа',
  },
  ru: {
    news: 'Новости', startups: 'Стартапы', business: 'Бизнес', investments: 'Инвестиции',
    technology: 'Технологии', research: 'Исследования', interviews: 'Интервью',
    latest: 'Последние новости', search: 'Поиск', summary: 'Коротко', sources: 'Источники',
    author: 'Автор статьи', tags: 'Теги', share: 'Поделитесь с друзьями',
    ad: 'Реклама', sponsored: 'Партнёрский материал', minRead: 'мин чтения', updated: 'Обновлено',
    admin: 'Админ-панель', channels: 'Каналы', notFound: 'Страница не найдена', home: 'Главная',
  },
  en: {
    news: 'News', startups: 'Startups', business: 'Business', investments: 'Investments',
    technology: 'Technology', research: 'Research', interviews: 'Interviews',
    latest: 'Latest news', search: 'Search', summary: 'In brief', sources: 'Sources',
    author: 'Author', tags: 'Tags', share: 'Share with friends',
    ad: 'Advertisement', sponsored: 'Sponsored content', minRead: 'min read', updated: 'Updated',
    admin: 'Admin panel', channels: 'Channels', notFound: 'Page not found', home: 'Home',
  },
};

export const t = (l: Locale, key: string) => ui[l][key] ?? ui.uz[key] ?? key;
export const localePath = (l: Locale, path = '/') => (l === defaultLocale ? path : `/${l}${path === '/' ? '' : path}`);
