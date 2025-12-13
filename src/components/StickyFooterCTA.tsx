"use client";

import React from "react";
import { MessageCircle, ClipboardCheck } from "lucide-react";

const StickyFooterCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50">
      <div className="backdrop-blur-md bg-white/90 border-t border-gray-200 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Message */}
          <div className="text-sm sm:text-base font-medium text-gray-800 flex items-center gap-2">
            <span className="text-indigo-600 text-lg">💡</span>
            Get expert-backed meal plans, diet tips, and wellness guidance — for a healthier you.
          </div>

          {/* CTAs */}
          <div className="flex gap-3 flex-wrap">
            <a
              href="https://forms.gle/RxX91vQedEikqXNy7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium transition"
            >
              <ClipboardCheck size={16} />
              Join Form
            </a>

            <a
              href="https://wa.me/918010766712?text=Hi%2C%20I%20want%20to%20start%20my%20legal%20awareness%20training."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium transition"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyFooterCTA;
