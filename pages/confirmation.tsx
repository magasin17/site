// pages/confirmation.tsx
import { useState } from 'react';
import Link from 'next/link';

export default function Confirmation() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center px-6 py-16 text-white overflow-x-hidden">
      <section className="max-w-xl w-full">
        <Link href="/" className="text-indigo-400 underline mb-4 block text-sm">← Retour à l’accueil</Link>
        <h1 className="text-3xl font-bold mb-6 text-center drop-shadow-lg">Confirmation de don</h1>

        {submitted ? (
          <div className="backdrop-glass border border-white/10 rounded-2xl p-6 text-center shadow-2xl">
            <p className="text-green-400 font-semibold">
              Merci pour votre don !<br />
              Nous allons vérifier votre transaction manuellement et vous enverrons le guide par e-mail.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              required
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 placeholder-gray-400 text-white"
              placeholder="Votre nom"
            />
            <input
              required
              type="email"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 placeholder-gray-400 text-white"
              placeholder="Votre email"
            />
            <textarea
              required
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 placeholder-gray-400 text-white"
              placeholder="Lien ou hash de transaction (txid)"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Envoyer
            </button>
          </form>
        )}
      </section>
    </main>
);
}
