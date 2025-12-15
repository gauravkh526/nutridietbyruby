// components/CTASection.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [statsCount, setStatsCount] = useState({
    success: 0,
    weight: 0,
    years: 0,
  });

  // Counter animation for stats
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setStatsCount({ success: 1000, weight: 500, years: 5 });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12"
    >
      {/* Premium animated background */}
      <div className="absolute inset-0">
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse" />

        {/* Floating orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-teal-400/20 to-emerald-400/20 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, 80, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 rounded-full blur-3xl"
        />

        {/* Particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/30 rounded-full"
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-6 text-center"
      >
        {/* Trust badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-400/10 to-emerald-400/10 border border-teal-400/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm mx-4"
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-teal-300 font-semibold text-sm tracking-wide">
            🏆 INDIA'S #1 PERSONALIZED NUTRITION PLATFORM
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-teal-100 to-emerald-200 mb-6 leading-none tracking-tight"
        >
          Transform Your Life
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400">
            With Science
          </span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
        >
          Join thousands who've transformed their relationship with food using
          our
          <span className="text-teal-400 font-semibold">
            {" "}
            evidence-based methodology
          </span>
          . Get personalized nutrition guidance that actually works — completely
          free.
        </motion.p>

        {/* Stats section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto"
        >
          {[
            {
              number: statsCount.success,
              label: "Success Stories",
              suffix: "+",
            },
            {
              number: statsCount.weight,
              label: "Kgs Lost Collectively",
              suffix: "+",
            },
            {
              number: statsCount.years,
              label: "Years of Expertise",
              suffix: "",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
              >
                {stat.number}
                {stat.suffix}
              </motion.div>
              <div className="text-slate-400 font-medium text-sm tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
        >
          {/* Primary CTA */}
          <motion.a
            href="https://forms.gle/RxX91vQedEikqXNy7"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative flex items-center gap-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold text-lg px-12 py-5 rounded-3xl shadow-2xl">
              <span>Start Your Transformation</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
              >
                →
              </motion.div>
            </div>
          </motion.a>

          {/* Secondary CTA */}
          <motion.button
            className="flex items-center gap-3 px-8 py-4 rounded-2xl border-2 border-slate-600 text-slate-300 font-semibold hover:border-teal-400 hover:text-teal-400 transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
            Watch Success Stories
          </motion.button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-400 rounded-full"></div>
            <span>100% Free Consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
            <span>No Spam Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
            <span>Evidence-Based Results</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
            <span>5⭐ Rated Program</span>
          </div>
        </motion.div>

        {/* Bottom testimonial */}
        <motion.div
          variants={itemVariants}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-slate-800/30 to-slate-700/30 border border-slate-600/30 backdrop-blur-sm max-w-3xl md:mx-auto md:p-8 mx-4 p-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
              A
            </div>
            <div>
              <div className="text-white font-semibold">Ananya Sharma</div>
              <div className="text-slate-400 text-sm">
                Lost 22kg in 8 months
              </div>
            </div>
          </div>
          <p className="text-slate-300 italic">
            "I tried everything for years. Ruby's approach was different -
            scientific, personalized, and sustainable. Best decision I ever made
            for my health!"
          </p>
          <div className="flex gap-1 mt-3">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-lg">
                ⭐
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
