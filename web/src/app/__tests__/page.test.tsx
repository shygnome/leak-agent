import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Home from '../page'

describe('Home page', () => {
  it('renders the LEAK brand header', () => {
    render(<Home />)
    expect(screen.getByText('LEAK')).toBeDefined()
  })

  it('renders Team Analysis card linking to /analysis/setup', () => {
    render(<Home />)
    const link = screen.getByRole('link', { name: /team analysis/i })
    expect(link.getAttribute('href')).toBe('/analysis/setup')
  })

  it('renders Comparison card linking to /comparison/setup', () => {
    render(<Home />)
    const link = screen.getByRole('link', { name: /comparison/i })
    expect(link.getAttribute('href')).toBe('/comparison/setup')
  })

  it('renders exactly two analysis entry points', () => {
    render(<Home />)
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(2)
  })
})
