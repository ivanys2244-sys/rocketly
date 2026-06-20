"use client";

import { motion } from "framer-motion";

export default function SupportSection() {
  return (
    <section className="section-padding relative pt-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            После запуска мы <span className="gradient-text">не пропадаем</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-lg mx-auto"
        >
          <div className="glass rounded-xl p-6">
            <table className="w-full">
              <tbody>
                {[
                  { label: "Хостинг Railway", value: "~300 ₽" },
                  { label: "Техническая поддержка", value: "300–500 ₽" },
                ].map((row) => (
                  <tr key={row.label} className="border-b border-[rgba(0,212,232,0.06)] last:border-none">
                    <td className="py-3.5 text-sm text-[#D8E4FF]">{row.label}</td>
                    <td className="py-3.5 text-sm text-right font-mono text-[#00D4E8] font-bold">
                      {row.value}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="pt-4 text-sm font-semibold text-white">Итого</td>
                  <td className="pt-4 text-sm text-right font-mono text-[#00D4E8] font-bold text-lg">
                    500–800 ₽/месяц
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-[#4D5E88] text-sm mt-4">
            Бот остаётся доступным, а вы получаете поддержку
          </p>
        </motion.div>
      </div>
    </section>
  );
}
