import { assert, describe, expect, it } from 'vitest'
import { wholeStringTafkeet } from '../../tafkeet'

describe('Reading fractions', () => {
  //   it('should read 2,000,000', () => {
  //     expect(wholeStringTafkeet(2000000).fractionTafkeet).toBe('مليونان')
  //   })
  it('should read 1.1', () => {
    expect(wholeStringTafkeet(1.1).fractionTafkeet).toBe('واحد')
  })
})
