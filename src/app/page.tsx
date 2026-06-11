export default function Home() {
  const exampleCity = "brookline";
  const exampleDate = new Date().toISOString().split('T')[0];
  const curlCommand = `curl -X GET "http://localhost:3000/api/weather?city=${exampleCity}&date=${exampleDate}"`;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-zinc-950 text-zinc-100 font-sans">
      <div className="max-w-2xl w-full space-y-8">

        {/* Header */}
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white">Weather Service API</h1>
          <p className="text-zinc-400">El sistema de puente seguro está <span className="text-emerald-400 font-semibold">online</span>.</p>
        </div>

        {/* Card del Endpoint */}
        <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Endpoint</h2>
          <code className="block p-3 bg-black rounded-md text-sky-300 font-mono text-sm">
            GET /api/weather?city=[city]&date=[YYYY-MM-DD]
          </code>
        </div>

        {/* Bloque cURL Fancy */}
        <div className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Prueba rápida (cURL)</h2>
          <div className="relative group">
            <pre className="p-4 bg-black border border-zinc-800 rounded-lg overflow-x-auto text-emerald-300 font-mono text-xs md:text-sm">
              {curlCommand}
            </pre>
            <span className="absolute top-2 right-2 text-[10px] text-zinc-600 uppercase font-bold">
              copyable
            </span>
          </div>
        </div>

        <footer className="pt-10 text-center text-xs text-zinc-600">
          Backend Service • Next.js App Router • Secure Bridge
        </footer>
      </div>
    </main>
  );
}