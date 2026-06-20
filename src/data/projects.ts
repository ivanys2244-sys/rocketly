export interface Project {
  title: string;
  description: string;
  slug: string;
  type: "website" | "telegram";
  technologies: string[];
  iconName: "Bot" | "Globe" | "Zap";
  accent: string;
  features: string[];
  demoUrl?: string;
  telegramUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Telegram-бот для записи клиентов",
    description:
      "Бот для салона красоты с прайс-листом, галереей работ, автоматическими напоминаниями о визите и приёмом заявок 24/7.",
    slug: "beauty-bot",
    type: "telegram",
    technologies: ["Node.js", "Telegraf", "MongoDB", "Railway"],
    iconName: "Bot",
    accent: "#00D4E8",
    features: [
      "Запись клиентов 24/7",
      "Прайс-лист и галерея",
      "Автонапоминания о визите",
      "Уведомления в Telegram",
      "История записей",
    ],
    telegramUrl: "https://t.me/testtest6767BOT",
    image: "/projects/beauty-bot.jpg",
  },
  {
    title: "Swag Bank — цифровой банкинг",
    description:
      "Современный интерфейс цифрового банка с мгновенными переводами, AI-инвестициями, премиальными картами и аналитикой в реальном времени.",
    slug: "swag-bank",
    type: "website",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    iconName: "Globe",
    accent: "#9B4DFF",
    features: [
      "Мгновенные переводы в 120+ стран",
      "AI-инвестиционный портфель",
      "Премиальные карты с кэшбэком 5%",
      "Аналитика расходов и бюджеты",
      "Мультивалютные счета",
      "Адаптивный дизайн",
    ],
    demoUrl: "http://localhost:3004",
    image: "/projects/swag-bank.jpg",
  },
  {
    title: "glo — студия красоты",
    description:
      "Сайт-визитка студии красоты с каталогом услуг, онлайн-записью, портфолио работ и отзывами клиентов.",
    slug: "beauty-studio",
    type: "website",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    iconName: "Globe",
    accent: "#00E67A",
    features: [
      "Каталог услуг с ценами",
      "Онлайн-запись 24/7",
      "Портфолио работ",
      "Карточки мастеров",
      "Отзывы клиентов",
      "FAQ и контакты",
    ],
    demoUrl: "http://localhost:3001",
    image: "/projects/beauty-studio.jpg",
  },
  {
    title: "AKARI — ресторан японской кухни",
    description:
      "Сайт ресторана робатайки с меню на углях binchotan, галереей атмосферы и онлайн-бронированием столиков.",
    slug: "amber-restaurant",
    type: "website",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    iconName: "Globe",
    accent: "#FF5225",
    features: [
      "Меню с фильтрацией по категориям",
      "Галерея интерьера и блюд",
      "Онлайн-бронирование столиков",
      "Отзывы гостей",
      "История ресторана",
      "Адаптивный дизайн",
    ],
    demoUrl: "http://localhost:3005",
    image: "/projects/amber-restaurant.jpg",
  },
  {
    title: "iPhone Revive — магазин б/у iPhone",
    description:
      "Магазин проверенных б/у iPhone с полной диагностикой, гарантией до 12 месяцев, Trade-In и быстрой доставкой.",
    slug: "iphone-revive",
    type: "website",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    iconName: "Globe",
    accent: "#00D4E8",
    features: [
      "Каталог моделей с ценами",
      "Проверка IMEI и диагностика 40+ параметров",
      "Гарантия до 12 месяцев",
      "Trade-In со скидкой до 40 000 ₽",
      "Быстрая доставка по РФ",
      "FAQ и контакты",
    ],
    demoUrl: "http://localhost:3002",
    image: "/projects/iphone-revive.jpg",
  },
  {
    title: "MC Accounts — магазин аккаунтов Minecraft",
    description:
      "Магазин лицензионных Minecraft-аккаунтов с разными тарифами, редкими скинами, плащами и мгновенной выдачей.",
    slug: "mc-accounts",
    type: "website",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    iconName: "Globe",
    accent: "#FFB347",
    features: [
      "Тарифы Starter/Premium/Ultra/God",
      "Редкие скины и Minecon-плащи",
      "Мгновенная выдача",
      "Миграция на свою почту",
      "Гарантия до 90 дней",
      "Адаптивный дизайн",
    ],
    demoUrl: "http://localhost:3003",
    image: "/projects/mc-accounts.jpg",
  },
  {
    title: "Языковая школа — онлайн-обучение",
    description:
      "Сайт языковой школы с каталогом курсов, расписанием занятий и записью на пробный урок.",
    slug: "language-school",
    type: "website",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    iconName: "Globe",
    accent: "#9B4DFF",
    features: [
      "Каталог курсов и уровней",
      "Расписание занятий",
      "Запись на пробный урок",
      "Команда преподавателей",
      "Отзывы учеников",
      "Адаптивный дизайн",
    ],
    demoUrl: "http://localhost:3006",
    image: "/projects/language-school.jpg",
  },
];
