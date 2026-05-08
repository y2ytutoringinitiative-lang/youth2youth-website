/*
 * Youth2Youth — Footer
 * Design: Forest green background, golden accents, clean columns
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0d1f16] text-white pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#f5c842] flex items-center justify-center font-display font-800 text-[#1a3a2a] text-sm">
                Y2Y
              </div>
              <span className="font-display font-700 text-white text-xl tracking-tight">
                Youth<span className="text-[#f5c842]">2</span>Youth
              </span>
            </div>
            <p className="font-body text-white/55 text-sm leading-relaxed max-w-xs mb-6">
              A youth-founded nonprofit empowering students through peer tutoring,
              mentorship, and community connection. Organized exclusively for
              educational and charitable purposes.
            </p>
            <div className="font-body text-white/40 text-xs">
              501(c)(3) Nonprofit Organization · San Diego, California
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-display font-700 text-[#f5c842] text-xs uppercase tracking-widest mb-5">
              Navigate
            </div>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Programs", href: "#programs" },
                { label: "Leadership", href: "#team" },
                { label: "Get Involved", href: "#get-involved" },
                { label: "Schedule a Session", href: "#schedule" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-body text-white/60 hover:text-[#f5c842] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="mailto:info@youth2youthsd.org"
                  className="font-body text-white/60 hover:text-[#f5c842] text-sm transition-colors duration-200"
                >
                  info@youth2youthsd.org
                </a>
              </li>
            </ul>
          </div>

          {/* Get involved */}
          <div>
            <div className="font-display font-700 text-[#f5c842] text-xs uppercase tracking-widest mb-5">
              Get Involved
            </div>
            <ul className="space-y-3">
              {[
                "Become a Tutor",
                "Request Tutoring",
                "Partner With Us",
                "Volunteer",
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo("#get-involved")}
                    className="font-body text-white/60 hover:text-[#f5c842] text-sm transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="https://www.zeffy.com/en-US/donation-form/help-us-keep-tutoring-free"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[#f5c842] hover:text-white text-sm transition-colors duration-200 font-600"
                >
                  Donate ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-body text-white/40 text-xs">
            © {currentYear} Youth2Youth Tutoring Initiative. All rights reserved.
          </div>
          <div className="font-body text-white/40 text-xs text-center sm:text-right">
            Founded by Gage Mundy. Empowering Youth Through Education
          </div>
        </div>
      </div>
    </footer>
  );
}
