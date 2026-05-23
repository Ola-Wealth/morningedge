import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import BlogCard from "@/components/BlogCard";
import NewsletterForm from "@/components/NewsletterForm";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing | MorningEdge — Ideas Worth Acting On",
  description:
    "Thought leadership on strategy, AI systems, leadership, personal development, and the psychology of performance. Writing by Olamilekan E. Wealth.",
  openGraph: {
    title: "Writing | MorningEdge",
    description: "Ideas worth acting on. Writing on strategy, AI, leadership, and performance.",
    type: "website",
  },
};

export default function WritingPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0A0A0A] py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#D4A017] text-sm font-semibold uppercase tracking-widest mb-4">Writing</p>
          <h1
            className="text-5xl lg:text-6xl font-black text-white max-w-2xl leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ideas Worth Acting On.
          </h1>
          <p className="text-gray-400 mt-6 max-w-xl text-lg leading-relaxed">
            Writing on strategy, AI systems, leadership, personal development, and the psychology of performance. Not theory for its own sake. Ideas that change how you think, decide, and lead.
          </p>
        </div>
      </section>

      {/* Blog grid */}
      <SectionWrapper className="bg-[#F5F5F5]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </SectionWrapper>

      {/* Newsletter CTA */}
      <section className="bg-[#0A0A0A] py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[#D4A017] text-sm font-semibold uppercase tracking-widest mb-4">Newsletter</p>
          <h2
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Want writing like this in your inbox?
          </h2>
          <p className="text-gray-400 mb-8">
            Subscribe and get the clearest thinking on strategy, AI, and leadership delivered directly to you.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
