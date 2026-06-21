"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [ctaInView, setCtaInView] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.innerWidth >= 768) return;

    const SESSION_KEY = "stickyCtaDismissed";

    if (sessionStorage.getItem(SESSION_KEY) === "1") {
      setDismissed(true);
      return;
    }

    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const ctaEl = document.getElementById("cta");
    let observer: IntersectionObserver | null = null;
    if (ctaEl) {
      observer = new IntersectionObserver(
        ([entry]) => setCtaInView(entry.isIntersecting),
        { threshold: 0.1 }
      );
      observer.observe(ctaEl);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem("stickyCtaDismissed", "1");
    } catch {}
  };

  if (dismissed) return null;

  const show = visible && !ctaInView;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
          role="region"
          aria-label="Связаться с нами"
        >
          <div className="relative bg-[#0C1230]/95 backdrop-blur-xl border-t border-[rgba(0,212,232,0.15)] px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
            <button
              onClick={handleDismiss}
              className="absolute top-1.5 right-2 p-2 text-[#4D5E88] hover:text-white"
              aria-label="Закрыть"
            >
              <X size={16} aria-hidden="true" />
            </button>
            <a
              href="https://t.me/manager_rocketly"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm text-[#060A1E]"
              style={{
                background: "#00D4E8",
                boxShadow: "0 4px 20px rgba(0, 212, 232, 0.3)",
              }}
            >
              <MessageCircle size={18} aria-hidden="true" />
              Обсудить проект
            </a>
            <p className="text-center text-[#4D5E88] text-[10px] mt-1.5">
              Отвечаем в течение 2 часов
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
