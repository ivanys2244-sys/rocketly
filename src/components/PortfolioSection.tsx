"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ExternalLink, Bot, Globe, Zap } from "lucide-react";
import { projects, type Project } from "@/data/projects";

const iconMap = { Bot, Globe, Zap } as const;

function resolveIcon(name: Project["iconName"]) {
  return iconMap[name];
}

export default function PortfolioSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [selected, close]);

  return (
    <section id="portfolio" className="section-padding relative">
      <div className="hero-glow top-0 right-0" />
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
            <ProjectCard key={p.slug} project={p} index={i} onSelect={setSelected} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={close} />}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index: number;
  onSelect: (p: Project) => void;
}) {
  const Icon = resolveIcon(project.iconName);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="group cursor-pointer"
      onClick={() => onSelect(project)}
    >
      <div className="glass-premium rounded-2xl overflow-hidden card-hover-strong h-full flex flex-col">
        <div className="relative h-72 overflow-hidden bg-[rgba(0,212,232,0.02)]">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-all duration-700 ease-out"
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
            >
              <ExternalLink size={16} />
              Подробнее
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
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4D5E88] group-hover:text-[#00D4E8] transition-all duration-300 group-hover:gap-2.5">
            Подробнее <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const Icon = resolveIcon(project.iconName);

  const demoHref =
    project.type === "website" && project.demoUrl
      ? project.demoUrl
      : project.telegramUrl
        ? project.telegramUrl
        : `/projects/${project.slug}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[#060A1E]/80 backdrop-blur-xl" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto glass-premium rounded-2xl glow-strong"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-lg bg-[rgba(0,0,0,0.4)] backdrop-blur-md border border-[rgba(0,212,232,0.1)] flex items-center justify-center text-[#D8E4FF] hover:text-white hover:bg-[rgba(0,212,232,0.15)] transition-all duration-200"
          aria-label="Закрыть"
        >
          <X size={18} />
        </button>

        <div className="relative h-56 sm:h-72 overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[rgba(0,212,232,0.03)]">
              <Icon size={64} className="text-[#4D5E88] opacity-20" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1230] via-transparent to-transparent" />
          <div
            className="absolute top-0 left-0 right-0 h-32"
            style={{
              background: `linear-gradient(to bottom, ${project.accent}20, transparent)`,
            }}
          />
          <div
            className="absolute bottom-4 left-6 flex items-center gap-2 px-3 py-1.5 rounded-lg backdrop-blur-md text-xs font-semibold"
            style={{
              background: `${project.accent}25`,
              color: project.accent,
              border: `1px solid ${project.accent}30`,
            }}
          >
            <Icon size={14} />
            {project.type === "telegram" ? "Telegram-бот" : "Веб-сайт"}
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {project.title}
          </h3>
          <p className="text-[#4D5E88] text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((t, ti) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: ti * 0.05 }}
                className="tech-badge"
              >
                {t}
              </motion.span>
            ))}
          </div>

          <div className="mb-8">
            <h4 className="text-white text-sm font-semibold mb-3">
              Возможности
            </h4>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {project.features.map((f, fi) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: fi * 0.05 }}
                  className="flex items-center gap-2.5 text-sm text-[#D8E4FF]"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: project.accent }}
                  />
                  {f}
                </motion.div>
              ))}
            </div>
          </div>

          <a
            href={demoHref}
            target={demoHref.startsWith("http") ? "_blank" : undefined}
            rel={demoHref.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:gap-3"
            style={{
              background: project.accent,
              color: "#060A1E",
              boxShadow: `0 4px 20px ${project.accent}33`,
            }}
          >
            <ExternalLink size={18} />
            Открыть проект
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
