"use client";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles, Code } from "lucide-react";

const projects = [
  {
    title: "The Genesis V1.0",
    description: "My first web development milestone – a fully responsive portfolio built with React and Tailwind CSS.",
    tags: ["React", "Tailwind", "Vercel"],
    link: "https://my-website-silk-pi.vercel.app/",
    status: "live",
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20",
    borderColor: "border-blue-200 dark:border-blue-800",
  },
  {
    title: "Work in Progress",
    description: "A sleek AI‑powered dashboard for real‑time analytics and visualization.",
    tags: ["Next.js", "TypeScript", "AI"],
    status: "wip",
    bgColor: "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-800/20",
    borderColor: "border-gray-200 dark:border-gray-800",
    placeholder: true,
  },
  {
    title: "Work in Progress",
    description: "An experimental design system focusing on micro‑interactions and motion principles.",
    tags: ["Framer Motion", "Design System", "Canvas"],
    status: "wip",
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20",
    borderColor: "border-purple-200 dark:border-purple-800",
    placeholder: true,
  },
];

export default function SelectedWorksSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* 标题 */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Selected Works
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              A curated showcase of projects that represent my design and
              development philosophy.
            </p>
          </div>

          {/* 卡片网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="relative group"
              >
                {/* 卡片 */}
                <div
                  className={`${project.bgColor} border ${project.borderColor} rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden`}
                >
                  {/* 状态角标 */}
                  <div className="absolute top-4 right-4">
                    {project.status === "live" ? (
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs font-medium">
                        <Sparkles className="w-3 h-3" />
                        Live
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-xs font-medium">
                        <Code className="w-3 h-3" />
                        Brewing
                      </div>
                    )}
                  </div>

                  {/* 内容 */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                      {project.description}
                    </p>

                    {/* 标签 */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-full bg-white/60 dark:bg-gray-800/60 text-gray-800 dark:text-gray-300 text-sm border border-gray-300 dark:border-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 底部链接或占位符 */}
                  {project.placeholder ? (
                    <div className="border-t border-gray-300 dark:border-gray-800 pt-6 mt-6 text-center">
                      <div className="italic text-gray-500 dark:text-gray-500 text-lg">
                        “Brewing something cool...”
                      </div>
                      <div className="mt-4 text-sm text-gray-500 dark:text-gray-500">
                        Coming soon
                      </div>
                    </div>
                  ) : (
                    <div className="border-t border-gray-300 dark:border-gray-800 pt-6 mt-6">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all"
                      >
                        Visit project
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>

                {/* 悬浮光晕 */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-200/0 via-blue-200/30 to-blue-200/0 dark:from-blue-900/0 dark:via-blue-900/20 dark:to-blue-900/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />

                {/* 毛玻璃效果（仅占位符） */}
                {project.placeholder && (
                  <div className="absolute inset-0 rounded-2xl backdrop-blur-sm bg-white/30 dark:bg-black/30 border border-white/40 dark:border-gray-700/40 pointer-events-none" />
                )}
              </motion.div>
            ))}
          </div>

          {/* 脚注 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="pt-12 text-center"
          >
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              More projects are in the pipeline. Stay tuned.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}