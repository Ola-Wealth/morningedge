import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import ServiceCard from "@/components/ServiceCard";
import FadeIn from "@/components/FadeIn";
import { Settings2, BrainCircuit, Mic2 } from "lucide-react";

export const metadata: Metadata = {
  title: "MorningEdge | Strategy. Systems. Scale.",
  description:
    "Olamilekan E. Wealth helps founders and executives design operational systems, implement AI solutions, and build businesses that scale without chaos.",
  openGraph: {
    title: "MorningEdge | Strategy. Systems. Scale.",
    description:
      "Built for founders who are done guessing. Operations, AI systems, and executive education.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0d0d2b] to-[#0A0A0A] opacity-90" />

        <FadeIn direction="right" delay={0.1} className="absolute right-0 top-0 h-full w-1/2 hidden lg:block">
          <div className="relative w-full h-full">
            <Image
              src="/pictures/IMG_327.jpeg"
              alt="Olamilekan E. Wealth"
              fill
              className="object-cover object-[center_15%]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
          </div>
        </FadeIn>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-0">
          <div className="max-w-xl">
            <FadeIn delay={0}>
              <p className="text-[#D4A017] text-sm font-semibold uppercase tracking-widest mb-6">
                MorningEdge
              </p>
            </FadeIn>
            <FadeIn delay={0.12}>
              <h1
                className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Strategy.
                <br />
                Systems.
                <br />
                Scale.
              </h1>
            </FadeIn>
            <FadeIn delay={0.24}>
              <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-md">
                Built for founders who are done guessing. I design the systems, structures, and strategies that turn ambitious ideas into executable businesses.
              </p>
            </FadeIn>
            <FadeIn delay={0.36}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-[#D4A017] text-white px-8 py-4 rounded-xl text-sm font-semibold hover:bg-amber-700 transition-colors"
                >
                  Work With Me
                </Link>
                <Link
                  href="/writing"
                  className="border border-white text-white px-8 py-4 rounded-xl text-sm font-semibold hover:bg-white hover:text-[#0A0A0A] transition-colors"
                >
                  Read My Writing
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <SectionWrapper className="bg-[#F5F5F5]">
        <FadeIn className="text-center mb-14">
          <p className="text-[#D4A017] text-sm font-semibold uppercase tracking-widest mb-3">What I Do</p>
          <h2
            className="text-4xl font-bold text-[#0A0A0A]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Three pillars. One outcome.
          </h2>
          <p className="text-[#4A4A4A] mt-4 max-w-2xl mx-auto">
            Every engagement I take comes back to the same question: is the business built to execute? Here is how I help make that answer yes.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeIn delay={0}>
            <ServiceCard
              icon={<Settings2 size={24} />}
              title="Operations Design"
              description="Most businesses are not broken. They are just unstructured. I map your processes, close the gaps, and build the operational architecture your team can actually run."
              closing="Structure is not bureaucracy. It is freedom."
            />
          </FadeIn>
          <FadeIn delay={0.12}>
            <ServiceCard
              icon={<BrainCircuit size={24} />}
              title="AI Systems Consulting"
              description="AI is not magic and it is not a shortcut. I help businesses implement practical automation and AI-enabled workflows that improve decision-making without adding complexity."
              closing="The right system does not complicate. It clarifies."
            />
          </FadeIn>
          <FadeIn delay={0.24}>
            <ServiceCard
              icon={<Mic2 size={24} />}
              title="Executive Education & Speaking"
              description="I train leaders, founders, and executive teams on strategy, AI adoption, and performance systems. Not theory. Frameworks that produce measurable change."
              closing="Knowledge that does not move people does not matter."
            />
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* About Strip */}
      <section className="bg-[#0A0A0A] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/pictures/IMG_324.jpeg"
                alt="Olamilekan E. Wealth"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-[#0A0A0A]/30" />
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <div>
              <p className="text-[#D4A017] text-sm font-semibold uppercase tracking-widest mb-4">About</p>
              <h2
                className="text-4xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                The gap between vision and execution is not a talent problem.
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Olamilekan E. Wealth works at the intersection of strategy, technology, and human performance. He has led initiatives across operations design, business development, and organizational restructuring, helping businesses move from fragmented execution to structured, scalable systems.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                As an AI systems consultant and thought leader, his work combines the rigor of operational strategy with the clarity of direct, actionable insight.
              </p>
              <Link
                href="/about"
                className="text-[#D4A017] font-semibold text-sm hover:underline"
              >
                Learn More &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Signature Statement */}
      <section className="bg-[#D4A017] py-24 px-6 text-center">
        <FadeIn direction="none">
          <blockquote
            className="text-white text-3xl lg:text-5xl font-bold max-w-4xl mx-auto leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Execution is not an accident. It is architecture.
          </blockquote>
        </FadeIn>
      </section>

      {/* CTA Strip */}
      <section className="bg-[#0A0A0A] py-24 px-6 text-center">
        <FadeIn>
          <h2
            className="text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ready to build systems that scale?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-[#D4A017] text-white px-10 py-5 rounded-xl text-sm font-semibold hover:bg-amber-700 transition-colors"
          >
            Let&apos;s Talk
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
