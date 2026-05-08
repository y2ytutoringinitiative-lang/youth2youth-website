/*
 * Youth2Youth — Partner With Us Modal
 * Design: Matches site's constructivist style, forest green + gold accents
 */
import { useState } from "react";
import { X, Send, Building2 } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import {
  EMAILJS_TUTOR_APPLY_PUBLIC_KEY,
  EMAILJS_TUTOR_APPLY_SERVICE_ID,
  EMAILJS_PARTNER_TEMPLATE_ID,
} from "@/lib/emailjs";

const orgTypes = [
  "K–12 School",
  "College / University",
  "Community Organization",
  "Local Business",
  "Government / Public Agency",
  "Other",
];

const partnershipTypes = [
  "Host tutoring sessions",
  "Refer students to us",
  "Sponsor our programs",
  "Co-host events",
  "Provide resources / space",
  "Other",
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function PartnerModal({ open, onClose }: Props) {
  const [form, setForm] = useState({
    org_name: "",
    org_type: "",
    contact_name: "",
    reply_to: "",
    phone: "",
    partnership_interest: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  if (!open) return null;

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function selectOption(field: "org_type" | "partnership_interest", value: string) {
    setForm((prev) => ({ ...prev, [field]: prev[field] === value ? "" : value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.org_name || !form.contact_name || !form.reply_to) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (!form.org_type) {
      toast.error("Please select your organization type.");
      return;
    }
    if (!form.partnership_interest) {
      toast.error("Please select a partnership interest.");
      return;
    }

    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_TUTOR_APPLY_SERVICE_ID,
        EMAILJS_PARTNER_TEMPLATE_ID,
        {
          org_name: form.org_name,
          org_type: form.org_type,
          contact_name: form.contact_name,
          reply_to: form.reply_to,
          phone: form.phone || "Not provided",
          partnership_interest: form.partnership_interest,
          message: form.message || "No additional message provided.",
        },
        EMAILJS_TUTOR_APPLY_PUBLIC_KEY
      );
      toast.success("Inquiry sent!", {
        description: "Thank you for your interest. We'll be in touch within a few business days.",
      });
      onClose();
      setForm({
        org_name: "",
        org_type: "",
        contact_name: "",
        reply_to: "",
        phone: "",
        partnership_interest: "",
        message: "",
      });
    } catch {
      toast.error("Something went wrong. Please try again or email partnerships@youth2youthsd.org directly.");
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
              <Building2 size={18} className="text-[#1a3a2a]" />
            </div>
            <div>
              <h2 className="font-display font-800 text-white text-lg leading-tight">
                Partner With Us
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

          {/* Organization Name */}
          <div>
            <label className="block font-display font-700 text-[#1a3a2a] text-xs uppercase tracking-widest mb-2">
              Organization Name <span className="text-red-500">*</span>
            </label>
            <input
              name="org_name"
              value={form.org_name}
              onChange={handleChange}
              required
              placeholder="e.g. Lincoln Middle School"
              className="w-full px-4 py-3 bg-white border-2 border-[#1a3a2a]/20 font-body text-sm text-[#1a3a2a] placeholder:text-[#1a3a2a]/30 focus:outline-none focus:border-[#1a3a2a] transition-colors"
              style={{ borderRadius: "0" }}
            />
          </div>

          {/* Organization Type */}
          <div>
            <label className="block font-display font-700 text-[#1a3a2a] text-xs uppercase tracking-widest mb-3">
              Organization Type <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {orgTypes.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => selectOption("org_type", t)}
                  className="px-3 py-2 text-xs font-display font-700 uppercase tracking-wide border-2 transition-all duration-150"
                  style={{
                    borderRadius: "0",
                    borderColor: form.org_type === t ? "#1a3a2a" : "#1a3a2a33",
                    backgroundColor: form.org_type === t ? "#1a3a2a" : "white",
                    color: form.org_type === t ? "#f5c842" : "#1a3a2a",
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-display font-700 text-[#1a3a2a] text-xs uppercase tracking-widest mb-2">
                Contact Name <span className="text-red-500">*</span>
              </label>
              <input
                name="contact_name"
                value={form.contact_name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="w-full px-4 py-3 bg-white border-2 border-[#1a3a2a]/20 font-body text-sm text-[#1a3a2a] placeholder:text-[#1a3a2a]/30 focus:outline-none focus:border-[#1a3a2a] transition-colors"
                style={{ borderRadius: "0" }}
              />
            </div>
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
                placeholder="you@org.com"
                className="w-full px-4 py-3 bg-white border-2 border-[#1a3a2a]/20 font-body text-sm text-[#1a3a2a] placeholder:text-[#1a3a2a]/30 focus:outline-none focus:border-[#1a3a2a] transition-colors"
                style={{ borderRadius: "0" }}
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block font-display font-700 text-[#1a3a2a] text-xs uppercase tracking-widest mb-2">
              Phone{" "}
              <span className="font-body font-400 normal-case tracking-normal text-[#1a3a2a]/40">(optional)</span>
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

          {/* Partnership Interest */}
          <div>
            <label className="block font-display font-700 text-[#1a3a2a] text-xs uppercase tracking-widest mb-3">
              How Would You Like to Partner? <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {partnershipTypes.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => selectOption("partnership_interest", p)}
                  className="px-3 py-2 text-xs font-display font-700 uppercase tracking-wide border-2 transition-all duration-150"
                  style={{
                    borderRadius: "0",
                    borderColor: form.partnership_interest === p ? "#f5c842" : "#1a3a2a33",
                    backgroundColor: form.partnership_interest === p ? "#f5c842" : "white",
                    color: "#1a3a2a",
                  }}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block font-display font-700 text-[#1a3a2a] text-xs uppercase tracking-widest mb-2">
              Anything else you'd like to share?{" "}
              <span className="font-body font-400 normal-case tracking-normal text-[#1a3a2a]/40">(optional)</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us more about your organization and what you're hoping to achieve..."
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
            {sending ? "Sending…" : "Send Inquiry"}
          </button>

          <p className="text-center font-body text-xs text-[#1a3a2a]/40">
            We typically respond within 2–3 business days.
          </p>
        </form>
      </div>
    </div>
  );
}
