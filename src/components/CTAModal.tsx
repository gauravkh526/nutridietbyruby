'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const CTAModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [popupCount, setPopupCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
      setPopupCount(1)
    }, 10000) // Show first popup after 10 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)

    // Show popup again only once after 45 seconds
    if (popupCount === 1) {
      const secondTimer = setTimeout(() => {
        setIsOpen(true)
        setPopupCount(2) // So it doesn't show again
      }, 45000)

      return () => clearTimeout(secondTimer)
    }
  }

  const whatsappMessage = encodeURIComponent(
    "Hi, I want a free consultation regarding my diet and ongoing health concerns. Please assist."
  )

  const whatsappLink = `https://wa.me/918010766712?text=${whatsappMessage}`

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 backdrop-blur-sm bg-black/50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white w-full max-w-lg mx-4 md:mx-0 rounded-3xl p-10 shadow-2xl relative text-center"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <h2 className="text-3xl font-bold text-gray-900">
              Talk to a Certified Nutrition Expert for Free
            </h2>

            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed"
            >
              Get a quick, personalised nutrition consultation for your diet, health, or weight-management goals. We're here to help — completely commitment-free..
            </p>            
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-200"
              >
                💬 Get Free Consultation on WhatsApp
              </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CTAModal
