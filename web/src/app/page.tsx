import Link from 'next/link'

const analyses = [
  {
    label: 'Team Analysis',
    description:
      'LEAK model run on a team\'s defending data — breakdown by metrics, 2D pitch illustration, and AI narrative.',
    href: '/analysis/setup',
  },
  {
    label: 'Comparison',
    description:
      'Team vs. the field in competition — similar defending profiles, side-by-side reasoning.',
    href: '/comparison/setup',
  },
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-50">
      <header className="flex items-center justify-between border-b border-zinc-800 px-8 py-4">
        <span className="font-mono text-lg font-bold tracking-widest text-zinc-50">
          LEAK
        </span>
        <span className="text-xs uppercase tracking-widest text-zinc-500">
          Defending Analysis
        </span>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center gap-10 px-8">
        <p className="text-sm tracking-wide text-zinc-500">
          Pick an analysis to begin
        </p>

        <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
          {analyses.map(({ label, description, href }) => (
            <Link
              key={href}
              href={href}
              className="flex flex-col gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-6 py-5 transition-colors hover:border-zinc-600 hover:bg-zinc-800"
            >
              <span className="text-sm font-semibold text-zinc-100">{label}</span>
              <span className="text-xs leading-5 text-zinc-500">{description}</span>
            </Link>
          ))}
        </div>
      </main>

      <footer className="border-t border-zinc-800 px-8 py-4 text-center">
        <span className="font-mono text-xs text-zinc-600">leak-agent / alpha</span>
      </footer>
    </div>
  )
}
