import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(0,212,232,0.06)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left">
            <Image src="/logo-horizontal.png" alt="Rocketly" width={167} height={94} className="h-10 w-auto mx-auto md:mx-0 mb-3" />
            <p className="text-[#4D5E88] text-sm">
              Сайты &middot; Telegram-боты &middot; Автоматизация
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="https://t.me/manager_rocketly"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-[#4D5E88] hover:text-[#00D4E8] text-sm transition-all duration-200 group"
            >
              <div className="w-8 h-8 rounded-lg bg-[rgba(0,212,232,0.06)] border border-[rgba(0,212,232,0.08)] flex items-center justify-center group-hover:border-[rgba(0,212,232,0.2)] transition-colors">
                <MessageCircle size={15} />
              </div>
              Написать в Telegram
            </a>
            <a
              href="mailto:hello@rocketly.dev"
              className="flex items-center gap-2.5 text-[#4D5E88] hover:text-[#00D4E8] text-sm transition-all duration-200 group"
            >
              <div className="w-8 h-8 rounded-lg bg-[rgba(0,212,232,0.06)] border border-[rgba(0,212,232,0.08)] flex items-center justify-center group-hover:border-[rgba(0,212,232,0.2)] transition-colors">
                <Mail size={15} />
              </div>
              hello@rocketly.dev
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[rgba(0,212,232,0.04)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#2C3558]">
          <span>&copy; {new Date().getFullYear()} Rocketly. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-[#00D4E8] transition-colors">
              Политика конфиденциальности
            </Link>
            <Link href="/terms" className="hover:text-[#00D4E8] transition-colors">
              Договор-оферта
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
