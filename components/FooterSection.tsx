"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaTwitter, FaWeixin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { X } from "lucide-react";
import { useState } from "react";

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com",
    color: "text-gray-800 dark:text-gray-300",
    hoverColor: "hover:text-gray-900 dark:hover:text-white",
  },
  {
    name: "X (Twitter)",
    icon: FaTwitter,
    href: "https://twitter.com",
    color: "text-gray-800 dark:text-gray-300",
    hoverColor: "hover:text-blue-500 dark:hover:text-blue-400",
  },
  {
    name: "Email",
    icon: SiGmail,
    href: "mailto:hello@example.com",
    color: "text-gray-800 dark:text-gray-300",
    hoverColor: "hover:text-red-500 dark:hover:text-red-400",
  },
  {
    name: "WeChat",
    icon: FaWeixin,
    onClick: true,
    color: "text-gray-800 dark:text-gray-300",
    hoverColor: "hover:text-green-600 dark:hover:text-green-500",
  },
];

export default function FooterSection() {
  const [weChatModalOpen, setWeChatModalOpen] = useState(false);

  const handleWeChatClick = () => {
    setWeChatModalOpen(true);
    // 也可以复制微信号到剪贴板
    navigator.clipboard.writeText("wechat_username").catch(() => {});
  };

  return (
    <>
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-12 text-center"
          >
            {/* 宣言 */}
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 dark:text-gray-100 mb-6 leading-relaxed">
                “Staying fit, reading constantly, and exploring the boundaries
                of AI.”
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Let’s connect and build something remarkable.
              </p>
            </div>

            {/* 社交图标 */}
            <div className="flex justify-center items-center gap-8 md:gap-10">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                const isWeChat = social.name === "WeChat";

                return (
                  <motion.div
                    key={social.name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {isWeChat ? (
                      <button
                        onClick={handleWeChatClick}
                        className={`p-4 rounded-2xl border border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 ${social.color} ${social.hoverColor} transition-colors duration-300`}
                        aria-label="Open WeChat QR code"
                      >
                        <Icon className="w-7 h-7" />
                      </button>
                    ) : (
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 rounded-2xl border border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 ${social.color} ${social.hoverColor} transition-colors duration-300`}
                        aria-label={social.name}
                      >
                        <Icon className="w-7 h-7" />
                      </a>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* 版权信息 */}
            <div className="pt-12 border-t border-gray-300 dark:border-gray-800">
              <p className="text-gray-500 dark:text-gray-500 text-sm">
                © {new Date().getFullYear()} My Name. All thoughts are my own.
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
                Built with Next.js, Tailwind CSS, Framer Motion, and a lot of
                curiosity.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 微信模态框 */}
      <AnimatePresence>
        {weChatModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/50 backdrop-blur-md"
            onClick={() => setWeChatModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border border-gray-300 dark:border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 关闭按钮 */}
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setWeChatModalOpen(false)}
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* 内容 */}
              <div className="p-8 md:p-10">
                <div className="text-center space-y-6">
                  <div className="inline-flex p-4 rounded-2xl bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                    <FaWeixin className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    WeChat QR Code
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Scan the QR code below to add me on WeChat, or copy the
                    username: <strong>wechat_username</strong>
                  </p>

                  {/* 二维码占位图 */}
                  <div className="py-6">
                    <div className="mx-auto w-48 h-48 bg-gray-200 dark:bg-gray-800 rounded-xl flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-lg">
                      <div className="text-center">
                        <div className="grid grid-cols-3 gap-1 w-32 h-32 mx-auto">
                          {Array.from({ length: 9 }).map((_, i) => (
                            <div
                              key={i}
                              className={`${i % 2 === 0 ? "bg-gray-800 dark:bg-gray-300" : "bg-gray-300 dark:bg-gray-700"} rounded`}
                            />
                          ))}
                        </div>
                        <p className="mt-4 text-xs text-gray-500 dark:text-gray-500">
                          (QR placeholder)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button
                      className="w-full py-3 rounded-xl bg-gray-900 dark:bg-gray-800 text-white dark:text-gray-200 font-medium hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                      onClick={() => {
                        navigator.clipboard.writeText("wechat_username");
                        alert("Username copied to clipboard!");
                      }}
                    >
                      Copy WeChat ID
                    </button>
                    <button
                      className="w-full py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      onClick={() => setWeChatModalOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}