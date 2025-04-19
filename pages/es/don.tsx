import Link from 'next/link';

export default function Don() {
  return (
    <main className="min-h-screen px-6 py-10 text-white bg-black">
      <Link href="/es" className="inline-block mb-8">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
          ←
        </div>
      </Link>

      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-10 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-500 text-transparent bg-clip-text drop-shadow-xl">
        DONAR
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { name: 'Bitcoin', address: 'bc1qt3cgs7ajd2x65cmjr9u66663krt89ha5xhsj9c' },
          { name: 'Ethereum', address: '0x6D3EE24FF55A46f89883043fF810B38F04Bf3485' },
          { name: 'Solana', address: '42G1XK8Lz6c9vx5SzxEPg8WR2D3YEtPV7cbjAXqS9TUT' },
        ].map((coin) => (
          <div key={coin.name} className="bg-white/5 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">{coin.name}</h3>
            <div className="flex items-center justify-between">
              <span className="text-sm break-all">{coin.address}</span>
              <button
                onClick={() => navigator.clipboard.writeText(coin.address)}
                className="ml-2 p-2 rounded bg-white/10 hover:bg-white/20"
              >
                ⧉
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-sm text-gray-400">
          Una vez que haya donado, complete el <Link href="/es/confirmation" className="underline text-indigo-300">formulario de confirmación</Link>.
        </p>
      </div>
    </main>
  );
}
