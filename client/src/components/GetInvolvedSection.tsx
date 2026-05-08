/*
 * Youth2Youth — Get Involved Section
 * Design: Cream background, three action cards with bold icons, asymmetric layout
 */
import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { GraduationCap, HandHeart, Building2 } from "lucide-react";
import { toast } from "sonner";
import TutorApplyModal from "./TutorApplyModal";
import PartnerModal from "./PartnerModal";

const ways = [
  {
    icon: GraduationCap,
    number: "01",
    title: "Become a Tutor",
    description:
      "Are you a student with a passion for a subject? Join our team of peer tutors. We provide training, support, and the tools you need to make a real difference in your community.",
    action: "Apply to Tutor",
    bg: "#1a3a2a",
    accent: "#f5c842",
  },
  {
    icon: HandHeart,
    number: "02",
    title: "Request Tutoring",
    description:
      "Is your student struggling in school? Our free and low-cost tutoring services are available to qualifying families. No student should fall behind because of financial barriers.",
    action: "Request a Tutor",
    bg: "#f5c842",
    accent: "#1a3a2a",
  },
  {
    icon: Building2,
    number: "03",
    title: "Partner With Us",
    description:
      "Schools, community organizations, and local businesses can partner with Youth2Youth to expand our reach and impact. Together we can serve more students in need.",
    action: "Become a Partner",
    bg: "#1a3a2a",
    accent: "#f5c842",
  },
];

export default function GetInvolvedSection() {
  const { ref, inView } = useInView(0.1);
  const [applyOpen, setApplyOpen] = useState(false);
  const [partnerOpen, setPartnerOpen] = useState(false);

  return (
    <>
      <TutorApplyModal open={applyOpen} onClose={() => setApplyOpen(false)} />
      <PartnerModal open={partnerOpen} onClose={() => setPartnerOpen(false)} />

      <section
        id="get-involved"
        ref={ref as React.RefObject<HTMLElement>}
        className="py-24 md:py-32 bg-[#faf6ee] relative overflow-hidden"
      >
        <div className="container relative z-10">
          {/* Header */}
          <div
            className={`mb-16 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#1a3a2a] flex items-center justify-center font-display font-700 text-[#f5c842] text-xs">
                04
              </div>
              <div className="h-px w-12 bg-[#1a3a2a]" />
              <span className="font-display text-[#1a3a2a] text-sm font-600 uppercase tracking-widest">
                Get Involved
              </span>
            </div>
            <h2
              className="font-display font-800 text-[#1a3a2a] leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Join the Movement.
              <br />
              <span className="text-[#2d5c42]">Make a Difference.</span>
            </h2>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {ways.map((way, i) => (
              <div
                key={way.title}
                className={`flex flex-col p-8 transition-all duration-700 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  backgroundColor: way.bg,
                  transitionDelay: `${i * 120}ms`,
                  borderRadius: "0",
                }}
              >
                {/* Number + Icon */}
                <div className="flex items-start justify-between mb-8">
                  <div
                    className="w-12 h-12 flex items-center justify-center"
                    style={{ backgroundColor: way.accent, borderRadius: "0" }}
                  >
                    <way.icon
                      size={22}
                      className={way.accent === "#f5c842" ? "text-[#1a3a2a]" : "text-white"}
                    />
                  </div>
                  <span
                    className="font-display font-800 text-4xl leading-none opacity-20"
                    style={{ color: way.accent }}
                  >
                    {way.number}
                  </span>
                </div>

                <h3
                  className="font-display font-800 text-2xl mb-4"
                  style={{ color: way.accent === "#f5c842" ? "#faf6ee" : "#1a3a2a" }}
                >
                  {way.title}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed mb-8 flex-1"
                  style={{
                    color: way.accent === "#f5c842" ? "rgba(250,246,238,0.72)" : "rgba(26,58,42,0.72)",
                  }}
                >
                  {way.description}
                </p>

                <button
                  onClick={() => {
                    if (way.title === "Become a Tutor") {
                      setApplyOpen(true);
                    } else if (way.title === "Request Tutoring") {
                      document.querySelector("#schedule")?.scrollIntoView({ behavior: "smooth" });
                    } else if (way.title === "Partner With Us") {
                      setPartnerOpen(true);
                    } else {
                      toast.info(`${way.action} coming soon!`, {
                        description: "We are setting up our application portal. Check back soon.",
                      });
                    }
                  }}
                  className="font-display font-700 text-sm uppercase tracking-wide px-6 py-3 border-2 transition-all duration-200 hover:scale-105"
                  style={{
                    borderColor: way.accent,
                    color: way.accent,
                    borderRadius: "0",
                  }}
                >
                  {way.action}
                </button>
              </div>
            ))}
          </div>

          {/* Membership types note */}
          <div
            className={`border border-[#1a3a2a]/15 p-8 md:p-10 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms", borderRadius: "0" }}
          >
            <div className="md:flex md:items-start md:gap-12">
              <div className="mb-6 md:mb-0 md:w-64 flex-shrink-0">
                <h3 className="font-display font-700 text-[#1a3a2a] text-xl mb-2">
                  Who Can Join?
                </h3>
                <p className="font-body text-[#1a3a2a]/60 text-sm leading-relaxed">
                  Youth2Youth welcomes members from across the community.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 flex-1">
                {[
                  "Tutors",
                  "Student Participants",
                  "Volunteers",
                  "Parents and Guardians",
                  "Community Supporters",
                ].map((type) => (
                  <div
                    key={type}
                    className="bg-[#1a3a2a]/5 px-4 py-3 text-center"
                    style={{ borderRadius: "0" }}
                  >
                    <span className="font-display font-600 text-[#1a3a2a] text-sm">
                      {type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
