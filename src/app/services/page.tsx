import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { Settings2, BrainCircuit, Mic2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | MorningEdge — Operations, AI, Executive Education",
  description:
    "Operations design, AI systems consulting, and executive education for founders and executives who are serious about building scalable businesses.",
  openGraph: {
    title: "Services | MorningEdge",
    description: "Three service pillars. One outcome: a business built to execute.",
    type: "website",
  },
};

const services = [
  {
    icon: <Settings2 size={28} />,
    title: "Operations Design",
    slug: "operations-design",
    image: "/pictures/IMG_342_1.jpeg",
    imageAlt: "Olamilekan E. Wealth — operations strategy",
    imagePosition: "object-[center_20%]",
    paragraphs: [
      "Most businesses do not fail because the idea is wrong. They fail because the operations cannot carry the weight of the ambition. Processes are undefined, responsibilities are unclear, and execution depends on a small group of people working at unsustainable intensity. That is not scale. That is a slow collapse.",
      "Operations Design is the work of building the internal architecture your business needs to grow without falling apart. It begins with mapping what actually happens inside your organization today: where decisions get made, where they get delayed, where work disappears. Then it moves into redesigning those structures, closing the gaps, and creating systems your team can own and run without constant oversight.",
      "The result is a business that moves faster, makes better decisions, and handles complexity without requiring heroics from a handful of individuals.",
    ],
    outcome: "The result: clear processes, accountable teams, and an operation built to scale.",
  },
  {
    icon: <BrainCircuit size={28} />,
    title: "AI Systems Consulting",
    slug: "ai-systems",
    image: "/pictures/IMG_342_3.jpeg",
    imageAlt: "Olamilekan E. Wealth — tech panel discussion",
    imagePosition: "object-[center_30%]",
    paragraphs: [
      "Most conversations about AI in business are either too abstract or too narrow. Either organizations are chasing a technology trend without a clear use case, or they are automating one small task and calling it transformation. Neither produces lasting value. And that is where I come in.",
      "AI Systems Consulting is practical, grounded, and outcome-focused. It starts by identifying the actual bottlenecks in your operations: where human judgment is being wasted on low-value tasks, where information is being lost between systems, where speed is constrained by manual processes. Then it designs AI-enabled workflows that solve those specific problems without adding unnecessary complexity or creating new dependencies.",
      "The goal is not to make your business look modern. The goal is to make your business execute better. Faster decisions, fewer errors, better use of your team's capacity, and systems that improve over time.",
    ],
    outcome: "The result: practical automation, improved decision quality, and workflows that compound over time.",
  },
  {
    icon: <Mic2 size={28} />,
    title: "Executive Education & Speaking",
    slug: "education-speaking",
    image: "/pictures/IMG_342_6.jpeg",
    imageAlt: "Olamilekan E. Wealth — keynote speaking on stage",
    imagePosition: "object-[center_15%]",
    paragraphs: [
      "Strategy is the easiest thing to talk about and the hardest thing to install. Most leaders understand what they should be doing. The gap is in the thinking frameworks, leadership habits, and organizational disciplines that make strategic execution possible. Knowledge that does not change behavior does not count.",
      "Executive Education and Speaking engagements are built around real change, not theoretical learning. Whether it is a keynote for a leadership conference, a workshop for a founding team, or a training program for an executive cohort, the goal is the same: to shift how people think, what they prioritize, and how they lead. Topics include operational strategy, AI adoption, performance systems, leadership under pressure, and building organizations that execute with discipline.",
      "The work is direct, challenging, and designed to produce results that outlast the event itself.",
    ],
    outcome: "The result: sharper thinking, stronger leadership disciplines, and teams that execute with intention.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0A0A0A] py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[#D4A017] text-sm font-semibold uppercase tracking-widest mb-4">Services</p>
            <h1
              className="text-5xl lg:text-6xl font-black text-white max-w-2xl leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Built for businesses serious about execution.
            </h1>
            <p className="text-gray-400 mt-6 max-w-xl text-lg leading-relaxed">
              Three service areas. Each one designed to remove a specific constraint standing between where your business is and where it needs to be.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      {services.map((service, i) => {
        const isEven = i % 2 === 0;
        return (
          <section key={service.slug} className={isEven ? "bg-white py-20" : "bg-[#F5F5F5] py-20"}>
            <div className="max-w-7xl mx-auto px-6">
              <FadeIn delay={0.05}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-sm ${isEven ? "" : "lg:[direction:rtl]"}`}>
                {/* Photo */}
                <div className="relative h-72 lg:h-auto min-h-[420px]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className={`object-cover ${service.imagePosition}`}
                  />
                  <div className="absolute inset-0 bg-[#0A0A0A]/30" />
                </div>

                {/* Content */}
                <div className={`bg-[#0A0A0A] p-10 lg:p-14 flex flex-col justify-center gap-6 ${isEven ? "" : "lg:[direction:ltr]"}`}>
                  <div className="text-[#D4A017] w-12 h-12 flex items-center justify-center bg-[#D4A017]/10 rounded-xl">
                    {service.icon}
                  </div>
                  <h2
                    className="text-3xl font-bold text-white leading-tight"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {service.title}
                  </h2>
                  <div className="flex flex-col gap-4">
                    {service.paragraphs.map((p, j) => (
                      <p key={j} className="text-gray-400 text-sm leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-[#D4A017] border border-[#D4A017]/30 bg-[#D4A017]/5 rounded-xl px-4 py-3 leading-relaxed">
                    {service.outcome}
                  </p>
                </div>
              </div>
            </FadeIn>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="bg-[#D4A017] py-24 px-6 text-center">
        <FadeIn>
          <h2
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Let&apos;s build something that lasts.
          </h2>
          <p className="text-amber-100 mb-10">
            If you are ready to move from fragmented execution to structured growth, I am ready to work.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#D4A017] px-10 py-5 rounded-xl text-sm font-semibold hover:bg-amber-50 transition-colors"
          >
            Start the Conversation
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
