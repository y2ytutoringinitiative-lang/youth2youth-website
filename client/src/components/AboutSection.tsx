/*
 * Youth2Youth — About Section
 * Design: Cream background, asymmetric layout, constructivist accents
 */
import { useInView } from "@/hooks/useInView";
import { BookOpen, Heart, Users } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Peer-Led Learning",
    body: "Young tutors who understand the challenges students face, creating authentic connections that drive academic growth.",
  },
  {
    icon: Heart,
    title: "Community First",
    body: "Rooted in the belief that communities grow stronger when youth support one another through education.",
  },
  {
    icon: BookOpen,
    title: "Accessible Education",
    body: "Free and low-cost services ensure no student is left behind due to financial barriers.",
  },
];

export default function AboutSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="about" ref={ref as React.RefObject<HTMLElement>} className="py-24 md:py-32 bg-[#faf6ee]">
      <div className="container">
        {/* Section label */}
        <div
          className={`flex items-center gap-3 mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="w-10 h-10 bg-[#1a3a2a] flex items-center justify-center font-display font-700 text-[#f5c842] text-xs">
            01
          </div>
          <div className="h-px flex-1 max-w-12 bg-[#1a3a2a]" />
          <span className="font-display text-[#1a3a2a] text-sm font-600 uppercase tracking-widest">
            About Us
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Color block column */}
          <div
            className={`relative transition-all duration-800 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            {/* Offset border ring */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#f5c842]" style={{ borderRadius: "0" }} />
            {/* Color block */}
            <div
              className="relative z-10 w-full bg-gradient-to-br from-[#2d5c42] to-[#1a3a2a] flex items-center justify-center"
              style={{ aspectRatio: "4/3", borderRadius: "0" }}
            >
              <div className="text-center">
                <div className="font-display font-800 text-[#f5c842] text-5xl mb-2">
                  7-26
                </div>
                <div className="font-body text-white/80 text-sm">
                  Student Age Range
                </div>
              </div>
            </div>
            {/* Founder badge */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-[#1a3a2a] text-white px-5 py-4 shadow-xl">
              <div className="font-display font-700 text-[#f5c842] text-sm uppercase tracking-wide">
                Founded by
              </div>
              <div className="font-display font-800 text-white text-lg">
                Gage Mundy
              </div>
              <div className="font-body text-white/70 text-xs mt-0.5">
                Youth Founder & President
              </div>
            </div>
          </div>

          {/* Text column */}
          <div
            className={`transition-all duration-800 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h2
              className="font-display font-800 text-[#1a3a2a] mb-6 leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Empowering Youth
              <br />
              Through Education
            </h2>
            <p className="font-body text-[#1a3a2a]/70 text-lg leading-relaxed mb-4">
              Youth2Youth Tutoring Initiative is a <strong className="text-[#1a3a2a] font-600">youth-founded nonprofit</strong> organized
              exclusively for educational and charitable purposes. We provide free and low-cost
              tutoring services to students from low-income families across California.
            </p>
            <p className="font-body text-[#1a3a2a]/70 text-base leading-relaxed mb-10">
              Our mission is to empower youth to support one another through education and
              mentorship. We foster academic success, leadership development, and lasting
              community connection. We serve students ages 7 to 26, including college students,
              with both online and in-person tutoring sessions.
            </p>

            {/* Values */}
            <div className="space-y-5">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className={`flex gap-4 transition-all duration-600 ${
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                >
                  <div className="w-10 h-10 bg-[#f5c842] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <v.icon size={18} className="text-[#1a3a2a]" />
                  </div>
                  <div>
                    <div className="font-display font-700 text-[#1a3a2a] text-base mb-1">
                      {v.title}
                    </div>
                    <div className="font-body text-[#1a3a2a]/65 text-sm leading-relaxed">
                      {v.body}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
