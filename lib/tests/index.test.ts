import { describe, expect, it } from 'vitest'
import { baseTafkeet } from '../tafkeet'

describe('Reading (ones, tens, hundreds, thousands) numbers', () => {
  it('should read 1', () => {
    expect(baseTafkeet(1)).toBe('واحد')
  })
  it('should read 0', () => {
    expect(baseTafkeet(0)).toBe('صفر')
  })
  it('should read 11', () => {
    expect(baseTafkeet(11)).toBe('أحدَ عشر')
  })
  it('should read 30', () => {
    expect(baseTafkeet(30)).toBe('ثلاثون')
  })
  it('should read 96', () => {
    expect(baseTafkeet(96)).toBe('ستة وتسعون')
  })
  it('should read 101', () => {
    expect(baseTafkeet(101)).toBe('مائة وواحد')
  })
  it('should read 999', () => {
    expect(baseTafkeet(999)).toBe('تسعمائة وتسعة وتسعون')
  })
  it('should read 600', () => {
    expect(baseTafkeet(600)).toBe('ستمائة')
  })
  it('should read 1,000', () => {
    expect(baseTafkeet(1000)).toBe('ألف')
  })
  it('should read 2,000', () => {
    expect(baseTafkeet(2000)).toBe('ألفان')
  })
  it('should read 3,456', () => {
    expect(baseTafkeet(3456)).toBe('ثلاثة آلاف وأربعمائة وستة وخمسون')
  })
  it('should read 9,056', () => {
    expect(baseTafkeet(9056)).toBe('تسعة آلاف وستة وخمسون')
  })
  it('should read 9,006', () => {
    expect(baseTafkeet(9006)).toBe('تسعة آلاف وستة')
  })
  it('should read 1,001', () => {
    expect(baseTafkeet(1001)).toBe('ألف وواحد')
  })
  it('should read 1,011', () => {
    expect(baseTafkeet(1011)).toBe('ألف وأحدَ عشر')
  })
  it('should read 10,001', () => {
    expect(baseTafkeet(10001)).toBe('عشر آلاف وواحد')
  })
  it('should read 10,010', () => {
    expect(baseTafkeet(10010)).toBe('عشر آلاف وعشر')
  })
  it('should read 10,011', () => {
    expect(baseTafkeet(10011)).toBe('عشر آلاف وأحدَ عشر')
  })
  it('should read 10,000', () => {
    expect(baseTafkeet(10000)).toBe('عشر آلاف')
  })
  it('should read 11,000', () => {
    expect(baseTafkeet(11000)).toBe('أحدَ عشر ألفًا')
  })
  it('should read 30,000', () => {
    expect(baseTafkeet(30000)).toBe('ثلاثون ألفًا')
  })
  it('should read 30,001', () => {
    expect(baseTafkeet(30001)).toBe('ثلاثون ألفًا وواحد')
  })
  it('should read 30,955', () => {
    expect(baseTafkeet(30955)).toBe('ثلاثون ألفًا وتسعمائة وخمسة وخمسون')
  })
  it('should read 65,900', () => {
    expect(baseTafkeet(65900)).toBe('خمسة وستون ألفًا وتسعمائة')
  })
  it('should read 101,026', () => {
    expect(baseTafkeet(101026)).toBe('مائة وواحد ألفًا وستة وعشرون')
  })
  it('should read 101,000', () => {
    expect(baseTafkeet(101000)).toBe('مائة وواحد ألفًا')
  })
  it('should read 101,100', () => {
    expect(baseTafkeet(101100)).toBe('مائة وواحد ألفًا ومائة')
  })
  it('should read 100,010', () => {
    expect(baseTafkeet(100010)).toBe('مائة ألفًا وعشر')
  })
  it('should read 120,066', () => {
    expect(baseTafkeet(120066)).toBe('مائة وعشرون ألفًا وستة وستون')
  })
  it('should read 120,006', () => {
    expect(baseTafkeet(120006)).toBe('مائة وعشرون ألفًا وستة')
  })
  it('should read 101,496', () => {
    expect(baseTafkeet(101496)).toBe('مائة وواحد ألفًا وأربعمائة وستة وتسعون')
  })
  it('should read 120,000', () => {
    expect(baseTafkeet(120000)).toBe('مائة وعشرون ألفًا')
  })
  it('should read 100,000', () => {
    expect(baseTafkeet(100000)).toBe('مائة ألفًا')
  })
  it('should read 21,007', () => {
    expect(baseTafkeet(21007)).toBe('واحد وعشرون ألفًا وسبعة')
  })
  it('should read 20,263', () => {
    expect(baseTafkeet(20263)).toBe('عشرون ألفًا ومئتان وثلاثة وستون')
  })

  it('should read 19,000', () => {
    expect(baseTafkeet(19000)).toBe('تسعة عشر ألفًا')
  })
  it('should read 1,105', () => {
    expect(baseTafkeet(1105)).toBe('ألف ومائة وخمسة')
  })
  it('should read 122', () => {
    expect(baseTafkeet(122)).toBe('مائة واثنان وعشرون')
  })
  it('should read 100', () => {
    expect(baseTafkeet(100)).toBe('مائة')
  })
  it('should read 96', () => {
    expect(baseTafkeet(96)).toBe('ستة وتسعون')
  })
  it('should read 10', () => {
    expect(baseTafkeet(10)).toBe('عشر')
  })
})
