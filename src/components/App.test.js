
import React from 'react'
import {
  render, screen, waitFor,
} from '@testing-library/react'
import TestProvider from '@src/helpers/TestProvider'
import { useHeadToHead } from '@src/store/hooks/useHeadToHead'
import headToHeadMock from '@src/mocks/headToHead'
import App from './App'
import MatchBox from './matchBox/MatchBox'

jest.mock('./matchBox/MatchBox', () => jest.fn())
jest.mock('@src/store/hooks/useHeadToHead', () => ({
  useHeadToHead: jest.fn(),
}))

describe('App', () => {
  beforeEach(() => {
    MatchBox.mockImplementation(() => <div>MatchBox</div>)
  })
  it('renders on query loading ', async () => {
    useHeadToHead.mockImplementation(() => ({
      data: headToHeadMock,
      status: 'loading',
    }))
    render(
      <TestProvider>
        <App />
      </TestProvider>,
    )
    await waitFor(() => screen.getByText(/Chargement/i))
  })
  it('renders on query success ', async () => {
    useHeadToHead.mockImplementation(() => ({
      data: headToHeadMock,
      status: 'success',
    }))
    render(
      <TestProvider>
        <App />
      </TestProvider>,
    )
    await waitFor(() => screen.getByText(/Finale/i))
  })
})

