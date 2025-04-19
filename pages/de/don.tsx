import Link from 'next/link';
import { Copy } from 'lucide-react';
import { useState } from 'react';

export default function Don() {
  const wallets = [
    { name: 'Bitcoin', address: 'bc1qexamplebtcaddress...', image: '/bitcoin.png' },
    { name: 'Ethereum', address: '0xexampleethaddress...', image: '/ethereum.png' },
    { name: 'Solana', address: 'So1ExampleSolAddress...', image: '/solana.png' },
  ];

  const [copied, setCopied] = useState('');

  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopied(address);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <>
      {/* Back Button */}
      <div className="px-6 pt-6">
        <Link href="/de" className="inline-flex items-center justify-center w-10 h-10 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition">
          <span className="text-xl">←</span>
        </Link>
      </div>

      <main className="min-h-screen px-6 py-8 text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-500 text-transparent bg-clip-text drop-shadow-xl">
          EINE SPENDE MACHEN
        </h1>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {wallets.map((wallet) => (
            <div key={wallet.name} className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-xl text-center flex flex-col items-center">
              <img src={wallet.image} alt={wallet.name} className="w-20 h-20 object-contain mb-4" />
              <h3 className="text-lg font-semibold mb-2">{wallet.name}</h3>
              <p className="text-sm break-words mb-2 text-indigo-300">{wallet.address}</p>
              <button onClick={() => handleCopy(wallet.address)} className="mt-2 p-2 bg-white/10 hover:bg-white/20 rounded-full">
                <Copy size={18} />
              </button>
              {copied === wallet.address && <p className="text-xs text-green-400 mt-1">Kopiert!</p>}
            </div>
          ))}
        </section>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-400">
            Nach Ihrer Spende füllen Sie bitte das <Link href="/de/confirmation" className="underline text-indigo-300">Bestätigungsformular</Link> aus.
          </p>
        </div>
      </main>
    </>
  );
}
