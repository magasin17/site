import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Fond dynamique */}
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

      <main className="min-h-screen text-white px-6 py-16 flex flex-col items-center text-center">
        {/* Titre en 3 lignes avec gradient */}
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-wide mb-6">
          <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-500 text-transparent bg-clip-text drop-shadow-xl">
            FAIRE UN DON
          </span>
          <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-500 text-transparent bg-clip-text drop-shadow-xl">
            CRYPTO UN
          </span>
          <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-500 text-transparent bg-clip-text drop-shadow-xl">
            GUIDE EXCLUSIF
          </span>
        </h1>

        {/* Texte explicatif */}
        <p className="text-gray-300 max-w-xl mb-6 text-base sm:text-lg">
          Contribuez en BTC, ETH ou SOL et obtenez un guide exclusif :<br />
          <span className="italic">“Comment ne plus jamais perdre d’argent en crypto.”</span>
        </p>

        {/* Bouton */}
        <Link
          href="/don"
          className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-semibold text-white shadow-lg transition mb-16"
        >
          FAIRE UN DON
        </Link>

        {/* Logos crypto */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
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
        </div>
      </main>
    </>
  );
}
