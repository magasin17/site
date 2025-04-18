import Link from 'next/link';

export default function Don() {
  return (
    <>
      {/* Fond de page comme sur la page d'accueil */}
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

      <main className="relative min-h-screen flex flex-col items-center px-6 py-16 text-white overflow-x-hidden">
        <section className="max-w-2xl w-full text-center">
          <Link href="/" className="text-indigo-400 underline mb-6 block text-sm">← Retour à l’accueil</Link>
          <h1 className="text-3xl font-bold mb-6 drop-shadow-lg">Faire un don</h1>
          <p className="mb-8 text-gray-300">Vous pouvez contribuer via l'une des adresses suivantes :</p>

          {/* Bitcoin */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 mb-6 shadow-xl">
            <h2 className="text-xl font-semibold mb-2">Bitcoin</h2>
            <div className="flex items-center justify-between bg-gray-900 rounded-lg p-3">
              <code className="text-sm break-all">bc1qt3cgs7ajd2x65cmjr9u66663krt89ha5xhsj9c</code>
              <button
                className="ml-4 text-sm text-indigo-400 hover:text-indigo-200"
                onClick={() => navigator.clipboard.writeText('bc1qt3cgs7ajd2x65cmjr9u66663krt89ha5xhsj9c')}
              >
                Copier
              </button>
            </div>
          </div>

          {/* Ethereum */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 mb-6 shadow-xl">
            <h2 className="text-xl font-semibold mb-2">Ethereum</h2>
            <div className="flex items-center justify-between bg-gray-900 rounded-lg p-3">
              <code className="text-sm break-all">0x6D3EE24FF55A46f89883043fF810B38F04Bf3485</code>
              <button
                className="ml-4 text-sm text-indigo-400 hover:text-indigo-200"
                onClick={() => navigator.clipboard.writeText('0x6D3EE24FF55A46f89883043fF810B38F04Bf3485')}
              >
                Copier
              </button>
            </div>
          </div>

          {/* Solana */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 mb-6 shadow-xl">
            <h2 className="text-xl font-semibold mb-2">Solana</h2>
            <div className="flex items-center justify-between bg-gray-900 rounded-lg p-3">
              <code className="text-sm break-all">42G1XK8Lz6c9vx5SzxEPg8WR2D3YEtPV7cbjAXqS9TUT</code>
              <button
                className="ml-4 text-sm text-indigo-400 hover:text-indigo-200"
                onClick={() => navigator.clipboard.writeText('42G1XK8Lz6c9vx5SzxEPg8WR2D3YEtPV7cbjAXqS9TUT')}
              >
                Copier
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
