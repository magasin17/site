import { useState } from 'react';
import Link from 'next/link';

const wallets = {
  BTC: 'bc1qt3cgs7ajd2x65cmjr9u66663krt89ha5xhsj9c',
  ETH: '0x6D3EE24FF55A46f89883043fF810B38F04Bf3485',
  SOL: '42G1XK8Lz6c9vx5SzxEPg8WR2D3YEtPV7cbjAXqS9TUT',
};

export default function Don() {
  const [copied, setCopied] = useState('');

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(''), 1500);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-indigo-900 to-purple-900 text-white p-8 overflow-x-hidden">
      <section className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Faire un don</h1>
        <p className="text-gray-300 text-center mb-10">
          Choisissez une cryptomonnaie et envoyez <strong>au minimum 49 $</strong> à l’adresse correspondante :
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* BTC */}
          <div className="bg-gray-900 p-6 rounded-xl text-center shadow-md">
            <img src="/bitcoin.png" alt="Bitcoin" className="w-12 h-12 mx-auto mb-2" />
            <h2 className="text-xl font-semibold mb-2">Bitcoin (BTC)</h2>
            <p className="text-orange-400 break-all">{wallets.BTC}</p>
            <button
              onClick={() => handleCopy(wallets.BTC, 'BTC')}
              className="mt-3 bg-gray-800 hover:bg-gray-700 px-4 py-1 rounded text-sm"
            >
              {copied === 'BTC' ? 'Copié !' : 'Copier'}
            </button>
          </div>

          {/* ETH */}
          <div className="bg-gray-900 p-6 rounded-xl text-center shadow-md">
            <img src="/ethereum.png" alt="Ethereum" className="w-12 h-12 mx-auto mb-2" />
            <h2 className="text-xl font-semibold mb-2">Ethereum (ETH)</h2>
            <p className="text-blue-400 break-all">{wallets.ETH}</p>
            <button
              onClick={() => handleCopy(wallets.ETH, 'ETH')}
              className="mt-3 bg-gray-800 hover:bg-gray-700 px-4 py-1 rounded text-sm"
            >
              {copied === 'ETH' ? 'Copié !' : 'Copier'}
            </button>
          </div>

          {/* SOL */}
          <div className="bg-gray-900 p-6 rounded-xl text-center shadow-md">
            <img src="/solana.png" alt="Solana" className="w-12 h-12 mx-auto mb-2" />
            <h2 className="text-xl font-semibold mb-2">Solana (SOL)</h2>
            <p className="text-purple-400 break-all">{wallets.SOL}</p>
            <button
              onClick={() => handleCopy(wallets.SOL, 'SOL')}
              className="mt-3 bg-gray-800 hover:bg-gray-700 px-4 py-1 rounded text-sm"
            >
              {copied === 'SOL' ? 'Copié !' : 'Copier'}
            </button>
          </div>
        </div>

        <p className="mt-10 text-center">
          Après votre don, <Link href="/confirmation" className="text-indigo-400 underline">remplissez ce formulaire</Link> pour recevoir le guide PDF.
        </p>
      </section>
    </main>
  );
}
