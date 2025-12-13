'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function NutritionGuidelinesSection() {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent"
        >
          Science-Backed Nutrition Guidelines
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12"
        >
          Transform your health with evidence-based nutrition principles. Learn core guidelines to support energy, weight management, and long-term wellbeing.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          <Card className="border-0 bg-white/80 dark:bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.015] transform border-emerald-200 dark:border-emerald-800/50">
            <CardContent className="p-8 space-y-3">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Balanced Macronutrients</h3>
              <ul className="text-muted-foreground text-sm list-disc pl-5 space-y-1">
                <li>Approx. 40–50% complex carbs from whole grains & vegetables</li>
                <li>25–30% healthy fats — nuts, seeds, avocado, olive oil</li>
                <li>25–30% lean proteins — fish, poultry, legumes, eggs</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/80 dark:bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.015] transform border-emerald-200 dark:border-emerald-800/50">
            <CardContent className="p-8 space-y-3">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8a1.001 1.001 0 00-1 1v2a1.001 1.001 0 002 0v-2a1 1 0 00-1-1zm0 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Daily Essentials</h3>
              <ul className="text-muted-foreground text-sm list-disc pl-5 space-y-1">
                <li>Stay hydrated: ~7–9 cups/day (adjust for activity & climate)</li>
                <li>Target 25–35g fiber daily via fruits, vegetables & whole grains</li>
                <li>Key micronutrients to monitor: Vitamin D, Magnesium, Omega‑3s</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/80 dark:bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.015] transform border-emerald-200 dark:border-emerald-800/50">
            <CardContent className="p-8 space-y-3">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Proven Health Benefits</h3>
              <ul className="text-muted-foreground text-sm list-disc pl-5 space-y-1">
                <li>Improved energy, cognitive focus, and mood stability</li>
                <li>Lowered chronic inflammation & reduced cravings</li>
                <li>Supports healthy weight management and metabolic health</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <Button asChild size="lg" className="text-base group bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 shadow-xl h-12 px-8">
            <a
              href="/nutrition-guide"
              className="flex items-center"
            >
              Get Your Free Nutrition Starter Guide
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
