'use client';

import React from "react";
import { motion } from "framer-motion";

const transformations = [
  {
    name: "Riya Sharma",
    duration: "3 months",
    result:
      "Started with inconsistent meals and low energy. With a tailored 1500 kcal plan, regular check-ins, and simple habit tweaks, she lost 8 kg, regained daily energy, and now follows a balanced routine she can sustain.",
    plan: "Personalized 1500 kcal diet + weekly coaching",
    testimonialLink: "",
  },
  {
    name: "Amit Verma",
    duration: "4 months",
    result:
      "Focused on strength and muscle gain with a high-protein meal plan and progressive workout support. He gained 5 kg of lean mass, improved recovery, and now lifts heavier with better form.",
    plan: "High-protein nutrition + strength coaching",
    testimonialLink: "",
  },
  {
    name: "Sneha Gupta",
    duration: "2 months",
    result:
      "Struggled with sugar cravings and bloating. After personalized meal timing, fibre-focused meals, and habit coaching, cravings reduced significantly and digestion improved noticeably.",
    plan: "Customized meal plan + habit coaching",
    testimonialLink: "",
  },
  {
    name: "Rahul Singh",
    duration: "5 months",
    result:
      "Had borderline cholesterol and low stamina. Through consistent dietary adjustments, portion control, and cardio-friendly meal choices, his cholesterol improved and overall wellness increased.",
    plan: "Balanced diet + lifestyle coaching",
    testimonialLink: "",
  },
];

export default function Transformations() {
  return (
    <section className="bg-green-50 py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-green-900"
        >
          🌟 Client Transformations
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.02 }}
          className="text-gray-700 mb-12 text-lg"
        >
          Real stories of people who achieved healthier, happier lives with NutriDietByRuby — practical plans, steady progress, and lasting habits.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {transformations.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border p-6 text-left shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-1">{t.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{t.duration}</p>
                <p className="text-gray-700">{t.result}</p>
                <p className="text-xs text-gray-400 mt-3">Plan: {t.plan}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-16"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-green-900 text-white font-semibold rounded-xl hover:bg-green-950 transition"
          >
            Start Your Nutrition Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
}
