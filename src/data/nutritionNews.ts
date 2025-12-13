// src/data/nutritionNews.ts

export type NutritionNewsItem = {
  title: string;
  link: string;
  category: string;
};

export const nutritionNews: NutritionNewsItem[] = [
  {
    title: "Intermittent fasting shown to improve metabolic health in new study",
    link: "https://www.healthline.com/nutrition/intermittent-fasting-guide",
    category: "Weight Loss",
  },
  {
    title: "High-protein diet helps reduce belly fat faster, researchers find",
    link: "https://www.medicalnewstoday.com/articles/high-protein-diet",
    category: "Diet Tips",
  },
  {
    title: "Experts warn: Ultra-processed foods linked to obesity and mood swings",
    link: "https://www.bbc.com/news/health",
    category: "Health Warning",
  },
  {
    title: "Walking 10,000 steps daily reduces risk of lifestyle diseases",
    link: "https://www.nytimes.com/2024/01/02/well/move/walking-health-benefits.html",
    category: "Fitness",
  },
  {
    title: "New research shows gut health strongly influences weight gain",
    link: "https://www.nature.com/articles/gut-health-study",
    category: "Gut Health",
  },
  {
    title: "Women are more prone to iron deficiency — here’s how to fix it",
    link: "https://www.who.int/news-room/fact-sheets/detail/anaemia",
    category: "Women’s Health",
  },
  {
    title: "Morning sunlight exposure boosts metabolism and stabilizes hormones",
    link: "https://www.health.com/morning-sunlight-benefits",
    category: "Lifestyle",
  },
  {
    title: "Overconsumption of sugar directly linked to hormonal imbalance",
    link: "https://www.cdc.gov/nutrition/data-statistics/know-your-limit-for-added-sugars.html",
    category: "Diet Warning",
  },
  {
    title: "Experts highlight benefits of homemade meals over restaurant foods",
    link: "https://www.medicalnewstoday.com/articles/home-cooked-meal-benefits",
    category: "Healthy Habits",
  },
  {
    title: "Green tea proven to help weight loss and reduce inflammation",
    link: "https://www.healthline.com/nutrition/green-tea-and-weight-loss",
    category: "Natural Remedies",
  },
];
