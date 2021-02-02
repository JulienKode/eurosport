
import React from 'react'
import {
  render, screen, waitFor,
} from '@testing-library/react'
import headToHeadMock from '@src/mocks/headToHead'
// import { formatHeight, formatWeight } from '@src/helpers/format'
import Player from './Player'
import WinsLosses from './winsLosses/WinsLosses'

jest.mock('./winsLosses/WinsLosses', () => jest.fn())
// jest.mock('@src/helpers/format', () => ({
//   formatHeight: jest.fn(),
//   formatWeight: jest.fn(),
// }))

describe('Player', () => {
  it('renders', async () => {
    WinsLosses.mockImplementation(() => <div>WinsLosses</div>)
    // formatHeight.mockImplementation(() => ('2.00 m'))
    // formatWeight.mockImplementation(() => ('100 kg'))
    const props = headToHeadMock[0]
    render(<Player { ...props } />)
    await waitFor(() => screen.getByText(/Rank/i))
    expect(screen.getByText(/Rank/i)).toBeInTheDocument()
    expect(screen.getByText(/Points/i)).toBeInTheDocument()
    expect(screen.getByText(/Age/i)).toBeInTheDocument()
    expect(screen.getByText(/Height/i)).toBeInTheDocument()
    expect(screen.getByText(/Weight/i)).toBeInTheDocument()
  })
})
