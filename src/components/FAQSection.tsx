"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Сколько занимает разработка?",
    a: "Обычно от 2 до 5 дней в зависимости от сложности. Простой бот с прайсом и записью — 2–3 дня. Если нужны дополнительные интеграции — до 5 дней.",
  },
  {
    q: "Можно ли добавить новые функции позже?",
    a: "Да, бот можно расширять. Мы проектируем архитектуру так, чтобы новые функции добавлялись без переписывания кода.",
  },
  {
    q: "Можно ли заказать только сайт?",
    a: "Да, вы можете заказать только сайт. Лендинг, сайт-визитка или корпоративный сайт — подберём формат под ваш бизнес.",
  },
  {
    q: "Можно ли заказать только Telegram-бота?",
    a: "Конечно. Если вам нужен только бот для записи, прайсов или автоматических ответов — мы сделаем его отдельно без лишних услуг.",
  },
  {
    q: "Можно ли доработать существующий проект?",
    a: "Да, мы дорабатываем и улучшаем существующие проекты. Пришлите ссылку или описание — оценим объём работ и предложим решение.",
  },
  {
    q: "Работаете ли вы с другими городами?",
    a: "Да, мы работаем со всей Россией. Все процессы — обсуждение, согласование, передача — происходят онлайн в Telegram.",
  },
  {
    q: "Что входит в поддержку?",
    a: "Мы остаёмся на связи после запуска. Помогаем с настройкой, отвечаем на вопросы, исправляем ошибки. При необходимости дорабатываем функционал.",
  },
  {
    q: "Нужен ли свой сервер?",
    a: "Нет, мы всё настроим на Railway. Это облачный хостинг, который надёжно работает и не требует от вас никаких технических знаний.",
  },
  {
    q: "Что нужно для старта?",
    a: "Достаточно иметь описание вашего бизнеса и список того, что должен делать бот или показывать сайт. Всё остальное берём на себя.",
  },
  {
    q: "Как происходит оплата?",
    a: "50% предоплата перед стартом разработки, 50% после сдачи и демонстрации готового продукта. Работаем официально.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(0,212,232,0.06)] border border-[rgba(0,212,232,0.1)] mb-4">
            <span className="text-[#00D4E8] text-xs font-medium">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Часто задаваемые <span className="gradient-text">вопросы</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="glass rounded-xl overflow-hidden card-hover"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left text-white font-medium text-sm hover:bg-[rgba(0,212,232,0.03)] transition-colors"
              >
                {faq.q}
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-[#4D5E88] transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
