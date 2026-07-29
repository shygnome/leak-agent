import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ComparisonReport from '../page'

vi.mock('next/navigation', () => ({
  useSearchParams: () => new URLSearchParams('team=real-madrid&tournament=laliga-2324'),
}))

describe('/comparison/report', () => {
  it('shows the resolved tournament name in the header', () => {
    render(<ComparisonReport />)
    expect(screen.getByText('La Liga 2023/24')).toBeDefined()
  })

  it('shows the resolved team name in the header', () => {
    render(<ComparisonReport />)
    expect(screen.getByText('Real Madrid')).toBeDefined()
  })

  it('has a link back to the comparison setup page', () => {
    render(<ComparisonReport />)
    const back = screen.getByRole('link', { name: /new comparison/i })
    expect(back.getAttribute('href')).toBe('/comparison/setup')
  })
})
