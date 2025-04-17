import Link from 'next/link';

export default function Don() {
  return (
    <main className="min-h-screen p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Faire un don</h1>
      <p className="mb-4">Choisissez une cryptomonnaie et envoyez au minimum 49 $ à l’adresse correspondante :</p>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Bitcoin (BTC)</h2>
          <p className="break-all">bc1qt3cgs7ajd2x65cmjr9u66663krt89ha5xhsj9c</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Ethereum (ETH)</h2>
          <p className="break-all">0x6D3EE24FF55A46f89883043fF810B38F04Bf3485</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Solana (SOL)</h2>
          <p className="break-all">42G1XK8Lz6c9vx5SzxEPg8WR2D3YEtPV7cbjAXqS9TUT</p>
        </div>
      </div>

      <p className="mt-8">Après votre don, <Link href="/confirmation" className="text-blue-600 underline">remplissez ce formulaire</Link> pour recevoir le guide PDF.</p>
    </main>
  );
}