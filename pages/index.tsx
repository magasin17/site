import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-indigo-900 to-purple-900 text-white p-8">
      <nav className="flex justify-between items-center mb-12">
        <div className="text-xl font-semibold">cryptolooser.com</div>
        <ul className="flex gap-6 text-sm">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/don">Donate</Link></li>
          <li><Link href="/confirmation">Confirmation</Link></li>
        </ul>
      </nav>

      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          FAITES UN DON CRYPTO ET RECEVEZ UN GUIDE EXCLUSIF
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Contribuez en BTC, ETH ou SOL et obtenez un guide exclusif :<br />
          <span className="italic">"Comment ne pas perdre d'argent dans la crypto."</span>
        </p>
        <Link href="/don" className="inline-block bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-2xl text-white font-semibold transition">
          FAIRE UN DON
        </Link>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
        <div className="bg-gray-900 p-6 rounded-2xl flex flex-col items-center shadow-lg">
          <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=030" alt="Bitcoin" className="w-16 h-16 mb-4" />
          <h3 className="text-lg font-semibold">Bitcoin</h3>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl flex flex-col items-center shadow-lg">
          <img src="https://cryptologos.cc/logos/ethereum-eth-logo.png?v=030" alt="Ethereum" className="w-16 h-16 mb-4" />
          <h3 className="text-lg font-semibold">Ethereum</h3>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl flex flex-col items-center shadow-lg">
          <img src="https://cryptologos.cc/logos/solana-sol-logo.png?v=030" alt="Solana" className="w-16 h-16 mb-4" />
          <h3 className="text-lg font-semibold">Solana</h3>
        </div>
      </section>
    </main>
  );
}
