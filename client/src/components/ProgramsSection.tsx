/*
 * Youth2Youth — Programs Section
 * Design: White background, offset numbered cards, diagonal accent strip
 */
import { useInView } from "@/hooks/useInView";
import { Calculator, FlaskConical, BookMarked, Globe, Lightbulb, GraduationCap } from "lucide-react";

const programs = [
  {
    icon: Calculator,
    title: "Mathematics",
    grades: "Ages 7-26",
    description:
      "From foundational arithmetic to AP Calculus. Our tutors meet students exactly where they are and build confidence step by step.",
    color: "#f5c842",
  },
  {
    icon: FlaskConical,
    title: "Science",
    grades: "Ages 7-26",
    description:
      "Biology, Chemistry, Physics, and Earth Science. Hands-on conceptual support to help students understand and love the sciences.",
    color: "#2d5c42",
  },
  {
    icon: BookMarked,
    title: "English & Writing",
    grades: "Ages 7-26",
    description:
      "Reading comprehension, essay writing, grammar, and literary analysis. Building strong communicators and critical thinkers.",
    color: "#f5c842",
  },
  {
    icon: Globe,
    title: "History & Social Studies",
    grades: "Ages 7-26",
    description:
      "U.S. History, World History, Government, and Economics. Helping students connect the past to the present.",
    color: "#2d5c42",
  },
  {
    icon: Lightbulb,
    title: "Study Skills & Mentorship",
    grades: "All Ages",
    description:
      "Time management, note-taking strategies, test preparation, and goal-setting. Skills that last a lifetime.",
    color: "#f5c842",
  },
  {
    icon: GraduationCap,
    title: "College Prep",
    grades: "Ages 16-26",
    description:
      "SAT/ACT prep, college essay guidance, application support, and scholarship research for first-generation college students.",
    color: "#2d5c42",
  },
];

export default function ProgramsSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="programs"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      <div className="container relative z-10">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#f5c842] flex items-center justify-center font-display font-700 text-[#1a3a2a] text-xs">
              02
            </div>
            <div className="h-px w-12 bg-[#1a3a2a]" />
            <span className="font-display text-[#1a3a2a] text-sm font-600 uppercase tracking-widest">
              Our Programs
            </span>
          </div>
          <div className="md:flex md:items-end md:justify-between gap-8">
            <h2
              className="font-display font-800 text-[#1a3a2a] leading-tight mb-4 md:mb-0"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Tutoring Across
              <br />
              Every Subject
            </h2>
            <p className="font-body text-[#1a3a2a]/65 text-base leading-relaxed max-w-sm">
              All programs are free or low-cost for qualifying students. Online and in-person sessions available.
            </p>
          </div>
        </div>

        {/* Program cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {programs.map((prog, i) => (
            <div
              key={prog.title}
              className={`group border border-[#1a3a2a]/10 p-7 hover:bg-[#1a3a2a] hover:border-[#1a3a2a] transition-all duration-300 cursor-default ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80}ms`, borderRadius: "0" }}
            >
              <div
                className="w-11 h-11 flex items-center justify-center mb-5 transition-colors duration-300"
                style={{ backgroundColor: prog.color, borderRadius: "0" }}
              >
                <prog.icon
                  size={20}
                  className={prog.color === "#f5c842" ? "text-[#1a3a2a]" : "text-white"}
                />
              </div>
              <div className="font-body text-[#1a3a2a]/50 group-hover:text-[#f5c842]/70 text-xs font-500 uppercase tracking-widest mb-2 transition-colors duration-300">
                {prog.grades}
              </div>
              <h3 className="font-display font-700 text-[#1a3a2a] group-hover:text-white text-xl mb-3 transition-colors duration-300">
                {prog.title}
              </h3>
              <p className="font-body text-[#1a3a2a]/65 group-hover:text-white/75 text-sm leading-relaxed transition-colors duration-300">
                {prog.description}
              </p>
            </div>
          ))}
        </div>

        {/* Info banner */}
        <div
          className={`relative overflow-hidden bg-gradient-to-r from-[#1a3a2a] to-[#2d5c42] p-8 md:p-12 transition-all duration-800 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="max-w-2xl">
            <p className="font-display font-700 text-white text-xl md:text-2xl leading-snug mb-4">
              "Every student deserves a chance to thrive. We serve ages 7 to 26, including college students, with online and in-person tutoring."
            </p>
            <div className="h-0.5 w-12 bg-[#f5c842]" />
          </div>
        </div>
      </div>
    </section>
  );
}
