// src/components/TopNewsTicker.tsx
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import clsx from "clsx";
import { nutritionNews } from "@/data/nutritionNews";

type NewsItem = {
  title: string;
  link: string;
  category: string;
};

// 🧠 Smart keyword to category mapping (nutrition & diet)
const getCategory = (title: string): string => {
  const lower = title.toLowerCase();

  // Weight & metabolic
  if (lower.includes("intermittent fasting") || lower.includes("fasting") || lower.includes("weight loss") || lower.includes("belly fat") || lower.includes("obesity")) {
    return "Weight Loss";
  }

  // Diet & macronutrients
  if (lower.includes("high-protein") || lower.includes("high protein") || lower.includes("protein") || lower.includes("low-carb") || lower.includes("low carb") || lower.includes("keto") || lower.includes("plant-based") || lower.includes("plant based")) {
    return "Diet Tips";
  }

  // Warnings and risks
  if (lower.includes("ultra-processed") || lower.includes("ultra processed") || lower.includes("processed foods") || lower.includes("processed food") || lower.includes("addictive")) {
    return "Health Warning";
  }
  if (lower.includes("overconsumption") || lower.includes("over consumption") || lower.includes("sugar") || lower.includes("added sugar") || lower.includes("hormonal imbalance")) {
    return "Diet Warning";
  }

  // Fitness / activity
  if (lower.includes("walking") || lower.includes("steps") || lower.includes("exercise") || lower.includes("workout")) {
    return "Fitness";
  }

  // Gut & microbiome
  if (lower.includes("gut") || lower.includes("microbiome") || lower.includes("digestive")) {
    return "Gut Health";
  }

  // Gender / life-stage
  if (lower.includes("women") || lower.includes("iron deficiency") || lower.includes("anaemia") || lower.includes("anemia") || lower.includes("pregnancy")) {
    return "Women’s Health";
  }

  // Lifestyle & habits
  if (lower.includes("sunlight") || lower.includes("sleep") || lower.includes("stress") || lower.includes("lifestyle") || lower.includes("habit") || lower.includes("homemade") || lower.includes("home-cooked") || lower.includes("meal prep")) {
    // Distinguish homemade/meal-prep as Healthy Habits
    if (lower.includes("homemade") || lower.includes("home-cooked") || lower.includes("meal prep") || lower.includes("meal-prep")) return "Healthy Habits";
    return "Lifestyle";
  }

  // Natural remedies & anti-inflammatory
  if (lower.includes("green tea") || lower.includes("turmeric") || lower.includes("anti-inflammatory") || lower.includes("anti inflammatory")) {
    return "Natural Remedies";
  }

  // Food processing & scoring
  if (lower.includes("nova") || lower.includes("nutriscore") || lower.includes("nutri-score")) {
    return "Food Processing";
  }

  // Metabolic health (broad)
  if (lower.includes("metabolic") || lower.includes("insulin") || lower.includes("metabolism")) {
    return "Metabolic Health";
  }

  // Fallback heuristics
  if (/\b(diet|nutrition|calorie|eat|meal|snack)\b/.test(lower)) {
    return "Diet Tips";
  }
  if (/\b(study|research|finds|shows|linked|risk)\b/.test(lower)) {
    return "General Nutrition";
  }

  return "General Nutrition";
};

const TopNewsTicker = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  const fetchNews = async () => {
    try {
      const res = await axios.get("/api/news");
      const allArticles = res.data.articles || [];

      const seen = new Set();
      const dynamicNews: NewsItem[] = [];

      for (const item of allArticles) {
        if (!item?.title || seen.has(item.title)) continue;
        seen.add(item.title);
        dynamicNews.push({
          title: item.title,
          link: item.url || "#",
          category: getCategory(item.title),
        });
        if (dynamicNews.length >= 20) break;
      }

      const combined: NewsItem[] = [
        // Use dynamic categorization for the static nutritionNews as well
        ...nutritionNews.map((item) => ({
          ...item,
          category: getCategory(item.title),
        })),
        ...dynamicNews,
      ];

      setNews(combined);
    } catch (err) {
      console.error("🔴 Failed to fetch news:", err);
      setNews(
        nutritionNews.map((item) => ({
          ...item,
          category: getCategory(item.title),
        }))
      );
    }
  };

  useEffect(() => {
    fetchNews();
    const interval = setInterval(fetchNews, 5 * 60 * 1000); // 🔁 Every 5 mins
    return () => clearInterval(interval);
  }, []);

  if (news.length === 0) return null;

  return (
    <div className="relative w-full bg-gradient-to-r from-white via-red-50 to-white py-2 overflow-hidden sticky top-0 z-[60]">
      {/* Gradient edges */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />

      <motion.div
        className="flex gap-16 whitespace-nowrap text-red-800 font-medium text-sm px-8"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
      >
        {news.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              "flex items-center gap-2 hover:underline cursor-pointer min-w-fit",
              "max-w-[400px] truncate"
            )}
            title={item.title}
          >
            🔔
            <span
              className={clsx(
                "text-xs px-2 py-0.5 rounded-full font-semibold border",
                {
                  "bg-yellow-100 text-yellow-800 border-yellow-300": item.category === "Weight Loss",
                  "bg-blue-100 text-blue-800 border-blue-300": item.category === "Diet Tips",
                  "bg-red-100 text-red-800 border-red-300": item.category === "Health Warning",
                  "bg-orange-100 text-orange-800 border-orange-300": item.category === "Diet Warning",
                  "bg-green-100 text-green-800 border-green-300": item.category === "Fitness",
                  "bg-emerald-100 text-emerald-800 border-emerald-300": item.category === "Gut Health",
                  "bg-pink-100 text-pink-800 border-pink-300": item.category === "Women’s Health",
                  "bg-amber-100 text-amber-800 border-amber-300": item.category === "Lifestyle",
                  "bg-lime-100 text-lime-800 border-lime-300": item.category === "Healthy Habits",
                  "bg-teal-100 text-teal-800 border-teal-300": item.category === "Natural Remedies",
                  "bg-violet-100 text-violet-800 border-violet-300": item.category === "Food Processing",
                  "bg-cyan-100 text-cyan-800 border-cyan-300": item.category === "Metabolic Health",
                  "bg-gray-100 text-gray-800 border-gray-300": item.category === "General Nutrition",
                }
              )}
            >
              {item.category}
            </span>
            {item.title}
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default TopNewsTicker;