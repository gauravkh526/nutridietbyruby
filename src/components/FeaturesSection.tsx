"use client";

import { motion } from "framer-motion";
import {
  Apple,
  TrendingDown,
  BarChart3,
  Brain,
  Zap,
  Heart,
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Personalized Diet Plans",
      desc: "Get a customized nutrition plan designed for your body type, lifestyle, medical conditions, and food preferences.",
      icon: Apple,
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      title: "Sustainable Weight Loss",
      desc: "Lose weight without extreme dieting or starvation. We focus on balanced, enjoyable meals that fit your daily routine.",
      icon: TrendingDown,
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      title: "Weekly Progress Tracking",
      desc: "Your coach monitors your progress, adjusts your plan, and ensures you stay motivated throughout your journey.",
      icon: BarChart3,
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      title: "Nutrition Education Sessions",
      desc: "Learn how food affects your health, metabolism, hormones, and energy—without complicated scientific terms.",
      icon: Brain,
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
    {
      title: "No More Diet Confusion",
      desc: "Stop jumping between random diets. We give you a clear, structured plan that actually works long-term.",
      icon: Zap,
      color: "from-yellow-400 to-amber-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    },
    {
      title: "Lifetime Support & Guidance",
      desc: "Get lifelong access to our WhatsApp support, doubt clearing, habit-building guidance, and updated meal plans.",
      icon: Heart,
      color: "from-rose-400 to-pink-500",
      bgColor: "bg-rose-50 dark:bg-rose-900/20",
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
            Why Choose <span className="text-green-600">NutriDiet by ruby</span>
            ?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            We help you achieve long-term health, fitness, and confidence
            through science-backed nutrition, personalized guidance, and
            sustainable lifestyle changes.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group"
              >
                <div
                  className={`${feature.bgColor} border border-green-100 dark:border-gray-700 rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col`}
                >
                  {/* Icon Container */}
                  <motion.div
                    className={`bg-gradient-to-br ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:shadow-xl`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-green-900 dark:text-white mb-3 group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed flex-grow">
                    {feature.desc}
                  </p>

                  {/* Animated Bottom Border */}
                  <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
