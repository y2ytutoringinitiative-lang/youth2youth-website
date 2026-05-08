/*
 * Youth2Youth — Schedule a Session Section
 * Design: Cream background, split layout matching site's constructivist style
 */
import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { CalendarDays, Clock, BookOpen, Send } from "lucide-react";
import { toast } from "sonner";
import { emailjs, EMAILJS_SERVICE_ID, TEMPLATES } from "@/lib/emailjs";

const subjects = [
  "Mathematics",
  "Science",
  "English & Writing",
  "History & Social Studies",
  "Foreign Language",
  "Test Prep (SAT/ACT)",
  "College Application Essays",
  "Other",
];

const gradeLevels = [
  "Elementary (K–5)",
  "Middle School (6–8)",
  "High School (9–12)",
  "College",
  "Adult Learner",
];

const timeSlots = [
  "Weekday Morning (8am–12pm)",
  "Weekday Afternoon (12pm–4pm)",
  "Weekday Evening (4pm–8pm)",
  "Weekend Morning (8am–12pm)",
  "Weekend Afternoon (12pm–6pm)",
];

export default function SchedulingSection() {
  const { ref, inView } = useInView(0.1);
  const [form, setForm] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    gradeLevel: "",
    subject: "",
    sessionType: "online",
    availability: "",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, TEMPLATES.tutorRequest, {
        student_name: form.studentName,
        parent_name: form.parentName || "Not provided",
        reply_to: form.email,
        phone: form.phone || "Not provided",
        grade_level: form.gradeLevel,
        subject: form.subject,
        session_type: form.sessionType,
        availability: form.availability,
        notes: form.notes || "None",
      });
      toast.success("Session request received!", {
        description: "We'll match you with a tutor and follow up within 1–2 business days.",
      });
      setForm({
        studentName: "",
        parentName: "",
        email: "",
        phone: "",
        gradeLevel: "",
        subject: "",
        sessionType: "online",
        availability: "",
        notes: "",
      });
    } catch {
      toast.error("Could not send request. Please email us at tutors@youth2youthsd.org.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-transparent border-b-2 border-[#1a3a2a]/20 focus:border-[#f5c842] outline-none font-body text-[#1a3a2a] text-sm py-2.5 placeholder:text-[#1a3a2a]/35 transition-colors duration-200";
  const selectClass =
    "w-full bg-transparent border-b-2 border-[#1a3a2a]/20 focus:border-[#f5c842] outline-none font-body text-[#1a3a2a] text-sm py-2.5 transition-colors duration-200 cursor-pointer appearance-none";
  const labelClass = "block font-display font-600 text-[#1a3a2a] text-xs uppercase tracking-wider mb-1.5";

  return (
    <section
      id="schedule"
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
            <div className="w-10 h-10 bg-[#1a3a2a] flex items-center justify-center">
              <CalendarDays size={18} className="text-[#f5c842]" />
            </div>
            <div className="h-px w-12 bg-[#1a3a2a]" />
            <span className="font-display text-[#1a3a2a] text-sm font-600 uppercase tracking-widest">
              Schedule a Session
            </span>
          </div>
          <h2
            className="font-display font-800 text-[#1a3a2a] leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Book Your Free<br />
            <span className="text-[#2d5c42]">Tutoring Session</span>
          </h2>
          <p className="mt-4 font-body text-[#1a3a2a]/65 text-base max-w-xl leading-relaxed">
            Fill out the form below and we'll match you with one of our peer tutors.
            Sessions are free or low-cost for qualifying students.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 lg:gap-20">
          {/* Info sidebar */}
          <div
            className={`md:col-span-2 transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="space-y-8">
              {[
                {
                  icon: CalendarDays,
                  title: "Flexible Scheduling",
                  body: "We work around your schedule — weekdays, evenings, and weekends available.",
                },
                {
                  icon: Clock,
                  title: "Quick Matching",
                  body: "We'll respond within 1–2 business days with a tutor match and proposed times.",
                },
                {
                  icon: BookOpen,
                  title: "Online & In-Person",
                  body: "Sessions available via video call or in person at a community location near you.",
                },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-10 h-10 bg-[#1a3a2a] flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-[#f5c842]" />
                  </div>
                  <div>
                    <div className="font-display font-700 text-[#1a3a2a] text-sm mb-1">
                      {title}
                    </div>
                    <p className="font-body text-[#1a3a2a]/60 text-sm leading-relaxed">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Accent block */}
            <div className="mt-12 bg-[#1a3a2a] p-6">
              <div className="font-display font-700 text-[#f5c842] text-sm uppercase tracking-wider mb-2">
                No cost barrier
              </div>
              <p className="font-body text-white/75 text-sm leading-relaxed">
                Our tutoring is free for students from low-income families.
                We believe no student should fall behind because of finances.
              </p>
            </div>
          </div>

          {/* Form */}
          <div
            className={`md:col-span-3 transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Row 1: Names */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Student Name *</label>
                  <input
                    name="studentName"
                    value={form.studentName}
                    onChange={handleChange}
                    required
                    placeholder="First and last name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Parent / Guardian Name</label>
                  <input
                    name="parentName"
                    value={form.parentName}
                    onChange={handleChange}
                    placeholder="Optional"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Row 2: Contact */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Phone Number</label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Optional"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Row 3: Grade & Subject */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Grade Level *</label>
                  <select
                    name="gradeLevel"
                    value={form.gradeLevel}
                    onChange={handleChange}
                    required
                    className={selectClass}
                  >
                    <option value="" disabled>Select grade level</option>
                    {gradeLevels.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Subject *</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className={selectClass}
                  >
                    <option value="" disabled>Select a subject</option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Session type */}
              <div>
                <label className={labelClass}>Session Type *</label>
                <div className="flex gap-4 mt-1">
                  {["online", "in-person", "either"].map((type) => (
                    <label
                      key={type}
                      className={`flex items-center gap-2 cursor-pointer group`}
                    >
                      <div
                        className={`w-4 h-4 border-2 flex items-center justify-center transition-colors ${
                          form.sessionType === type
                            ? "border-[#f5c842] bg-[#f5c842]"
                            : "border-[#1a3a2a]/30 group-hover:border-[#1a3a2a]"
                        }`}
                        onClick={() => setForm((p) => ({ ...p, sessionType: type }))}
                      >
                        {form.sessionType === type && (
                          <div className="w-1.5 h-1.5 bg-[#1a3a2a]" />
                        )}
                      </div>
                      <span className="font-body text-[#1a3a2a] text-sm capitalize">
                        {type === "in-person" ? "In-Person" : type.charAt(0).toUpperCase() + type.slice(1)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div>
                <label className={labelClass}>Preferred Availability *</label>
                <select
                  name="availability"
                  value={form.availability}
                  onChange={handleChange}
                  required
                  className={selectClass}
                >
                  <option value="" disabled>Select your best time</option>
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Notes */}
              <div>
                <label className={labelClass}>Additional Notes</label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Anything else we should know — specific topics, learning goals, accommodations needed…"
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="group flex items-center gap-3 bg-[#1a3a2a] text-white font-display font-700 text-sm uppercase tracking-wider px-8 py-4 hover:bg-[#2d5c42] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting…
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Request a Session
                      <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </>
                  )}
                </button>
                <p className="mt-3 font-body text-[#1a3a2a]/45 text-xs">
                  We'll follow up within 1–2 business days to confirm your session.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
