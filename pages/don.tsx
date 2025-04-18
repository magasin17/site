import Link from 'next/link';

export default function Don() {
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

      <main className="relative min-h-screen text-white px-6 py-16 overflow-x-hidden">
        <section className="max-w-5xl mx-auto text-center">
          <Link href="/" className="text-indigo-400 underline mb-6 block text-sm">← Retour à l’accueil</Link>
          <h1 className="text-3xl font-bold mb-4 drop-shadow-lg">Faire un don</h1>
          <p className="text-gray-300 mb-2">
            Montant minimum requis : <span className="text-white font-semibold">$49</span>
          </p>
          <p className="mb-10 text-gray-300">Contribuez via l'une des adresses suivantes :</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {/* Bitcoin */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl text-center">
              <img src="/bitcoin.png" alt="Bitcoin" className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Bitcoin</h2>
              <div className="bg-gray-900 rounded-lg p-3">
                <code className="text-sm break-all text-yellow-400">bc1qt3cgs7ajd2x65cmjr9u66663krt89ha5xhsj9c</code>
                <button
                  className="block mt-2 text-sm text-indigo-400 hover:text-indigo-200"
                  onClick={() => navigator.clipboard.writeText('bc1qt3cgs7ajd2x65cmjr9u66663krt89ha5xhsj9c')}
                >
                  Copier
                </button>
              </div>
            </div>

            {/* Ethereum */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl text-center">
              <img src="/ethereum.png" alt="Ethereum" className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Ethereum</h2>
              <div className="bg-gray-900 rounded-lg p-3">
                <code className="text-sm break-all text-purple-400">0x6D3EE24FF55A46f89883043fF810B38F04Bf3485</code>
                <button
                  className="block mt-2 text-sm text-indigo-400 hover:text-indigo-200"
                  onClick={() => navigator.clipboard.writeText('0x6D3EE24FF55A46f89883043fF810B38F04Bf3485')}
                >
                  Copier
                </button>
              </div>
            </div>

            {/* Solana */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl text-center">
              <img src="/solana.png" alt="Solana" className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Solana</h2>
              <div className="bg-gray-900 rounded-lg p-3">
                <code className="text-sm break-all text-green-400">42G1XK8Lz6c9vx5SzxEPg8WR2D3YEtPV7cbjAXqS9TUT</code>
                <button
                  className="block mt-2 text-sm text-indigo-400 hover:text-indigo-200"
                  onClick={() => navigator.clipboard.writeText('42G1XK8Lz6c9vx5SzxEPg8WR2D3YEtPV7cbjAXqS9TUT')}
                >
                  Copier
                </button>
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-400">
            Une fois votre don effectué, pensez à remplir le formulaire dans la section <Link href="/confirmation" className="underline text-indigo-300">Confirmation</Link>.
          </p>
        </section>
      </main>
    </>
  );
}
