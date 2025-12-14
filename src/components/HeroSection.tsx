"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="bg-white dark:bg-[#0f1115] py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
          Your Personal{" "}
          <span className="bg-gradient-to-r from-green-600 via-green-500 to-cyan-500 bg-clip-text text-transparent">
            Nutrition Expert
          </span>{" "}
          Awaits
        </h1>

        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
          Struggling with weight, energy issues, or lifestyle diseases? Don't
          panic — get expert-backed nutrition guidance tailored for your body.
          <br className="hidden md:inline" />
          100% science-based knowledge. 0% confusion.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://forms.gle/RxX91vQedEikqXNy7"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition"
          >
            Start Your Nutrition Journey
          </a>

          <a
            href="https://wa.me/918010766712?text=Hi%20Team%2C%20I%20need%20help%20regarding%20my%20diet%20and%20nutrition"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition"
          >
            Talk to Us on WhatsApp
          </a>
        </div>

        <div className="mt-10 text-sm text-gray-500 dark:text-gray-400">
          Trusted by 800+ people across India • Empowering healthier lives with
          NutriDietByRuby
        </div>
      </div>
    </section>
  );
}
