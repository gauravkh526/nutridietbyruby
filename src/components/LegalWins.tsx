// components/TransformationsSection.tsx
"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Transformation {
  id: number;
  name: string;
  weightLoss: string;
  timeline: string;
  story: string;
  combinedImage: string;
  age: string;
  location: string;
  beforeStats: string;
  afterStats: string;
}

const TransformationsSection = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  const transformations: Transformation[] = [
    {
      id: 1,
      name: "Nikita Sharma",
      age: "28 years",
      location: "Mumbai",
      weightLoss: "Lost 15 kgs",
      timeline: "In 3 months",
      beforeStats: "78kg • 34% body fat",
      afterStats: "63kg • 22% body fat",
      story:
        "From struggling with PCOS to becoming the confident woman I always wanted to be. Ruby's scientific approach changed everything for me.",
      combinedImage: "/images/transformations/nikita-combined.jpg",
    },
    {
      id: 2,
      name: "Vijaylakshmi Reddy",
      age: "35 years",
      location: "Bangalore",
      weightLoss: "Lost 40 kgs",
      timeline: "In 18 months",
      beforeStats: "95kg • 42% body fat",
      afterStats: "55kg • 25% body fat",
      story:
        "After my pregnancy, I thought I'd never get back in shape. Ruby's personalized nutrition plan proved me completely wrong.",
      combinedImage: "/images/transformations/vijay-combined.jpg",
    },
    {
      id: 3,
      name: "Avani Patel",
      age: "25 years",
      location: "Delhi",
      weightLoss: "Lost 18 kgs",
      timeline: "In 5 months",
      beforeStats: "72kg • 36% body fat",
      afterStats: "54kg • 20% body fat",
      story:
        "College life had made me gain so much weight. Ruby's sustainable approach helped me lose weight without giving up my favorite foods.",
      combinedImage: "/images/transformations/avani-combined.jpg",
    },
    {
      id: 4,
      name: "Shipra Gupta",
      age: "32 years",
      location: "Pune",
      weightLoss: "Lost 12 kgs",
      timeline: "In 4 months",
      beforeStats: "68kg • 32% body fat",
      afterStats: "56kg • 21% body fat",
      story:
        "Working 12 hours a day, I had no time for gym. Ruby showed me how nutrition alone can transform your body completely.",
      combinedImage: "/images/transformations/shipra-combined.jpg",
    },
  ];

  useEffect(() => {
    setIsLoaded(true);

    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % transformations.length);
      }, 7000);
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying, transformations.length]);

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % transformations.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide(
      (prev) => (prev - 1 + transformations.length) % transformations.length,
    );
  };

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  return (
    <motion.section
      ref={sectionRef}
      className="relative w-full py-20 px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-emerald-300/20 to-teal-400/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-gradient-to-tr from-cyan-300/20 to-emerald-400/20 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-teal-300/10 to-emerald-300/10 blur-2xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Premium Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-300/30 dark:border-emerald-700/30 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
            <span className="text-2xl">🏆</span>
            <span className="text-emerald-700 dark:text-emerald-300 font-bold text-sm tracking-wide">
              1000+ Success Stories
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            <span className="text-gray-900 dark:text-white">
              Real People, Real
            </span>
            <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
              Transformations
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Witness the incredible journeys of ordinary people achieving
            extraordinary results with science-backed nutrition
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div className="relative max-w-6xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="relative"
              initial={{ opacity: 0, scale: 0.9, rotateY: 45 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: -45 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-emerald-200/50 dark:border-emerald-700/50">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-700 dark:to-slate-800 p-8">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src={transformations[currentSlide].combinedImage}
                        alt={`${transformations[currentSlide].name} transformation`}
                        className="w-full h-auto object-cover"
                      />

                      {/* Before/After Overlay */}
                      <div className="absolute inset-0 flex">
                        <div className="flex-1 flex items-start justify-start p-4">
                          <div className="bg-red-500/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                            <span className="block text-white font-bold text-xs mb-1">
                              BEFORE
                            </span>
                            <div className="text-white text-xs font-semibold">
                              {transformations[currentSlide].beforeStats}
                            </div>
                          </div>
                        </div>

                        <div className="flex-1 flex items-start justify-end p-4">
                          <div className="bg-emerald-500/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                            <span className="block text-white font-bold text-xs mb-1">
                              AFTER
                            </span>
                            <div className="text-white text-xs font-semibold">
                              {transformations[currentSlide].afterStats}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Transformation Arrow */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <motion.div
                          animate={{ x: [0, 10, 0] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-2xl border-4 border-emerald-500"
                        >
                          <svg
                            className="w-6 h-6 text-emerald-600"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="mb-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-2">
                            {transformations[currentSlide].name}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                            <span className="font-semibold">
                              {transformations[currentSlide].age}
                            </span>
                            <span className="flex items-center gap-1">
                              📍 {transformations[currentSlide].location}
                            </span>
                          </div>
                        </div>

                        <div className="text-right bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl px-4 py-3 border border-emerald-200 dark:border-emerald-700">
                          <div className="text-xl md:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                            {transformations[currentSlide].weightLoss}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400 font-semibold">
                            {transformations[currentSlide].timeline}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative mb-6">
                      <div className="text-6xl text-emerald-200 dark:text-emerald-800 absolute -top-4 -left-2 font-serif">
                        "
                      </div>
                      <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic pl-6 relative z-10">
                        {transformations[currentSlide].story}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full px-4 py-2 w-fit">
                      <span className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        ✓
                      </span>
                      <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                        Verified Transformation
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-xl flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-emerald-500 hover:text-white transition-all duration-300 z-20"
            onClick={prevSlide}
            aria-label="Previous transformation"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-xl flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-emerald-500 hover:text-white transition-all duration-300 z-20"
            onClick={nextSlide}
            aria-label="Next transformation"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 12.17 11 8.59 14.59 10 16l6-6z" />
            </svg>
          </button>
        </div>

        {/* Premium Indicators */}
        <div className="flex justify-center gap-3 mb-12">
          {transformations.map((_, index: number) => (
            <button
              key={index}
              className="relative group"
              onClick={() => goToSlide(index)}
              aria-label={`View transformation ${index + 1}`}
            >
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-16 bg-gradient-to-r from-emerald-500 to-teal-500"
                    : "w-8 bg-gray-300 dark:bg-gray-600 group-hover:bg-emerald-400"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Thumbnail Preview */}
        <div className="flex gap-4 overflow-x-auto pb-4 px-4 scrollbar-hide mb-12">
          {transformations.map((transformation, index: number) => (
            <motion.div
              key={transformation.id}
              className={`flex-shrink-0 cursor-pointer rounded-xl overflow-hidden border-4 transition-all duration-300 ${
                currentSlide === index
                  ? "border-emerald-500 shadow-2xl scale-105"
                  : "border-transparent hover:border-emerald-300 shadow-lg"
              }`}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-40">
                <img
                  src={transformation.combinedImage}
                  alt={transformation.name}
                  className="w-full h-24 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-3">
                  <span className="text-white text-xs font-bold truncate">
                    {transformation.name}
                  </span>
                  <span className="text-emerald-300 text-xs font-semibold">
                    {transformation.weightLoss}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-lg px-10 py-5 rounded-2xl shadow-2xl overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 50px rgba(16, 185, 129, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative">Start Your Transformation Today</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="relative"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.div>
          </motion.button>

          <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm">
            Join 1000+ people who transformed their lives with personalized
            nutrition
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TransformationsSection;
