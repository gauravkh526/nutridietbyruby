'use client'

import { useEffect, useState } from 'react'
import { X, Apple, MessageCircle, Phone } from 'lucide-react'
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
    "Hi Ruby, I want a free consultation regarding my diet and health concerns."
  )

  const whatsappLink = `https://wa.me/918010766712?text=${whatsappMessage}`

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 backdrop-blur-sm bg-black/50 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-sm bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden relative"
          >
            {/* Top gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-green-500" />
            
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 p-1.5 text-gray-500 hover:text-gray-800 hover:bg-white/50 rounded-lg transition-all"
            >
              <X size={18} />
            </button>

            <div className="p-5 pt-8 text-center">
              
              {/* Icon + Title */}
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center">
                  <Apple className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">Ruby</h2>
                  <p className="text-xs text-green-600 font-medium">Certified Nutritionist</p>
                </div>
              </div>

              {/* Trust badges */}
              <div className="flex gap-2 justify-center mb-4 text-xs">
                <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-lg font-medium">10K+ Helped</span>
                <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded-lg font-medium">30-Day Results</span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Get <span className="font-semibold text-green-600">FREE personalized nutrition consultation</span> for weight loss & better health.
              </p>

              {/* CTA Button */}
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold px-4 py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-sm mb-3"
              >
                <MessageCircle size={18} />
                <span>🍎 Start FREE Consultation</span>
              </Link>

              {/* Contact */}
              <div className="text-xs text-gray-500 flex items-center justify-center gap-1">
                <Phone className="w-3 h-3" />
                <span>+91 80107 66712</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CTAModal
