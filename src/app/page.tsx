export default function Home() {
  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Welkom bij de besloten demo
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Je hebt succesvol ingelogd met het wachtwoord. Deze pagina en alle andere pagina's in deze applicatie zijn beschermd.
          </p>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Hoe nu verder?</h2>
            <ul className="text-left text-gray-600 space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Pas de componenten aan en bouw de demo voor de klant.
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                De authenticatie-laag staat al veilig ingesteld in `middleware.ts`.
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Zodra je deployt op Vercel is het direct afgeschermd.
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
