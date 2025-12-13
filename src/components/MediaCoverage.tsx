'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const newsItems = [
  {
    title: 'Top 5 Diet Trends for 2025',
    summary: 'Leading health platforms highlight sustainable and science-backed diet trends for better health and energy.',
    link: 'https://www.healthline.com/nutrition/healthy-eating-tips',
    img: '/nutrition1.png',
  },
  {
    title: 'How Personalized Meal Plans Improve Wellness',
    summary: 'Nutrition experts explain why customized diets work better than generic meal plans for weight and health goals.',
    link: 'https://www.medicalnewstoday.com/articles/personalized-nutrition',
    img: '/nutrition2.png',
  },
  {
    title: 'Nutrition Hacks That Actually Work',
    summary: 'Wellness blogs share real strategies to improve metabolism, digestion, and maintain a balanced diet.',
    link: 'https://www.eatthis.com/nutrition-tips/',
    img: '/nutrition3.png',
  },
]

export default function MediaCoverage() {
  return (
    <section className="bg-green-50 py-20 px-4 md:px-10" id="media">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-green-900 mb-4"
        >
          📰 Nutrition & Health in the News
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto"
        >
          Top health platforms and blogs sharing insights, trends, and expert tips for better nutrition and wellness.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <div className="h-40 bg-gray-200">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-green-800">{item.title}</h3>
                <p className="text-gray-700 text-sm mt-2 flex-grow">{item.summary}</p>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-green-700 text-sm font-medium hover:underline"
                >
                  Read Full Article →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
