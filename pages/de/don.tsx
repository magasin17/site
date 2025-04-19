import Link from 'next/link';

export default function Don() {
  return (
    <>
      {/* 3D-Hintergrund */}
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
          {/* Zurück-Button */}
          <div className="mb-8">
            <Link
              href="/de"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 transition"
              aria-label="Zurück"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
          </div>

          {/* Titel mit Farbverlauf */}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-500 text-transparent bg-clip-text drop-shadow-xl">
            EINE SPENDE MACHEN
          </h1>

          <p className="text-gray-300 mb-2">
            Mindestbetrag erforderlich: <span className="text-white font-semibold">$49</span>
          </p>
          <p className="mb-10 text-gray-300">Spenden Sie über eine der folgenden Adressen:</p>

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
                    onClick={() => navigator.clipboard.writeText(crypto.address)}
                    className="mt-2 text-indigo-400 hover:text-indigo-200"
                    aria-label="Adresse kopieren"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zM20 5H8c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 18H8V7h12v16z"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm text-gray-400">
            Nachdem Sie gespendet haben, füllen Sie bitte das Formular im Bereich <Link href="/de/confirmation" className="underline text-indigo-300">Bestätigung</Link> aus.
          </p>
        </section>
      </main>
    </>
  );
}
