import Link from 'next/link';

export default function Don() {
  return (
    <main className="min-h-screen px-6 py-10 text-white">
      <Link href="/es" className="inline-block mb-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:bg-white/10 transition">
          ←
        </div>
      </Link>
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-10 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-500 text-transparent bg-clip-text drop-shadow-xl">
        HACER UNA DONACIÓN
      </h1>
      <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          {
            label: 'Dirección Bitcoin',
            image: '/bitcoin.png',
            address: 'bc1qt3cgs7ajd2x65cmjr9u66663krt89ha5xhsj9c',
          },
          {
            label: 'Dirección Ethereum',
            image: '/ethereum.png',
            address: '0x6D3EE24FF55A46f89883043fF810B38F04Bf3485',
          },
          {
            label: 'Dirección Solana',
            image: '/solana.png',
            address: '42G1XK8Lz6c9vx5SzxEPg8WR2D3YEtPV7cbjAXqS9TUT',
          },
        ].map((crypto) => (
          <div
            key={crypto.label}
            className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-xl text-center"
          >
            <img
              src={crypto.image}
              alt={crypto.label}
              className="w-16 h-16 object-contain mx-auto mb-2"
            />
            <p className="text-sm text-indigo-300">{crypto.label}</p>
            <p className="break-all text-sm my-2">{crypto.address}</p>
            <button
              onClick={() => navigator.clipboard.writeText(crypto.address)}
              className="w-full py-2 mt-2 rounded bg-white/10 hover:bg-white/20 text-sm"
            >
              ⧉
            </button>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <p className="text-sm text-gray-400">
          Después de tu donación, completa el formulario en la sección{' '}
          <Link href="/es/confirmation" className="underline text-indigo-300">
            Confirmación
          </Link>.
        </p>
      </div>
    </main>
  );
}
