"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Check } from "lucide-react";
import Image from "next/image";

const tags = [
  "Работаем по всей России",
  "Запуск от 2 дней",
  "Прямая связь с командой",
  "Бесплатная консультация",
];

const stats = [
  { value: "10+", label: "реализованных проектов" },
  { value: "3", label: "специалиста в команде" },
  { value: "2–5", label: "дней на запуск" },
];

const featuredProjects = [
  { image: "/projects/beauty-studio.jpg", slug: "beauty-studio" },
  { image: "/projects/iphone-revive.jpg", slug: "iphone-revive" },
  { image: "/projects/swag-bank.jpg", slug: "swag-bank" },
  { image: "/projects/mc-accounts.jpg", slug: "mc-accounts" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <div className="hero-glow top-[-200px] left-[-100px]" />
      <div className="hero-glow bottom-[-200px] right-[-100px]" />
      <div className="grid-dots" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(0,212,232,0.08)] border border-[rgba(0,212,232,0.15)] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D4E8] animate-pulse" />
              <span className="text-[#00D4E8] text-[11px] font-semibold tracking-wide">
                Сайты &middot; Telegram-боты &middot; Автоматизация
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.05] tracking-tight text-white mb-5">
              Создаём цифровые продукты, <br />
              которые приносят{" "}
              <span className="gradient-text">реальные заявки</span>
            </h1>

            <p className="text-base sm:text-lg text-[#4D5E88] leading-relaxed max-w-xl mb-7">
              Разрабатываем сайты, Telegram-ботов и системы автоматизации,
              которые работают 24/7 — принимают заявки, общаются с клиентами
              и экономят ваше время.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[rgba(0,212,232,0.06)] border border-[rgba(0,212,232,0.08)] text-xs text-[#4D5E88]"
                >
                  <Check size={10} className="text-[#00D4E8]" />
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://t.me/rocketlydev"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={20} />
                Написать в Telegram
              </a>
              <a href="#portfolio" className="btn-secondary">
                Посмотреть проекты
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="flex items-center gap-8 mt-10 pt-7 border-t border-[rgba(0,212,232,0.06)]">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-[#00D4E8] text-xl font-bold font-['JetBrains_Mono'] leading-none mb-0.5">
                    {s.value}
                  </div>
                  <div className="text-[#4D5E88] text-[11px] whitespace-nowrap">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass-premium rounded-2xl p-4 glow-strong">
              <div className="text-[#4D5E88] text-[10px] font-semibold uppercase tracking-wider mb-3 px-1">
                Последние проекты
              </div>
              <div className="grid grid-cols-2 gap-2">
                {featuredProjects.map((p, i) => (
                  <motion.div
                    key={p.slug}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[rgba(0,212,232,0.03)] border border-[rgba(0,212,232,0.06)] group"
                  >
                    <Image
                      src={p.image}
                      alt={p.slug}
                      fill
                      className="object-cover opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 25vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060A1E] via-transparent to-transparent opacity-60" />
                  </motion.div>
                ))}
              </div>
              <div className="mt-3 px-1">
                <div className="h-1.5 rounded-full bg-[rgba(0,212,232,0.06)] overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-[#00D4E8] to-[#9B4DFF]"
                  />
                </div>
                <div className="flex justify-between text-[10px] text-[#2C3558] mt-1">
                  <span>4+ проекта</span>
                  <span>Все в работе</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
