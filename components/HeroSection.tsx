"use client";

import { motion } from "framer-motion";
import CanvasBackground from "./CanvasBackground";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 lg:px-24">
      {/* Canvas 背景 */}
      <div className="absolute inset-0 z-0">
        <CanvasBackground />
      </div>

      {/* 内容 */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* 主标题 */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-gray-900 dark:text-gray-100">
            Hi, I'm{" "}
            <span className="relative inline-block">
              <span className="relative z-10">My Name</span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-3 bg-blue-100 dark:bg-blue-900/40 -rotate-1"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                style={{ originX: 0 }}
              />
            </span>
            .
          </h1>

          {/* 副标题 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl font-light text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Code. Design. AI. Crafting digital experiences.
          </motion.p>

          {/* 装饰线 */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="h-0.5 bg-gray-300 dark:bg-gray-700 mx-auto"
          />

          {/* 滚动提示 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="pt-12"
          >
            <div className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
              <span>Explore more</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* 网格叠加层（极浅） */}
      <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ccc 1px, transparent 1px), linear-gradient(to bottom, #ccc 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
    </section>
  );
}