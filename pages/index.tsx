import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div id="hero" />

      <main className="relative min-h-screen flex flex-col items-center px-6 py-16">
        {/* Titre */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-6 drop-shadow-xl">
          FAITES UN DON CRYPTO ET RECEVEZ UN GUIDE EXCLUSIF
        </h1>
        <p className="text-lg text-gray-300 mb-10 text-center max-w-2xl">
          Contribuez en BTC, ETH ou SOL et obtenez un guide exclusif :<br/>
          <span className="italic text-indigo-300">
            "Comment ne plus jamais perdre de l'argent en crypto"
          </span>
        </p>
        <Link
          href="/don"
          className="mb-16 bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-700 hover:to-indigo-600
                     px-12 py-4 rounded-full text-lg font-semibold text-white shadow-xl transition-transform
                     transform hover:scale-105"
        >
          FAIRE UN DON
        </Link>

        {/* Cartes en perspective */}
        <div className="perspective-1000 flex flex-col sm:flex-row gap-8">
          {['bitcoin','ethereum','solana'].map((coin) => (
            <div
              key={coin}
              className="backdrop-glass border border-white/10 rounded-3xl p-8 flex flex-col items-center
                         shadow-2xl transform transition-transform duration-500 hover:-translate-y-2
                         hover:rotate-y-6 hover:scale-105 origin-center"
            >
              <img
                src={`/${coin}.png`}
                alt={coin}
                className="w-32 h-32 object-contain mb-4"
              />
              <h3 className="text-2xl font-semibold capitalize drop-shadow-lg">
                {coin}
              </h3>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
