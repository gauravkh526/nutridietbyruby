"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Utensils, Zap, Home, Dumbbell } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export default function HowItWorks() {
  const steps: Step[] = [
    {
      icon: Utensils,
      title: "Tell us about your health goals",
      desc: "Just 2 minutes. No long forms, no guesswork.",
    },
    {
      icon: Zap,
      title: "Get a personalized analysis",
      desc: "Our expert nutritionists review your data and create a science-backed plan.",
    },
    {
      icon: Home,
      title: "Join your nutrition coaching sessions",
      desc: "Learn how to eat right, build healthy habits, and achieve sustainable results.",
    },
    {
      icon: Dumbbell,
      title: "Follow your action plan",
      desc: "Step-by-step guidance, meal plans, and progress tracking. Lifelong support.",
    },
  ];

  const renderQuadrant = (
    index: number,
    delay: number,
    borderClass: string,
  ) => {
    const step = steps[index];
    const IconComponent = step.icon;

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay }}
        className={`p-10 md:p-12 text-center text-white ${borderClass}`}
      >
        <div className="flex justify-center mb-4">
          <IconComponent
            className="w-12 h-12 md:w-16 md:h-16"
            strokeWidth={1.5}
          />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-3">{step.title}</h3>
        <p className="text-teal-100 text-base md:text-lg leading-relaxed">
          {step.desc}
        </p>
      </motion.div>
    );
  };

  return (
    <section className="w-full bg-gradient-to-br from-teal-500 to-teal-600 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            How NutriDiet By Ruby Works
          </h2>
          <p className="text-teal-100 text-lg md:text-xl max-w-3xl mx-auto">
            Simple, human-first process designed to help you achieve your health
            and nutrition goals effortlessly.
          </p>
        </motion.div>

        {/* Quadrant Container with Cross Dividers */}
        <div className="relative bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl overflow-hidden">
          {/* Vertical Divider */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white opacity-0 md:opacity-60 transform -translate-x-1/2" />

          {/* Horizontal Divider */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-white opacity-0 md:opacity-60 transform -translate-y-1/2" />

          {/* Center Circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full z-10 opacity-0 md:opacity-100" />

          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {renderQuadrant(0, 0, "")}
            {renderQuadrant(1, 0.1, "border-l border-white border-opacity-30")}
            {renderQuadrant(2, 0.2, "border-t border-white border-opacity-30")}
            {renderQuadrant(
              3,
              0.3,
              "border-t border-l border-white border-opacity-30",
            )}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <Button
            size="lg"
            className="text-base group bg-white hover:bg-gray-100 text-teal-600 px-8 py-6 font-semibold"
            asChild
          >
            <a
              href="https://forms.gle/RxX91vQedEikqXNy7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Your Nutrition Journey
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
