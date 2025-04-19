import Link from 'next/link';
import { Copy } from 'lucide-react';

export default function Donation() {
  const wallets = [
    { name: 'Bitcoin (BTC)', address: 'bc1qxyz...', image: '/bitcoin.png' },
    { name: 'Ethereum (ETH)', address: '0xabc123...', image: '/ethereum.png' },
    { name: 'Solana (SOL)', address: '7gH9nfd...', image: '/solana.png' },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      {/* Background */}
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

      <main className="min-h-screen text-white px-6 py-10">
        {/* Return Button */}
        <Link href="/en" className="inline-block mb-8">
          <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-10 text-center bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-500 text-transparent bg-clip-text drop-shadow-xl">
          MAKE A DONATION
        </h1>

        {/* Wallets */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {wallets.map((wallet) => (
            <div
              key={wallet.name}
              className="bg-white/5 backdrop-blur-md p-6 rounded-2xl text-center shadow-xl"
            >
              <img
                src={wallet.image}
                alt={wallet.name}
                className="w-20 h-20 object-contain mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{wallet.name}</h3>
              <p className="text-sm break-all text-indigo-300 mb-2">{wallet.address}</p>
              <button
                onClick={() => copyToClipboard(wallet.address)}
                className="mx-auto bg-white/10 p-2 rounded hover:bg-white/20 transition"
              >
                <Copy size={18} />
              </button>
            </div>
          ))}
        </section>

        {/* Link to confirmation */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-400">
            Once your donation is complete, please fill out the form in the <Link href="/en/confirmation" className="underline text-indigo-300">Confirmation</Link> section.
          </p>
        </div>
      </main>
    </>
  );
}
