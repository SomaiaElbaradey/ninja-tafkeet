import { describe, expect, it } from 'vitest'
import { tafkeet } from './lib/tafkeet'

describe('Reading numbers from 1 - 999', () => {
  it('should read 1', () => {
    expect(tafkeet(1)).toBe('واحد')
  })
  it('should read 0', () => {
    expect(tafkeet(0)).toBe('صفر')
  })
  it('should read 11', () => {
    expect(tafkeet(11)).toBe('أحدَ عشر')
  })
  it('should read 30', () => {
    expect(tafkeet(30)).toBe('ثلاثون')
  })
  it('should read 96', () => {
    expect(tafkeet(96)).toBe('ستة وتسعون')
  })
})
