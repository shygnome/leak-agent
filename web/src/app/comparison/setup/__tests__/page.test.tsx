import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import ComparisonSetup from '../page'
import { getTournaments, getTeamsByTournament } from '@/lib/data'

const mockPush = vi.fn()

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
}))

beforeEach(() => {
  mockPush.mockClear()
})

describe('/comparison/setup', () => {
  it('renders all tournaments in the tournament selector', () => {
    render(<ComparisonSetup />)
    const select = screen.getByRole('combobox', { name: /tournament/i })
    getTournaments().forEach(({ name }) => {
      expect(select.textContent).toContain(name)
    })
  })

  it('team selector is empty and disabled until a tournament is selected', () => {
    render(<ComparisonSetup />)
    expect(screen.getByRole('combobox', { name: /team/i })).toBeDisabled()
  })

  it('team selector populates with correct teams after tournament is selected', () => {
    render(<ComparisonSetup />)
    fireEvent.change(screen.getByRole('combobox', { name: /tournament/i }), {
      target: { value: 'wc-2022' },
    })
    const teamSelect = screen.getByRole('combobox', { name: /team/i })
    getTeamsByTournament('wc-2022').forEach(({ name }) => {
      expect(teamSelect.textContent).toContain(name)
    })
  })

  it('submit button is disabled until both tournament and team are selected', () => {
    render(<ComparisonSetup />)
    expect(screen.getByRole('button', { name: /run comparison/i })).toBeDisabled()
  })

  it('navigates to /comparison/report with slugs on submit', () => {
    render(<ComparisonSetup />)
    fireEvent.change(screen.getByRole('combobox', { name: /tournament/i }), {
      target: { value: 'laliga-2324' },
    })
    fireEvent.change(screen.getByRole('combobox', { name: /team/i }), {
      target: { value: 'real-madrid' },
    })
    fireEvent.click(screen.getByRole('button', { name: /run comparison/i }))
    expect(mockPush).toHaveBeenCalledWith(
      '/comparison/report?team=real-madrid&tournament=laliga-2324'
    )
  })
})
