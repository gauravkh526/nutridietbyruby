'use client'

import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from 'next/image';

const Footer = () => {
  const router = useRouter();

  const handleScroll = (id: string) => {
    router.push(`/?scrollTo=${id}`);
  };

  return (
    <footer className="bg-gray-100 text-gray-700 border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Section: Branding & Navigation */}
        <div>
          <Image 
   src="/logo/nutridietbyruby_logo.png"
    alt="Nutridietbyruby Logo" 
    width={100} 
    height={100}
    priority
  />
          <p className="mt-2 text-sm text-gray-600">
            Helping people across India achieve better health with science-backed nutrition and personalized diet plans.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <button onClick={() => router.push('/')} className="hover:text-green-600 transition">Home</button>
            <button onClick={() => handleScroll('about')} className="hover:text-green-600 transition">Features</button>
            <button onClick={() => handleScroll('faq')} className="hover:text-green-600 transition">FAQs</button>
            <button onClick={() => handleScroll('contact')} className="hover:text-green-600 transition">Contact</button>
          </div>
        </div>

        {/* Right Section: Legal Links & Social Icons */}
        <div className="md:text-right">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Important Links</h4>
          <div className="flex md:justify-end flex-wrap gap-4 text-sm mb-4">
            <a href="/terms" className="hover:text-green-600 transition">Terms of Use</a>
            <a href="/privacy" className="hover:text-green-600 transition">Privacy Policy</a>
            <a href="/refund" className="hover:text-green-600 transition">Refund Policy</a>
          </div>

          <div className="flex justify-start md:justify-end space-x-4 mt-4">
            <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-green-700 transition">
              <Linkedin size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-green-700 transition">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-pink-600 transition">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="YouTube" className="text-gray-600 hover:text-red-600 transition">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider + Bottom line */}
      <div className="border-t border-gray-300 mt-4">
        <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-gray-500 flex justify-between flex-col md:flex-row items-center">
          <p>© {new Date().getFullYear()} Nutridietbyruby.com — All rights reserved.</p>
          <p>Made with ❤️ in India by the Nutridietbyruby Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
