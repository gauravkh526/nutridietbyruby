// components/ContactSection.tsx
'use client';

import { Mail, Phone, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gradient-to-br from-gray-50 to-white py-20 border-t scroll-mt-40">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-xl text-gray-600 mb-10"
        >
          We're here to help with any queries, support, or partnership discussions.
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 items-center">
          <a
            href="https://forms.gle/RxX91vQedEikqXNy7"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-lg font-semibold shadow-md transition"
          >
            <Mail className="inline-block mr-2 -mt-1" size={20} />
            Fill Contact Form
          </a>

          <div className="text-gray-700 text-md">
            <p className="mb-2">
              <MessageSquare className="inline-block mr-2 -mt-1 text-green-600" size={20} />
              WhatsApp us:{" "}
              <a
                href="https://wa.me/918010766712"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                +91 8010766712
              </a>
            </p>
            <p className="text-sm text-gray-500">We usually respond within a few minutes!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
