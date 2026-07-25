"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

interface NavItem {
  label: string;
  href?: string;
  submenu?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Buy a Home",
    href: "/buy-a-home",
  },
  { label: "Refinance", href: "/buy-a-home" },
  { label: "Mortgage Calculators", href: "/mortgage-Calculators" },
  {
    label: "Learning Center",
    submenu: [
      { label: "Loan Programs", href: "/learning-center/loan-programs" },
      { label: "Loan Process", href: "/learning-center/loan-process" },
      { label: "Mortgage Basics", href: "/learning-center/mortgage-basics" },
      { label: "Online", href: "/learning-center/online" },
      { label: "FAQ", href: "/learning-center/faq" },
      { label: "Blog", href: "/learning-center/blog" },
    ],
  },

  {
    label: "About Us",
    submenu: [
      { label: "Contact", href: "/about/contact" },
      { label: "Testimonials", href: "/about/testimonials" },
      { label: "Review Us", href: "/about/review-us" },
    ],
  },
];

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:block bg-white border-b border-neutral-200 p-3">
        <div className="container-custom py-0">
          <div className="flex items-center  justify-center gap-20 h-16 ">
            <Link href="/" className="flex items-center gap-2 flex-shrink-0 ">
              <Image
                width={100}
                height={100}
                src="/img/logo.png"
                alt="logo"
                className="md:w-40 md:h-40 w-full"
              />
            </Link>

            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-neutral-700 font-medium hover:text-primary transition-colors flex items-center gap-1 py-4"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button className="text-neutral-700 font-medium hover:text-primary transition-colors flex items-center gap-1 py-4">
                      {item.label}
                      {item.submenu && <ChevronDown size={16} />}
                    </button>
                  )}

                  {item.submenu && (
                    <div className="absolute left-0 mt-0 w-48 bg-white border border-neutral-200 rounded-lg shadow-lg bg-white  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.label}
                          href={subitem.href}
                          className="block px-4 py-3 text-neutral-700 hover:bg-[#1D87A1] hover:text-primary transition-colors first:rounded-t-lg last:rounded-b-lg"
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <Link
              href="/about/contact"
              className="inline-flex items-center gap-3 px-8 py-3 text-lg font-semibold bg-gradient-to-r from-[#1D87A1]  via-[#30ACBF] to-[#2D89A1] text-white bg-pramery  rounded-full shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateZ(10px)`,
                boxShadow: "0 20px 40px -10px rgba(0,0,0,0.4)",
              }}
            >
              Get Started
              <ArrowRight
                size={24}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden bg-white border-b border-neutral-200 h-20 sticky top-0 z-40">
        <div className="container-custom ">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <Image
                width={100}
                height={100}
                src="/img/logo.png"
                alt="logo"
                className="w-20 h-20"
              />
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-primary bg-gradient-to-r from-[#1D87A1]  via-[#30ACBF] to-[#2D89A1] p-2 m-2 rounded-md"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileOpen && (
            <div className=" space-y-2  bg-white  ">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-neutral-700 hover:text-white hover:bg-[#1D87A1] rounded-lg transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() =>
                          setOpenMenu(
                            openMenu === item.label ? null : item.label,
                          )
                        }
                        className="w-full text-left  px-4 py-2 text-neutral-700 hover:text-white hover:bg-[#1D87A1] rounded-lg transition-colors flex items-center justify-between"
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transform transition-transform ${
                            openMenu === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openMenu === item.label && item.submenu && (
                        <div className="pl-4 space-y-1 mt-1">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.label}
                              href={subitem.href}
                              className="block px-4 py-2 text-neutral-700 hover:text-white hover:bg-[#1D87A1] transition-colors text-sm"
                              onClick={() => setMobileOpen(false)}
                            >
                              {subitem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
              <Link
                href="/about/contact"
                className="btn-primary block text-center"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
