"use client";

import { motion } from "framer-motion";
import { Clock, MessageSquare, Calendar, Bell, ArrowRight, Sparkles, Quote } from "lucide-react";

const beforeQuestions = [
  "Сколько стоит маникюр?",
  "Какие свободные окошки?",
  "Можно записаться на завтра?",
  "А у вас есть гель-лак?",
  "Сколько длится процедура?",
  "Адрес / как найти?",
  "А снять можно?",
  "Какие цвета есть?",
];

const botScreens = [
  { type: "user", text: "Привет! 👋 Я бот мастера Анны. Чем помочь?" },
  { type: "user", text: "Выбери услугу:\n💅 Маникюр\n🎨 Дизайн\n👣 Педикюр" },
  { type: "user", text: "Выбери дату и время — окошки подсвечены ✅" },
  { type: "user", text: "Готово! Записала тебя. Напомню за 2 часа до визита 💅" },
];

const stats = [
  { value: "30+", label: "сообщений в день", oldValue: "раньше" },
  { value: "0", label: "пропущенных клиентов", oldValue: "теперь" },
  { value: "2 дня", label: "на запуск бота" },
];

const benefits = [
  { icon: Clock, text: "Отвечает 24/7 — даже когда Анна спит или с клиентом" },
  { icon: Calendar, text: "Записывает автоматически, без переписки" },
  { icon: Bell, text: "Напоминает клиенту за 2 часа — меньше «прогулов»" },
  { icon: MessageSquare, text: "Присылает прайс и адрес по первому клику" },
];

export default function CaseStudySection() {
  return (
    <section className="section-padding relative bg-[rgba(0,212,232,0.015)] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-[1]">
        <div className="hero-glow top-[10%] right-[-200px]" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(155,77,255,0.08)] border border-[rgba(155,77,255,0.15)] mb-4">
            <Sparkles size={12} className="text-[#9B4DFF]" />
            <span className="text-[#9B4DFF] text-[11px] font-semibold tracking-wide">
              КЕЙС
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Как Telegram-бот спас мастера <br className="hidden sm:block" />
            маникюра от 30 одинаковых сообщений в день
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-premium rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <div
                className="absolute -top-px left-0 right-0 h-1"
                style={{
                  background: "linear-gradient(90deg, #FF5225, transparent)",
                }}
              />
              <div className="text-[#FF5225] text-[11px] font-semibold tracking-wider uppercase mb-3">
                До бота
              </div>
              <h3 className="text-white text-xl font-bold mb-3">
                30+ одинаковых сообщений каждый день
              </h3>
              <p className="text-[#4D5E88] text-sm leading-relaxed mb-6">
                Анна — мастер маникюра из Белорусской. В Telegram ей писали по
                30–40 раз в день. Все вопросы — одни и те же:
              </p>

              <div className="space-y-2 mb-6">
                {beforeQuestions.map((q, i) => (
                  <motion.div
                    key={q}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 0.1 + i * 0.04 }}
                    className="flex items-start gap-2.5 text-sm text-[#D8E4FF]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5225] mt-2 shrink-0" />
                    {q}
                  </motion.div>
                ))}
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[rgba(255,82,37,0.06)] border border-[rgba(255,82,37,0.12)]">
                <Quote
                  size={16}
                  className="text-[#FF5225] shrink-0 mt-0.5"
                />
                <p className="text-[#D8E4FF] text-sm leading-relaxed italic">
                  «Я отвечала на одно и то же по 30 раз в день. К вечеру
                  руки тряслись — а клиенты обижались, что долго не
                  отвечаю»
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="glass-premium rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <div
                className="absolute -top-px left-0 right-0 h-1"
                style={{
                  background: "linear-gradient(90deg, #00E67A, transparent)",
                }}
              />
              <div className="text-[#00E67A] text-[11px] font-semibold tracking-wider uppercase mb-3">
                После бота
              </div>
              <h3 className="text-white text-xl font-bold mb-3">
                Бот отвечает и записывает сам
              </h3>
              <p className="text-[#4D5E88] text-sm leading-relaxed mb-6">
                Бот за 2 дня: приветствует, выдаёт прайс, записывает на
                свободное время, шлёт напоминания. Анна занимается только
                маникюром.
              </p>

              <div className="space-y-3 mb-6">
                {benefits.map((b, i) => (
                  <motion.div
                    key={b.text}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + i * 0.06 }}
                    className="flex items-start gap-3 text-sm text-[#D8E4FF]"
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(0, 230, 122, 0.12)" }}
                    >
                      <b.icon size={14} className="text-[#00E67A]" />
                    </div>
                    {b.text}
                  </motion.div>
                ))}
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[rgba(0,230,122,0.06)] border border-[rgba(0,230,122,0.12)]">
                <Quote
                  size={16}
                  className="text-[#00E67A] shrink-0 mt-0.5"
                />
                <p className="text-[#D8E4FF] text-sm leading-relaxed italic">
                  «Первую неделю я всё ждала, что бот сломается. Не
                  сломался. Клиенты записываются сами, я просто делаю
                  маникюр»
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 glass-premium rounded-2xl p-6 sm:p-8"
        >
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <div className="text-[#00D4E8] text-4xl sm:text-5xl font-extrabold font-['JetBrains_Mono'] leading-none mb-2">
                  {s.value}
                </div>
                <div className="text-white text-sm font-medium">{s.label}</div>
                {s.oldValue && (
                  <div className="text-[#4D5E88] text-xs mt-1">
                    {s.oldValue}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[rgba(0,212,232,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-[#4D5E88] text-xs uppercase tracking-wider mb-1">
                Стоимость бота «Стандарт»
              </div>
              <div className="text-white text-2xl font-bold">
                7 000 ₽{" "}
                <span className="text-[#4D5E88] text-sm font-normal">
                  · запуск за 3–4 дня
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href="https://t.me/manager_rocketly?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D1%82%D0%B0%D0%BA%D0%BE%D0%B3%D0%BE%20%D0%B6%D0%B5%20%D0%B1%D0%BE%D1%82%D0%B0%20%D0%BA%D0%B0%D0%BA%20%D1%83%20%D0%90%D0%BD%D0%BD%D1%8B%20(7%20000%20%D1%80.)"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Хочу такого же бота
                <ArrowRight size={18} />
              </a>
              <a
                href="https://t.me/testtest6767BOT"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-[#4D5E88] hover:text-[#00D4E8] transition-colors px-2"
              >
                или попробовать демо →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
