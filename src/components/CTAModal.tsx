'use client'

import { useEffect, useState } from 'react'
import { X, Apple, Heart, Clock, Users, ShieldCheck, MessageCircle, Phone } from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const CTAModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [popupCount, setPopupCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
      setPopupCount(1)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)

    if (popupCount === 1) {
      const secondTimer = setTimeout(() => {
        setIsOpen(true)
        setPopupCount(2)
      }, 45000)

      return () => clearTimeout(secondTimer)
    }
  }

  const whatsappMessage = encodeURIComponent(
    "Hi Ruby, I want a free consultation regarding my diet and ongoing health concerns. Please assist."
  )

  const whatsappLink = `https://wa.me/918010766712?text=${whatsappMessage}`

  const trustStats = [
    { icon: Users, label: '10K+ Transformed', color: 'text-emerald-600' },
    { icon: Heart, label: 'Personalized Plans', color: 'text-pink-600' },
    { icon: Clock, label: 'Results in 30 Days', color: 'text-green-600' }
  ]

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Animated Background */}
          <motion.div
            className="fixed inset-0 z-[49]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-green-400/20 to-pink-400/20 backdrop-blur-sm" />
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-400/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl animate-pulse delay-1000" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 backdrop-blur-[12px] bg-black/60 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.8, 
                y: 50,
                transition: { duration: 0.2 }
              }}
              className="w-full max-w-2xl mx-auto bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 dark:border-gray-700/50 overflow-hidden relative"
            >
              {/* Gradient Top Border */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 via-green-400 to-pink-500" />
              
              {/* Close Button */}
              <motion.button
                onClick={handleClose}
                className="absolute top-6 right-6 z-10 p-3 text-gray-500 hover:text-green-600 dark:hover:text-green-400 hover:bg-white/60 dark:hover:bg-gray-800/60 rounded-2xl backdrop-blur-sm transition-all duration-200 group"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Close"
              >
                <X size={24} className="group-hover:scale-110 transition-transform" />
              </motion.button>

              <div className="relative z-0 p-8 md:p-12 pt-24 text-center">
                
                {/* Nutrition Icon */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-emerald-400 via-green-500 to-pink-500 rounded-3xl shadow-xl mb-8 p-4"
                >
                  <Apple className="w-16 h-16 text-white drop-shadow-lg" />
                </motion.div>

                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-green-600 to-emerald-600 dark:from-white dark:via-green-300 dark:to-emerald-300 bg-clip-text text-transparent mb-6 leading-tight"
                >
                  Certified Nutritionist 
                  <span className="block text-2xl md:text-3xl bg-gradient-to-r from-emerald-500 to-pink-500 bg-clip-text text-transparent">Ruby Awaits You!</span>
                </motion.h2>

                {/* Trust Badges */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex flex-wrap gap-8 justify-center mb-10 px-4"
                >
                  {trustStats.map((stat, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex items-center gap-3 text-sm p-3 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm"
                      initial={{ scale: 0, y: 20 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{ delay: 0.5 + idx * 0.1, duration: 0.4 }}
                    >
                      <stat.icon size={20} className={`${stat.color} drop-shadow-sm`} />
                      <span className="font-semibold text-gray-800 dark:text-gray-200">{stat.label}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto mb-12 px-6"
                >
                  Get your <span className="font-bold text-green-600 dark:text-green-400">FREE personalized nutrition consultation</span> 
                  for sustainable weight loss, better energy & glowing health. 
                  <span className="block font-semibold text-emerald-600 dark:text-emerald-400 mt-2">No diets, no gimmicks — just science!</span>
                </motion.p>

                {/* Main CTA */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="mb-8"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-emerald-500 via-green-500 to-pink-500 hover:from-emerald-600 hover:via-green-600 hover:to-pink-600 text-white font-bold px-10 py-6 rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 overflow-hidden text-lg"
                    >
                      <MessageCircle size={28} />
                      <span>🍎 Start Your FREE Consultation</span>
                      <div className="absolute inset-0 bg-white/30 rounded-3xl blur opacity-75 -skew-x-12 group-hover:translate-x-full group-hover:skew-x-0 transition-transform duration-1000 -translate-x-full" />
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Ruby Contact */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400 p-4 bg-green-50/50 dark:bg-green-900/20 rounded-2xl border border-green-100/50 dark:border-green-800/50"
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                    <span>Certified Nutritionist Ruby</span>
                  </div>
                  <div className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
                    <Phone className="w-4 h-4 text-green-500" />
                    <span>+91 80107 66712</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default CTAModal
