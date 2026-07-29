export type Tournament = {
  slug: string
  name: string
  statsbombCompetitionId: number
  statsbombSeasonId: number
  dataSources: ('statsbomb' | 'pff')[]
}

export const MOCK_TOURNAMENTS: Tournament[] = [
  {
    slug: 'wc-2022',
    name: 'FIFA World Cup 2022',
    statsbombCompetitionId: 43,
    statsbombSeasonId: 106,
    dataSources: ['statsbomb', 'pff'],
  },
  {
    slug: 'laliga-2324',
    name: 'La Liga 2023/24',
    statsbombCompetitionId: 11,
    statsbombSeasonId: 281,
    dataSources: ['statsbomb'],
  },
]
