"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { CheckCircle, MessageCircle, Plus, Minus, Info, ArrowRight, Star } from "lucide-react";

type Option = {
  id: string;
  label: string;
  hint?: string;
  price: number;
};

type Package = {
  id: string;
  name: string;
  emoji: string;
  basePrice: number;
  deadline: string;
  description: string;
  features: string[];
  highlight?: boolean;
};

type Category = {
  id: string;
  title: string;
  packages: Package[];
  options: Option[];
};

const categories: Category[] = [
  {
    id: "bot",
    title: "Telegram-бот",
    packages: [
      {
        id: "bot-start",
        name: "Start",
        emoji: "🚀",
        basePrice: 5000,
        deadline: "2–3 дня",
        description: "Бот с записью клиентов. Готов к расширению функциями ниже.",
        features: [
          "Приветственное сообщение и меню",
          "Сбор заявок с уведомлением вам",
          "Запись / бронирование с выбором времени",
          "До 5 кнопок в меню",
          "Поддержка 7 дней",
        ],
      },
      {
        id: "bot-middle",
        name: "Middle",
        emoji: "💼",
        basePrice: 12000,
        deadline: "4–5 дней",
        description: "Полноценный бот для бизнеса с интеграциями.",
        features: [
          "Всё из Start",
          "До 5 экранов и до 15 кнопок",
          "Автонапоминания о визите (за день и за 2 часа)",
          "1 интеграция (CRM, Google Sheets, почта)",
          "Каталог или прайс-лист с фото",
          "Поддержка 30 дней",
        ],
        highlight: true,
      },
      {
        id: "bot-ultra",
        name: "Ultra",
        emoji: "🏆",
        basePrice: 25000,
        deadline: "7–10 дней",
        description: "Бот с оплатой и аналитикой для серьёзного бизнеса.",
        features: [
          "Всё из Middle",
          "Оплата в боте (ЮKassa, Telegram Pay)",
          "До 3 интеграций",
          "Дашборд для админа с аналитикой",
          "Безлимитные экраны и кнопки",
          "Рассылки по базе подписчиков",
          "Поддержка 90 дней",
        ],
      },
    ],
    options: [
      { id: "reviews", label: "Сбор отзывов после оказания услуги", price: 1000 },
      { id: "geo", label: "Геолокация и поиск ближайших точек", hint: "Для оффлайн-бизнеса с филиалами", price: 1500 },
      { id: "multilang", label: "Мультиязычность (RU/EN)", price: 2000 },
      { id: "broadcast", label: "Рассылки по базе подписчиков", hint: "С сегментацией и аналитикой открытий", price: 1500 },
      { id: "support-30", label: "Расширенная поддержка +30 дней", hint: "Доступно для пакета Start", price: 3000 },
    ],
  },
  {
    id: "site",
    title: "Сайт",
    packages: [
      {
        id: "site-start",
        name: "Start",
        emoji: "🚀",
        basePrice: 10000,
        deadline: "3–4 дня",
        description: "Лендинг для проверки гипотезы или быстрого старта.",
        features: [
          "1 страница (лендинг)",
          "Адаптивный дизайн под телефон и планшет",
          "Форма заявки с уведомлением в Telegram",
          "Базовое SEO (title, description, OG)",
          "Подключение аналитики",
          "Поддержка 14 дней",
        ],
      },
      {
        id: "site-middle",
        name: "Middle",
        emoji: "💼",
        basePrice: 20000,
        deadline: "5–7 дней",
        description: "Сайт-визитка для серьёзного бизнеса.",
        features: [
          "3–5 страниц (Главная, Услуги, О нас, Контакты)",
          "Расширенное SEO",
          "До 3 форм заявок",
          "Аналитика с целями",
          "Поддержка 30 дней",
        ],
        highlight: true,
      },
      {
        id: "site-ultra",
        name: "Ultra",
        emoji: "🏆",
        basePrice: 40000,
        deadline: "10–14 дней",
        description: "Многостраничный сайт с CMS, который можно редактировать самому.",
        features: [
          "Без лимита страниц",
          "Уникальный дизайн",
          "CMS — редактируйте сами",
          "Полное SEO и интеграция с CRM",
          "Без лимита форм",
          "Поддержка 60 дней",
        ],
      },
    ],
    options: [
      { id: "site-blog", label: "Блог с админкой", price: 3500 },
      { id: "site-quiz", label: "Квиз-форма (опрос с расчётом)", price: 2500 },
      { id: "site-crm-link", label: "Связка сайта с CRM", hint: "Заявки с сайта попадают в CRM в реальном времени", price: 2000 },
      { id: "site-speed", label: "Ускоренная загрузка и SEO-продвижение", price: 3000 },
      { id: "site-multilang", label: "Мультиязычность", price: 2500 },
      { id: "site-design", label: "Уникальный дизайн вместо шаблона", hint: "Доступно для Start и Middle", price: 5000 },
    ],
  },
  {
    id: "combo",
    title: "Сайт + бот",
    packages: [
      {
        id: "combo-start",
        name: "Start",
        emoji: "🚀",
        basePrice: 13500,
        deadline: "5–6 дней",
        description: "Лендинг + бот с записью. Скидка 10% от суммы пакетов.",
        features: [
          "Лендинг + Telegram-бот Start",
          "Заявки с сайта → в бот и вам в Telegram",
          "Запись через бот",
          "Базовое SEO и аналитика",
          "Поддержка 14 дней",
        ],
      },
      {
        id: "combo-middle",
        name: "Middle",
        emoji: "💼",
        basePrice: 28800,
        deadline: "8–10 дней",
        description: "Сайт-визитка + бот с интеграциями.",
        features: [
          "Сайт 3–5 стр. + Telegram-бот Middle",
          "Сквозная аналитика (сайт → бот → заявка)",
          "1 интеграция с CRM",
          "Автонапоминания о визите",
          "Поддержка 30 дней",
        ],
        highlight: true,
      },
      {
        id: "combo-ultra",
        name: "Ultra",
        emoji: "🏆",
        basePrice: 58500,
        deadline: "14–18 дней",
        description: "Полная автоматизация: сайт + бот с оплатой и аналитикой.",
        features: [
          "Многостраничный сайт + Telegram-бот Ultra",
          "Единая оплата через сайт и бот (ЮKassa, Telegram Pay)",
          "Дашборд админа с аналитикой",
          "До 3 интеграций",
          "Поддержка 90 дней",
        ],
      },
    ],
    options: [
      { id: "combo-blog", label: "Блог с админкой", price: 3500 },
      { id: "combo-quiz", label: "Квиз-форма на сайте", hint: "Опрос с расчётом стоимости", price: 2500 },
      { id: "combo-broadcast", label: "Рассылки в боте по сегментам", hint: "Акции, новости, напоминания о визите", price: 2000 },
      { id: "combo-multilang", label: "Мультиязычность (RU/EN)", price: 3000 },
      { id: "combo-design", label: "Уникальный дизайн", hint: "Вместо шаблонного. Доступно для Start и Middle", price: 8000 },
      { id: "combo-support-60", label: "Расширенная поддержка +60 дней", hint: "Доступно для пакета Start", price: 6000 },
    ],
  },
];

function formatPrice(n: number) {
  return new Intl.NumberFormat("ru-RU").format(n);
}

function Calculator() {
  const [active, setActive] = useState<string>("bot");
  const [activePackage, setActivePackage] = useState<Record<string, string>>({
    bot: "bot-middle",
    site: "site-middle",
    combo: "combo-middle",
  });
  const [selected, setSelected] = useState<Record<string, Set<string>>>({
    bot: new Set(),
    site: new Set(),
    combo: new Set(),
  });

  const category = categories.find((c) => c.id === active)!;
  const pkg = category.packages.find((p) => p.id === activePackage[active])!;
  const selectedIds = selected[active];
  const optionsTotal = useMemo(
    () =>
      category.options
        .filter((o) => selectedIds.has(o.id))
        .reduce((sum, o) => sum + o.price, 0),
    [category, selectedIds]
  );
  const total = pkg.basePrice + optionsTotal;

  const toggle = (optionId: string) => {
    setSelected((prev) => {
      const next = { ...prev };
      const set = new Set(prev[active]);
      if (set.has(optionId)) set.delete(optionId);
      else set.add(optionId);
      next[active] = set;
      return next;
    });
  };

  const message = useMemo(() => {
    const chosen = category.options.filter((o) => selectedIds.has(o.id));
    const lines = [
      `Хочу заказать: ${category.title} · пакет ${pkg.name}`,
      `Пакет: ${formatPrice(pkg.basePrice)} ₽ (${pkg.deadline})`,
    ];
    if (chosen.length > 0) {
      lines.push("Допы:");
      chosen.forEach((o) =>
        lines.push(`  • ${o.label} — ${formatPrice(o.price)} ₽`)
      );
    }
    lines.push(`Итого: ${formatPrice(total)} ₽`);
    return encodeURIComponent(lines.join("\n"));
  }, [category, pkg, selectedIds, total]);

  return (
    <div className="grid lg:grid-cols-12 gap-6">
      <div className="lg:col-span-12">
        <div className="flex flex-wrap gap-2 p-1 rounded-xl bg-[rgba(12,18,48,0.5)] border border-[rgba(0,212,232,0.08)]">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`flex-1 min-w-[120px] px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                active === c.id
                  ? "bg-[#00D4E8] text-[#060A1E]"
                  : "text-[#4D5E88] hover:text-white"
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>
      </div>

      <div className="lg:col-span-12">
        <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
          {category.packages.map((p) => {
            const isActive = p.id === activePackage[active];
            return (
              <button
                key={p.id}
                onClick={() =>
                  setActivePackage((prev) => ({ ...prev, [active]: p.id }))
                }
                aria-pressed={isActive}
                className={`relative text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 ${
                  isActive
                    ? "bg-[rgba(0,212,232,0.08)] border-[rgba(0,212,232,0.5)] shadow-[0_0_30px_rgba(0,212,232,0.15)]"
                    : "bg-[rgba(12,18,48,0.4)] border-[rgba(0,212,232,0.08)] hover:border-[rgba(0,212,232,0.25)]"
                }`}
              >
                {p.highlight && (
                  <div
                    className="absolute -top-px left-0 right-0 h-1 rounded-t-2xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #00D4E8, #9B4DFF, #00E67A)",
                    }}
                  />
                )}
                {p.highlight && (
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#9B4DFF] text-white text-[10px] font-bold tracking-wide">
                    <Star size={10} fill="white" strokeWidth={0} aria-hidden="true" />
                    ПОПУЛЯРНЫЙ
                  </div>
                )}
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl" aria-hidden="true">{p.emoji}</span>
                  <span className={`text-lg font-bold ${isActive ? "text-white" : "text-[#D8E4FF]"}`}>
                    {p.name}
                  </span>
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className={`text-2xl sm:text-3xl font-extrabold font-['JetBrains_Mono'] ${isActive ? "text-[#00D4E8]" : "text-white"}`}>
                    {formatPrice(p.basePrice)}
                  </span>
                  <span className="text-[#4D5E88] text-sm">₽</span>
                </div>
                <div className="text-[#4D5E88] text-xs mb-3 font-['JetBrains_Mono']">
                  {p.deadline}
                </div>
                <p className="text-[#4D5E88] text-xs leading-relaxed">
                  {p.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="lg:col-span-7">
        <div className="glass-premium rounded-2xl p-5 sm:p-6 h-full">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl" aria-hidden="true">{pkg.emoji}</span>
            <h4 className="text-white text-base font-semibold">
              {category.title} · {pkg.name}
            </h4>
          </div>
          <p className="text-[#4D5E88] text-xs leading-relaxed mb-4">
            {pkg.description}
          </p>
          <ul className="space-y-2">
            {pkg.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-sm text-[#D8E4FF] leading-snug"
              >
                <CheckCircle
                  size={14}
                  className="mt-1 shrink-0 text-[#00E67A]"
                  aria-hidden="true"
                />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className="glass-premium rounded-2xl p-5 sm:p-6 h-full">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-white text-base font-semibold">
              Доп. опции
            </h4>
            <span className="text-[#4D5E88] text-xs">
              {selectedIds.size} из {category.options.length}
            </span>
          </div>

          <div
            className="space-y-2 max-h-[420px] overflow-y-auto pr-1"
            role="group"
            aria-label={`Дополнительные опции для ${category.title} ${pkg.name}`}
          >
            {category.options.map((opt) => {
              const checked = selectedIds.has(opt.id);
              return (
                <button
                  key={opt.id}
                  onClick={() => toggle(opt.id)}
                  role="checkbox"
                  aria-checked={checked}
                  aria-label={`${opt.label}, ${formatPrice(opt.price)} рублей`}
                  className={`w-full text-left flex items-start gap-3 p-3 rounded-xl border transition-all duration-200 ${
                    checked
                      ? "bg-[rgba(0,212,232,0.08)] border-[rgba(0,212,232,0.4)]"
                      : "bg-[rgba(12,18,48,0.4)] border-[rgba(0,212,232,0.08)] hover:border-[rgba(0,212,232,0.2)]"
                  }`}
                >
                  <div
                    className={`shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center mt-0.5 transition-colors ${
                      checked
                        ? "bg-[#00D4E8] border-[#00D4E8]"
                        : "border-[#4D5E88]"
                    }`}
                    aria-hidden="true"
                  >
                    {checked ? (
                      <CheckCircle
                        size={14}
                        className="text-[#060A1E]"
                        strokeWidth={3}
                      />
                    ) : (
                      <Plus
                        size={12}
                        className="text-[#4D5E88]"
                        strokeWidth={2.5}
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div
                          className={`text-sm font-medium leading-snug ${
                            checked ? "text-white" : "text-[#D8E4FF]"
                          }`}
                        >
                          {opt.label}
                        </div>
                        {opt.hint && (
                          <div className="flex items-start gap-1.5 mt-1 text-[#4D5E88] text-xs leading-snug">
                            <Info
                              size={11}
                              className="mt-0.5 shrink-0"
                              aria-hidden="true"
                            />
                            {opt.hint}
                          </div>
                        )}
                      </div>
                      <div
                        className={`shrink-0 text-sm font-bold font-['JetBrains_Mono'] ${
                          checked ? "text-[#00D4E8]" : "text-[#4D5E88]"
                        }`}
                        aria-hidden="true"
                      >
                        +{formatPrice(opt.price)} ₽
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="lg:col-span-12">
        <motion.div
          layout
          className="glass-premium rounded-2xl p-5 sm:p-6 relative overflow-hidden"
        >
          <div
            className="absolute -top-px left-0 right-0 h-1"
            style={{
              background:
                "linear-gradient(90deg, #00D4E8, #9B4DFF, #00E67A)",
            }}
          />
          <div className="text-center">
            <div className="text-[#4D5E88] text-xs uppercase tracking-wider mb-1.5">
              Ваш расчёт · {category.title} {pkg.name}
            </div>
            <div className="flex items-baseline justify-center gap-2 mb-1">
              <span
                className="text-5xl sm:text-6xl font-extrabold font-['JetBrains_Mono'] text-white"
                aria-live="polite"
                aria-atomic="true"
              >
                {formatPrice(total)}
              </span>
              <span className="text-[#4D5E88] text-base">₽</span>
            </div>
            <div className="text-[#4D5E88] text-xs mb-6">
              {optionsTotal > 0
                ? `пакет ${formatPrice(pkg.basePrice)} + ${selectedIds.size} доп. за ${formatPrice(optionsTotal)} ₽`
                : "без дополнений"}
            </div>
            <a
              href={`https://t.me/manager_rocketly?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto sm:min-w-[280px] justify-center text-sm sm:text-base"
            >
              <MessageCircle size={20} aria-hidden="true" />
              Обсудить и заказать
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            {optionsTotal > 0 && (
              <button
                onClick={() =>
                  setSelected((prev) => ({ ...prev, [active]: new Set() }))
                }
                className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#4D5E88] hover:text-[#00D4E8] transition-colors"
              >
                <Minus size={12} aria-hidden="true" />
                Сбросить дополнения
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-[1]">
        <div className="hero-glow top-0 left-0" />
        <div className="hero-glow bottom-0 right-0" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(0,212,232,0.06)] border border-[rgba(0,212,232,0.1)] mb-4">
            <span className="text-[#00D4E8] text-xs font-medium">
              УСЛУГИ И ЦЕНЫ
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Соберите свой проект{" "}
            <span className="gradient-text">и сразу увидите цену</span>
          </h2>
          <p className="text-[#4D5E88] text-lg max-w-xl mx-auto">
            От 5 000 ₽ за бота, от 10 000 ₽ за сайт. Без скрытых платежей.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <Calculator />
        </motion.div>
      </div>
    </section>
  );
}
