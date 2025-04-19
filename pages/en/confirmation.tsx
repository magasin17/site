import { useState } from 'react';
import Link from 'next/link';

export default function Confirmation() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen px-6 py-10 text-white">
      <Link href="/en" className="inline-block mb-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:bg-white/10 transition">
          ←
        </div>
      </Link>
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-10 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-500 text-transparent bg-clip-text drop-shadow-xl">
        CONFIRMATION
      </h1>
      <form
        onSubmit={handleSubmit}
        action="https://formspree.io/f/xeoabrky"
        method="POST"
        className="max-w-xl mx-auto space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded transition"
        >
          Send
        </button>
        {submitted && (
          <p className="text-green-400">Confirmation sent successfully!</p>
        )}
      </form>
      <div className="text-center mt-10 text-sm text-gray-400">
        <p>
          Once your confirmation is validated, you will receive the guide by email. If you don’t see it in your inbox, check your spam folder. You can also submit this form again if needed.
        </p>
      </div>
    </main>
  );
}
