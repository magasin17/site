import Link from 'next/link';
import { useState } from 'react';

export default function Confirmation() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
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
        <Link
          href="/en"
          className="inline-block mb-8 rounded-full p-3 border border-white/30 hover:bg-white/10 transition"
        >
          ←
        </Link>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-8 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-500 text-transparent bg-clip-text drop-shadow-xl">
          CONFIRM YOUR DONATION
        </h1>

        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xeoabrky"
          method="POST"
          className="max-w-xl mx-auto bg-white/5 p-8 rounded-xl backdrop-blur-md shadow-xl space-y-4"
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
            Submit
          </button>
          {submitted && (
            <p className="text-green-400 mt-2">Confirmation sent successfully!</p>
          )}
        </form>

        <div className="text-center mt-10">
          <p className="text-sm text-gray-400">
            Once your confirmation is validated, you will receive your guide by email. If you don't see it in your inbox, please check your spam folder. You can also fill out this form again if necessary.
          </p>
        </div>
      </main>
    </>
  );
}
