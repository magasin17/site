import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Fond 3D derrière tout */}
      <div id="background" />

      <main className="relative min-h-screen flex flex-col px-6 py-12">
        {/* Nav */}
        <nav className="flex justify-between items-center mb-12">
          <div className="text-2xl font-bold">cryptolooser.com</div>
          <ul className="flex gap-8 text-sm">
            <li><Link href="/don">Donate</Link></li>
            <li><Link href="/confirmation">Confirmation</Link></li>
          </ul>
        </nav>

        {/* Héros */}
        <section className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-bold leading-tight mb-6 text-gray-100">
            FAITES UN DON CRYPTO ET RECEVEZ UN GUIDE EXCLUSIF
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Contribuez en BTC, ETH ou SOL et obtenez un guide exclusif :<br/>
            <span className="italic">"Comment ne plus jamais perdre de l'argent en crypto"</span>
          </p>
          <Link
            href="/don"
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 
                       px-10 py-4 rounded-full text-lg font-semibold text-white shadow-lg transition"
          >
            FAIRE UN DON
          </Link>
        </section>

        {/* Cartes crypto */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {['bitcoin','ethereum','solana'].map((coin) => (
            <div
              key={coin}
              className="backdrop-glass border border-white/10 rounded-2xl p-8 flex flex-col items-center 
                         shadow-2xl transform hover:scale-105 transition"
            >
              <img src={`/${coin}.png`} alt={coin} className="w-24 h-24 mb-4" />
              <h3 className="text-2xl font-semibold capitalize">{coin}</h3>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
