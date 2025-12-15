// components/TransformationsSection.tsx
"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./TransformationsSection.module.css";

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
      className={styles.transformationsSection}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Animated Background */}
      <div className={styles.animatedBg}>
        <div className={styles.bgShape1}></div>
        <div className={styles.bgShape2}></div>
        <div className={styles.bgShape3}></div>
      </div>

      <div className={styles.container}>
        {/* Premium Header */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={styles.headerBadge}>
            <span>🏆</span>
            <span>1000+ Success Stories</span>
          </div>
          <h2 className={styles.mainTitle}>
            Real People, Real
            <span className={styles.highlight}> Transformations</span>
          </h2>
          <p className={styles.subtitle}>
            Witness the incredible journeys of ordinary people achieving
            extraordinary results with science-backed nutrition
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div className={styles.carouselContainer}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className={styles.activeCard}
              initial={{ opacity: 0, scale: 0.9, rotateY: 45 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: -45 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className={styles.cardContent}>
                {/* Image Section */}
                <div className={styles.imageSection}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={transformations[currentSlide].combinedImage}
                      alt={`${transformations[currentSlide].name} transformation`}
                      width={800}
                      height={500}
                      className={styles.transformationImage}
                      priority
                    />

                    {/* Before/After Overlay */}
                    <div className={styles.imageOverlay}>
                      <div className={styles.beforeSection}>
                        <span className={styles.beforeLabel}>BEFORE</span>
                        <div className={styles.stats}>
                          {transformations[currentSlide].beforeStats}
                        </div>
                      </div>

                      <div className={styles.afterSection}>
                        <span className={styles.afterLabel}>AFTER</span>
                        <div className={styles.stats}>
                          {transformations[currentSlide].afterStats}
                        </div>
                      </div>
                    </div>

                    {/* Transformation Arrow */}
                    <div className={styles.transformationArrow}>
                      <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Details Section */}
                <div className={styles.detailsSection}>
                  <div className={styles.clientHeader}>
                    <div className={styles.clientInfo}>
                      <h3 className={styles.clientName}>
                        {transformations[currentSlide].name}
                      </h3>
                      <div className={styles.clientMeta}>
                        <span className={styles.age}>
                          {transformations[currentSlide].age}
                        </span>
                        <span className={styles.location}>
                          📍 {transformations[currentSlide].location}
                        </span>
                      </div>
                    </div>

                    <div className={styles.achievementBadge}>
                      <div className={styles.weightLoss}>
                        {transformations[currentSlide].weightLoss}
                      </div>
                      <div className={styles.timeline}>
                        {transformations[currentSlide].timeline}
                      </div>
                    </div>
                  </div>

                  <div className={styles.storySection}>
                    <div className={styles.quoteIcon}>"</div>
                    <p className={styles.clientStory}>
                      {transformations[currentSlide].story}
                    </p>
                  </div>

                  <div className={styles.verificationBadge}>
                    <span className={styles.verifiedIcon}>✓</span>
                    <span>Verified Transformation</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className={styles.navigation}>
            <button
              className={styles.navBtn}
              onClick={prevSlide}
              aria-label="Previous transformation"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>

            <button
              className={styles.navBtn}
              onClick={nextSlide}
              aria-label="Next transformation"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6L8.59 7.41 12.17 11 8.59 14.59 10 16l6-6z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Premium Indicators */}
        <div className={styles.indicators}>
          {transformations.map((_, index: number) => (
            <button
              key={index}
              className={`${styles.indicator} ${currentSlide === index ? styles.active : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`View transformation ${index + 1}`}
            >
              <span className={styles.indicatorProgress}></span>
            </button>
          ))}
        </div>

        {/* Thumbnail Preview */}
        <div className={styles.thumbnailPreview}>
          {transformations.map((transformation, index: number) => (
            <motion.div
              key={transformation.id}
              className={`${styles.thumbnail} ${currentSlide === index ? styles.activeThumbnail : ""}`}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={transformation.combinedImage}
                alt={transformation.name}
                width={100}
                height={60}
                className={styles.thumbnailImage}
              />
              <div className={styles.thumbnailInfo}>
                <span className={styles.thumbnailName}>
                  {transformation.name}
                </span>
                <span className={styles.thumbnailLoss}>
                  {transformation.weightLoss}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className={styles.ctaSection}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.button
            className={styles.ctaButton}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 50px rgba(255,107,107,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start Your Transformation Today</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.div>
          </motion.button>

          <p className={styles.ctaSubtext}>
            Join 1000+ people who transformed their lives with personalized
            nutrition
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TransformationsSection;
