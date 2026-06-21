"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { CheckCircle, MessageCircle, Sparkles, Plus, Minus, Info, ArrowRight } from "lucide-react";

type Option = {
  id: string;
  label: string;
  hint?: string;
  price: number;
};

type Tier = {
  id: string;
  name: string;
  basePrice: number;
  description: string;
  features: string[];
  highlight?: boolean;
};

type Category = {
  id: string;
  title: string;
  base: Tier;
  options: Option[];
};

const categories: Category[] = [
  {
    id: "bot",
    title: "Telegram-бот",
    base: {
      id: "bot-base",
      name: "Базовая сборка бота",
      basePrice: 3500,
      description: "Приветствие, меню, ответы на частые вопросы. Готов к подключению функций ниже.",
      features: [
        "Приветственное сообщение",
        "Меню с разделами",
        "FAQ — ответы на типовые вопросы",
        "Связь с владельцем через бота",
      ],
    },
    options: [
      { id: "booking", label: "Запись клиентов с выбором даты и времени", hint: "Клиент сам выбирает окошко, бот подтверждает", price: 2000 },
      { id: "reminders", label: "Автонапоминания о визите", hint: "За день и за 2 часа до записи", price: 1000 },
      { id: "notify", label: "Уведомления вам о новых заявках", price: 500 },
      { id: "price", label: "Прайс-лист с фото и кнопками", price: 800 },
      { id: "pay", label: "Оплата прямо в боте", hint: "ЮKassa, Telegram Stars или ручной перевод", price: 2500 },
      { id: "crm", label: "Интеграция с CRM или Google Sheets", price: 2000 },
      { id: "catalog", label: "Каталог товаров с фото", price: 1500 },
      { id: "reviews", label: "Сбор отзывов после оказания услуги", price: 1000 },
    ],
  },
  {
    id: "site",
    title: "Сайт",
    base: {
      id: "site-base",
      name: "Базовая сборка сайта",
      basePrice: 10000,
      description: "Адаптивный сайт, форма заявки, базовое SEO. Готов к расширению опциями ниже.",
      features: [
        "Адаптивный дизайн под телефон и планшет",
        "Форма заявки с уведомлением в Telegram",
        "Базовое SEO (title, description, OG)",
        "Подключение аналитики",
      ],
    },
    options: [
      { id: "pages", label: "Дополнительные страницы (каждая)", hint: "Услуги, О нас, Контакты, FAQ", price: 1500 },
      { id: "blog", label: "Блог с админкой", price: 3500 },
      { id: "portfolio", label: "Портфолио или каталог", price: 2500 },
      { id: "quiz", label: "Квиз-форма (опрос с расчётом)", price: 2500 },
      { id: "pay", label: "Подключение оплаты на сайте", price: 2500 },
      { id: "speed", label: "Ускоренная загрузка и SEO-продвижение", price: 3000 },
      { id: "i18n", label: "Мультиязычность", price: 2500 },
      { id: "admin", label: "Личный кабинет для клиентов", price: 5000 },
    ],
  },
  {
    id: "combo",
    title: "Сайт + бот",
    base: {
      id: "combo-base",
      name: "Единая система: сайт + бот",
      basePrice: 15000,
      description: "Сайт, Telegram-бот и автоматизация как единое целое. Заявки с сайта падают в бот, бот ведёт клиента, аналитика в одном окне.",
      features: [
        "Лендинг или сайт-визитка",
        "Telegram-бот «Стандарт» (запись + напоминания)",
        "Заявки с сайта автоматически в бот и вам",
        "Одна интеграция (CRM, таблица, платёжка)",
        "Запуск за 5–7 дней",
      ],
    },
    options: [
      { id: "combo-pages", label: "Дополнительные страницы на сайте", hint: "Услуги, О нас, Контакты, FAQ", price: 1500 },
      { id: "combo-blog", label: "Блог с админкой", price: 3500 },
      { id: "combo-portfolio", label: "Портфолио или каталог на сайте", price: 2500 },
      { id: "combo-quiz", label: "Квиз-форма на сайте", hint: "Опрос с расчётом стоимости", price: 2500 },
      { id: "combo-pay", label: "Оплата в боте и на сайте", hint: "Единая оплата через ЮKassa или Telegram Stars", price: 3000 },
      { id: "combo-crm", label: "Сквозная аналитика до продажи", hint: "От источника заявки до закрытой сделки", price: 4000 },
      { id: "combo-multilingual", label: "Мультиязычность (RU/EN)", price: 3000 },
      { id: "combo-admin", label: "Личный кабинет для клиентов", price: 5000 },
      { id: "combo-promo", label: "SEO-продвижение и ускорение", hint: "Базовое продвижение, чтобы сайт находили", price: 3500 },
      { id: "combo-support", label: "Расширенная поддержка 60 дней", price: 5000 },
    ],
  },
];

function formatPrice(n: number) {
  return new Intl.NumberFormat("ru-RU").format(n);
}

function Calculator() {
  const [active, setActive] = useState<string>("bot");
  const [selected, setSelected] = useState<Record<string, Set<string>>>({
    bot: new Set(),
    site: new Set(),
    combo: new Set(),
  });
  const [optionsRevealed, setOptionsRevealed] = useState<Record<string, boolean>>({
    bot: true,
    site: true,
    combo: false,
  });

  const category = categories.find((c) => c.id === active)!;
  const selectedIds = selected[active];
  const optionsTotal = useMemo(
    () =>
      category.options
        .filter((o) => selectedIds.has(o.id))
        .reduce((sum, o) => sum + o.price, 0),
    [category, selectedIds]
  );
  const total = category.base.basePrice + optionsTotal;

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
      `Хочу заказать: ${category.title}`,
      `Базовая сборка: ${formatPrice(category.base.basePrice)} ₽`,
    ];
    if (chosen.length > 0) {
      lines.push("Допы:");
      chosen.forEach((o) =>
        lines.push(`  • ${o.label} — ${formatPrice(o.price)} ₽`)
      );
    }
    lines.push(`Итого: ${formatPrice(total)} ₽`);
    return encodeURIComponent(lines.join("\n"));
  }, [category, selectedIds, total]);

  return (
    <div className="grid lg:grid-cols-5 gap-6">
      <div className="lg:col-span-2">
        <div className="flex gap-2 p-1 rounded-xl bg-[rgba(12,18,48,0.5)] border border-[rgba(0,212,232,0.08)]">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                active === c.id
                  ? "bg-[#00D4E8] text-[#060A1E]"
                  : "text-[#4D5E88] hover:text-white"
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        <div className="mt-4 glass-premium rounded-2xl p-5 sm:p-6 relative overflow-hidden">
          {category.base.highlight && (
            <div
              className="absolute -top-px left-0 right-0 h-1"
              style={{
                background:
                  "linear-gradient(90deg, #00D4E8, #9B4DFF, #00E67A)",
              }}
            />
          )}
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-white text-lg font-bold">
              {category.base.name}
            </span>
          </div>
          <p className="text-[#4D5E88] text-xs leading-relaxed mb-4">
            {category.base.description}
          </p>
          <ul className="space-y-2 mb-5">
            {category.base.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-sm text-[#D8E4FF] leading-snug"
              >
                <CheckCircle
                  size={14}
                  className="mt-1 shrink-0 text-[#00E67A]"
                />
                {f}
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-[rgba(0,212,232,0.08)] flex items-baseline justify-between">
            <span className="text-[#4D5E88] text-xs uppercase tracking-wider">
              База
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold font-['JetBrains_Mono'] text-white">
                {formatPrice(category.base.basePrice)}
              </span>
              <span className="text-[#4D5E88] text-sm">₽</span>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-3">
        <div className="glass-premium rounded-2xl p-5 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-white text-base font-semibold">
              Дополнительные функции
            </h4>
            <span className="text-[#4D5E88] text-xs">
              {selectedIds.size} из {category.options.length} выбрано
            </span>
          </div>

          <div
            className="space-y-2 pr-1"
            role="group"
            aria-label={`Дополнительные функции для ${category.title}`}
          >
            {(optionsRevealed[active] ? category.options : category.options.slice(0, 4)).map(
              (opt) => {
                const checked = selectedIds.has(opt.id);
                return (
                  <button
                    key={opt.id}
                    onClick={() => toggle(opt.id)}
                    role="checkbox"
                    aria-checked={checked}
                    aria-label={`${opt.label}, ${formatPrice(opt.price)} рублей`}
                    className={`w-full text-left flex items-start gap-3 p-3.5 rounded-xl border transition-all duration-200 ${
                      checked
                        ? "bg-[rgba(0,212,232,0.08)] border-[rgba(0,212,232,0.4)]"
                        : "bg-[rgba(12,18,48,0.4)] border-[rgba(0,212,232,0.08)] hover:border-[rgba(0,212,232,0.2)]"
                    }`}
                  >
                    <div
                      className={`shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center mt-0.5 transition-colors ${
                        checked
                          ? "bg-[#00D4E8] border-[#00D4E8]"
                          : "border-[#4D5E88] group-hover:border-[#00D4E8]"
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
              }
            )}

            {!optionsRevealed[active] && category.options.length > 4 && (
              <button
                onClick={() =>
                  setOptionsRevealed((prev) => ({ ...prev, [active]: true }))
                }
                className="w-full mt-2 py-2.5 rounded-xl border border-dashed border-[rgba(0,212,232,0.15)] text-sm text-[#4D5E88] hover:text-[#00D4E8] hover:border-[rgba(0,212,232,0.3)] transition-colors inline-flex items-center justify-center gap-1.5"
              >
                Показать ещё {category.options.length - 4} опций
                <Plus size={14} aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="lg:col-span-5">
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
              Ваш расчёт
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
                ? `база ${formatPrice(category.base.basePrice)} + ${selectedIds.size} доп.`
                : "без дополнений"}
            </div>
            <a
              href={`https://t.me/manager_rocketly?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center text-sm sm:text-base"
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
            Без скрытых платежей — выбирайте только нужные функции.
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
