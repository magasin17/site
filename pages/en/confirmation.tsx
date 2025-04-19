import { useState } from 'react';
import Link from 'next/link';

export default function Confirmation() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: "url('/hero-bg.jpg') center/cover no-repeat",
          zIndex: -10,
        }}
      />
      <main className="min-h-screen text-white px-6 py-10">
        <div className="flex items-center mb-6">
          <Link href="/" className="mr-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
            ←
          </Link>
          <h1 className="text-3xl font-bold">CONFIRM YOUR DONATION</h1>
        </div>

        <form
          action="https://formspree.io/f/xeoabrky"
          method="POST"
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-4"
        >
          <input type="text" name="name" placeholder="Name" required className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none" />
          <input type="email" name="email" placeholder="Email" required className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none" />
          <textarea name="message" placeholder="Message" rows={4} className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none" />
          <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded transition">
            Send
          </button>
          {submitted && <p className="text-green-400">Confirmation sent successfully!</p>}
        </form>

        <p className="text-center text-sm text-gray-400 mt-10 max-w-xl mx-auto">
          Once your confirmation is validated, you’ll receive your guide by email. If you don’t see it in your inbox, check your spam folder. You can also fill the form again if needed.
        </p>
      </main>
    </>
  );
}
