import HomePage from '@/components/HomePage'

export const dynamic = 'force-static'

export const metadata = {
  title: "NutriDietByRuby - Personalized Nutrition & Dietitian Guidance",
  description:
    "Get expert nutrition coaching and personalized diet plans from certified dietitians. Solve weight issues, energy problems, and lifestyle diseases with science-backed guidance. India's #1 nutrition awareness platform.",
  keywords:
    "nutrition coaching, dietitian consultation, diet plans, weight management, personalized nutrition, meal planning, lifestyle diseases, nutrition expert, healthy eating, fitness diet, PCOS diet, diabetes nutrition, weight loss diet, nutrition guidance",
  metadataBase: new URL("https://www.nutridietbyruby.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NutriDietByRuby - Your Personal Nutrition Expert Awaits",
    description:
      "Expert-backed nutrition guidance tailored for your body. Get personalized diet plans from certified dietitians. 100% science-based. 0% confusion.",
    url: "https://www.nutridietbyruby.com",
    siteName: "NutriDietByRuby",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.nutridietbyruby.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "NutriDietByRuby - Nutrition & Dietitian Guidance Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NutriDietByRuby - India's #1 Nutrition Coaching Platform",
    description:
      "Struggling with weight, energy, or lifestyle diseases? Get expert nutrition guidance from certified dietitians. Trusted by 800+ people across India.",
    images: ["https://www.nutridietbyruby.com/og-image.png"],
    creator: "@NutriDietByRuby",
  },
}

export default function Page() {
  return <HomePage />
}
