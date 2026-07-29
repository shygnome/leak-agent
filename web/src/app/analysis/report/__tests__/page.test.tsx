import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { AnalysisReportContent } from '../content'

vi.mock('next/navigation', () => ({
  useSearchParams: () => new URLSearchParams('team=spain&tournament=wc-2022'),
}))

describe('/analysis/report', () => {
  it('shows the resolved tournament name in the header', () => {
    render(<AnalysisReportContent />)
    expect(screen.getByText('FIFA World Cup 2022')).toBeDefined()
  })

  it('shows the resolved team name in the header', () => {
    render(<AnalysisReportContent />)
    expect(screen.getByText('Spain')).toBeDefined()
  })

  it('has a link back to the analysis setup page', () => {
    render(<AnalysisReportContent />)
    const back = screen.getByRole('link', { name: /new analysis/i })
    expect(back.getAttribute('href')).toBe('/analysis/setup')
  })
})
