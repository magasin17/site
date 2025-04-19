import { useState } from 'react';
import Link from 'next/link';

export default function Confirmation() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen px-6 py-10 text-white bg-black">
      <Link href="/es" className="inline-block mb-8">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
          ←
        </div>
      </Link>

      <h1 className="text-3xl font-bold mb-8">Formulario de Confirmación</h1>

      <form
        onSubmit={handleSubmit}
        action="https://formspree.io/f/xeoabrky"
        method="POST"
        className="max-w-xl mx-auto space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          required
          className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          required
          className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Mensaje"
          rows={4}
          className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded transition"
        >
          Enviar
        </button>
        {submitted && <p className="text-green-400">¡Confirmación enviada con éxito!</p>}
      </form>

      <div className="text-center mt-12 text-sm text-gray-400 max-w-xl mx-auto">
        Una vez validada su confirmación, recibirá su guía por correo electrónico. Si no la encuentra en su bandeja de entrada, verifique la carpeta de spam o vuelva a completar el formulario si es necesario.
      </div>
    </main>
  );
}
