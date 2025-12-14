// components/Footer.tsx
'use client'

import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import { motion } from "framer-motion";

const Footer = () => {
  const router = useRouter();

  const handleScroll = (id: string) => {
    router.push(`/?scrollTo=${id}`);
  };

  return (
    <footer className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-emerald-900/20 dark:to-cyan-900/20 text-gray-700 dark:text-gray-300">
      
      {/* Curvy Border Top */}
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto -mt-1"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 Q360,0 720,40 T1440,40 L1440,120 L0,120 Z"
          fill="currentColor"
          className="text-emerald-50 dark:text-gray-900/50"
        />
        <path
          d="M0,50 Q360,20 720,50 T1440,50"
          stroke="currentColor"
          strokeWidth="2"
          className="text-emerald-200 dark:text-emerald-800/30"
          fill="none"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Section: Branding & Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <Image 
            src="/logo/nutridietbyruby_logo.png"
            alt="Nutridietbyruby Logo" 
            width={100} 
            height={100}
            priority
          />
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Helping people across India achieve better health with science-backed nutrition and personalized diet plans.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <button onClick={() => router.push('/')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Home</button>
            <button onClick={() => handleScroll('about')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Features</button>
            <button onClick={() => handleScroll('faq')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">FAQs</button>
            <button onClick={() => handleScroll('contact')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Contact</button>
          </div>
        </motion.div>

        {/* Right Section: Legal Links & Social Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:text-right"
        >
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Important Links</h4>
          <div className="flex md:justify-end flex-wrap gap-4 text-sm mb-4">
            <a href="/terms" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Terms of Use</a>
            <a href="/privacy" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Privacy Policy</a>
            <a href="/refund" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Refund Policy</a>
          </div>

          <div className="flex justify-start md:justify-end space-x-4 mt-4">
            <motion.a 
              href="#" 
              aria-label="LinkedIn" 
              whileHover={{ scale: 1.2 }}
              className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a 
              href="#" 
              aria-label="Facebook" 
              whileHover={{ scale: 1.2 }}
              className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
            >
              <Facebook size={20} />
            </motion.a>
            <motion.a 
              href="#" 
              aria-label="Instagram" 
              whileHover={{ scale: 1.2 }}
              className="text-gray-600 dark:text-gray-400 hover:text-pink-600 transition"
            >
              <Instagram size={20} />
            </motion.a>
            <motion.a 
              href="#" 
              aria-label="YouTube" 
              whileHover={{ scale: 1.2 }}
              className="text-gray-600 dark:text-gray-400 hover:text-red-600 transition"
            >
              <Youtube size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Divider + Bottom line */}
      <div className="border-t border-emerald-200 dark:border-emerald-800/30 mt-4">
        <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-gray-600 dark:text-gray-400 flex justify-between flex-col md:flex-row items-center">
          <p>© {new Date().getFullYear()} Nutridietbyruby.com — All rights reserved.</p>
          <p>Made with ❤️ in India by the Nutridietbyruby Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
