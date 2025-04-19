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
      {/* Back Button */}
      <div className="px-6 pt-6">
        <Link href="/de" className="inline-flex items-center justify-center w-10 h-10 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition">
          <span className="text-xl">←</span>
        </Link>
      </div>

      <main className="min-h-screen px-6 py-10 text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-500 text-transparent bg-clip-text drop-shadow-xl">
          SPENDE BESTÄTIGEN
        </h1>

        <form
          action="https://formspree.io/f/xeoabrky"
          method="POST"
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-4"
        >
          <input type="text" name="name" placeholder="Name" required className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none" />
          <input type="email" name="email" placeholder="Email" required className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none" />
          <textarea name="message" placeholder="Nachricht" rows={4} className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none" />
          <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded transition">Senden</button>
          {submitted && <p className="text-green-400">Bestätigung erfolgreich gesendet!</p>}
        </form>

        <div className="text-center mt-10 text-sm text-gray-400 max-w-lg mx-auto">
          Nach erfolgreicher Bestätigung erhalten Sie Ihren Guide per E-Mail. Überprüfen Sie bitte Ihren Spam-Ordner, falls Sie keine Nachricht erhalten, oder füllen Sie das Formular erneut aus.
        </div>
      </main>
    </>
  );
}
