import { useState } from 'react';

export default function Confirmation() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Confirmation de don</h1>
      {submitted ? (
        <div className="bg-green-100 p-4 rounded-xl shadow">
          <p className="text-green-800 font-semibold">Merci pour votre don ! Nous allons vérifier votre transaction manuellement et vous enverrons le guide par e-mail.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input required className="w-full p-2 border rounded" placeholder="Votre nom" />
          <input required type="email" className="w-full p-2 border rounded" placeholder="Votre email" />
          <textarea required className="w-full p-2 border rounded" placeholder="Lien ou hash de transaction (txid)" />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Envoyer
          </button>
        </form>
      )}
    </main>
  );
}