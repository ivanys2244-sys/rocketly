"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Сколько стоит и за сколько дней сделаете?",
    a: "Telegram-бот от 3 500 ₽, сайт — от 10 000 ₽, сайт + бот — от 15 000 ₽. Базовая сборка — за 2–3 дня, с дополнительными функциями — до 5 дней.",
  },
  {
    q: "Как происходит оплата?",
    a: "50% перед стартом, 50% после демонстрации готового продукта. Переводом на карту (СБП) или по счёту для юрлиц. Чек отправляем в Telegram.",
  },
  {
    q: "Нужен ли свой сервер?",
    a: "Нет. Ботов размещаем на облачном Railway, сайты — на Vercel. Всё работает без вашего участия, платите только за нашу работу.",
  },
  {
    q: "Работаете с другими городами?",
    a: "Да, со всей Россией. Всё онлайн: обсуждение в Telegram, согласование в чате, передача проекта в день запуска. Личные встречи не нужны.",
  },
];

export default function CTASection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="cta" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-premium rounded-2xl p-8 sm:p-12 lg:p-14 text-center relative overflow-hidden glow-strong gradient-border gradient-border-strong"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00D4E8] via-[#9B4DFF] to-[#00E67A]" />

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(0,212,232,0.06)] border border-[rgba(0,212,232,0.1)] mb-6">
            <span className="text-[#00D4E8] text-[11px] font-semibold tracking-wide">
              СВЯЗЬ
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Обсудим <span className="gradient-text">ваш проект</span>
          </h2>
          <p className="text-[#4D5E88] text-lg max-w-lg mx-auto mb-8">
            Расскажете задачу — посчитаем стоимость и сроки за 15 минут.
          </p>

          <a
            href="https://t.me/manager_rocketly"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base sm:text-lg px-8 py-4"
            style={{
              background: "#00D4E8",
              boxShadow: "0 4px 30px rgba(0, 212, 232, 0.3)",
            }}
          >
            <MessageCircle size={22} aria-hidden="true" />
            Написать в Telegram
          </a>
          <p className="text-[#2C3558] text-xs mt-4">
            Отвечаем в течение 2 часов ·{" "}
            <a
              href="mailto:hello@rocketly.dev"
              className="text-[#4D5E88] hover:text-[#00D4E8] underline underline-offset-2"
            >
              hello@rocketly.dev
            </a>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <h3 className="text-center text-[#4D5E88] text-xs uppercase tracking-wider mb-4">
            Частые вопросы
          </h3>
          <div className="space-y-2">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="glass rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left text-white font-medium text-sm hover:bg-[rgba(0,212,232,0.03)] transition-colors"
                    aria-expanded={isOpen}
                  >
                    {faq.q}
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-[#4D5E88] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-4 text-sm text-[#4D5E88] leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
