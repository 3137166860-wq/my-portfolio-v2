"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  CpuIcon,
  Code2,
  Monitor,
  Database,
  Terminal,
  Brain,
  HardDrive,
} from "lucide-react";

const categories = [
  {
    title: "AI & Workflow",
    icon: Brain,
    items: [
      { name: "Cursor IDE", description: "AI‑powered code editor" },
      { name: "DeepSeek API Integration", description: "LLM inference & automation" },
      { name: "Qwen 2.5:7b (Local Deployment)", description: "On‑device AI model" },
    ],
  },
  {
    title: "Hardware",
    icon: Cpu,
    items: [
      { name: "MacBook Air M4 (16GB)", description: "Primary development machine" },
      { name: "Dell UltraSharp 4K", description: "External display" },
      { name: "Keychron K8", description: "Mechanical keyboard" },
    ],
  },
  {
    title: "Knowledge Base",
    icon: Database,
    items: [
      { name: "Obsidian", description: "Second brain & note‑taking" },
      { name: "Notion", description: "Project management" },
      { name: "GitHub Gists", description: "Code snippets" },
    ],
  },
];

export default function WorkflowSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white dark:bg-gray-950">
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
              Workflow & Setup
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              The tools and hardware that power my daily craft. No fluff, just
              productivity.
            </p>
          </div>

          {/* 分类网格 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {categories.map((category, catIdx) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIdx * 0.1, duration: 0.5 }}
                  className="relative group"
                >
                  {/* 卡片 */}
                  <div className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full">
                    {/* 图标标题 */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        {category.title}
                      </h3>
                    </div>

                    {/* 项目列表 */}
                    <ul className="space-y-5">
                      {category.items.map((item, idx) => (
                        <motion.li
                          key={item.name}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-4"
                        >
                          <div className="mt-1.5">
                            <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800 dark:text-gray-200">
                              {item.name}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                              {item.description}
                            </p>
                          </div>
                        </motion.li>
                      ))}
                    </ul>

                    {/* 悬浮装饰线 */}
                    <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* 背景光晕 */}
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-100/0 via-blue-100/20 to-blue-100/0 dark:from-blue-900/0 dark:via-blue-900/10 dark:to-blue-900/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                </motion.div>
              );
            })}
          </div>

          {/* 脚注 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="pt-12 text-center"
          >
            <p className="text-gray-500 dark:text-gray-500 text-sm italic">
              “Tools are extensions of thought.”
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}