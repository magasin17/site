import { useState } from 'react';

export default function Confirmation() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-indigo-900 to-purple-900 text-white p-8">
      <section className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Confirmation de don</h1>

        {submitted ? (
          <div className="bg-green-600/10 p-6 rounded-xl text-center shadow">
            <p className="text-green-400 font-semibold">
              Merci pour votre don !<br />Nous allons vérifier votre transaction manuellement et vous enverrons le guide par e-mail.
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
