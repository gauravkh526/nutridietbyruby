// app/(legal)/terms/page.tsx
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyFooterCTA from "@/components/StickyFooterCTA";

export const dynamic = 'force-static'

export const metadata = {
  title: 'Terms of Use - NutriDiet by Ruby',
  description: 'Terms of Use for NutriDiet by Ruby — please read before using our nutrition and diet services.',
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <section className="bg-white pb-[70px]">
        <main className="max-w-3xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>

          <p className="mb-4">
            Welcome to NutriDiet by Ruby. By accessing or using our website, apps, or services (collectively "Services"), you agree to these Terms of Use. Please read them carefully. If you do not agree, do not use the Services.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">1. Eligibility</h2>
          <p className="mb-4">
            You must be at least 16 years old to use our Services. If you are under 18, you may use the Services only with the involvement of a parent or legal guardian. By using the Services you represent that you meet the eligibility requirements.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">2. Health & Medical Disclaimer</h2>
          <p className="mb-4">
            The content, recommendations, meal plans, and coaching provided through NutriDiet by Ruby are for informational and educational purposes only. They do not constitute medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional before starting any new diet, exercise program, or if you have medical conditions, allergies, or take medication.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">3. User Data & Personalisation</h2>
          <p className="mb-4">
            To personalise nutrition guidance, you may choose to provide profile information (age, weight, dietary preferences, allergies, activity level). You are responsible for supplying accurate information. We will use this data in accordance with our Privacy Policy.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">4. Acceptable Use</h2>
          <p className="mb-4">
            You agree not to misuse the Services. Prohibited conduct includes:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Submitting false, fraudulent, or harmful information;</li>
            <li>Using the Services to harass, abuse, or infringe on others;</li>
            <li>Attempting to reverse-engineer, copy, or extract data from the Services;</li>
            <li>Interfering with the operation, security, or integrity of the Services.</li>
          </ul>
          <p className="mb-4">
            We reserve the right to suspend or terminate accounts that violate these rules.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">5. Intellectual Property</h2>
          <p className="mb-4">
            All content on the Services (text, images, meal plans, graphics, logos) is owned or licensed by NutriDiet by Ruby. You may use content for personal, non-commercial purposes only. You must not reproduce, distribute, or create derivative works without prior written permission.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">6. Paid Services, Subscriptions & Refunds</h2>
          <p className="mb-4">
            Certain features (personal coaching, premium meal plans, workshops) may be paid. Terms for payments, cancellations, and refunds are described in our Refund Policy. By purchasing paid services, you agree to those terms.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">7. Third-Party Links & Tools</h2>
          <p className="mb-4">
            The Services may include links or integrations with third-party websites or tools. We are not responsible for third-party content or practices. Use third-party services at your own risk and review their terms and privacy policies.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">8. Limitation of Liability</h2>
          <p className="mb-4">
            To the maximum extent permitted by law, NutriDiet by Ruby and its affiliates will not be liable for indirect, incidental, special, or consequential damages arising from your use of the Services. Our total liability for direct damages is limited to the amount you paid for the applicable service in the 6 months prior to the claim (or a nominal amount if you have not paid).
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">9. Indemnification</h2>
          <p className="mb-4">
            You agree to indemnify and hold NutriDiet by Ruby harmless from any claims, losses, or damages arising from your violation of these Terms or your use of the Services.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">10. Modifications to the Services and Terms</h2>
          <p className="mb-4">
            We may update or change the Services and these Terms at any time. Material changes to the Terms will be posted on this page with a revised effective date. Continued use after changes constitutes acceptance of the updated Terms.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">11. Governing Law</h2>
          <p className="mb-4">
            These Terms are governed by the laws of the jurisdiction where NutriDiet by Ruby is operated. Any disputes will be subject to the exclusive jurisdiction of the competent courts in that jurisdiction.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">12. Privacy</h2>
          <p className="mb-4">
            Our Privacy Policy explains how we collect, use, and share personal information. By using the Services you agree to the collection and use described in the Privacy Policy.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">13. Contact</h2>
          <p>
            For questions about these Terms, contact us at{" "}
            <a href="mailto:support@nutridietbyruby.com" className="underline text-blue-600">
              support@nutridietbyruby.com
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
