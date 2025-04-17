import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Bienvenue sur notre site de donation crypto</h1>
      <p className="mb-6 text-lg max-w-xl">
        Faites un don en BTC, ETH ou SOL et recevez un guide exclusif : <strong>"Comment ne pas perdre d'argent dans la crypto"</strong>.
      </p>
      <Link href="/don" className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-blue-700">
        Faire un don
      </Link>
    </main>
  );
}
