import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | MorningEdge — Let's Talk",
  description:
    "Ready to work together? Get in touch with Olamilekan E. Wealth for consulting, speaking, or executive education engagements.",
  openGraph: {
    title: "Contact | MorningEdge",
    description: "Start the conversation. Let's build something that lasts.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-[#0A0A0A] py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-[#D4A017] text-sm font-semibold uppercase tracking-widest mb-4">Contact</p>
          <h1
            className="text-5xl lg:text-6xl font-black text-white mb-4 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Let&apos;s Talk.
          </h1>
          <p className="text-gray-400 mb-12 text-lg">
            If you are building something that matters, I want to hear about it.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="bg-white rounded-2xl p-8 md:p-12">
            <ContactForm />
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-10 flex items-center gap-3 text-gray-400">
            <Mail size={16} className="text-[#D4A017]" />
            <a
              href="mailto:olamilekan.ekundayo3@gmail.com"
              className="text-sm hover:text-white transition-colors"
            >
              olamilekan.ekundayo3@gmail.com
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
