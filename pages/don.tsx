import Link from 'next/link';

export default function Don() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-indigo-900 to-purple-900 text-white p-8">
      <section className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Faire un don</h1>
        <p className="text-gray-300 text-center mb-10">
          Choisissez une cryptomonnaie et envoyez <strong>au minimum 49 $</strong> à l’adresse correspondante :
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-xl text-center shadow-md">
            <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=030" alt="Bitcoin" className="w-12 h-12 mx-auto mb-2" />
            <h2 className="text-xl font-semibold mb-2">Bitcoin (BTC)</h2>
            <p className="text-orange-400 break-all">bc1qt3cgs7ajd2x65cmjr9u66663krt89ha5xhsj9c</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl text-center shadow-md">
            <img src="https://cryptologos.cc/logos/ethereum-eth-logo.png?v=030" alt="Ethereum" className="w-12 h-12 mx-auto mb-2" />
            <h2 className="text-xl font-semibold mb-2">Ethereum (ETH)</h2>
            <p className="text-blue-400 break-all">0x6D3EE24FF55A46f89883043fF810B38F04Bf3485</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl text-center shadow-md">
            <img src="https://cryptologos.cc/logos/solana-sol-logo.png?v=030" alt="Solana" className="w-12 h-12 mx-auto mb-2" />
            <h2 className="text-xl font-semibold mb-2">Solana (SOL)</h2>
            <p className="text-purple-400 break-all">42G1XK8Lz6c9vx5SzxEPg8WR2D3YEtPV7cbjAXqS9TUT</p>
          </div>
        </div>

        <p className="mt-10 text-center">
          Après votre don, <Link href="/confirmation" className="text-indigo-400 underline">remplissez ce formulaire</Link> pour recevoir le guide PDF.
        </p>
      </section>
    </main>
  );
}
