import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import { BrainCircuit, GraduationCap, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Olamilekan E. Wealth — MorningEdge",
  description:
    "Business Operations Executive, AI Systems Consultant, Author, and Speaker. Learn about the journey and the mission behind MorningEdge.",
  openGraph: {
    title: "About Olamilekan E. Wealth | MorningEdge",
    description: "Strategy, systems, and the discipline of execution.",
    type: "website",
  },
};

const ventures = [
  {
    icon: <BrainCircuit size={24} />,
    title: "AI Business Automation",
    description:
      "Practical AI-enabled systems for business operations. No hype. No unnecessary complexity. Tools that improve execution and reduce friction in real workflows.",
  },
  {
    icon: <GraduationCap size={24} />,
    title: "Executive Education",
    description:
      "Training and development programs for leaders who want to think more clearly, execute more reliably, and build organizations that compound over time.",
  },
  {
    icon: <Layers size={24} />,
    title: "Operational Intelligence",
    description:
      "Advisory and consulting work focused on helping modern businesses move from reactive firefighting to structured, strategic operations management.",
  },
];

const values = [
  {
    title: "Clarity before complexity.",
    description:
      "Most businesses do not need more tools. They need a clearer picture of what is actually happening, what is not, and why. I start there.",
  },
  {
    title: "Systems over heroics.",
    description:
      "A business dependent on individuals is a business one resignation away from collapse. I build structures that outlast any single person.",
  },
  {
    title: "Execution as a discipline.",
    description:
      "Strategy without execution is noise. I measure success by what actually gets done, not what gets presented in a slide deck.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end bg-[#0A0A0A] overflow-hidden">
        <Image
          src="/pictures/IMG_3433.jpeg"
          alt="Olamilekan E. Wealth"
          fill
          className="object-cover object-[center_20%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <p className="text-[#D4A017] text-sm font-semibold uppercase tracking-widest mb-2">About</p>
          <h1
            className="text-4xl lg:text-6xl font-black text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Olamilekan E. Wealth
          </h1>
          <p className="text-gray-300 mt-2 text-lg">
            Business Operations Executive · AI Systems Consultant · Author · Speaker
          </p>
        </div>
      </section>

      {/* Story */}
      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-6">
            <h2
              className="text-3xl font-bold text-[#0A0A0A] leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              This is where most people miss it.
            </h2>
            <p className="text-[#4A4A4A] leading-relaxed">
              They mistake ambition for strategy and activity for progress. Olamilekan E. Wealth has spent years working inside the gap between where businesses want to be and where they actually are. His work spans operations design, project leadership, business development, and organizational restructuring, always with the same focus: building systems that produce repeatable, measurable results.
            </p>
            <p className="text-[#4A4A4A] leading-relaxed">
              As an AI systems consultant, he brings the same clarity to technology adoption. Not the hype cycle. Not the surface-level automation plays. He helps organizations integrate AI into their actual workflows in ways that improve judgment, reduce error, and compound over time.
            </p>
            <p className="text-[#4A4A4A] leading-relaxed">
              Beyond consulting, he is a writer and speaker whose work explores the intersection of philosophy, leadership, and the psychology of performance. His ideas are direct, grounded in practice, and built to challenge how leaders think and act. Not just X, but Y. Not just knowing the answer, but building the system that keeps producing the right answers.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <Image
                src="/pictures/IMG_686.jpeg"
                alt="Olamilekan E. Wealth speaking"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image
                  src="/pictures/IMG_342_1.jpeg"
                  alt="Olamilekan E. Wealth"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image
                  src="/pictures/IMG_342_2.jpeg"
                  alt="Olamilekan E. Wealth"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Ventures */}
      <SectionWrapper className="bg-[#0A0A0A]">
        <div className="text-center mb-14">
          <p className="text-[#D4A017] text-sm font-semibold uppercase tracking-widest mb-3">Current Ventures</p>
          <h2
            className="text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Building at the edge of what is next.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ventures.map((v) => (
            <div
              key={v.title}
              className="bg-[#111111] border border-white/10 rounded-2xl p-8 flex flex-col gap-4"
            >
              <div className="text-[#D4A017] w-12 h-12 flex items-center justify-center bg-[#D4A017]/10 rounded-xl">
                {v.icon}
              </div>
              <h3
                className="text-xl font-bold text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {v.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="bg-[#F5F5F5]">
        <div className="text-center mb-14">
          <p className="text-[#D4A017] text-sm font-semibold uppercase tracking-widest mb-3">How I Work</p>
          <h2
            className="text-4xl font-bold text-[#0A0A0A]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Three commitments. Every engagement.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={v.title} className="flex flex-col gap-4">
              <span className="text-5xl font-black text-[#D4A017]/20" style={{ fontFamily: "var(--font-playfair)" }}>
                0{i + 1}
              </span>
              <h3
                className="text-xl font-bold text-[#0A0A0A]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {v.title}
              </h3>
              <p className="text-[#4A4A4A] text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-[#0A0A0A] py-24 px-6 text-center">
        <h2
          className="text-4xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Work is better when the right people are in the room.
        </h2>
        <p className="text-gray-400 mb-8">If that sounds like you, let us start a conversation.</p>
        <Link
          href="/contact"
          className="inline-block bg-[#D4A017] text-white px-10 py-5 rounded-xl text-sm font-semibold hover:bg-amber-700 transition-colors"
        >
          Work With Me
        </Link>
      </section>
    </>
  );
}
