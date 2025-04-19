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
        style={
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: "url('/hero-bg.jpg') center/cover no-repeat",
          zIndex: -10,
        }
      />
      <main className="min-h-screen text-white px-6 py-10">
        <Link href="/es" className="inline-block p-3 mb-6 bg-white/10 hover:bg-white/20 rounded-full">
          <span className="text-lg">←</span>
        </Link>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-10 text-center bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-500 text-transparent bg-clip-text drop-shadow-xl">
          CONFIRMACIÓN
        </h1>

        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xeoabrky"
          method="POST"
          className="max-w-2xl mx-auto space-y-4"
        >
          <input type="text" name="name" placeholder="Nombre" required className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none" />
          <input type="email" name="email" placeholder="Correo" required className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none" />
          <textarea name="message" placeholder="Mensaje" rows=4 className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none" />
          <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded transition">
            Enviar
          </button>
          {submitted && <p className="text-green-400">CONFIRMACIÓN sent successfully!</p>}
        </form>

        <div className="text-center mt-12 text-sm text-gray-400">
          <p>Una vez validada tu confirmación, recibirás la guía por correo electrónico. Si no lo encuentras en tu bandeja de entrada, revisa tu carpeta de spam o vuelve a enviar el formulario.</p>
        </div>
      </main>
    </>
  );
}