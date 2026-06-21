import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Bot, Globe, Zap, CheckCircle } from "lucide-react";
import { projects, type Project } from "@/data/projects";

const iconMap = { Bot, Globe, Zap } as const;

function resolveIcon(name: Project["iconName"]) {
  return iconMap[name];
}

export function generateStaticParams() {
  return projects
    .filter((p) => p.type === "website" && p.demoUrl?.startsWith("/demo/"))
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Демо-проект · Rocketly" };
  return {
    title: `${project.title} · Демо · Rocketly`,
    description: project.description,
    openGraph: {
      title: `${project.title} · Демо-проект Rocketly`,
      description: project.description,
      type: "website",
    },
    robots: { index: false, follow: false },
  };
}

export default async function DemoPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const project = projects.find((p) => p.slug === params.slug);

  if (!project || project.type !== "website") {
    notFound();
  }

  const Icon = resolveIcon(project.iconName);

  return (
    <div className="min-h-screen bg-[#060A1E] text-[#D8E4FF]">
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#060A1E]/90 backdrop-blur-xl border-b border-[rgba(0,212,232,0.06)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link
            href="/#portfolio"
            className="flex items-center gap-2 text-sm text-[#4D5E88] hover:text-[#00D4E8] transition-colors"
          >
            <ArrowLeft size={16} />
            Вернуться к портфолио
          </Link>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-[#4D5E88]">Rocketly</span>
            <span className="text-[#2C3558]">&middot;</span>
            <span className="text-[#00D4E8]">Демо-проект</span>
          </div>
        </div>
      </div>

      <div className="pt-14">
        {params.slug === "swag-bank" && <SwagBankDemo project={project} Icon={Icon} />}
        {params.slug === "beauty-studio" && <BeautyStudioDemo project={project} Icon={Icon} />}
        {params.slug === "iphone-revive" && <IPhoneReviveDemo project={project} Icon={Icon} />}
        {params.slug === "mc-accounts" && <MCAccountsDemo project={project} Icon={Icon} />}
        <PlaceholderDemo project={project} Icon={Icon} />
      </div>
    </div>
  );
}

function PlaceholderDemo({
  project,
  Icon,
}: {
  project: Project;
  Icon: typeof Globe;
}) {
  return (
    <section className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
          style={{ background: `${project.accent}12` }}
        >
          <Icon size={32} style={{ color: project.accent }} />
        </div>
        <h1 className="text-2xl font-bold text-white mb-3">{project.title}</h1>
        <p className="text-[#4D5E88] text-sm mb-8 leading-relaxed">
          Демо-проект появится здесь в ближайшее время. Следите за обновлениями
          портфолио Rocketly.
        </p>
        <a
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#00D4E8] hover:gap-3 transition-all"
        >
          <ArrowLeft size={16} />
          Вернуться к портфолио
        </a>
      </div>
    </section>
  );
}

function DemoHero({
  project,
  Icon,
  accentBg,
}: {
  project: Project;
  Icon: typeof Globe;
  accentBg: string;
}) {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-b ${accentBg}`} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(155,77,255,0.08)] border border-[rgba(155,77,255,0.15)] mb-6">
              <Icon size={14} style={{ color: project.accent }} />
              <span className="text-xs font-medium" style={{ color: project.accent }}>
                Демо-проект
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              {project.title}
            </h1>
            <p className="text-lg text-[#4D5E88] leading-relaxed mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((t) => (
                <span key={t} className="tech-badge">{t}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href="/#cta" className="inline-flex items-center gap-2 btn-primary text-sm">
                Заказать такой же проект
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="glass-premium rounded-2xl overflow-hidden relative" style={{ boxShadow: `0 0 60px ${project.accent}15` }}>
              <Image
                src={`/projects/${project.slug}.jpg`}
                alt={project.title}
                width={1200}
                height={630}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection({ project }: { project: Project }) {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">
          Возможности проекта
        </h2>
        <p className="text-[#4D5E88] text-sm mb-10 text-center">
          Что было реализовано в этом проекте
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.features.map((f) => (
            <div key={f} className="glass-premium rounded-xl p-4 flex items-start gap-3">
              <CheckCircle size={18} style={{ color: project.accent }} className="mt-0.5 shrink-0" />
              <span className="text-sm text-[#D8E4FF]">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ project }: { project: Project }) {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="glass-premium rounded-2xl p-10 glow-strong gradient-border max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-3">
            Хотите такой же проект?
          </h3>
          <p className="text-[#4D5E88] text-sm mb-6">
            Получите сайт, адаптированный под ваш бизнес
          </p>
          <a href="/#cta" className="inline-flex items-center gap-2 btn-primary">
            Обсудить проект
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function DemoFooter() {
  return (
    <footer className="border-t border-[rgba(0,212,232,0.06)] py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#2C3558]">
        <span>Rocketly &middot; Демо-проект &middot; 2026</span>
        <a
          href="https://t.me/manager_rocketly"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[#4D5E88] hover:text-[#00D4E8] transition-colors"
        >
          <span>Дизайн и разработка сайта —</span>
          <span className="font-semibold gradient-text">Rocketly</span>
        </a>
      </div>
    </footer>
  );
}

function ScreenshotGrid({ project, screenshots }: { project: Project; screenshots: string[] }) {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">
          Скриншоты проекта
        </h2>
        <p className="text-[#4D5E88] text-sm mb-10 text-center">
          Реальные страницы работающего проекта
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {screenshots.map((src) => (
            <div key={src} className="glass-premium rounded-xl overflow-hidden">
              <Image src={src} alt={`${project.title} screenshot`} width={1200} height={675} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SwagBankDemo({ project, Icon }: { project: Project; Icon: typeof Globe }) {
  return (
    <div>
      <DemoHero project={project} Icon={Icon} accentBg="from-[rgba(155,77,255,0.06)] to-transparent" />
      <section className="py-20 bg-[rgba(155,77,255,0.02)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Главный экран", desc: "Баланс счёта, последние транзакции и быстрые действия — всё на одном экране", accent: "#9B4DFF" },
              { title: "Переводы", desc: "Отправка денег по номеру карты, телефону или между своими счетами за секунды", accent: "#00D4E8" },
              { title: "AI-инвестиции", desc: "Автоматический подбор инвестиционного портфеля под ваш риск-профиль", accent: "#00E67A" },
            ].map((f) => (
              <div key={f.title} className="glass-premium rounded-xl p-6 text-center">
                <h3 className="text-white font-semibold mb-2" style={{ color: f.accent }}>{f.title}</h3>
                <p className="text-[#4D5E88] text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FeaturesSection project={project} />
      <CTASection project={project} />
      <DemoFooter />
    </div>
  );
}

function BeautyStudioDemo({ project, Icon }: { project: Project; Icon: typeof Globe }) {
  return (
    <div>
      <DemoHero project={project} Icon={Icon} accentBg="from-[rgba(0,230,122,0.04)] to-transparent" />
      <section className="py-20 bg-[rgba(0,230,122,0.02)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Услуги и цены", desc: "Полный каталог услуг с ценами, длительностью и описанием", accent: "#00E67A" },
              { title: "Онлайн-запись", desc: "Выбор мастера, даты и времени в несколько кликов", accent: "#00D4E8" },
              { title: "Портфолио", desc: "Галерея работ с фильтрацией по категориям и мастерам", accent: "#9B4DFF" },
            ].map((f) => (
              <div key={f.title} className="glass-premium rounded-xl p-6 text-center">
                <h3 className="text-white font-semibold mb-2" style={{ color: f.accent }}>{f.title}</h3>
                <p className="text-[#4D5E88] text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FeaturesSection project={project} />
      <CTASection project={project} />
      <DemoFooter />
    </div>
  );
}

function RestaurantDemo({ project, Icon }: { project: Project; Icon: typeof Globe }) {
  return (
    <div>
      <DemoHero project={project} Icon={Icon} accentBg="from-[rgba(255,82,37,0.04)] to-transparent" />
      <section className="py-20 bg-[rgba(255,82,37,0.02)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Меню с фильтрацией", desc: "Разделы стартеров, робатайки, суши, десертов — с фильтром по ингредиентам", accent: "#FF5225" },
              { title: "Галерея", desc: "Атмосфера ресторана, фирменные блюда и процесс приготовления на углях", accent: "#00D4E8" },
              { title: "Бронирование", desc: "Выбор столика, даты и времени с мгновенным подтверждением", accent: "#9B4DFF" },
            ].map((f) => (
              <div key={f.title} className="glass-premium rounded-xl p-6 text-center">
                <h3 className="text-white font-semibold mb-2" style={{ color: f.accent }}>{f.title}</h3>
                <p className="text-[#4D5E88] text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FeaturesSection project={project} />
      <CTASection project={project} />
      <DemoFooter />
    </div>
  );
}

function IPhoneReviveDemo({ project, Icon }: { project: Project; Icon: typeof Globe }) {
  return (
    <div>
      <DemoHero project={project} Icon={Icon} accentBg="from-[rgba(0,212,232,0.04)] to-transparent" />
      <section className="py-20 bg-[rgba(0,212,232,0.02)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Каталог моделей", desc: "iPhone от 11 до 16 Pro Max с фильтрацией по модели, памяти и цвету", accent: "#00D4E8" },
              { title: "Диагностика 40+ параметров", desc: "Проверка IMEI, батареи, дисплея, Face ID, водозащиты — с отчётом", accent: "#00E67A" },
              { title: "Trade-In", desc: "Скидка до 40 000 ₽ при сдаче старого устройства", accent: "#9B4DFF" },
            ].map((f) => (
              <div key={f.title} className="glass-premium rounded-xl p-6 text-center">
                <h3 className="text-white font-semibold mb-2" style={{ color: f.accent }}>{f.title}</h3>
                <p className="text-[#4D5E88] text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FeaturesSection project={project} />
      <CTASection project={project} />
      <DemoFooter />
    </div>
  );
}

function MCAccountsDemo({ project, Icon }: { project: Project; Icon: typeof Globe }) {
  return (
    <div>
      <DemoHero project={project} Icon={Icon} accentBg="from-[rgba(255,179,71,0.04)] to-transparent" />
      <section className="py-20 bg-[rgba(255,179,71,0.02)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Тарифы", desc: "Starter, Premium, Ultra, God — каждый с уникальным набором бонусов", accent: "#FFB347" },
              { title: "Мгновенная выдача", desc: "Автоматическая отправка данных аккаунта на почту после оплаты", accent: "#00D4E8" },
              { title: "Редкие предметы", desc: "Minecon-плащи, именные скины, привилегии и ранги", accent: "#9B4DFF" },
            ].map((f) => (
              <div key={f.title} className="glass-premium rounded-xl p-6 text-center">
                <h3 className="text-white font-semibold mb-2" style={{ color: f.accent }}>{f.title}</h3>
                <p className="text-[#4D5E88] text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FeaturesSection project={project} />
      <CTASection project={project} />
      <DemoFooter />
    </div>
  );
}

