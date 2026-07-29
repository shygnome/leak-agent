'use client'

export const dynamic = 'force-dynamic'

import { useSearchParams } from 'next/navigation'
import { getTournaments, getTeamsByTournament } from '@/lib/data'

export default function ComparisonReport() {
  const searchParams = useSearchParams()
  const tournamentSlug = searchParams.get('tournament') ?? ''
  const teamSlug = searchParams.get('team') ?? ''

  const tournament = getTournaments().find((t) => t.slug === tournamentSlug)
  const team = getTeamsByTournament(tournamentSlug).find((t) => t.slug === teamSlug)

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-50">
      <header className="flex items-center justify-between border-b border-zinc-800 px-8 py-4">
        <a href="/" className="font-mono text-lg font-bold tracking-widest text-zinc-50">
          LEAK
        </a>
        <span className="text-xs uppercase tracking-widest text-zinc-500">
          Comparison
        </span>
      </header>

      <div className="flex items-center justify-between border-b border-zinc-800/60 px-8 py-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-semibold text-zinc-100">
            {team?.name ?? teamSlug}
          </span>
          <span className="text-zinc-600">·</span>
          <span className="text-sm text-zinc-400">
            {tournament?.name ?? tournamentSlug}
          </span>
        </div>
        <a
          href="/comparison/setup"
          className="text-xs text-zinc-500 transition-colors hover:text-zinc-300"
        >
          New Comparison
        </a>
      </div>

      <main className="flex flex-1 items-center justify-center">
        <p className="font-mono text-xs text-zinc-600">report — coming soon</p>
      </main>
    </div>
  )
}
