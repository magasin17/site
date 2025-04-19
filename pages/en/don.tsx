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
      <main className="min-h-screen text-white px-6 py-10">
        <div className="flex items-center mb-6">
          <Link href="/" className="mr-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
            ←
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-500 text-transparent bg-clip-text drop-shadow-xl">
            MAKE A DONATION
          </h1>
        </div>

        <p className="text-gray-300 mb-6">Send a minimum of $49 in BTC, ETH or SOL:</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { name: 'Bitcoin', address: 'bc1qt3cgs7ajd2x65cmjr9u66663krt89ha5xhsj9c' },
            { name: 'Ethereum', address: '0x6D3EE24FF55A46f89883043fF810B38F04Bf3485' },
            { name: 'Solana', address: '42G1XK8Lz6c9vx5SzxEPg8WR2D3YEtPV7cbjAXqS9TUT' },
          ].map((wallet) => (
            <div key={wallet.name} className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-xl">
              <h3 className="text-lg font-semibold mb-2">{wallet.name}</h3>
              <div className="flex items-center justify-between bg-white/10 p-2 rounded text-sm">
                <span className="break-all">{wallet.address}</span>
                <button
                  onClick={() => navigator.clipboard.writeText(wallet.address)}
                  className="ml-2 p-1 bg-white/20 hover:bg-white/30 rounded"
                  aria-label={`Copy ${wallet.name} address`}
                >
                  ⧉
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-400">
            After your donation, don’t forget to fill the <Link href="/en/confirmation" className="underline text-indigo-300">Confirmation</Link> form.
          </p>
        </div>
      </main>
    </>
  );
}
