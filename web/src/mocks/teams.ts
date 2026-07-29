export type Team = {
  slug: string
  name: string
  // StatsBomb team_id — verify against competition JSON before wiring API queries
  statsbombId: number | null
  // PFF FC team_id — to be populated when PFF dataset is integrated
  pffId?: number
}

// All 32 FIFA World Cup 2022 nations
const WC_2022_TEAMS: Team[] = [
  { slug: 'argentina', name: 'Argentina', statsbombId: 779 },
  { slug: 'australia', name: 'Australia', statsbombId: null },
  { slug: 'belgium', name: 'Belgium', statsbombId: 782 },
  { slug: 'brazil', name: 'Brazil', statsbombId: 776 },
  { slug: 'cameroon', name: 'Cameroon', statsbombId: null },
  { slug: 'canada', name: 'Canada', statsbombId: null },
  { slug: 'costa-rica', name: 'Costa Rica', statsbombId: null },
  { slug: 'croatia', name: 'Croatia', statsbombId: 799 },
  { slug: 'denmark', name: 'Denmark', statsbombId: null },
  { slug: 'ecuador', name: 'Ecuador', statsbombId: null },
  { slug: 'england', name: 'England', statsbombId: 768 },
  { slug: 'france', name: 'France', statsbombId: 771 },
  { slug: 'germany', name: 'Germany', statsbombId: 755 },
  { slug: 'ghana', name: 'Ghana', statsbombId: null },
  { slug: 'iran', name: 'Iran', statsbombId: null },
  { slug: 'japan', name: 'Japan', statsbombId: null },
  { slug: 'mexico', name: 'Mexico', statsbombId: null },
  { slug: 'morocco', name: 'Morocco', statsbombId: null },
  { slug: 'netherlands', name: 'Netherlands', statsbombId: 752 },
  { slug: 'poland', name: 'Poland', statsbombId: null },
  { slug: 'portugal', name: 'Portugal', statsbombId: 764 },
  { slug: 'qatar', name: 'Qatar', statsbombId: null },
  { slug: 'saudi-arabia', name: 'Saudi Arabia', statsbombId: null },
  { slug: 'senegal', name: 'Senegal', statsbombId: null },
  { slug: 'serbia', name: 'Serbia', statsbombId: null },
  { slug: 'south-korea', name: 'South Korea', statsbombId: null },
  { slug: 'spain', name: 'Spain', statsbombId: 760 },
  { slug: 'switzerland', name: 'Switzerland', statsbombId: null },
  { slug: 'tunisia', name: 'Tunisia', statsbombId: null },
  { slug: 'united-states', name: 'United States', statsbombId: null },
  { slug: 'uruguay', name: 'Uruguay', statsbombId: null },
  { slug: 'wales', name: 'Wales', statsbombId: null },
]

// All 20 La Liga 2023/24 clubs
const LALIGA_2324_TEAMS: Team[] = [
  { slug: 'almeria', name: 'Almería', statsbombId: null },
  { slug: 'athletic-bilbao', name: 'Athletic Club', statsbombId: null },
  { slug: 'atletico-madrid', name: 'Atlético Madrid', statsbombId: null },
  { slug: 'barcelona', name: 'Barcelona', statsbombId: 217 },
  { slug: 'betis', name: 'Real Betis', statsbombId: null },
  { slug: 'cadiz', name: 'Cádiz', statsbombId: null },
  { slug: 'celta-vigo', name: 'Celta Vigo', statsbombId: null },
  { slug: 'getafe', name: 'Getafe', statsbombId: null },
  { slug: 'girona', name: 'Girona', statsbombId: null },
  { slug: 'granada', name: 'Granada', statsbombId: null },
  { slug: 'las-palmas', name: 'Las Palmas', statsbombId: null },
  { slug: 'mallorca', name: 'Mallorca', statsbombId: null },
  { slug: 'osasuna', name: 'Osasuna', statsbombId: null },
  { slug: 'rayo-vallecano', name: 'Rayo Vallecano', statsbombId: null },
  { slug: 'real-madrid', name: 'Real Madrid', statsbombId: 86 },
  { slug: 'real-sociedad', name: 'Real Sociedad', statsbombId: null },
  { slug: 'sevilla', name: 'Sevilla', statsbombId: null },
  { slug: 'valencia', name: 'Valencia', statsbombId: null },
  { slug: 'valladolid', name: 'Valladolid', statsbombId: null },
  { slug: 'villarreal', name: 'Villarreal', statsbombId: null },
]

export const TEAMS_BY_TOURNAMENT: Record<string, Team[]> = {
  'wc-2022': WC_2022_TEAMS,
  'laliga-2324': LALIGA_2324_TEAMS,
}
