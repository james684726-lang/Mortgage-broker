import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Social from "./social";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-[#1D87A1]  via-[#30ACBF] to-[#2D89A1] text-white px-4 md:px-10">
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 w-fit">
              <Link href="/" className="flex items-center gap-2 flex-shrink-0 ">
                <Image
                  width={100}
                  height={100}
                  src="/img/logoW.png"
                  alt="logo"
                  className="w-24 md:w-40 h-auto object-contain"
                />
              </Link>
            </div>
            <p className="text-white text-sm">
              Your trusted partner in mortgage and home loan solutions.
            </p>
            <div className="flex gap-4">
              <Social />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/buy-home/loan-programs"
                  className="text-white hover:text-primary transition-colors text-sm"
                >
                  Loan Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/refinance"
                  className="text-white  hover:text-primary transition-colors text-sm"
                >
                  Refinance
                </Link>
              </li>
              <li>
                <Link
                  href="/mortgage"
                  className="text-white hover:text-primary transition-colors text-sm"
                >
                  Mortgages
                </Link>
              </li>
              <li>
                <Link
                  href="/calculators"
                  className="text-white hover:text-primary transition-colors text-sm"
                >
                  Calculators
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/buy-home/mortgage-basics"
                  className="text-white hover:text-primary transition-colors text-sm"
                >
                  Mortgage Basics
                </Link>
              </li>
              <li>
                <Link
                  href="/learning-center"
                  className="text-white hover:text-primary transition-colors text-sm"
                >
                  Learning Center
                </Link>
              </li>
              <li>
                <Link
                  href="/buy-home/faq"
                  className="text-white hover:text-primary transition-colors text-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/buy-home/blog"
                  className="text-white hover:text-primary transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-primary flex-shrink-0 mt-1" />
                <a
                  href="tel:+18005551234"
                  className="text-white hover:text-primary transition-colors text-sm"
                >
                  +1 (800) 555-1234
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-primary flex-shrink-0 mt-1" />
                <a
                  href="mailto:support@lendpro.com"
                  className="text-white hover:text-primary transition-colors text-sm"
                >
                  support@lendpro.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-1" />
                <span className="text-white text-sm">
                  123 Main Street, City, State 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white">
            <p>&copy; {currentYear} LendPro. All rights reserved.</p>
            <div className="flex gap-6 md:justify-end">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
