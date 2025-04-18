import Link from 'next/link';

export default function Home() {
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

      <main className="min-h-screen text-white px-6 py-10">
        <nav className="flex justify-between items-center mb-12 flex-wrap">
          <div className="text-2xl font-bold">cryptolooser.com</div>
          <ul className="flex gap-6 text-sm">
            <li><Link href="/don">Donate</Link></li>
            <li><Link href="/confirmation">Confirmation</Link></li>
          </ul>
        </nav>

        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            FAITES UN DON CRYPTO ET RECEVEZ UN GUIDE EXCLUSIF
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Contribuez en BTC, ETH ou SOL et obtenez un guide exclusif :<br />
            <span className="italic">"Comment ne plus jamais perdre de l'argent en crypto"</span>
          </p>
          <Link
            href="/don"
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-8 py-3 rounded-full text-white font-semibold shadow-xl transition"
          >
            FAIRE UN DON
          </Link>

          <p className="mt-4 text-sm text-gray-400">
            Une fois votre don effectué, pensez à remplir le formulaire dans la section <Link href="/confirmation" className="underline text-indigo-300">Confirmation</Link>.
          </p>
        </section>
      </main>
    </>
  );
}
