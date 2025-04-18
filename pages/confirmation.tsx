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
      {/* Fond 3D */}
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

      <main className="min-h-screen text-white px-6 py-16 overflow-x-hidden">
        <section className="max-w-xl mx-auto text-center">

          {/* Bouton retour stylé avec espacement */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 transition"
              aria-label="Retour"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
          </div>

          <h1 className="text-3xl font-bold mb-6">Confirmation de Don</h1>

          {submitted ? (
            <p className="text-green-400 font-medium">
              Merci ! Votre demande de confirmation a été envoyée.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-white/10"
                required
              />
              <textarea
                placeholder="Adresse de transaction / hash / commentaire"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-white/10"
                rows={4}
                required
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-full text-white font-semibold shadow transition"
              >
                Envoyer
              </button>
            </form>
          )}

          {/* Texte informatif en bas */}
          <p className="mt-8 text-sm text-gray-400">
            Une fois votre confirmation validée, vous recevrez le guide à l'adresse mail spécifiée.<br />
            Si vous ne le recevez pas, vérifiez vos spams ou recommencez le formulaire.
          </p>
        </section>
      </main>
    </>
  );
}
