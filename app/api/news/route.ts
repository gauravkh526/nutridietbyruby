// app/api/news/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

export const dynamic = "force-dynamic";

export async function GET() {
  const keywords = [
    "nutrition",
    "dietitian",
    "diet plans",
    "weight management",
    "healthy eating",
    "fitness nutrition",
    "lifestyle diseases",
    "meal planning",
    "wellness",
    "health tips",
  ];

  const apiKey = process.env.NEWS_API_KEY;

  try {
    const responses = await Promise.all(
      keywords.map((keyword) =>
        axios.get(
          `https://newsapi.org/v2/everything?q=${encodeURIComponent(
            keyword
          )}&apiKey=${apiKey}&pageSize=10&language=en&sortBy=publishedAt`
        )
      )
    );

    const allArticles = responses.flatMap((res) => res.data.articles || []);
    return NextResponse.json({ articles: allArticles });
  } catch (error: any) {
    console.error("🔴 News API failed:", error.message);
    return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 });
  }
}
