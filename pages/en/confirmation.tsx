import Link from 'next/link';

export default function Confirmation() {
  return (
    <>
      {/* 3D Background */}
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

      <main className="min-h-screen text-white px-6 py-16 overflow-x-hidden">
        <section className="max-w-xl mx-auto text-center">

          {/* Styled return button */}
          <div className="mb-8">
            <Link
              href="/en"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 transition"
              aria-label="Back"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
          </div>

          <h1 className="text-3xl font-bold mb-6">Donation Confirmation</h1>

          <form
            action="https://formspree.io/f/xeoabrky"
            method="POST"
            className="space-y-6"
          >
            <input
              type="text"
              name="Name"
              placeholder="Your name"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-white/10"
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Your email address"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-white/10"
              required
            />
            <textarea
              name="Message"
              placeholder="Transaction address / hash / comment"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-white/10"
              rows={4}
              required
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-full text-white font-semibold shadow transition"
            >
              Send
            </button>
          </form>

          <p className="mt-8 text-sm text-gray-400">
            Once your confirmation is submitted, you will receive your guide by email. If you don't see it in your inbox, please check your spam folder. You may also fill out this form again if needed.
          </p>
        </section>
      </main>
    </>
  );
}
