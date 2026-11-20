export const locales = ['uz', 'cyrl', 'ru', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'uz';

export const hreflang: Record<Locale, string> = { uz: 'uz-Latn', cyrl: 'uz-Cyrl', ru: 'ru', en: 'en' };
export const langName: Record<Locale, string> = { uz: "O'zbek", cyrl: 'Ўзбек', ru: 'Русский', en: 'English' };
export const langCode: Record<Locale, string> = { uz: 'UZ', cyrl: 'ЎЗ', ru: 'RU', en: 'EN' };

export const categories = ['news', 'articles', 'startups', 'business', 'investments', 'technology', 'research', 'interviews'] as const;

export const months: Record<Locale, string[]> = {
  uz: ['yan', 'fev', 'mar', 'apr', 'may', 'iyn', 'iyl', 'avg', 'sen', 'okt', 'noy', 'dek'],
  cyrl: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
  ru: ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

export const ui: Record<Locale, Record<string, string>> = {
  uz: {
    news: 'Yangiliklar', articles: 'Maqolalar', startups: 'Startaplar', business: 'Biznes', investments: 'Investitsiyalar',
    technology: 'Texnologiya', research: 'Tadqiqotlar', interviews: 'Intervyular',
    latest: "So'nggi yangiliklar", search: 'Qidirish', summary: 'Qisqacha', sources: 'Manbalar',
    author: 'Maqola muallifi', tags: 'Teglar', share: "Do'stlaringiz bilan ulashing", follow: "Updaily'ga obuna bo'ling", shareBtn: 'Ulashish',
    ad: 'Reklama', sponsored: 'Homiylik materiali', minRead: 'daqiqa o‘qish', updated: 'Yangilandi',
    admin: 'Admin panel', channels: 'Kanallar', notFound: 'Sahifa topilmadi', home: 'Bosh sahifa',
    rates: 'Valyutalar kursi', events: 'Tadbirlar', calendar: 'Tadbirlar taqvimi', upcoming: 'Yaqin tadbirlar', past: "O'tgan tadbirlar",
    about: 'Biz haqimizda', advertising: 'Reklama', contact: "Bog'lanish", policy: 'Tahririy siyosat', privacy: 'Maxfiylik siyosati',
    terms: 'Foydalanish shartlari', report: 'Xatoni xabar qiling', more: "Ko'proq yangiliklarni yuklash", editorIn: 'Bosh muharrir',
    lang: 'Til', theme: 'Tungi rejim', team: 'Jamoa', rateNote: 'Markaziy bank kursi', articlesBy: 'Muallif maqolalari', expertise: 'Yo‘nalishlar', where: 'Manzil', openMap: 'Xaritada ochish', register: "Batafsil va ro'yxatdan o'tish",
  },
  cyrl: {
    news: 'Янгиликлар', articles: 'Мақолалар', startups: 'Стартаплар', business: 'Бизнес', investments: 'Инвестициялар',
    technology: 'Технология', research: 'Тадқиқотлар', interviews: 'Интервьюлар',
    latest: 'Сўнгги янгиликлар', search: 'Қидириш', summary: 'Қисқача', sources: 'Манбалар',
    author: 'Мақола муаллифи', tags: 'Теглар', share: 'Дўстларингиз билан улашинг', follow: 'Updaily саҳифаларига обуна бўлинг', shareBtn: 'Улашиш',
    ad: 'Реклама', sponsored: 'Хомийлик материали', minRead: 'дақиқа ўқиш', updated: 'Янгиланди',
    admin: 'Админ панел', channels: 'Каналлар', notFound: 'Саҳифа топилмади', home: 'Бош саҳифа',
    rates: 'Валюталар курси', events: 'Тадбирлар', calendar: 'Тадбирлар тақвими', upcoming: 'Яқин тадбирлар', past: 'Ўтган тадбирлар',
    about: 'Биз ҳақимизда', advertising: 'Реклама', contact: 'Боғланиш', policy: 'Таҳририй сиёсат', privacy: 'Махфийлик сиёсати',
    terms: 'Фойдаланиш шартлари', report: 'Хатони хабар қилинг', more: 'Кўпроқ янгиликларни юклаш', editorIn: 'Бош муҳаррир',
    lang: 'Тил', theme: 'Тунги режим', team: 'Жамоа', rateNote: 'Марказий банк курси', articlesBy: 'Муаллиф мақолалари', expertise: 'Йўналишлар', where: 'Манзил', openMap: 'Харитада очиш', register: 'Батафсил ва рўйхатдан ўтиш',
  },
  ru: {
    news: 'Новости', articles: 'Статьи', startups: 'Стартапы', business: 'Бизнес', investments: 'Инвестиции',
    technology: 'Технологии', research: 'Исследования', interviews: 'Интервью',
    latest: 'Последние новости', search: 'Поиск', summary: 'Коротко', sources: 'Источники',
    author: 'Автор статьи', tags: 'Теги', share: 'Поделитесь с друзьями', follow: 'Подписывайтесь на Updaily', shareBtn: 'Поделиться',
    ad: 'Реклама', sponsored: 'Партнёрский материал', minRead: 'мин чтения', updated: 'Обновлено',
    admin: 'Админ-панель', channels: 'Каналы', notFound: 'Страница не найдена', home: 'Главная',
    rates: 'Курсы валют', events: 'События', calendar: 'Календарь событий', upcoming: 'Ближайшие события', past: 'Прошедшие события',
    about: 'О нас', advertising: 'Реклама', contact: 'Контакты', policy: 'Редакционная политика', privacy: 'Политика конфиденциальности',
    terms: 'Условия использования', report: 'Сообщить об ошибке', more: 'Загрузить ещё', editorIn: 'Главный редактор',
    lang: 'Язык', theme: 'Тёмная тема', team: 'Команда', rateNote: 'Курс Центрального банка', articlesBy: 'Статьи автора', expertise: 'Направления', where: 'Место', openMap: 'Открыть на карте', register: 'Подробнее и регистрация',
  },
  en: {
    news: 'News', articles: 'Articles', startups: 'Startups', business: 'Business', investments: 'Investments',
    technology: 'Technology', research: 'Research', interviews: 'Interviews',
    latest: 'Latest news', search: 'Search', summary: 'In brief', sources: 'Sources',
    author: 'Author', tags: 'Tags', share: 'Share with friends', follow: 'Follow Updaily', shareBtn: 'Share',
    ad: 'Advertisement', sponsored: 'Sponsored content', minRead: 'min read', updated: 'Updated',
    admin: 'Admin panel', channels: 'Channels', notFound: 'Page not found', home: 'Home',
    rates: 'Exchange rates', events: 'Events', calendar: 'Events calendar', upcoming: 'Upcoming events', past: 'Past events',
    about: 'About us', advertising: 'Advertising', contact: 'Contact', policy: 'Editorial policy', privacy: 'Privacy policy',
    terms: 'Terms of use', report: 'Report an error', more: 'Load more news', editorIn: 'Editor-in-chief',
    lang: 'Language', theme: 'Dark mode', team: 'Team', rateNote: 'Central Bank rate', articlesBy: 'Articles by author', expertise: 'Expertise', where: 'Location', openMap: 'Open in maps', register: 'Details and registration',
  },
};

export const t = (l: Locale, key: string) => ui[l][key] ?? ui.uz[key] ?? key;
export const localePath = (l: Locale, path = '/') => (l === defaultLocale ? path : `/${l}${path === '/' ? '' : path}`);
