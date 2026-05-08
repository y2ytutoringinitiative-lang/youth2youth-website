import emailjs from "@emailjs/browser";

export const EMAILJS_PUBLIC_KEY = "LqhTH-yTmLyOwgKwa";
export const EMAILJS_SERVICE_ID = "service_vk26mg7";

export const EMAILJS_TUTOR_APPLY_PUBLIC_KEY = "pBFIciKRcn6MYYpxR";
export const EMAILJS_TUTOR_APPLY_SERVICE_ID = "service_76tm2bl";
export const EMAILJS_TUTOR_APPLY_TEMPLATE_ID = "template_ojqyeya";
export const EMAILJS_PARTNER_TEMPLATE_ID = "template_xh1wymj";

export const TEMPLATES = {
  tutorRequest: "template_z1bnu16",
  volunteer: "template_fubb5dh",
};

emailjs.init(EMAILJS_PUBLIC_KEY);

export function getContactTemplate(subject: string): string {
  if (subject === "request-tutoring" || subject === "become-tutor") {
    return TEMPLATES.tutorRequest;
  }
  return TEMPLATES.volunteer;
}

export { emailjs };
