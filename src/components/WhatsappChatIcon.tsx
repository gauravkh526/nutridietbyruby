'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

const WhatsappChatIcon = () => {
  const whatsappNumber = '918010766712'
  const prefilledMessage = encodeURIComponent(
    'Hi, I want a free consultation regarding my diet, health goals, and nutrition plan.'
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${prefilledMessage}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2 }}
      className="fixed bottom-6 right-6 z-[9999]"
    >
      <Link
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group"
      >
        {/* Tooltip (Above Icon) */}
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white text-gray-800 text-sm font-medium px-3 py-1.5 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap">
          Chat with us
          {/* Arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-l-transparent border-r-transparent border-t-8 border-t-white" />
        </div>

        {/* Chat Button */}
        <div className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl backdrop-blur-md">
          <MessageCircle size={28} />
        </div>
      </Link>
    </motion.div>
  )
}

export default WhatsappChatIcon
