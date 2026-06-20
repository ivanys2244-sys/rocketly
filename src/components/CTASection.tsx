"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, Send } from "lucide-react";

const contacts = [
  {
    icon: MessageCircle,
    label: "Telegram",
    value: "@rocketly",
    href: "https://t.me/rocketly",
    accent: "#00D4E8",
  },
  {
    icon: Mail,
    label: "Почта",
    value: "hello@rocketly.dev",
    href: "mailto:hello@rocketly.dev",
    accent: "#9B4DFF",
  },
];

export default function CTASection() {
  return (
    <section id="cta" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-premium rounded-2xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden glow-strong gradient-border gradient-border-strong"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00D4E8] via-[#9B4DFF] to-[#00E67A]" />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(0,212,232,0.06)] border border-[rgba(0,212,232,0.1)] mb-6">
              <Send size={12} className="text-[#00D4E8]" />
              <span className="text-[#00D4E8] text-[11px] font-semibold tracking-wide">
                СВЯЗЬ
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Обсудим <span className="gradient-text">ваш проект</span>
            </h2>

            <p className="text-[#4D5E88] text-lg max-w-lg mx-auto mb-10">
              Напишите нам — расскажем, сколько стоит и когда запустим.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {contacts.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className={`inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-semibold transition-all duration-200`}
                style={
                  i === 0
                    ? {
                        background: c.accent,
                        color: "#060A1E",
                        boxShadow: `0 4px 20px ${c.accent}33`,
                      }
                    : {
                        background: "rgba(12, 18, 48, 0.75)",
                        border: "1px solid rgba(0, 212, 232, 0.14)",
                        color: "#D8E4FF",
                      }
                }
              >
                <c.icon size={20} />
                {c.value}
              </motion.a>
            ))}
          </div>

          <p className="text-[#2C3558] text-xs mt-6">
            Отвечаем обычно в течение нескольких часов
          </p>
        </motion.div>
      </div>
    </section>
  );
}
