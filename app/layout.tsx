import './globals.css';
import { ReactNode } from 'react';
import TopNewsWrapper from "@/components/TopNewsWrapper";
export const dynamic = "force-dynamic";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-100 text-gray-900" suppressHydrationWarning>
        <TopNewsWrapper />
        {children}
      </body>
    </html>
  );
}
