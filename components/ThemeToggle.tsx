"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-full border border-gray-200 dark:border-gray-800 bg-transparent" />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        ) : (
          <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        )}
      </motion.div>
      {/* 背景光环 */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-transparent"
        animate={{
          boxShadow: isDark
            ? "0 0 10px rgba(59, 130, 246, 0.3)"
            : "0 0 10px rgba(251, 191, 36, 0.3)",
        }}
        transition={{ duration: 0.5 }}
      />
    </motion.button>
  );
}