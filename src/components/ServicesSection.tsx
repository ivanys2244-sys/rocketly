"use client";

import { motion } from "framer-motion";
import { Bot, Globe, Zap, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Telegram-боты",
    description:
      "Автоматическая запись, приём заявок, прайс-листы и уведомления — клиенты записываются без звонков 24/7.",
    price: "3 500",
    priceLabel: "от ₽",
    features: [
      "Запись клиентов",
      "Прайс-листы",
      "Автоматические ответы",
      "Уведомления",
    ],
    accent: "#00D4E8",
    gradient: "from-[#00D4E8] to-[#0098A8]",
  },
  {
    icon: Globe,
    title: "Сайты",
    description:
      "Лендинги, визитки и корпоративные сайты с адаптивным дизайном, SEO и формами заявок.",
    price: "10 000",
    priceLabel: "от ₽",
    features: [
      "Адаптивный дизайн",
      "Формы заявок",
      "SEO-оптимизация",
      "Публикация",
    ],
    accent: "#9B4DFF",
    gradient: "from-[#9B4DFF] to-[#6B2FBF]",
  },
  {
    icon: Zap,
    title: "Комплексные решения",
    description:
      "Сайт + Telegram-бот + автоматизация процессов — единая система, которая работает как часы.",
    price: "15 000",
    priceLabel: "от ₽",
    features: [
      "Сайт + Бот",
      "Сквозная аналитика",
      "Интеграция сервисов",
      "Поддержка",
    ],
    accent: "#00E67A",
    gradient: "from-[#00E67A] to-[#00B862]",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding relative">
      <div className="hero-glow top-0 left-0" />
      <div className="hero-glow bottom-0 right-0" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(0,212,232,0.06)] border border-[rgba(0,212,232,0.1)] mb-4">
            <span className="text-[#00D4E8] text-xs font-medium">УСЛУГИ И ЦЕНЫ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Что мы делаем <span className="gradient-text">и сколько это стоит</span>
          </h2>
          <p className="text-[#4D5E88] text-lg max-w-xl mx-auto">
            Фиксированные цены без скрытых платежей. Вы платите ровно то, что видите.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group"
            >
              <div
                className="glass-premium rounded-2xl p-6 sm:p-8 relative overflow-hidden h-full flex flex-col gradient-border card-hover-strong"
                style={{
                  boxShadow: `0 8px 40px ${s.accent}15`,
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background: `linear-gradient(90deg, ${s.accent}, transparent)`,
                  }}
                />

                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${s.accent}22, transparent)`,
                    }}
                  >
                    <s.icon size={24} style={{ color: s.accent }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-xl font-bold">
                      {s.title}
                    </h3>
                    <div className="flex items-baseline gap-1 mt-2">
                      <span
                        className="text-2xl font-bold font-['JetBrains_Mono']"
                        style={{ color: s.accent }}
                      >
                        {s.price}
                      </span>
                      <span className="text-[#4D5E88] text-sm">
                        {s.priceLabel}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-[#4D5E88] text-sm leading-relaxed mb-5">
                  {s.description}
                </p>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {s.features.map((f, fi) => (
                    <motion.li
                      key={f}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: fi * 0.08 }}
                      className="flex items-center gap-2.5 text-sm text-[#D8E4FF]"
                    >
                      <CheckCircle
                        size={15}
                        className="mt-0.5 shrink-0"
                        style={{ color: s.accent }}
                      />
                      {f}
                    </motion.li>
                  ))}
                </ul>

                <a
                  href="https://t.me/rocketlydev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold transition-all duration-200 hover:gap-3"
                  style={{
                    background: `${s.accent}15`,
                    color: s.accent,
                    border: `1px solid ${s.accent}25`,
                  }}
                >
                  <MessageCircle size={16} />
                  Заказать
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
