import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen text-white p-8 overflow-x-hidden">
      <nav className="flex justify-between items-center mb-12 flex-wrap">
        <div className="text-xl font-bold">cryptolooser.com</div>
        <ul className="flex flex-wrap gap-6 text-sm mt-4 sm:mt-0">
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
          <span className="italic">"Comment ne plus jamais perdre de l'argent en crypto"</span>
        </p>
        <Link href="/don" className="inline-block bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-2xl text-white font-semibold transition">
          FAIRE UN DON
        </Link>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto">
        {/* Bitcoin */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center shadow-2xl border border-white/10">
          <img src="/bitcoin.png" alt="Bitcoin" className="w-20 h-20 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Bitcoin</h3>
        </div>

        {/* Ethereum */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center shadow-2xl border border-white/10">
          <img src="/ethereum.png" alt="Ethereum" className="w-20 h-20 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Ethereum</h3>
        </div>

        {/* Solana */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center shadow-2xl border border-white/10">
          <img src="/solana.png" alt="Solana" className="w-20 h-20 mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Solana</h3>
        </div>
      </section>
    </main>
  );
}
