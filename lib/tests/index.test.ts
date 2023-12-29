import { assert, describe, expect, it } from 'vitest'
import { tafkeet } from '../tafkeet'

describe('Reading whole numbers', () => {
  it('should read 1.2', () => {
    expect(tafkeet(1.2)).toBe('فقط واحد جنيهًا مصري واثنان قرشًا لا غير')
  })
  it('should read 2,000,000', () => {
    expect(tafkeet(2000000)).toBe('فقط مليونان جنيه مصري لا غير')
  })
  it('should read 1,000,000', () => {
    expect(tafkeet(1000000)).toBe('فقط مليون جنيه مصري لا غير')
  })
  it('should read 1,100,000', () => {
    expect(tafkeet(1100000)).toBe('فقط مليون ومائة ألفًا جنيه مصري لا غير')
  })
  it('should read 122.30', () => {
    expect(tafkeet('122.30')).toBe(
      'فقط مائة واثنان وعشرون جنيه مصري وثلاثون قرشًا لا غير'
    )
  })
  it('should read 101,100.75', () => {
    expect(tafkeet(101100.75)).toBe(
      'فقط مائة وواحد ألفًا ومائة جنيه مصري وخمسة وسبعون قرشًا لا غير'
    )
  })
  it('should read 100,010.50', () => {
    expect(tafkeet('100010.50')).toBe(
      'فقط مائة ألفًا وعشر جنيه مصري وخمسون قرشًا لا غير'
    )
  })
  it('should read 120,066.25', () => {
    expect(tafkeet(120066.25)).toBe(
      'فقط مائة وعشرون ألفًا وستة وستون جنيه مصري وخمسة وعشرون قرشًا لا غير'
    )
  })
  it('should read 96.10', () => {
    assert.strictEqual(
      tafkeet(96.1),
      'فقط ستة وتسعون جنيه مصري وواحد قرشًا لا غير'
    )
  })
  it('should read 101.50', () => {
    assert.strictEqual(
      tafkeet('101.50'),
      'فقط مائة وواحد جنيه مصري وخمسون قرشًا لا غير'
    )
  })
})
