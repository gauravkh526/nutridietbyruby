'use client';

import { motion } from 'framer-motion';

export default function FeaturesSection() {
  const features = [
    {
      title: "Personalized Diet Plans",
      desc: "Get a customized nutrition plan designed for your body type, lifestyle, medical conditions, and food preferences.",
    },
    {
      title: "Sustainable Weight Loss",
      desc: "Lose weight without extreme dieting or starvation. We focus on balanced, enjoyable meals that fit your daily routine.",
    },
    {
      title: "Weekly Progress Tracking",
      desc: "Your coach monitors your progress, adjusts your plan, and ensures you stay motivated throughout your journey.",
    },
    {
      title: "Nutrition Education Sessions",
      desc: "Learn how food affects your health, metabolism, hormones, and energy—without complicated scientific terms.",
    },
    {
      title: "No More Diet Confusion",
      desc: "Stop jumping between random diets. We give you a clear, structured plan that actually works long-term.",
    },
    {
      title: "Lifetime Support & Guidance",
      desc: "Get lifelong access to our WhatsApp support, doubt clearing, habit-building guidance, and updated meal plans.",
    },
  ];

  return (
    <section
      id="about"
      className="w-full bg-gray-50 dark:bg-black py-20 px-6 md:px-10 lg:px-24 scroll-mt-40"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading with motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 dark:text-white mb-4">
            Why Choose <span className="text-green-600">Nutridietbyruby</span>?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            We help you achieve long-term health, fitness, and confidence
            through science-backed nutrition, personalized guidance, and
            sustainable lifestyle changes.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-900 border border-green-100 dark:border-gray-700 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-green-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
