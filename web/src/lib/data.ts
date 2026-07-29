import { MOCK_TOURNAMENTS, type Tournament } from '@/mocks/tournaments'
import { TEAMS_BY_TOURNAMENT, type Team } from '@/mocks/teams'

// These functions are the seam between the UI and the data source.
// When the API is ready, replace the import-based implementations here
// with fetch() calls — no component code needs to change.

export function getTournaments(): Tournament[] {
  return MOCK_TOURNAMENTS
}

export function getTeamsByTournament(tournamentSlug: string): Team[] {
  return TEAMS_BY_TOURNAMENT[tournamentSlug] ?? []
}

export type { Tournament, Team }
