import Image from "next/image";
import { MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(0,212,232,0.06)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left">
            <Image src="/horizontal-logo.png" alt="Rocketly" width={296} height={85} className="h-8 w-auto mx-auto md:mx-0 mb-3" />
            <p className="text-[#4D5E88] text-sm">
              Сайты &middot; Telegram-боты &middot; Автоматизация
            </p>
            <p className="text-[#2C3558] text-xs mt-2 max-w-xs mx-auto md:mx-0">
              Помогаем бизнесу получать больше клиентов и автоматизировать процессы.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="https://t.me/rocketly"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-[#4D5E88] hover:text-[#00D4E8] text-sm transition-all duration-200 group"
            >
              <div className="w-8 h-8 rounded-lg bg-[rgba(0,212,232,0.06)] border border-[rgba(0,212,232,0.08)] flex items-center justify-center group-hover:border-[rgba(0,212,232,0.2)] transition-colors">
                <MessageCircle size={15} />
              </div>
              @rocketly
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

        <div className="mt-10 pt-6 border-t border-[rgba(0,212,232,0.04)] text-center text-xs text-[#2C3558]">
          &copy; {new Date().getFullYear()} Rocketly. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
