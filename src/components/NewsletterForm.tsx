"use client";

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col sm:flex-row gap-3"
    >
      <input
        type="email"
        required
        placeholder="Enter your email"
        className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4A017] transition-colors"
      />
      <button
        type="submit"
        className="bg-[#D4A017] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-amber-700 transition-colors whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  );
}
