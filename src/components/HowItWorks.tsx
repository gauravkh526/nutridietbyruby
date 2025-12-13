'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function HowItWorks() {
  const steps = [
    {
      title: "Tell us about your health goals",
      desc: "Just 2 minutes. No long forms, no guesswork. Share your lifestyle, diet habits, and health concerns.",
    },
    {
      title: "Get a personalized analysis",
      desc: "Our expert nutritionists review your data and create a science-backed plan tailored for you.",
    },
    {
      title: "Join your nutrition coaching sessions",
      desc: "Learn how to eat right, build healthy habits, and achieve sustainable results without starving.",
    },
    {
      title: "Follow your action plan",
      desc: "Step-by-step guidance, meal plans, and progress tracking. Lifelong support from our team.",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-green-50 to-green-100 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading with motion */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4"
        >
          How NutriDietByRuby Works
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-gray-700 text-lg md:text-xl mb-16 max-w-3xl mx-auto"
        >
          Simple, human-first process designed to help you achieve your health and nutrition goals effortlessly.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 text-left">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex items-start space-x-5 bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500"
            >
              <div className="text-green-600 text-2xl font-bold">{i + 1}</div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <Button
            size="lg"
            className="text-base group bg-green-900 hover:bg-green-950 text-white"
            asChild
          >
            <a
              href="https://forms.gle/RxX91vQedEikqXNy7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Your Nutrition Journey
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
