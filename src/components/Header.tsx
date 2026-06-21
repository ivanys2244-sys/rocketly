"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Услуги" },
  { href: "#portfolio", label: "Портфолио" },
  { href: "#how", label: "Как мы работаем" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-[#060A1E]/80 backdrop-blur-xl border-b border-[rgba(0,212,232,0.06)]" />
      <nav className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <Image src="/logo-horizontal.png" alt="Rocketly" width={167} height={94} className="h-14 sm:h-16 md:h-20 w-auto transition-all duration-300 group-hover:brightness-110 group-hover:opacity-90" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#4D5E88] hover:text-[#D8E4FF] text-sm transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://t.me/manager_rocketly"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00D4E8] text-[#060A1E] px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#00D4E8]/90 transition-all duration-200"
          >
            Обсудить проект
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#D8E4FF] p-3"
          aria-label="Меню"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-[#0C1230]/95 backdrop-blur-xl border-b border-[rgba(0,212,232,0.1)]"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-[#4D5E88] hover:text-[#D8E4FF] text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://t.me/manager_rocketly"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block w-full text-center bg-[#00D4E8] text-[#060A1E] px-5 py-3 rounded-lg text-sm font-semibold"
              >
                Обсудить проект
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
