'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Can I lose weight without starving myself?",
    answer:
      "Absolutely. Starvation slows your metabolism. Our nutrition plans focus on balanced meals, portion control, and metabolic boosting foods so you lose weight naturally without feeling hungry."
  },
  {
    question: "Do you support dietary restrictions and food allergies?",
    answer:
      "Yes. Plans are fully adjusted for vegetarian, vegan, gluten-free, lactose-intolerant, nut-free, and other allergy or preference needs. Please mention any restrictions during onboarding."
  },
  {
    question: "How is progress tracked and measured?",
    answer:
      "Progress is tracked using measurable markers like weight, body measurements, energy levels, sleep quality, and food logs. We review these regularly and adjust the plan as needed."
  },
  {
    question: "Can I follow the diet if I’m working or studying?",
    answer:
      "Definitely. Plans are created around your daily routine—meals and timings are adapted for office hours, college schedules, or shift work."
  },
  {
    question: "Will the plan help with PCOS, thyroid, or diabetes?",
    answer:
      "Yes. Our meal strategies support conditions like PCOS, thyroid imbalance, insulin resistance, and diabetes. We tailor the plan and can coordinate with your doctor if needed."
  },
  {
    question: "Are there options for families or group packages?",
    answer:
      "Yes. We offer family-friendly plans and group packages for small teams. Contact support to discuss custom pricing and meal templates."
  },
  {
    question: "Do you provide recipes and grocery lists?",
    answer:
      "Yes. Every plan includes practical recipes, portion guides, and a simple grocery list to make adherence easy and affordable."
  },
  {
    question: "How quickly can I see results?",
    answer:
      "Most people notice initial changes within 2–3 weeks with consistent adherence. Sustainable results typically become clear in 8–12 weeks."
  },
  {
    question: "Can I get help with eating out and travel?",
    answer:
      "Yes. We provide flexible meal strategies, smart swaps, and portion rules that work while eating out or travelling so you can stay on track without missing social or work events."
  },
  {
    question: "Do you offer follow-up or maintenance plans?",
    answer:
      "Yes. After the main program, we provide optional maintenance packages focused on habit reinforcement, periodic check-ins, and adjusting the plan as your lifestyle changes."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section
      id="faq"
      className="w-full bg-gradient-to-b from-white via-green-50 to-white py-20 px-6 md:px-10 scroll-mt-40"
    >
      <div className="max-w-4xl mx-auto">
        {/* Animated Heading and Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Practical answers to common questions about our nutrition services and plans.
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left text-lg font-semibold text-green-900 hover:text-green-700 transition-colors duration-200"
              >
                <span>{faq.question}</span>
                <span className="text-2xl font-bold text-green-600">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="text-gray-700 mt-3 pr-4 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
