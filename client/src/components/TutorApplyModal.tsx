/*
 * Youth2Youth — Tutor Application Modal
 * Design: Matches site's constructivist style, forest green + gold accents
 */
import { useState } from "react";
import { X, Send, GraduationCap } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import {
  EMAILJS_TUTOR_APPLY_PUBLIC_KEY,
  EMAILJS_TUTOR_APPLY_SERVICE_ID,
  EMAILJS_TUTOR_APPLY_TEMPLATE_ID,
} from "@/lib/emailjs";

const subjectOptions = [
  "Mathematics",
  "Science",
  "English & Writing",
  "History & Social Studies",
  "Foreign Language",
  "Test Prep (SAT/ACT)",
  "Computer Science",
  "Other",
];

const availabilityOptions = [
  "Weekday Mornings",
  "Weekday Afternoons",
  "Weekday Evenings",
  "Weekend Mornings",
  "Weekend Afternoons",
  "Flexible",
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function TutorApplyModal({ open, onClose }: Props) {
  const [form, setForm] = useState({
    tutor_name: "",
    reply_to: "",
    phone: "",
    age: "",
    school: "",
    subjects: [] as string[],
    availability: [] as string[],
    experience: "",
    why_tutor: "",
  });
  const [sending, setSending] = useState(false);

  if (!open) return null;

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function toggleCheckbox(field: "subjects" | "availability", value: string) {
    setForm((prev) => {
      const current = prev[field];
      return {
        ...prev,
        [field]: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      };
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.tutor_name || !form.reply_to || !form.age || !form.school) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (form.subjects.length === 0) {
      toast.error("Please select at least one subject.");
      return;
    }
    if (form.availability.length === 0) {
      toast.error("Please select at least one availability option.");
      return;
    }

    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_TUTOR_APPLY_SERVICE_ID,
        EMAILJS_TUTOR_APPLY_TEMPLATE_ID,
        {
          tutor_name: form.tutor_name,
          reply_to: form.reply_to,
          phone: form.phone || "Not provided",
          age: form.age,
          school: form.school,
          subjects: form.subjects.join(", "),
          availability: form.availability.join(", "),
          experience: form.experience || "Not provided",
          why_tutor: form.why_tutor,
        },
        EMAILJS_TUTOR_APPLY_PUBLIC_KEY
      );
      toast.success("Application submitted!", {
        description: "We'll be in touch within a few days. Thank you for applying!",
      });
      onClose();
      setForm({
        tutor_name: "",
        reply_to: "",
        phone: "",
        age: "",
        school: "",
        subjects: [],
        availability: [],
        experience: "",
        why_tutor: "",
      });
    } catch {
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#faf6ee]"
        style={{ borderRadius: "0" }}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[#1a3a2a] px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#f5c842] flex items-center justify-center">
              <GraduationCap size={18} className="text-[#1a3a2a]" />
            </div>
            <div>
              <h2 className="font-display font-800 text-white text-lg leading-tight">
                Apply to Tutor
              </h2>
              <p className="font-body text-white/60 text-xs">
                Youth2Youth Tutoring Initiative
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-8 py-8 space-y-6">
          {/* Row: Name + Age */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-display font-700 text-[#1a3a2a] text-xs uppercase tracking-widest mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                name="tutor_name"
                value={form.tutor_name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="w-full px-4 py-3 bg-white border-2 border-[#1a3a2a]/20 font-body text-sm text-[#1a3a2a] placeholder:text-[#1a3a2a]/30 focus:outline-none focus:border-[#1a3a2a] transition-colors"
                style={{ borderRadius: "0" }}
              />
            </div>
            <div>
              <label className="block font-display font-700 text-[#1a3a2a] text-xs uppercase tracking-widest mb-2">
                Age <span className="text-red-500">*</span>
              </label>
              <input
                name="age"
                value={form.age}
                onChange={handleChange}
                required
                placeholder="e.g. 16"
                className="w-full px-4 py-3 bg-white border-2 border-[#1a3a2a]/20 font-body text-sm text-[#1a3a2a] placeholder:text-[#1a3a2a]/30 focus:outline-none focus:border-[#1a3a2a] transition-colors"
                style={{ borderRadius: "0" }}
              />
            </div>
          </div>

          {/* Row: Email + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-display font-700 text-[#1a3a2a] text-xs uppercase tracking-widest mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                name="reply_to"
                type="email"
                value={form.reply_to}
                onChange={handleChange}
                required
                placeholder="you@email.com"
                className="w-full px-4 py-3 bg-white border-2 border-[#1a3a2a]/20 font-body text-sm text-[#1a3a2a] placeholder:text-[#1a3a2a]/30 focus:outline-none focus:border-[#1a3a2a] transition-colors"
                style={{ borderRadius: "0" }}
              />
            </div>
            <div>
              <label className="block font-display font-700 text-[#1a3a2a] text-xs uppercase tracking-widest mb-2">
                Phone <span className="font-body font-400 normal-case tracking-normal text-[#1a3a2a]/40">(optional)</span>
              </label>
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="(555) 000-0000"
                className="w-full px-4 py-3 bg-white border-2 border-[#1a3a2a]/20 font-body text-sm text-[#1a3a2a] placeholder:text-[#1a3a2a]/30 focus:outline-none focus:border-[#1a3a2a] transition-colors"
                style={{ borderRadius: "0" }}
              />
            </div>
          </div>

          {/* School */}
          <div>
            <label className="block font-display font-700 text-[#1a3a2a] text-xs uppercase tracking-widest mb-2">
              School / College <span className="text-red-500">*</span>
            </label>
            <input
              name="school"
              value={form.school}
              onChange={handleChange}
              required
              placeholder="e.g. San Diego High School"
              className="w-full px-4 py-3 bg-white border-2 border-[#1a3a2a]/20 font-body text-sm text-[#1a3a2a] placeholder:text-[#1a3a2a]/30 focus:outline-none focus:border-[#1a3a2a] transition-colors"
              style={{ borderRadius: "0" }}
            />
          </div>

          {/* Subjects */}
          <div>
            <label className="block font-display font-700 text-[#1a3a2a] text-xs uppercase tracking-widest mb-3">
              Subjects You Can Tutor <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {subjectOptions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => toggleCheckbox("subjects", s)}
                  className="px-3 py-2 text-xs font-display font-700 uppercase tracking-wide border-2 transition-all duration-150"
                  style={{
                    borderRadius: "0",
                    borderColor: form.subjects.includes(s) ? "#1a3a2a" : "#1a3a2a33",
                    backgroundColor: form.subjects.includes(s) ? "#1a3a2a" : "white",
                    color: form.subjects.includes(s) ? "#f5c842" : "#1a3a2a",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div>
            <label className="block font-display font-700 text-[#1a3a2a] text-xs uppercase tracking-widest mb-3">
              Availability <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {availabilityOptions.map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => toggleCheckbox("availability", a)}
                  className="px-3 py-2 text-xs font-display font-700 uppercase tracking-wide border-2 transition-all duration-150"
                  style={{
                    borderRadius: "0",
                    borderColor: form.availability.includes(a) ? "#f5c842" : "#1a3a2a33",
                    backgroundColor: form.availability.includes(a) ? "#f5c842" : "white",
                    color: "#1a3a2a",
                  }}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>

          {/* Prior Experience */}
          <div>
            <label className="block font-display font-700 text-[#1a3a2a] text-xs uppercase tracking-widest mb-2">
              Prior Tutoring / Teaching Experience{" "}
              <span className="font-body font-400 normal-case tracking-normal text-[#1a3a2a]/40">(optional)</span>
            </label>
            <textarea
              name="experience"
              value={form.experience}
              onChange={handleChange}
              rows={3}
              placeholder="Describe any relevant experience — tutoring, mentoring, teaching, etc."
              className="w-full px-4 py-3 bg-white border-2 border-[#1a3a2a]/20 font-body text-sm text-[#1a3a2a] placeholder:text-[#1a3a2a]/30 focus:outline-none focus:border-[#1a3a2a] transition-colors resize-none"
              style={{ borderRadius: "0" }}
            />
          </div>

          {/* Why do you want to tutor */}
          <div>
            <label className="block font-display font-700 text-[#1a3a2a] text-xs uppercase tracking-widest mb-2">
              Why do you want to tutor? <span className="text-red-500">*</span>
            </label>
            <textarea
              name="why_tutor"
              value={form.why_tutor}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Tell us what motivates you to help other students..."
              className="w-full px-4 py-3 bg-white border-2 border-[#1a3a2a]/20 font-body text-sm text-[#1a3a2a] placeholder:text-[#1a3a2a]/30 focus:outline-none focus:border-[#1a3a2a] transition-colors resize-none"
              style={{ borderRadius: "0" }}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={sending}
            className="w-full flex items-center justify-center gap-3 py-4 font-display font-800 text-sm uppercase tracking-widest transition-all duration-200 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
            style={{
              backgroundColor: "#f5c842",
              color: "#1a3a2a",
              borderRadius: "0",
            }}
          >
            <Send size={16} />
            {sending ? "Submitting…" : "Submit Application"}
          </button>

          <p className="text-center font-body text-xs text-[#1a3a2a]/40">
            We typically respond within 2–3 business days.
          </p>
        </form>
      </div>
    </div>
  );
}
