// components/Testimonials.tsx
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

function calcSavePercent(monthlyBase: number, planTotal: number, months: number) {
  const planMonthly = planTotal / months;
  const save = ((monthlyBase - planMonthly) / monthlyBase) * 100;
  return Math.round(save); // round to whole percent
}

export default function PersonalizedPlans() {
  const monthlyBase = 999;
  const waNumber = '918010766712';
  const waMessage = encodeURIComponent("Hello - I'm interested in this plan. Please help me get started.");

  const plans = [
    {
      key: 'monthly',
      title: 'Monthly Plan',
      priceLabel: '₹999 / month',
      monthlyEquivalent: monthlyBase,
      features: [
        '1 x 30-min coaching session / month',
        'Customized weekly meal plan',
        'Phone + Email support',
      ],
      highlight: '',
      link: `https://wa.me/${waNumber}?text=${waMessage}`,
    },
    {
      key: 'quarterly',
      title: 'Quarterly Plan',
      totalPrice: 2399,
      months: 3,
      priceLabel: '₹2,399 / 3 months',
      monthlyEquivalent: Math.round(2399 / 3),
      features: [
        '3 x 30-min coaching sessions (1/month)',
        'Personalized meal & snack guides',
        'Monthly progress check & minor adjustments',
        'Phone + Email support',
      ],
      highlight: '', // set below
      link: `https://wa.me/${waNumber}?text=${waMessage}`,
    },
    {
      key: 'halfyearly',
      title: 'Half-Yearly Plan',
      totalPrice: 4499,
      months: 6,
      priceLabel: '₹4,499 / 6 months',
      monthlyEquivalent: Math.round(4499 / 6),
      features: [
        '6 x 30-min coaching sessions (1/month)',
        'Detailed meal plans + 12 exclusive recipes',
        'Bi-monthly progress reports & adjustments',
        'Phone + Email support',
      ],
      highlight: '', // set below
      link: `https://wa.me/${waNumber}?text=${waMessage}`,
      popular: true,
    },
    {
      key: 'yearly',
      title: 'Yearly Plan',
      totalPrice: 7999,
      months: 12,
      priceLabel: '₹7,999 / year',
      monthlyEquivalent: Math.round(7999 / 12),
      features: [
        '12 x 30-min coaching sessions (1/month)',
        'Comprehensive nutrition roadmap + 30 recipes',
        'Monthly progress reports, priority scheduling',
        'Phone + Email support',
      ],
      highlight: '', // set below
      link: `https://wa.me/${waNumber}?text=${waMessage}`,
    },
  ];

  // calculate highlights based on monthlyBase
  plans.forEach((p) => {
    if ((p as any).totalPrice && (p as any).months) {
      const total = (p as any).totalPrice;
      const months = (p as any).months;
      const save = calcSavePercent(monthlyBase, total, months);
      (p as any).highlight = save > 0 ? `Save ~${save}% vs monthly` : '';
    }
  });

  return (
    <section id="plans" className="py-20 bg-white text-center w-full scroll-mt-40">
      <div className="max-w-screen-xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-green-700 mb-4"
        >
          Personalized Nutrition Plans
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-gray-600 mb-12 text-base md:text-lg max-w-2xl mx-auto"
        >
          Pick a plan that suits your commitment. All plans include phone + email support — choose longer plans for more sessions, recipes, and priority attention.
        </motion.p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((p) => (
            <Card
              key={p.key}
              className={`relative border transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl ${p.popular ? 'ring-2 ring-emerald-200' : ''}`}
            >
              {p.popular && (
                <div className="absolute -top-3 right-3 bg-amber-400 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  Most popular
                </div>
              )}

              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{p.title}</h3>
                  {p.highlight && (
                    <p className="text-sm text-emerald-600 font-medium mb-2">{p.highlight}</p>
                  )}
                  <p className="text-2xl font-bold text-green-700 mb-2">{p.priceLabel}</p>
                  <p className="text-sm text-gray-500 mb-4">Approx. <span className="font-medium text-gray-700">₹{p.monthlyEquivalent}/mo</span></p>

                  <ul className="text-gray-600 text-sm list-disc pl-5 space-y-2 mb-6 text-left">
                    {p.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-2">
                  <Button asChild size="sm" className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      Choose Plan
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>All prices include taxes. Sessions must be scheduled in advance. For corporate/group plans or custom bundles, contact <a href="mailto:support@nutridietbyruby.com" className="underline text-green-600">support@nutridietbyruby.com</a>.</p>
        </div>

      </div>
    </section>
  );
}
