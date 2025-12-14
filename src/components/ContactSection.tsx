// components/ContactSection.tsx
'use client';

import { Mail, Phone, MessageSquare, Zap } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const floatingItems = [
    { icon: "🥑", delay: 0, duration: 4 },
    { icon: "🫐", delay: 1, duration: 5 },
    { icon: "🥕", delay: 2, duration: 4.5 },
    { icon: "🍋", delay: 0.5, duration: 5.5 },
  ];

  return (
    <section 
      id="contact" 
      className="relative w-full py-20 px-6 md:px-10 lg:px-24 overflow-hidden scroll-mt-40 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-emerald-900/20 dark:to-cyan-900/20"
    >
      {/* Floating Food Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingItems.map((item, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl md:text-6xl opacity-15"
            animate={{
              y: [0, -30, 0],
              x: i % 2 === 0 ? [0, 20, 0] : [0, -20, 0],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              top: `${20 + i * 20}%`,
              left: `${10 + i * 20}%`,
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-700 to-teal-600 dark:from-emerald-400 dark:to-teal-300 bg-clip-text text-transparent"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10"
        >
          We're here to help with any queries, support, or partnership discussions.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 items-center"
        >
          <motion.a
            href="https://forms.gle/RxX91vQedEikqXNy7"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(16, 185, 129, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-2xl text-lg font-semibold shadow-md transition-all duration-300 flex items-center"
          >
            <Mail className="inline-block mr-2 -mt-1" size={20} />
            Fill Contact Form
          </motion.a>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-700 dark:text-gray-300 text-md"
          >
            <p className="mb-2 flex items-center justify-center">
              <MessageSquare className="inline-block mr-2 -mt-1 text-green-600" size={20} />
              WhatsApp us:{" "}
              <a
                href="https://wa.me/918010766712"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium ml-1"
              >
                +91 8010766712
              </a>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">We usually respond within a few minutes!</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
