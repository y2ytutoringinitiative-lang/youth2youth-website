/*
 * Youth2Youth — Navbar
 * Design: Sticky top nav, forest green bg, golden yellow accent on active/hover
 * Font: Syne for logo, DM Sans for links
 */
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Our Team", href: "#team" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "Schedule", href: "#schedule" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1a3a2a]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-[#1a3a2a]"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 bg-[#f5c842] rounded-sm flex items-center justify-center font-display font-800 text-[#1a3a2a] text-sm leading-none select-none">
              Y2Y
            </div>
            <span className="font-display font-700 text-white text-lg tracking-tight leading-tight hidden sm:block">
              Youth<span className="text-[#f5c842]">2</span>Youth
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-body text-sm font-500 text-white/80 hover:text-[#f5c842] px-4 py-2 rounded transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#f5c842] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </button>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.zeffy.com/en-US/donation-form/help-us-keep-tutoring-free"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center font-display font-700 text-sm px-5 py-2 border-2 border-[#f5c842] text-[#f5c842] hover:bg-[#f5c842] hover:text-[#1a3a2a] transition-all duration-200 hover:scale-105"
              style={{ borderRadius: "2px" }}
            >
              Donate
            </a>
            <Button
              onClick={() => handleNavClick("#get-involved")}
              className="hidden md:flex bg-[#f5c842] text-[#1a3a2a] hover:bg-[#fad96a] font-display font-700 text-sm px-5 py-2 rounded-sm transition-all duration-200 hover:scale-105"
            >
              Get Involved
            </Button>
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#1a3a2a] border-t border-white/10 px-4 pb-6 pt-2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left font-body text-base text-white/80 hover:text-[#f5c842] py-3 border-b border-white/10 last:border-0 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href="mailto:info@youth2youthsd.org"
            className="block w-full text-left font-body text-base text-white/80 hover:text-[#f5c842] py-3 border-b border-white/10 transition-colors"
          >
            info@youth2youthsd.org
          </a>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="https://www.zeffy.com/en-US/donation-form/help-us-keep-tutoring-free"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center font-display font-700 py-3 border-2 border-[#f5c842] text-[#f5c842] transition-colors"
              style={{ borderRadius: "2px" }}
            >
              Donate
            </a>
            <Button
              onClick={() => handleNavClick("#get-involved")}
              className="w-full bg-[#f5c842] text-[#1a3a2a] hover:bg-[#fad96a] font-display font-700"
            >
              Get Involved
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
