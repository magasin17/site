import Link from 'next/link';

export default function Don() {
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

      <main className="relative min-h-screen text-white px-6 py-16 overflow-x-hidden">
        <section className="max-w-5xl mx-auto text-center">
          <Link href="/" className="text-indigo-400 underline mb-6 block text-sm">← Retour à l’accueil</Link>
          
          <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-purple-500 to-indigo-400 text-transparent bg-clip-text tracking-wide drop-shadow-xl">
            Faire un don
          </h1>

          <p className="text-gray-300 mb-2">
            Montant minimum requis : <span className="text-white font-semibold">$49</span>
          </p>
          <p className="mb-10 text-gray-300">Contribuez via l'une des adresses suivantes :</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[
              {
                name: 'Bitcoin',
                logo: '/bitcoin.png',
                address: 'bc1qt3cgs7ajd2x65cmjr9u66663krt89ha5xhsj9c',
                color: 'text-yellow-400',
              },
              {
                name: 'Ethereum',
                logo: '/ethereum.png',
                address: '0x6D3EE24FF55A46f89883043fF810B38F04Bf3485',
                color: 'text-purple-400',
              },
              {
                name: 'Solana',
                logo: '/solana.png',
                address: '42G1XK8Lz6c9vx5SzxEPg8WR2D3YEtPV7cbjAXqS9TUT',
                color: 'text-green-400',
              },
            ].map((crypto) => (
              <div key={crypto.name} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl text-center">
                <img src={crypto.logo} alt={crypto.name} className="w-16 h-16 mx-auto mb-4" />
                <h2 className="text-xl font-semibold mb-2">{crypto.name}</h2>
                <div className="bg-gray-900 rounded-lg p-3">
                  <code className={`text-sm break-all ${crypto.color}`}>{crypto.address}</code>
                  <button
                    className="block mt-2 text-sm text-indigo-400 hover:text-indigo-200"
                    onClick={() => navigator.clipboard.writeText(crypto.address)}
                  >
                    Copier
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm text-gray-400">
            Une fois votre don effectué, pensez à remplir le formulaire dans la section <Link href="/confirmation" className="underline text-indigo-300">Confirmation</Link>.
          </p>
        </section>
      </main>
    </>
  );
}
