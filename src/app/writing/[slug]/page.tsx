import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getAllSlugs } from "@/lib/posts";
import type { ContentBlock } from "@/lib/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | MorningEdge`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={index} className="text-[#4A4A4A] text-base leading-[1.85] mb-6">
          {block.text}
        </p>
      );
    case "subheading":
      return (
        <h2
          key={index}
          className="text-2xl font-bold text-[#0A0A0A] mt-12 mb-4 leading-snug"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {block.text}
        </h2>
      );
    case "pullquote":
      return (
        <blockquote
          key={index}
          className="my-10 border-l-4 border-[#D4A017] pl-6 py-2"
        >
          <p
            className="text-xl font-semibold text-[#0A0A0A] leading-snug italic"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {block.text}
          </p>
        </blockquote>
      );
    case "emphasis":
      return (
        <p
          key={index}
          className="text-base font-semibold text-[#0A0A0A] leading-relaxed mb-6"
        >
          {block.text}
        </p>
      );
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      {/* Article header */}
      <section className="bg-[#0A0A0A] pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/writing"
            className="text-[#D4A017] text-sm font-semibold uppercase tracking-widest hover:underline"
          >
            ← Writing
          </Link>
          <div className="mt-8 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4A017]">
              {post.category}
            </span>
          </div>
          <h1
            className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {post.title}
          </h1>
          <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-2xl">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500 border-t border-white/10 pt-6">
            <span>Olamilekan E. Wealth</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Thumbnail strip */}
      <div
        className="h-2 w-full"
        style={{ background: post.thumbnail.gradient }}
      />

      {/* Article body */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {post.content.map((block, i) => renderBlock(block, i))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#F5F5F5] py-16 px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-[#D4A017] uppercase tracking-widest mb-1">
              More Writing
            </p>
            <p className="text-[#0A0A0A] font-bold text-lg" style={{ fontFamily: "var(--font-playfair)" }}>
              Ideas worth acting on.
            </p>
          </div>
          <Link
            href="/writing"
            className="inline-block bg-[#0A0A0A] text-white px-8 py-4 rounded-xl text-sm font-semibold hover:bg-[#1a1a1a] transition-colors whitespace-nowrap"
          >
            Back to Writing
          </Link>
        </div>
      </section>
    </>
  );
}
