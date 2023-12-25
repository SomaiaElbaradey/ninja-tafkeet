import { assert, describe, expect, it } from 'vitest'
import { tafkeet } from '../tafkeet'

describe('Reading numbers', () => {
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
  it('should read 101', () => {
    expect(tafkeet(101)).toBe('مائة وواحد')
  })
  it('should read 999', () => {
    expect(tafkeet(999)).toBe('تسعمائة وتسعة وتسعون')
  })
  it('should read 600', () => {
    expect(tafkeet(600)).toBe('ستمائة')
  })
  it('should read 1,000', () => {
    expect(tafkeet(1000)).toBe('ألف')
  })
  it('should read 2,000', () => {
    expect(tafkeet(2000)).toBe('ألفان')
  })
  it('should read 3,456', () => {
    expect(tafkeet(3456)).toBe('ثلاثة آلاف وأربعمائة وستة وخمسون')
  })
  it('should read 9,056', () => {
    expect(tafkeet(9056)).toBe('تسعة آلاف وستة وخمسون')
  })
  it('should read 9,006', () => {
    expect(tafkeet(9006)).toBe('تسعة آلاف وستة')
  })
  it('should read 1,001', () => {
    expect(tafkeet(1001)).toBe('ألف وواحد')
  })
  it('should read 1,011', () => {
    expect(tafkeet(1011)).toBe('ألف وأحدَ عشر')
  })
  it('should read 10,001', () => {
    expect(tafkeet(10001)).toBe('عشر آلاف وواحد')
  })
  it('should read 10,010', () => {
    expect(tafkeet(10010)).toBe('عشر آلاف وعشر')
  })
  it('should read 10,011', () => {
    expect(tafkeet(10011)).toBe('عشر آلاف وأحدَ عشر')
  })
  it('should read 10,000', () => {
    expect(tafkeet(10000)).toBe('عشر آلاف')
  })
  it('should read 11,000', () => {
    expect(tafkeet(11000)).toBe('أحدَ عشر ألفًا')
  })
  it('should read 30,000', () => {
    expect(tafkeet(30000)).toBe('ثلاثون ألفًا')
  })
  it('should read 30,001', () => {
    expect(tafkeet(30001)).toBe('ثلاثون ألفًا وواحد')
  })
  it('should read 30,955', () => {
    expect(tafkeet(30955)).toBe('ثلاثون ألفًا وتسعمائة وخمسة وخمسون')
  })
  it('should read 65,900', () => {
    expect(tafkeet(65900)).toBe('خمسة وستون ألفًا وتسعمائة')
  })
  it('should read 101,026', () => {
    expect(tafkeet(101026)).toBe('مائة وواحد ألفًا وستة وعشرون')
  })
  it('should read 101,000', () => {
    expect(tafkeet(101000)).toBe('مائة وواحد ألفًا')
  })
  it('should read 101,100', () => {
    expect(tafkeet(101100)).toBe('مائة وواحد ألفًا ومائة')
  })
  it('should read 100,010', () => {
    expect(tafkeet(100010)).toBe('مائة ألفًا وعشر')
  })
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

describe('Reading digits', function () {
  it('should read 1', function () {
    assert.equal('واحد', tafkeet(1))
  })
  it('should read 0', function () {
    assert.equal('صفر', tafkeet(0))
  })
  it('should read 9006', function () {
    assert.equal('تسعة آلاف وستة', tafkeet(9006))
  })
  it('should read 3456', () => {
    assert.equal('ثلاثة آلاف وأربعمائة وستة وخمسون', tafkeet(3456))
  })
})
