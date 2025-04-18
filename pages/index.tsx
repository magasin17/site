import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Fond 3D */}
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

        {/* Titre principal */}
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            FAITES UN DON CRYPTO ET RECEVEZ UN GUIDE EXCLUSIF
          </h1>

          {/* Texte d'intro */}
          <p className="text-lg text-gray-300 mb-4">
            Contribuez en BTC, ETH ou SOL et obtenez un guide exclusif :
          </p>

          {/* Titre du guide mis en avant */}
          <span className="relative inline-block text-indigo-300 font-semibold text-lg md:text-xl mb-4">
            <span className="z-10 relative">“Comment ne plus jamais perdre de l'argent en crypto”</span>
            <span className="absolute left-0 bottom-0 w-full h-1 bg-indigo-500/40 blur-md rounded"></span>
          </span>

          {/* Bouton */}
          <div className="mt-10">
            <Link
              href="/don"
              className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-8 py-3 rounded-full text-white font-semibold shadow-xl transition"
            >
              FAIRE UN DON
            </Link>
          </div>
        </section>

        {/* Logos crypto */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto">
          {[
            { name: 'Bitcoin', image: '/bitcoin.png' },
            { name: 'Ethereum', image: '/ethereum.png' },
            { name: 'Solana', image: '/solana.png' },
          ].map((coin) => (
            <div
              key={coin.name}
              className="flex flex-col items-center text-center bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-xl"
            >
              <img
                src={coin.image}
                alt={coin.name}
                className="w-20 h-20 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-white">{coin.name}</h3>
            </div>
          ))}
        </section>

        {/* Texte vers confirmation — tout en bas */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-400">
            Une fois votre don effectué, pensez à remplir le formulaire dans la section <Link href="/confirmation" className="underline text-indigo-300">Confirmation</Link>.
          </p>
        </div>
      </main>
    </>
  );
}
