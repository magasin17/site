import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
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
        <nav className="flex justify-between items-center mb-12 flex-wrap">
          <div className="text-2xl font-bold">cryptolost.net</div>
          <ul className="flex gap-6 text-sm">
            <li><Link href="/es/don">Donación</Link></li>
            <li><Link href="/es/confirmation">Confirmación</Link></li>
          </ul>
        </nav>

        <div className="absolute top-6 right-6 flex gap-3">
          <Link href="/">
            <Image src="/flags/fr.png" alt="Français" width={24} height={16} />
          </Link>
          <Link href="/en">
            <Image src="/flags/gb.png" alt="English" width={24} height={16} />
          </Link>
          <Link href="/de">
            <Image src="/flags/de.png" alt="Deutsch" width={24} height={16} />
          </Link>
          <Link href="/es">
            <Image src="/flags/es.png" alt="Español" width={24} height={16} />
          </Link>
        </div>

        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-500 text-transparent bg-clip-text drop-shadow-xl">
            HAZ UNA DONACIÓN EN CRIPTO Y RECIBE UNA GUÍA EXCLUSIVA
          </h1>

          <p className="text-lg text-gray-300 mb-4">
            Dona en BTC, ETH o SOL y obtén una guía exclusiva:
          </p>

          <span className="relative inline-block text-indigo-300 font-semibold text-lg md:text-xl mb-4">
            <span className="z-10 relative">“Con esta nueva guía en mano, nunca volverás a perder dinero en cripto”</span>
            <span className="absolute left-0 bottom-0 w-full h-1 bg-indigo-500/40 blur-md rounded"></span>
          </span>

          <div className="mt-10">
            <Link
              href="/es/don"
              className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-8 py-3 rounded-full text-white font-semibold shadow-xl transition"
            >
              DONAR
            </Link>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto">
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
        </section>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-400">
            Una vez hecha tu donación, asegúrate de rellenar el formulario de <Link href="/es/confirmation" className="underline text-indigo-300">Confirmación</Link>.
          </p>
        </div>
      </main>
    </>
  );
}
