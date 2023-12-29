import { assert, describe, expect, it } from 'vitest'
import { wholeStringTafkeet } from '../../tafkeet'

describe('Reading fractions', () => {
  it('should read 1.1', () => {
    expect(wholeStringTafkeet(1.1).fractionTafkeet).toBe('واحد')
  })
  it('should read 122.33', () => {
    expect(wholeStringTafkeet(122.33).fractionTafkeet).toBe('ثلاثة وثلاثون')
  })
  it('should read 122.33', () => {
    expect(wholeStringTafkeet(122.33).fractionTafkeet).toBe('ثلاثة وثلاثون')
  })
  it('should read 122.30', () => {
    expect(wholeStringTafkeet('122.30').fractionTafkeet).toBe('ثلاثون')
  })
  it('should read 1.2', () => {
    expect(wholeStringTafkeet(1.2).fractionTafkeet).toBe('اثنان')
  })
})
