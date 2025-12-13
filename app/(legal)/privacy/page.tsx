// app/(legal)/privacy/page.tsx
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyFooterCTA from "@/components/StickyFooterCTA";

export const dynamic = 'force-static'

export const metadata = {
  title: 'Privacy Policy - NutriDiet by Ruby',
  description: 'Read our privacy policy for NutriDiet by Ruby — how we handle personal data related to nutrition and diet services.',
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <section className="bg-white pb-[70px]">
        <main className="max-w-3xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

          <p className="mb-4">
            At NutriDiet by Ruby, we respect your privacy and are committed to protecting the personal information you share with us. This policy explains what information we collect, how we use it, and your choices regarding our nutrition and diet services.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
          <p className="mb-4">
            We collect information you provide directly when you use our site or services, including:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Contact details (name, email, phone) to send newsletters, bookings, or replies.</li>
            <li>Profile & health info you voluntarily share (age, gender, weight, dietary preferences, allergies, activity level) to personalise nutrition guidance.</li>
            <li>Content you submit (comments, messages, photos) when interacting with our community or coaches.</li>
          </ul>
          <p className="mb-4">
            We do <strong>not</strong> collect or store sensitive medical records, financial data, or any information you haven't explicitly provided. If you choose to share more detailed medical information with a coach, we will inform you how that data is handled before collection.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
          <p className="mb-4">
            We use collected data to:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Provide, personalise, and improve nutrition articles, meal plans, and coaching services.</li>
            <li>Respond to your inquiries and send service-related communications (updates, confirmations).</li>
            <li>Deliver tailored recommendations and content based on preferences and profile data.</li>
            <li>Protect the site, prevent abuse, and comply with legal obligations.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2">3. Analytics & Third-Party Services</h2>
          <p className="mb-4">
            We may use analytics tools and third-party services (e.g., Google Analytics, email providers) to understand site usage, improve content, and manage email delivery. These services may collect non-identifying technical data (IP address, device type, pages visited). Third parties follow their own privacy policies — please review them for details.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">4. Cookies</h2>
          <p className="mb-4">
            We use cookies and similar technologies to remember preferences, enable functionality, and measure site performance. You can manage or disable cookies through your browser settings, but some features may not work properly if cookies are blocked.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">5. Sharing & Disclosure</h2>
          <p className="mb-4">
            We will never sell your personal information. We may share data with:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Service providers and partners who support our platform (hosting, analytics, email delivery) — they process data on our behalf.</li>
            <li>Legal authorities when required by law or to protect rights and safety.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2">6. Security</h2>
          <p className="mb-4">
            We implement industry-standard security practices (encryption, access controls) to protect your data. While we strive to safeguard information, no online system is completely secure — please avoid sharing extremely sensitive personal information on the platform.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">7. Medical & Nutritional Disclaimer</h2>
          <p className="mb-4">
            Content on NutriDiet by Ruby is for informational and educational purposes only. It does not replace professional medical advice. Nutrition tips, meal plans, or coaching suggestions are general in nature — if you have specific medical conditions, allergies, or complex dietary needs, consult a qualified healthcare professional before making changes.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">8. Your Choices</h2>
          <p className="mb-4">
            You can:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Unsubscribe from marketing emails via the link in any email.</li>
            <li>Request access to, correction of, or deletion of your personal data — contact us using the details below.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2">9. Children</h2>
          <p className="mb-4">
            Our services are not intended for children under 16. We do not knowingly collect personal information from minors. If you believe a child’s data was collected, contact us to request removal.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">10. Changes to This Policy</h2>
          <p className="mb-4">
            We may update this privacy policy occasionally. When we make material changes, we will post the updated policy with a revised effective date on this page.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">11. Contact</h2>
          <p>
            For questions, data requests, or privacy concerns, email us at{" "}
            <a href="mailto:privacy@nutridietbyruby.com" className="underline text-blue-600">
              privacy@nutridietbyruby.com
            </a>
            .
          </p>

        </main>
        <Footer />
        <StickyFooterCTA />
      </section>
    </>
  );
}
