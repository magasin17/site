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
        <Link
          href="/don"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-2xl text-white font-semibold transition"
        >
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
}import Link from 'next/link';

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
        <Link
          href="/don"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-2xl text-white font-semibold transition"
        >
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

export default function Confirmation() { const [submitted, setSubmitted] = useState(false);

const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

return ( <main className="min-h-screen bg-gradient-to-br from-black via-indigo-900 to-purple-900 text-white p-8"> <section className="max-w-xl mx-auto"> <h1 className="text-3xl font-bold mb-6 text-center">Confirmation de don</h1>

{submitted ? (
      <div className="bg-green-600/10 p-6 rounded-xl text-center shadow">
        <p className="text-green-400 font-semibold">
          Merci pour votre don !<br />Nous allons vérifier votre transaction manuellement et vous enverrons le guide par e-mail.
        </p>
      </div>
    ) : (
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          required
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 placeholder-gray-400 text-white"
          placeholder="Votre nom"
        />
        <input
          required
          type="email"
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 placeholder-gray-400 text-white"
          placeholder="Votre email"
        />
        <textarea
          required
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 placeholder-gray-400 text-white"
          placeholder="Lien ou hash de transaction (txid)"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition"
        >
          Envoyer
        </button>
      </form>
    )}
  </section>
</main>

); }

