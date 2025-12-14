"use client";

import Image from 'next/image';
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      router.push(`/?scrollTo=${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full sticky top-[37px] z-50 transition-colors duration-300 ${
          isScrolled ? "bg-white/90 shadow-md backdrop-blur" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
  <Image 
  src="/logo/nutridietbyruby_logo.png"
  alt="Nutridietbyruby" 
  width={100} 
  height={100}
  unoptimized={true}
  priority
/>
  </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 items-center text-gray-700 font-medium">
            <button onClick={() => scrollToSection("about")} className="hover:text-green-600">
              Why Us
            </button>
            <button onClick={() => scrollToSection("plans")} className="hover:text-green-600">
              Diet Plans
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="hover:text-green-600">
              Transformations
            </button>
            <button onClick={() => scrollToSection("faq")} className="hover:text-green-600">
              FAQ
            </button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-green-600">
              Contact
            </button>

            <a
              href="https://forms.gle/RxX91vQedEikqXNy7"
              target="_blank"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Join Nutrition Awareness
            </a>
          </nav>

          {/* Mobile Nav Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Panel */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-4 pb-4 space-y-4">
            <button onClick={() => scrollToSection("about")} className="block text-gray-700 hover:text-green-600">
              Why Us
            </button>
            <button onClick={() => scrollToSection("plans")} className="block text-gray-700 hover:text-green-600">
              Diet Plans
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="block text-gray-700 hover:text-green-600">
              Transformations
            </button>
            <button onClick={() => scrollToSection("faq")} className="block text-gray-700 hover:text-green-600">
              FAQ
            </button>
            <button onClick={() => scrollToSection("contact")} className="block text-gray-700 hover:text-green-600">
              Contact
            </button>

            <a
              href="https://forms.gle/RxX91vQedEikqXNy7"
              target="_blank"
              className="block bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700"
            >
              Join Nutrition Awareness
            </a>
          </div>
        )}
      </header>
    </>
  );
}
