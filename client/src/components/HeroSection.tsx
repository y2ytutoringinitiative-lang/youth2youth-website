/*
 * Youth2Youth — Hero Section
 * Design: Solid color background, text anchored bottom-left, diagonal bottom cut
 */
import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-end overflow-hidden bg-[#1a3a2a]"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)",
        marginBottom: "-4rem",
      }}
    >
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a3a2a] via-[#2d5c42] to-[#0d1f16]" />

      {/* Decorative constructivist accent blocks */}
      <div
        className="absolute top-24 right-0 w-48 h-48 md:w-72 md:h-72 bg-[#f5c842]/10 -rotate-12 translate-x-16"
        style={{ borderRadius: "0" }}
      />
      <div
        className="absolute top-36 right-16 w-24 h-24 md:w-40 md:h-40 border-2 border-[#f5c842]/20 -rotate-12"
        style={{ borderRadius: "0" }}
      />

      {/* Content */}
      <div className="relative z-10 container pb-32 md:pb-40 pt-32">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="h-px w-12 bg-[#f5c842]" />
            <span className="font-display text-[#f5c842] text-sm font-600 uppercase tracking-widest">
              Youth-Founded Nonprofit
            </span>
            <span className="font-display text-white/40 text-sm font-600 uppercase tracking-widest">
              · San Diego, CA
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`font-display font-800 text-white leading-[1.05] mb-6 transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Youth Helping
            <br />
            <span className="text-[#f5c842]">Youth Succeed.</span>
          </h1>

          {/* Subheading */}
          <p
            className={`font-body text-white/80 text-lg md:text-xl leading-relaxed max-w-xl mb-10 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Free and low-cost tutoring for students ages 7 to 26, including college students. Led by young people who believe in the power of peer mentorship and community connection. Online and in-person sessions available.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <button
              onClick={() =>
                document
                  .querySelector("#programs")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="font-display font-700 bg-[#f5c842] text-[#1a3a2a] px-8 py-4 text-base hover:bg-[#fad96a] transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#f5c842]/30"
              style={{ borderRadius: "0" }}
            >
              Our Programs
            </button>
            <button
              onClick={() =>
                document
                  .querySelector("#get-involved")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="font-display font-700 border-2 border-white text-white px-8 py-4 text-base hover:border-[#f5c842] hover:text-[#f5c842] transition-all duration-200"
              style={{ borderRadius: "0" }}
            >
              Get Involved
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-12 right-8 md:right-16 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-[#f5c842] transition-colors duration-200 group"
      >
        <span className="font-body text-xs uppercase tracking-widest rotate-90 mb-2">
          Scroll
        </span>
        <ArrowDown
          size={18}
          className="animate-bounce group-hover:text-[#f5c842]"
        />
      </button>
    </section>
  );
}
