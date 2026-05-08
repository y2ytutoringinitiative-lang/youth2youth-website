/*
 * Youth2Youth — Stats Section
 * Design: Forest green background, golden yellow numbers, cream text
 * Animated count-up on scroll entry
 */
import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  { value: 100, suffix: "%", label: "Free Tutoring", description: "No cost for qualifying low-income students" },
  { value: 5, suffix: "+", label: "Subject Areas", description: "Math, Science, English, History & more" },
  { value: 12, suffix: "+", label: "Youth Tutors", description: "Trained peer mentors from the community" },
  { value: 501, suffix: "(c)(3)", label: "Nonprofit Status", description: "Organized for educational & charitable purposes" },
];

function AnimatedNumber({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1400;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, value]);

  return (
    <span className="font-display font-800 text-[#f5c842]" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}>
      {active ? display : 0}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const { ref, inView } = useInView(0.2);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#1a3a2a] py-20 md:py-28 relative overflow-hidden"
    >
      {/* Decorative diagonal stripe */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #f5c842 0px, #f5c842 2px, transparent 2px, transparent 40px)",
        }}
      />

      <div className="container relative z-10">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#f5c842]" />
            <span className="font-display text-[#f5c842] text-sm font-600 uppercase tracking-widest">
              By the Numbers
            </span>
            <div className="h-px w-10 bg-[#f5c842]" />
          </div>
          <h2 className="font-display font-800 text-white text-3xl md:text-4xl">
            Making a Real Difference
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} active={inView} />
              </div>
              <div className="font-display font-700 text-white text-base md:text-lg mb-1">
                {stat.label}
              </div>
              <div className="font-body text-white/60 text-sm leading-snug">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
