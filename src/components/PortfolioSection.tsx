"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Bot, Globe, Zap } from "lucide-react";
import { projects, type Project } from "@/data/projects";

const iconMap = { Bot, Globe, Zap } as const;

function resolveIcon(name: Project["iconName"]) {
  return iconMap[name];
}

function getDemoHref(project: Project): string {
  if (project.type === "website" && project.demoUrl) return project.demoUrl;
  if (project.telegramUrl) return project.telegramUrl;
  return `/projects/${project.slug}`;
}

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-[1]">
        <div className="hero-glow top-0 right-0" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(0,212,232,0.06)] border border-[rgba(0,212,232,0.1)] mb-4">
            <span className="text-[#00D4E8] text-xs font-medium">ПРОЕКТЫ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Наши <span className="gradient-text">работы</span>
          </h2>
          <p className="text-[#4D5E88] text-lg max-w-xl mx-auto">
            Реальные проекты, которые демонстрируют наш подход к разработке
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const Icon = resolveIcon(project.iconName);
  const href = getDemoHref(project);

  const openDemo = () => {
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="group cursor-pointer"
      onClick={openDemo}
    >
      <div className="glass-premium rounded-2xl overflow-hidden card-hover-strong h-full flex flex-col">
        <div className="relative h-64 overflow-hidden bg-[rgba(0,212,232,0.02)]">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top group-hover:scale-105 transition-all duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Icon size={56} className="text-[#4D5E88] opacity-20" />
            </div>
          )}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
            style={{
              background: `linear-gradient(to top, ${project.accent}30, transparent 60%)`,
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <span
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl backdrop-blur-md translate-y-4 group-hover:translate-y-0 transition-all duration-500"
              style={{
                background: `${project.accent}DD`,
                color: "#060A1E",
              }}
              onClick={(e) => {
                e.stopPropagation();
                openDemo();
              }}
            >
              <ExternalLink size={16} />
              Открыть проект
            </span>
          </div>
          <div
            className="absolute top-0 left-0 right-0 h-32 opacity-60"
            style={{
              background: `linear-gradient(to bottom, ${project.accent}15, transparent)`,
            }}
          />
          <div
            className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md backdrop-blur-md text-[10px] font-semibold"
            style={{
              background: `${project.accent}20`,
              color: project.accent,
              border: `1px solid ${project.accent}25`,
            }}
          >
            <Icon size={12} />
            {project.type === "telegram" ? "Telegram" : "Сайт"}
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-white font-semibold text-base mb-2 leading-snug">
            {project.title}
          </h3>
          <p className="text-[#4D5E88] text-sm leading-relaxed mb-4 flex-1">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.map((t) => (
              <span key={t} className="tech-badge text-[10px]">
                {t}
              </span>
            ))}
          </div>
          <span
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4D5E88] group-hover:text-[#00D4E8] transition-all duration-300 group-hover:gap-2.5"
            onClick={(e) => {
              e.stopPropagation();
              openDemo();
            }}
          >
            Открыть проект <ExternalLink size={13} />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
