import { getWinsLosses } from './player'

test('getWinsLosses', () => {
  expect(getWinsLosses([ 0, 0, 1, 1, 1 ])).toStrictEqual({
    wins: 3,
    losses: 2,
  })
})
