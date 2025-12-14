// app/(legal)/refund/page.tsx
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyFooterCTA from "@/components/StickyFooterCTA";

export const dynamic = "force-static";

export const metadata = {
  title: "Refund Policy - NutriDiet by Ruby",
  description:
    "Read our refund policy for NutriDiet by Ruby — our terms for refunds and cancellations related to nutrition coaching, meal plans, and paid programs.",
};

export default function RefundPage() {
  return (
    <>
      <Header />
      <section className="bg-white pb-[70px]">
        <main className="max-w-3xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-6">
            Refund & Cancellation Policy
          </h1>

          <p className="mb-4">
            At NutriDiet by Ruby, we aim for clarity and fairness for all paid
            nutrition services, including one-on-one coaching, meal plans,
            workshops, and premium content. This policy explains when refunds or
            cancellations are available.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            1. Free Resources and Trials
          </h2>
          <p className="mb-4">
            Free articles, newsletters, and introductory resources are
            complimentary and non-refundable. If you are enrolled in a free
            trial for a paid subscription, cancel before the trial ends to avoid
            being charged.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            2. One-on-One Coaching & Personalized Plans
          </h2>
          <p className="mb-4">
            For paid coaching sessions and personalised meal or nutrition plans:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              If you request a refund within 48 hours of purchase and have not
              yet received any coaching session or delivered personalized plan,
              we will provide a full refund.
            </li>
            <li>
              If any coaching session or plan has been delivered or used (e.g.,
              you attended a session, downloaded a plan, or received customised
              advice), refunds will be considered on a case-by-case basis and
              may be partial.
            </li>
            <li>
              To request a refund, contact us at refunds@nutridietbyruby.com
              with your order details and reason.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            3. Workshops, Courses & Group Programs
          </h2>
          <p className="mb-4">
            For scheduled workshops or multi-week group programs:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Full refunds are available if requested at least 7 days before the
              program start date (unless otherwise noted at registration).
            </li>
            <li>
              Requests made within 7 days of the start date may be eligible for
              a partial refund or credit toward a future program, depending on
              delivered materials and access.
            </li>
            <li>
              No refunds will be issued after the program has concluded, but we
              can discuss accommodations or credits in exceptional
              circumstances.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            4. Subscriptions & Recurring Payments
          </h2>
          <p className="mb-4">
            For subscription-based services (monthly or yearly):
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              You can cancel at any time. Cancellation prevents future billing
              but does not automatically refund past charges.
            </li>
            <li>
              If you believe you were charged in error, contact us within 30
              days of the charge for review and possible refund.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2">5. Refund Process</h2>
          <p className="mb-4">To request a refund:</p>
          <ol className="list-decimal ml-6 mb-4">
            <li>
              Email refunds@nutridietbyruby.com with your name, purchase date,
              order ID (if any), and reason for the refund.
            </li>
            <li>
              We will acknowledge receipt within 3 business days and investigate
              the request.
            </li>
            <li>
              If approved, refunds will be processed to the original payment
              method within 7–14 business days, depending on your bank or
              payment provider.
            </li>
          </ol>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            6. Exceptions & Special Cases
          </h2>
          <p className="mb-4">
            We reserve the right to decline refunds in cases of clear misuse,
            fraudulent activity, or if the service has been substantially used.
            For medical or emergency situations, contact us with documentation —
            we will review such cases compassionately.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            7. Changes to This Policy
          </h2>
          <p className="mb-4">
            We may update this refund policy from time to time. Material changes
            will be posted on this page with an updated effective date.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">8. Contact</h2>
          <p>
            For refund requests or questions about this policy, email us at{" "}
            <a
              href="mailto:refunds@nutridietbyruby.com"
              className="underline text-blue-600"
            >
              refunds@nutridietbyruby.com
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
