"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="text-center py-16">
        <p className="text-2xl font-bold text-[#0A0A0A]" style={{ fontFamily: "var(--font-playfair)" }}>
          Message received.
        </p>
        <p className="text-[#4A4A4A] mt-2">I will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-[#0A0A0A]">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0A0A] bg-white focus:outline-none focus:border-[#D4A017] transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-[#0A0A0A]">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0A0A] bg-white focus:outline-none focus:border-[#D4A017] transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="building" className="text-sm font-medium text-[#0A0A0A]">What are you building?</label>
        <input
          id="building"
          name="building"
          type="text"
          placeholder="Tell me briefly about your venture or project"
          className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0A0A] bg-white focus:outline-none focus:border-[#D4A017] transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-[#0A0A0A]">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="How can I help you?"
          className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0A0A] bg-white focus:outline-none focus:border-[#D4A017] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="bg-[#D4A017] text-white px-8 py-4 rounded-xl text-sm font-semibold hover:bg-amber-700 transition-colors self-start"
      >
        Send It
      </button>
    </form>
  );
}
