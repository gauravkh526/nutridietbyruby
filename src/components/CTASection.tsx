// components/CTASection.tsx
"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#13ad9d] to-[#0f9585] text-white py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6"
        >
          Don’t Suffer Alone
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-xl mb-8 font-medium text-white/90"
        >
          Take the first step towards better health. We're here to guide you
          with personalized nutrition support, without stress or confusion —
          completely free.
        </motion.p>

        <a
          href="https://forms.gle/RxX91vQedEikqXNy7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-green-700 text-lg font-semibold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-gray-100 transition duration-300 ease-in-out"
        >
          Join Nutrition Awareness
        </a>
      </div>
    </section>
  );
}
