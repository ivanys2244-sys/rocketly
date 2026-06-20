import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageCircle, Bot, Globe, Zap, CheckCircle } from "lucide-react";
import { projects, type Project } from "@/data/projects";

const iconMap = { Bot, Globe, Zap } as const;

function resolveIcon(name: Project["iconName"]) {
  return iconMap[name];
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectCaseStudy project={project} />;
}

function ProjectCaseStudy({ project }: { project: Project }) {
  const Icon = resolveIcon(project.iconName);
  const isTelegram = project.type === "telegram";

  const actionHref = isTelegram
    ? project.telegramUrl || "#"
    : project.demoUrl || "#";
  const actionLabel = isTelegram ? "Открыть бота" : "Посмотреть проект →";
  const ActionIcon = isTelegram ? MessageCircle : ArrowRight;

  return (
    <div className="min-h-screen bg-[#060A1E] text-[#D8E4FF]">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#060A1E]/90 backdrop-blur-xl border-b border-[rgba(0,212,232,0.06)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link
            href="/#portfolio"
            className="flex items-center gap-2 text-sm text-[#4D5E88] hover:text-[#00D4E8] transition-colors"
          >
            <ArrowLeft size={16} />
            Назад к портфолио
          </Link>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-[#4D5E88]">Rocketly</span>
            <span className="text-[#2C3558]">&middot;</span>
            <span className="text-[#00D4E8]">Кейс</span>
          </div>
        </div>
      </div>

      <div className="pt-14">
        {/* Hero with screenshot */}
        <section className="relative py-16 sm:py-20 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, ${project.accent}08, transparent)`,
            }}
          />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(0,212,232,0.06)] border border-[rgba(0,212,232,0.1)] mb-5">
                  <Icon size={14} style={{ color: project.accent }} />
                  <span
                    className="text-xs font-medium"
                    style={{ color: project.accent }}
                  >
                    {isTelegram ? "Telegram Bot" : "Веб-сайт"}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  {project.title}
                </h1>

                <p className="text-base sm:text-lg text-[#4D5E88] leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={actionHref}
                  target={actionHref.startsWith("http") ? "_blank" : undefined}
                  rel={actionHref.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:gap-3"
                  style={{
                    background: project.accent,
                    color: "#060A1E",
                    boxShadow: `0 4px 24px ${project.accent}33`,
                  }}
                >
                  <ActionIcon size={18} />
                  {actionLabel}
                </a>
              </div>

              <div className="relative">
                <div
                  className="glass-premium rounded-2xl overflow-hidden"
                  style={{
                    boxShadow: `0 0 40px ${project.accent}15`,
                  }}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1200}
                      height={630}
                      className="w-full h-auto"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="aspect-video flex items-center justify-center bg-[rgba(0,212,232,0.03)]">
                      <Icon size={64} className="text-[#4D5E88] opacity-20" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 border-t border-[rgba(0,212,232,0.06)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Что реализовано
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {project.features.map((f) => (
                <div
                  key={f}
                  className="flex items-start gap-3 text-sm text-[#D8E4FF]"
                >
                  <CheckCircle
                    size={17}
                    className="shrink-0 mt-0.5"
                    style={{ color: project.accent }}
                  />
                  {f}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <div className="glass-premium rounded-2xl p-10 glow-strong gradient-border max-w-xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-3">
                Хотите такой же проект?
              </h3>
              <p className="text-[#4D5E88] text-sm mb-6">
                Получите бесплатную консультацию от команды Rocketly
              </p>
              <a
                href="/#cta"
                className="inline-flex items-center gap-2 btn-primary"
              >
                Обсудить проект
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[rgba(0,212,232,0.06)] py-8">
          <div className="max-w-6xl mx-auto px-4 text-center text-xs text-[#2C3558]">
            Rocketly &middot; {project.title} &middot; 2026
          </div>
        </footer>
      </div>
    </div>
  );
}
