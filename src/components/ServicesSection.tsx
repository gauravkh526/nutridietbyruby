// components/ServicesSection.tsx
'use client';

import { motion } from "framer-motion";
import { Leaf, Heart, Zap, Sprout, Baby, Users, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "PCOD / PCOS Plans",
      description: "Science-backed nutrition to balance hormones & manage symptoms effectively",
      icon: Leaf,
      gradient: "from-emerald-400 via-teal-400 to-cyan-400",
      lightGradient: "from-emerald-50 via-teal-50 to-cyan-50",
      accentColor: "text-emerald-600",
    },
    {
      title: "Therapeutic Diets",
      description: "Personalized healing plans for skin clarity, gut health & hormonal balance",
      icon: Heart,
      gradient: "from-teal-400 via-emerald-400 to-lime-400",
      lightGradient: "from-teal-50 via-emerald-50 to-lime-50",
      accentColor: "text-teal-600",
    },
    {
      title: "Weight & Metabolic Health",
      description: "Sustainable transformation for weight management & lifestyle disorders",
      icon: Zap,
      gradient: "from-cyan-400 via-emerald-400 to-green-400",
      lightGradient: "from-cyan-50 via-emerald-50 to-green-50",
      accentColor: "text-cyan-600",
    },
    {
      title: "Ayurvedic & Holistic Diets",
      description: "Ancient wisdom meets modern science through Ayurveda, yoga & nutrition",
      icon: Sprout,
      gradient: "from-green-400 via-emerald-400 to-teal-400",
      lightGradient: "from-green-50 via-emerald-50 to-teal-50",
      accentColor: "text-green-600",
    },
    {
      title: "Fertility Nutrition",
      description: "Specialized nutrition support for couples planning parenthood",
      icon: Baby,
      gradient: "from-emerald-400 via-lime-400 to-green-400",
      lightGradient: "from-emerald-50 via-lime-50 to-green-50",
      accentColor: "text-emerald-600",
    },
    {
      title: "Health Coaching",
      description: "Holistic lifestyle guidance for sustainable wellness & transformation",
      icon: Users,
      gradient: "from-lime-400 via-emerald-400 to-cyan-400",
      lightGradient: "from-lime-50 via-emerald-50 to-cyan-50",
      accentColor: "text-lime-600",
    },
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "8010766712";
    const message = "Hi! I'm interested in learning more about your nutrition services.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  return (
    <section 
      id="services"
      className="relative w-full py-24 md:py-32 px-6 md:px-10 lg:px-24 overflow-hidden scroll-mt-40"
      style={{
        background: "linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 25%, #f0fdfa 50%, #ecf9f8 75%, #f0fdf4 100%)",
      }}
    >
      {/* Premium Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-emerald-300/40 via-teal-300/30 to-cyan-300/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 0.95, 1],
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-lime-300/30 via-emerald-300/40 to-green-300/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-br from-teal-200/20 via-emerald-200/30 to-lime-200/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200"
          >
            <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              PREMIUM SERVICES
            </span>
          </motion.div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="block">Transform Your Health</span>
            <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-lime-600 bg-clip-text text-transparent">
              With World-Class Nutrition
            </span>
          </h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover our exclusive range of science-backed, personalized nutrition services designed to heal your body, balance your mind, and elevate your wellness journey to extraordinary levels.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -15,
                  scale: 1.02,
                }}
                className="group relative h-full rounded-3xl overflow-hidden cursor-pointer"
              >
                {/* Card Background with gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.lightGradient} transition-all duration-500 group-hover:opacity-90`} />

                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-all duration-700 transform -skew-x-12 group-hover:translate-x-full" />

                {/* Border Glow */}
                <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br ${service.gradient} bg-clip-padding opacity-0 group-hover:opacity-20 transition-all duration-500`} style={{
                  borderImage: `linear-gradient(135deg, rgb(16, 185, 129), rgb(20, 184, 166), rgb(6, 182, 212)) 1`,
                }} />

                {/* Content */}
                <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between">
                  {/* Icon Container */}
                  <div className="mb-8">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      className={`inline-block p-5 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg mb-6`}
                    >
                      <IconComponent className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </motion.div>

                    {/* Title */}
                    <h3 className={`text-2xl md:text-3xl font-bold ${service.accentColor} mb-4 leading-tight`}>
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* CTA Button - WhatsApp Link */}
                  <motion.button
                    onClick={handleWhatsAppClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${service.gradient} shadow-lg hover:shadow-xl transition-all duration-300 group/btn`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative rounded-3xl overflow-hidden p-12 md:p-16 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Health?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of healthy individuals who've transformed their lives with our personalized nutrition plans.
            </p>
            <motion.button
              onClick={handleWhatsAppClick}
              whileHover={{ scale: 1.08, boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-emerald-600 font-bold rounded-xl text-lg shadow-2xl hover:bg-emerald-50 transition-all duration-300"
            >
              Start Your Journey Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
