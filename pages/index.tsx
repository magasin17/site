import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Fond 3D */}
      <div id="hero" />

      <main className="relative min-h-screen flex flex-col items-center px-6 py-16">
        {/* Titre */}
        <h1 className="text-5xl font-extrabold text-center max-w-2xl mb-8 drop-shadow-lg">
          FAITES UN DON CRYPTO ET RECEVEZ UN GUIDE EXCLUSIF
        </h1>
        <p className="text-lg text-gray-300 mb-12 text-center max-w-lg">
          Contribuez en BTC, ETH ou SOL et obtenez un guide exclusif :<br/>
          <span className="italic">"Comment ne plus jamais perdre de l'argent en crypto"</span>
        </p>
        <Link
          href="/don"
          className="mb-16 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 
                     px-10 py-4 rounded-full text-lg font-semibold text-white shadow-xl transition"
        >
          FAIRE UN DON
        </Link>

        {/* Cartes 3D */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 perspective-[1000px]">
          {['bitcoin','ethereum','solana'].map((coin) => (
            <div
              key={coin}
              className="backdrop-glass border border-white/10 rounded-2xl p-8 text-center
                         shadow-2xl transform hover:rotate-y-3 hover:scale-105 transition-transform duration-500 origin-center"
            >
              <img
                src={`/${coin}.png`}
                alt={coin}
                className="w-32 h-32 object-contain mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold capitalize">{coin}</h3>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
