"use client";

import { motion } from "framer-motion";
import { Star, Quote, Building2, Briefcase, ShoppingBag, Coffee } from "lucide-react";

const testimonials = [
  {
    quote:
      "Сделали бота для записи клиентов за 2 дня. Раньше я отвечала на 30 одинаковых сообщений в день — теперь бот справляется сам, а я просто делаю маникюр.",
    name: "Анна",
    role: "Мастер маникюра",
    city: "Минск",
    rating: 5,
    icon: Sparkle,
    accent: "#00D4E8",
  },
  {
    quote:
      "Сайт для магазина iPhone запустили за 4 дня. Дизайн — огонь, заявки с формы падают сразу в Telegram. За первую неделю — 12 заявок без рекламы.",
    name: "Дмитрий",
    role: "Владелец магазина б/у iPhone",
    city: "Казань",
    rating: 5,
    icon: ShoppingBag,
    accent: "#00E67A",
  },
  {
    quote:
      "Сделали лендинг для юридических услуг + интеграция с CRM. Заявки автоматом падают в AmoCRM, я вижу их в телефоне. Окупилось за первый месяц.",
    name: "Елена",
    role: "Юридическая компания",
    city: "Санкт-Петербург",
    rating: 5,
    icon: Briefcase,
    accent: "#9B4DFF",
  },
];

const clients = [
  { name: "Студия красоты glo", industry: "Beauty", icon: Building2 },
  { name: "iPhone Revive", industry: "E-commerce", icon: ShoppingBag },
  { name: "Swag Bank", industry: "Fintech", icon: Briefcase },
  { name: "MC Accounts", industry: "Gaming", icon: Coffee },
  { name: "Glow Beauty", industry: "Beauty", icon: Building2 },
  { name: "PTEH Service", industry: "Service", icon: Briefcase },
];

const stats = [
  { value: "4.9/5", label: "средняя оценка" },
  { value: "2 ч", label: "среднее время ответа" },
  { value: "10+", label: "проектов запустили" },
  { value: "100%", label: "проектов сдали в срок" },
];

export default function SocialProofSection() {
  return (
    <section className="section-padding relative bg-[rgba(0,212,232,0.015)] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-[1]">
        <div className="hero-glow top-[20%] left-[-200px]" />
        <div className="hero-glow bottom-[20%] right-[-200px]" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(0,212,232,0.06)] border border-[rgba(0,212,232,0.1)] mb-4">
            <span className="text-[#00D4E8] text-xs font-medium">ОТЗЫВЫ КЛИЕНТОВ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Что говорят <span className="gradient-text">наши клиенты</span>
          </h2>
          <p className="text-[#4D5E88] text-lg max-w-xl mx-auto">
            Реальные отзывы из Telegram после запуска проекта
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-premium rounded-xl p-5 text-center"
            >
              <div className="text-[#00D4E8] text-2xl sm:text-3xl font-extrabold font-['JetBrains_Mono'] leading-none mb-1.5">
                {s.value}
              </div>
              <div className="text-[#4D5E88] text-xs">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {testimonials.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-premium rounded-2xl p-6 relative flex flex-col"
              >
                <Quote
                  size={32}
                  className="absolute top-4 right-4 opacity-10"
                  style={{ color: t.accent }}
                  aria-hidden="true"
                />
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 shrink-0"
                  style={{ background: `${t.accent}15` }}
                  aria-hidden="true"
                >
                  <Icon size={20} style={{ color: t.accent }} />
                </div>
                <div
                  className="flex gap-0.5 mb-3"
                  aria-label={`Оценка ${t.rating} из 5`}
                >
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      fill={j < t.rating ? "#00D4E8" : "transparent"}
                      stroke="#00D4E8"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
                <blockquote className="text-[#D8E4FF] text-sm leading-relaxed mb-5 flex-1">
                  «{t.quote}»
                </blockquote>
                <figcaption className="flex items-center gap-3 pt-4 border-t border-[rgba(0,212,232,0.08)]">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                    style={{
                      background: `${t.accent}25`,
                      color: t.accent,
                    }}
                    aria-hidden="true"
                  >
                    {t.name[0]}
                  </div>
                  <div className="min-w-0">
                    <div className="text-white text-sm font-semibold leading-tight">
                      {t.name}
                    </div>
                    <div className="text-[#4D5E88] text-xs leading-tight mt-0.5">
                      {t.role} · {t.city}
                    </div>
                  </div>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="glass-premium rounded-2xl p-6 sm:p-8"
        >
          <div className="text-center mb-6">
            <p className="text-[#4D5E88] text-xs uppercase tracking-wider mb-2">
              Нам доверяют
            </p>
            <p className="text-white text-base sm:text-lg font-medium">
              Команды из разных ниш
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {clients.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.name + i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl border border-[rgba(0,212,232,0.06)] hover:border-[rgba(0,212,232,0.2)] transition-colors group"
                >
                  <Icon
                    size={20}
                    className="text-[#4D5E88] group-hover:text-[#00D4E8] transition-colors"
                    aria-hidden="true"
                  />
                  <div className="text-center min-w-0">
                    <div className="text-white text-sm font-semibold truncate w-full">
                      {c.name}
                    </div>
                    <div className="text-[#4D5E88] text-[10px] uppercase tracking-wider mt-0.5">
                      {c.industry}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Sparkle(props: { size?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 20}
      height={props.size || 20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      style={props.style}
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  );
}
