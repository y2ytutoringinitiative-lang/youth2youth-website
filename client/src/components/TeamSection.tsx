/*
 * Youth2Youth — Team / Leadership Section
 * Design: Forest green background, golden cards, constructivist layout
 * Real board members from bylaws
 */
import { useInView } from "@/hooks/useInView";
import { Star, Shield, FileText, DollarSign, BookOpen, Megaphone } from "lucide-react";

const officers = [
  {
    icon: Star,
    role: "Founder",
    name: "Gage Mundy",
    description:
      "The founding visionary of Youth2Youth, serving in a leadership and advisory capacity until the age of 18.",
    highlight: true,
  },
  {
    icon: Shield,
    role: "President",
    name: "Beatrice Morales",
    description:
      "Provides overall leadership, presides over meetings, oversees strategic direction, and represents the Organization publicly.",
    highlight: false,
  },
  {
    icon: Shield,
    role: "Vice President",
    name: "Henry Oliva",
    description:
      "Assists the President and assumes presidential duties in the President's absence.",
    highlight: false,
  },
  {
    icon: FileText,
    role: "Secretary",
    name: "Grace Arciaga",
    description:
      "Maintains official records, meeting minutes, bylaws, and all corporate documents of the Organization.",
    highlight: false,
  },
  {
    icon: DollarSign,
    role: "Treasurer",
    name: "Andrew Mundy",
    description:
      "Oversees financial management, budgeting, reporting, and compliance with financial regulations.",
    highlight: false,
  },
  {
    icon: BookOpen,
    role: "Program Oversight Lead",
    name: "Nicolle Haley",
    description:
      "Oversees tutoring programs, mentor coordination, curriculum support, and program quality assurance.",
    highlight: false,
  },
  {
    icon: Megaphone,
    role: "Outreach & Partnership Lead",
    name: "Rigoberto Anceda",
    description:
      "Develops community outreach initiatives, partnerships, fundraising relationships, and stakeholder engagement.",
    highlight: false,
  },
];

export default function TeamSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="team"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 md:py-32 bg-[#1a3a2a] relative overflow-hidden"
    >
      {/* Diagonal stripe pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #f5c842 0px, #f5c842 1px, transparent 1px, transparent 30px)",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#f5c842] flex items-center justify-center font-display font-700 text-[#1a3a2a] text-xs">
              03
            </div>
            <div className="h-px w-12 bg-[#f5c842]" />
            <span className="font-display text-[#f5c842] text-sm font-600 uppercase tracking-widest">
              Leadership
            </span>
          </div>
          <div className="md:flex md:items-end md:justify-between gap-8">
            <h2
              className="font-display font-800 text-white leading-tight mb-4 md:mb-0"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Board of Directors
              <br />
              <span className="text-[#f5c842]">and Officers</span>
            </h2>
            <p className="font-body text-white/60 text-base leading-relaxed max-w-sm">
              The Board provides general supervision of affairs, including policy
              setting, financial oversight, and strategic direction. Minimum of
              five directors required.
            </p>
          </div>
        </div>

        {/* Officers grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {officers.map((officer, i) => (
            <div
              key={officer.role}
              className={`p-6 border transition-all duration-700 ${
                officer.highlight
                  ? "bg-[#f5c842] border-[#f5c842]"
                  : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-[#f5c842]/40"
              } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 60}ms`, borderRadius: "0" }}
            >
              <div
                className={`w-9 h-9 flex items-center justify-center mb-4 ${
                  officer.highlight ? "bg-[#1a3a2a]" : "bg-[#f5c842]/15"
                }`}
                style={{ borderRadius: "0" }}
              >
                <officer.icon
                  size={16}
                  className={officer.highlight ? "text-[#f5c842]" : "text-[#f5c842]"}
                />
              </div>
              <div
                className={`font-display font-700 text-sm uppercase tracking-wide mb-1 ${
                  officer.highlight ? "text-[#1a3a2a]" : "text-[#f5c842]"
                }`}
              >
                {officer.role}
              </div>
              <div
                className={`font-display font-800 text-base mb-3 ${
                  officer.highlight ? "text-[#1a3a2a]" : "text-white"
                }`}
              >
                {officer.name}
              </div>
              <p
                className={`font-body text-xs leading-relaxed ${
                  officer.highlight ? "text-[#1a3a2a]/75" : "text-white/55"
                }`}
              >
                {officer.description}
              </p>
            </div>
          ))}
        </div>

        {/* Governance info */}
        <div
          className={`mt-16 grid md:grid-cols-2 gap-8 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <div>
            <h3 className="font-display font-700 text-white text-xl md:text-2xl mb-4">
              Transparent Governance
            </h3>
            <p className="font-body text-white/65 text-base leading-relaxed mb-6">
              Our Board meets at least quarterly, with a majority quorum required for all
              decisions. Officers serve one-year terms and may be reappointed by the Board.
              We maintain a strict Conflict of Interest Policy consistent with California law
              and IRS requirements.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Quarterly", sub: "Board Meetings" },
              { label: "2/3 Vote", sub: "To Amend Bylaws" },
              { label: "Majority", sub: "Quorum Required" },
              { label: "501(c)(3)", sub: "Nonprofit Status" },
            ].map((item) => (
              <div key={item.label} className="border border-white/10 p-4">
                <div className="font-display font-800 text-[#f5c842] text-lg">
                  {item.label}
                </div>
                <div className="font-body text-white/55 text-xs mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
