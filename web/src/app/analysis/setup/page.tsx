'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { getTournaments, getTeamsByTournament } from '@/lib/data'

export default function AnalysisSetup() {
  const router = useRouter()
  const [tournament, setTournament] = useState('')
  const [team, setTeam] = useState('')

  const tournaments = getTournaments()
  const teams = tournament ? getTeamsByTournament(tournament) : []
  const ready = tournament !== '' && team !== ''

  function handleTournamentChange(value: string) {
    setTournament(value)
    setTeam('')
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    router.push(`/analysis/report?team=${team}&tournament=${tournament}`)
  }

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-50">
      <header className="flex items-center justify-between border-b border-zinc-800 px-8 py-4">
        <a href="/" className="font-mono text-lg font-bold tracking-widest text-zinc-50">
          LEAK
        </a>
        <span className="text-xs uppercase tracking-widest text-zinc-500">
          Team Analysis
        </span>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-8">
        <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h1 className="font-mono text-xl font-bold tracking-tight">
              Team Analysis
            </h1>
            <p className="text-xs text-zinc-500">
              Select a tournament then a team to run the LEAK defending analysis.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="tournament" className="text-xs font-medium text-zinc-400">
                Tournament
              </label>
              <select
                id="tournament"
                value={tournament}
                onChange={(e) => handleTournamentChange(e.target.value)}
                className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 focus:border-zinc-500 focus:outline-none"
              >
                <option value="">Select a tournament</option>
                {tournaments.map(({ slug, name }) => (
                  <option key={slug} value={slug}>
                    {name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="team" className="text-xs font-medium text-zinc-400">
                Team
              </label>
              <select
                id="team"
                value={team}
                disabled={!tournament}
                onChange={(e) => setTeam(e.target.value)}
                className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 focus:border-zinc-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-40"
              >
                <option value="">Select a team</option>
                {teams.map(({ slug, name }) => (
                  <option key={slug} value={slug}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={!ready}
            className="rounded-md bg-zinc-100 px-4 py-2.5 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-30"
          >
            Run Analysis
          </button>
        </form>
      </main>
    </div>
  )
}
