import Link from 'next/link';
import { Copy } from 'lucide-react';

export default function Donation() {
  const wallets = [
    {
      name: 'Bitcoin',
      address: 'bc1qexamplebtcaddress123',
      image: '/bitcoin.png',
    },
    {
      name: 'Ethereum',
      address: '0xexampleethaddress456',
      image: '/ethereum.png',
    },
    {
      name: 'Solana',
      address: 'SolExampleAddress789',
      image: '/solana.png',
    },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
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
        <Link
          href="/en"
          className="inline-block mb-8 rounded-full p-3 border border-white/30 hover:bg-white/10 transition"
        >
          ←
        </Link>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-10 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-500 text-transparent bg-clip-text drop-shadow-xl">
          MAKE A DONATION
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {wallets.map((wallet) => (
            <div
              key={wallet.name}
              className="flex flex-col items-center text-center bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-xl"
            >
              <img
                src={wallet.image}
                alt={wallet.name}
                className="w-20 h-20 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-white">{wallet.name}</h3>
              <p className="text-sm text-indigo-200 break-words my-2">{wallet.address}</p>
              <button
                onClick={() => copyToClipboard(wallet.address)}
                className="mt-2 hover:text-indigo-400 transition"
                aria-label="Copy wallet address"
              >
                <Copy size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-400">
            Once your donation is complete, don't forget to fill out the form on the{' '}
            <Link href="/en/confirmation" className="underline text-indigo-300">
              Confirmation
            </Link>{' '}
            page.
          </p>
        </div>
      </main>
    </>
  );
}
