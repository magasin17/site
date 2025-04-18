import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Fond de page */}
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
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-12 flex-wrap">
          <div className="text-2xl font-bold">cryptolooser.com</div>
          <ul className="flex gap-6 text-sm">
            <li><Link href="/don">Donate</Link></li>
            <li><Link href="/confirmation">Confirmation</Link></li>
          </ul>
        </nav>

        {/* Titre */}
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
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-8 py-3 rounded-full text-white font-semibold shadow-xl transition"
          >
            FAIRE UN DON
          </Link>

          <p className="mt-4 text-sm text-gray-400">
            Une fois votre don effectué, pensez à remplir le formulaire dans la section <Link href="/confirmation" className="underline text-indigo-300">Confirmation</Link>.
          </p>
        </section>

        {/* Logos crypto */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto">
          {['bitcoin', 'ethereum', 'solana'].map((coin) => (
            <div
              key={coin}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center shadow-2xl hover:scale-105 transition-transform"
            >
              <img src={`/${coin}.png`} alt={coin} className="w-24 h-24 object-contain mx-auto mb-4" />
              <h3 className="text-xl font-semibold capitalize">{coin}</h3>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
