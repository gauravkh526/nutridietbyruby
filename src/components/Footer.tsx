// components/Footer.tsx
"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  ArrowUp,
  Sparkles,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

interface LinkItem {
  label: string;
  onClick?: () => void;
  href?: string;
}

interface LinkGroup {
  title: string;
  links: LinkItem[];
}

const Footer: React.FC = () => {
  const router = useRouter();
  const prefersReducedMotion = useReducedMotion();

  const handleScroll = (id: string): void => {
    router.push(`/?scrollTo=${id}`);
  };

  const linkGroups: LinkGroup[] = useMemo(
    () => [
      {
        title: "Company",
        links: [
          { label: "Home", onClick: () => router.push("/") },
          { label: "About", onClick: () => handleScroll("about") },
          { label: "Features", onClick: () => handleScroll("features") },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "FAQs", onClick: () => handleScroll("faq") },
          { label: "Contact", onClick: () => handleScroll("contact") },
          { label: "Refund Policy", href: "/refund" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Terms of Use", href: "/terms" },
          { label: "Privacy Policy", href: "/privacy" },
        ],
      },
    ],
    [router],
  );

  return (
    <footer className="relative bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      {/* EPIC Curvy Border with Glow */}
      <div className="relative">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto -mt-1 relative z-10"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="footerGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="50%" stopColor="#14B8A6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
          <path
            d="M0,40 Q360,0 720,40 T1440,40 L1440,120 L0,120 Z"
            fill="url(#footerGradient)"
            className="drop-shadow-2xl"
          />
          <path
            d="M0,50 Q360,20 720,50 T1440,50"
            stroke="white"
            strokeWidth="3"
            className="opacity-30"
            fill="none"
          />
        </svg>

        {/* Glowing particles on the wave */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full shadow-lg"
            style={{
              left: `${12 + i * 12}%`,
              top: `${60 + Math.sin(i) * 20}px`,
            }}
            animate={{
              y: [-5, 5, -5],
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-emerald-200/20 to-teal-300/20 blur-3xl"
        />

        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-gradient-to-tr from-cyan-200/20 to-emerald-300/20 blur-3xl"
        />

        {/* Floating icons */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-emerald-400/20 dark:text-emerald-500/10"
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Sparkles size={16} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Top Section: Brand + Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Image
                src="/logo/nutridietbyruby_logo.png"
                alt="Nutridietbyruby Logo"
                width={80}
                height={80}
                priority
                className="drop-shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/20 to-teal-400/20 rounded-full blur-xl -z-10" />
            </motion.div>
            <div className="text-left">
              <h3 className="text-2xl font-black text-gray-900 dark:text-white bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Nutridietbyruby
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                🏆 India's #1 Science-backed Nutrition Platform
              </p>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-700 dark:text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Helping{" "}
            <span className="font-bold text-emerald-600">10,000+ people</span>{" "}
            across India achieve better health with personalised diet plans and
            ongoing support.
          </motion.p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <motion.button
              type="button"
              onClick={() =>
                window.open("https://forms.gle/RxX91vQedEikqXNy7", "_blank")
              }
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-bold text-lg rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-3">
                <Sparkles size={20} />
                Start Your Transformation
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </div>
            </motion.button>

            <motion.button
              type="button"
              onClick={() => router.push("/")}
              whileHover={{ scale: 1.02, y: -1 }}
              className="px-6 py-3 border-2 border-emerald-300 dark:border-emerald-600 text-emerald-700 dark:text-emerald-400 font-semibold rounded-2xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all backdrop-blur-sm"
            >
              Explore Platform
            </motion.button>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-md rounded-full px-6 py-3 shadow-xl border border-emerald-200/50 dark:border-emerald-700/50"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                100% Free
              </span>
            </div>
            <div className="w-px h-4 bg-gray-300 dark:bg-gray-600" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                No Spam
              </span>
            </div>
            <div className="w-px h-4 bg-gray-300 dark:bg-gray-600" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                Evidence-based
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Links */}
          {linkGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-bold text-gray-900 dark:text-white relative">
                {group.title}
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <a
                        href={link.href}
                        className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={link.onClick}
                        className="text-left text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter + Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-bold text-gray-900 dark:text-white relative">
              Stay Updated
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
            </h4>

            {/* Newsletter */}
            <div className="space-y-3">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Get weekly nutrition tips & success stories
              </p>
              <form className="flex gap-2 w-full">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 min-w-0 px-4 py-2 bg-white/80 dark:bg-slate-800/80 border border-emerald-200 dark:border-emerald-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 backdrop-blur-sm"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-shrink-0 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl shadow-lg"
                >
                  <Mail size={16} />
                </motion.button>
              </form>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                Follow Us
              </p>
              <div className="flex gap-3">
                {[
                  {
                    icon: Linkedin,
                    color: "hover:text-blue-600",
                    href: "https://linkedin.com",
                  },
                  {
                    icon: Facebook,
                    color: "hover:text-blue-700",
                    href: "https://facebook.com",
                  },
                  {
                    icon: Instagram,
                    color: "hover:text-pink-600",
                    href: "https://instagram.com",
                  },
                  {
                    icon: Youtube,
                    color: "hover:text-red-600",
                    href: "https://youtube.com",
                  },
                ].map(({ icon: Icon, color, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className={`p-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-700/50 rounded-xl text-gray-600 dark:text-gray-300 ${color} transition-all shadow-lg`}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-8 border-t border-emerald-200 dark:border-emerald-800/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>© {new Date().getFullYear()} Nutridietbyruby.com</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Made with ❤️ in India</span>
            </div>

            <motion.button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full shadow-lg text-sm font-semibold"
            >
              <ArrowUp size={16} />
              Back to Top
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
