"use client";

import { motion } from "framer-motion";
import { MessageCircle, FileCheck, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Заявка",
    desc: "Пишете в Telegram — обсуждаем задачу за 15 минут",
  },
  {
    icon: FileCheck,
    title: "Согласование",
    desc: "Готовим ТЗ, смету и сроки — вы утверждаете",
  },
  {
    icon: Code,
    title: "Разработка",
    desc: "Собираем проект, показываем промежуточный результат",
  },
  {
    icon: Rocket,
    title: "Запуск",
    desc: "Публикуем, настраиваем, передаём всё под ключ",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how" className="section-padding relative">
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
            <span className="text-[#00D4E8] text-xs font-medium">ПРОЦЕСС</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Как мы <span className="gradient-text">работаем</span>
          </h2>
          <p className="text-[#4D5E88] text-lg max-w-xl mx-auto">
            От заявки до запуска — 4 простых шага
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#00D4E8] via-[#9B4DFF] to-[#00E67A] opacity-20 hidden md:block" />

          <div className="flex flex-col gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative flex items-start gap-6"
              >
                <div
                  className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center shrink-0 shadow-lg glass-premium"
                  style={{
                    borderColor: "rgba(0, 212, 232, 0.15)",
                  }}
                >
                  <s.icon
                    size={24}
                    className={
                      i === 0
                        ? "text-[#00D4E8]"
                        : i === 1
                          ? "text-[#9B4DFF]"
                          : i === 2
                            ? "text-[#00E67A]"
                            : "text-[#FFB347]"
                    }
                  />
                </div>
                <div className="flex-1 pt-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#2C3558] text-xs font-mono font-semibold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-white font-semibold text-base">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-[#4D5E88] text-sm">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
