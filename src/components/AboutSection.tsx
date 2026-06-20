"use client";

import { motion } from "framer-motion";
import { Rocket, MessageSquare, Cpu, LifeBuoy } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Быстрый запуск",
    desc: "Запуск проекта от 2 до 5 дней. Никаких месяцев ожидания.",
  },
  {
    icon: MessageSquare,
    title: "Простое управление",
    desc: "Бот работает прямо в Telegram. Всё управление в одном окне.",
  },
  {
    icon: Cpu,
    title: "Автоматизация",
    desc: "Меньше рутины — больше клиентов. Приём заявок 24/7 без вашего участия.",
  },
  {
    icon: LifeBuoy,
    title: "Поддержка",
    desc: "Помогаем после запуска. Отвечаем на вопросы, дорабатываем функционал.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative">
      <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(0,212,232,0.06)] border border-[rgba(0,212,232,0.1)] mb-4">
            <span className="text-[#00D4E8] text-xs font-medium">О НАС</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Почему <span className="gradient-text">Rocketly</span>
          </h2>
          <p className="text-[#4D5E88] text-lg max-w-xl mx-auto">
            Мы знаем, как сделать так, чтобы ваш бизнес работал даже тогда,
            когда вы спите
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={itemVariants}
              className="glass rounded-xl p-6 card-hover"
            >
              <div className="w-11 h-11 rounded-lg bg-[rgba(0,212,232,0.1)] flex items-center justify-center mb-4">
                <f.icon size={22} className="text-[#00D4E8]" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {f.title}
              </h3>
              <p className="text-[#4D5E88] text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
