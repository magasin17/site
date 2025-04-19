import Link from 'next/link';
import { Copy } from 'lucide-react';
import { useState } from 'react';

export default function Donation() {
  const wallets = [
    { name: 'Bitcoin', address: 'bc1qexample1234567890', image: '/bitcoin.png' },
    { name: 'Ethereum', address: '0xExampleAddressForETH1234', image: '/ethereum.png' },
    { name: 'Solana', address: 'So1ExampleAddressForSolana', image: '/solana.png' },
  ];

  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(address);
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
          DONAR CON CRIPTO
        </h1>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
          {wallets.map((wallet) => (
            <div key={wallet.name} className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-xl text-center">
              <img src={wallet.image} alt={wallet.name} className="w-20 h-20 object-contain mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{wallet.name}</h3>
              <div className="flex items-center justify-between px-2 bg-white/10 py-2 rounded">
                <code className="text-xs break-all text-left">{wallet.address}</code>
                <button onClick={() => handleCopy(wallet.address)}>
                  <Copy size={16} />
                </button>
              </div>
            </div>
          ))}
        </section>

        <p className="text-sm text-gray-400 text-center mt-10">
          Una vez completada tu donación, asegúrate de rellenar el formulario en la sección <Link href="/es/confirmation" className="underline text-indigo-300">Confirmación</Link>.
        </p>
      </main>
    </>
  );
}