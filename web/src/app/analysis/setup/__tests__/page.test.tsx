import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import AnalysisSetup from '../page'
import { getTournaments, getTeamsByTournament } from '@/lib/data'

const mockPush = vi.fn()

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
}))

beforeEach(() => {
  mockPush.mockClear()
})

describe('/analysis/setup', () => {
  it('renders all tournaments in the tournament selector', () => {
    render(<AnalysisSetup />)
    const select = screen.getByRole('combobox', { name: /tournament/i })
    getTournaments().forEach(({ name }) => {
      expect(select.textContent).toContain(name)
    })
  })

  it('team selector is empty and disabled until a tournament is selected', () => {
    render(<AnalysisSetup />)
    const teamSelect = screen.getByRole('combobox', { name: /team/i })
    expect(teamSelect).toBeDisabled()
  })

  it('team selector populates with correct teams after tournament is selected', () => {
    render(<AnalysisSetup />)
    fireEvent.change(screen.getByRole('combobox', { name: /tournament/i }), {
      target: { value: 'wc-2022' },
    })
    const teamSelect = screen.getByRole('combobox', { name: /team/i })
    getTeamsByTournament('wc-2022').forEach(({ name }) => {
      expect(teamSelect.textContent).toContain(name)
    })
  })

  it('team selector shows La Liga clubs when La Liga is selected', () => {
    render(<AnalysisSetup />)
    fireEvent.change(screen.getByRole('combobox', { name: /tournament/i }), {
      target: { value: 'laliga-2324' },
    })
    const teamSelect = screen.getByRole('combobox', { name: /team/i })
    getTeamsByTournament('laliga-2324').forEach(({ name }) => {
      expect(teamSelect.textContent).toContain(name)
    })
  })

  it('submit button is disabled until both tournament and team are selected', () => {
    render(<AnalysisSetup />)
    expect(screen.getByRole('button', { name: /run analysis/i })).toBeDisabled()
  })

  it('navigates to /analysis/report with slugs on submit', () => {
    render(<AnalysisSetup />)
    fireEvent.change(screen.getByRole('combobox', { name: /tournament/i }), {
      target: { value: 'wc-2022' },
    })
    fireEvent.change(screen.getByRole('combobox', { name: /team/i }), {
      target: { value: 'spain' },
    })
    fireEvent.click(screen.getByRole('button', { name: /run analysis/i }))
    expect(mockPush).toHaveBeenCalledWith(
      '/analysis/report?team=spain&tournament=wc-2022'
    )
  })
})
