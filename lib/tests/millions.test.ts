import { assert, describe, expect, it } from 'vitest'
import { tafkeet } from '../tafkeet'

describe('Reading millions', () => {
  it('should read 2,000,000', () => {
    expect(tafkeet(2000000)).toBe('مليونان')
  })
  it('should read 1,000,000', () => {
    expect(tafkeet(1000000)).toBe('مليون')
  })
  it('should read 1,100,000', () => {
    expect(tafkeet(1100000)).toBe('مليون ومائة ألفًا')
  })
  it('should read 1,101,100', () => {
    expect(tafkeet(1101100)).toBe('مليون ومائة وواحد ألفًا ومائة')
  })
  it('should read 1,001,100', () => {
    expect(tafkeet(1001100)).toBe('مليون وألف ومائة')
  })
  it('should read 6,010,000', () => {
    expect(tafkeet(6010000)).toBe('ستة ملايين وعشر آلاف')
  })
  it('should read 66,090,900', () => {
    expect(tafkeet(66090900)).toBe('ستة وستون مليونًا وتسعون ألفًا وتسعمائة')
  })
  // it('should read 6010000', () => {
  //   expect(tafkeet(6010000)).toBe('ستة ملايين وعشر آلاف')
  // })
  // it('should read 6010000', () => {
  //   expect(tafkeet(6010000)).toBe('ستة ملايين وعشر آلاف')
  // })
  // it('should read 6010000', () => {
  //   expect(tafkeet(6010000)).toBe('ستة ملايين وعشر آلاف')
  // })
})

describe('Reading millions digits', function () {
  it('should read 1', function () {
    assert.equal('واحد', tafkeet(1))
  })
})
