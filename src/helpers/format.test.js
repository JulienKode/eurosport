import { formatHeight, formatWeight } from './format'

test('formatHeight', () => {
  expect(formatHeight('200')).toBe('2.00 m')
})

test('formatWeight', () => {
  expect(formatWeight('100000')).toBe('100 kg')
})
