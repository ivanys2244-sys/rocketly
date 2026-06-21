"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Check, ExternalLink } from "lucide-react";
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
  {
    image: "/projects/swag-bank.jpg",
    title: "Swag Bank",
    description: "Цифровой банкинг",
    accent: "#9B4DFF",
    href: "https://swag-bank.vercel.app",
  },
  {
    image: "/projects/iphone-revive.jpg",
    title: "iPhone Revive",
    description: "Магазин б/у iPhone",
    accent: "#00D4E8",
    href: "https://iphone-revive.vercel.app",
  },
  {
    image: "/projects/beauty-studio.jpg",
    title: "glo Studio",
    description: "Студия красоты",
    accent: "#00E67A",
    href: "https://beauty-studio-phi.vercel.app",
  },
  {
    image: "/projects/mc-accounts.jpg",
    title: "MC Accounts",
    description: "Minecraft-магазин",
    accent: "#FFB347",
    href: "https://mc-accounts-nine.vercel.app",
  },
];

export default function Hero() {
  const [mainProject, ...otherProjects] = featuredProjects;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-[1]">
        <div className="hero-glow top-[-200px] left-[-100px]" />
        <div className="hero-glow bottom-[-200px] right-[-100px]" />
        <div className="grid-dots" />
      </div>

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
              Telegram-боты и сайты <br />
              <span className="text-[#4D5E88]">от</span>{" "}
              <span className="gradient-text">3 500 ₽</span>
            </h1>

            <p className="text-base sm:text-lg text-[#4D5E88] leading-relaxed max-w-xl mb-6">
              Запускаем за 2–5 дней.{" "}
              <span className="text-white">Берут заявки, отвечают клиентам и экономят ваше время — пока вы спите.</span>
            </p>

            <div
              className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-7"
              role="list"
              aria-label="Доверие и скорость ответа"
            >
              <div className="flex items-center gap-1.5" role="listitem">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E67A] animate-pulse" aria-hidden="true" />
                <span className="text-white text-sm">
                  Отвечаем за{" "}
                  <span className="font-semibold">2 часа</span>
                </span>
              </div>
              <div className="flex items-center gap-1.5" role="listitem">
                <span className="text-[#00D4E8] font-bold font-['JetBrains_Mono'] text-sm">
                  10+
                </span>
                <span className="text-[#4D5E88] text-sm">проектов в 2026</span>
              </div>
            </div>

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
                href="https://t.me/manager_rocketly"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={20} aria-hidden="true" />
                Обсудить проект
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center text-sm text-[#4D5E88] hover:text-[#00D4E8] transition-colors px-2"
              >
                или посмотрите цены
                <ArrowRight size={14} className="ml-1.5" aria-hidden="true" />
            </a>
            </div>

            <div className="flex items-center gap-8 mt-10 pt-7 border-t border-[rgba(0,212,232,0.06)]">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-[#00D4E8] text-xl font-bold font-['JetBrains_Mono'] leading-none mb-0.5">
                    {s.value}
                  </div>
                  <div className="text-[#4D5E88] text-[11px]">
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
            <div className="flex items-center justify-between mb-4 px-1">
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#4D5E88]">
                Последний проект
              </span>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#00D4E8] hover:gap-2 transition-all"
              >
                Все проекты <ArrowRight size={12} />
              </a>
            </div>

            <a
              href={mainProject.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block glass-premium rounded-2xl overflow-hidden glow-strong transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-52 sm:h-60 overflow-hidden bg-[rgba(0,212,232,0.02)]">
                <picture>
                  <source
                    srcSet="/hero-swag-bank.webp"
                    type="image/webp"
                  />
                  <Image
                    src={mainProject.image}
                    alt={mainProject.title}
                    fill
                    priority
                    fetchPriority="high"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </picture>
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(180deg, transparent 40%, ${mainProject.accent}40 100%)`,
                  }}
                />
                <div
                  className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md backdrop-blur-md text-[10px] font-semibold"
                  style={{
                    background: `${mainProject.accent}25`,
                    color: mainProject.accent,
                    border: `1px solid ${mainProject.accent}40`,
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  Live
                </div>
                <div className="absolute top-3 right-3 inline-flex items-center justify-center w-8 h-8 rounded-md backdrop-blur-md bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={14} />
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-white font-bold text-lg leading-tight truncate">
                      {mainProject.title}
                    </h3>
                    <p className="text-[#4D5E88] text-sm mt-0.5">
                      {mainProject.description}
                    </p>
                  </div>
                  <div
                    className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: `${mainProject.accent}15` }}
                  >
                    <ExternalLink
                      size={16}
                      style={{ color: mainProject.accent }}
                    />
                  </div>
                </div>
              </div>
            </a>

            <div className="grid grid-cols-3 gap-2 mt-3">
              {otherProjects.map((p) => (
                <a
                  key={p.title}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative glass-premium rounded-xl overflow-hidden aspect-[4/5] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover object-top opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    sizes="120px"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(180deg, transparent 50%, ${p.accent}50 100%)`,
                    }}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 p-2 text-[10px] font-semibold text-white truncate"
                    title={p.title}
                  >
                    {p.title}
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
