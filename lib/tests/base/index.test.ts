import { describe, expect, it } from 'vitest'
import { wholeStringTafkeet } from '../../tafkeet'

describe('Reading (ones, tens, hundreds, thousands) numbers', () => {
  it('should read 1', () => {
    expect(wholeStringTafkeet(1).baseTafkeet).toBe('واحد')
  })
  it('should read 0', () => {
    expect(wholeStringTafkeet(0).baseTafkeet).toBe('صفر')
  })
  it('should read 11', () => {
    expect(wholeStringTafkeet(11).baseTafkeet).toBe('أحدَ عشر')
  })
  it('should read 30', () => {
    expect(wholeStringTafkeet(30).baseTafkeet).toBe('ثلاثون')
  })
  it('should read 96', () => {
    expect(wholeStringTafkeet(96).baseTafkeet).toBe('ستة وتسعون')
  })
  it('should read 101', () => {
    expect(wholeStringTafkeet(101).baseTafkeet).toBe('مائة وواحد')
  })
  it('should read 999', () => {
    expect(wholeStringTafkeet(999).baseTafkeet).toBe('تسعمائة وتسعة وتسعون')
  })
  it('should read 600', () => {
    expect(wholeStringTafkeet(600).baseTafkeet).toBe('ستمائة')
  })
  it('should read 1,000', () => {
    expect(wholeStringTafkeet(1000).baseTafkeet).toBe('ألف')
  })
  it('should read 2,000', () => {
    expect(wholeStringTafkeet(2000).baseTafkeet).toBe('ألفان')
  })
  it('should read 3,456', () => {
    expect(wholeStringTafkeet(3456).baseTafkeet).toBe(
      'ثلاثة آلاف وأربعمائة وستة وخمسون'
    )
  })
  it('should read 9,056', () => {
    expect(wholeStringTafkeet(9056).baseTafkeet).toBe('تسعة آلاف وستة وخمسون')
  })
  it('should read 9,006', () => {
    expect(wholeStringTafkeet(9006).baseTafkeet).toBe('تسعة آلاف وستة')
  })
  it('should read 1,001', () => {
    expect(wholeStringTafkeet(1001).baseTafkeet).toBe('ألف وواحد')
  })
  it('should read 1,011', () => {
    expect(wholeStringTafkeet(1011).baseTafkeet).toBe('ألف وأحدَ عشر')
  })
  it('should read 10,001', () => {
    expect(wholeStringTafkeet(10001).baseTafkeet).toBe('عشر آلاف وواحد')
  })
  it('should read 10,010', () => {
    expect(wholeStringTafkeet(10010).baseTafkeet).toBe('عشر آلاف وعشر')
  })
  it('should read 10,011', () => {
    expect(wholeStringTafkeet(10011).baseTafkeet).toBe('عشر آلاف وأحدَ عشر')
  })
  it('should read 10,000', () => {
    expect(wholeStringTafkeet(10000).baseTafkeet).toBe('عشر آلاف')
  })
  it('should read 11,000', () => {
    expect(wholeStringTafkeet(11000).baseTafkeet).toBe('أحدَ عشر ألفًا')
  })
  it('should read 30,000', () => {
    expect(wholeStringTafkeet(30000).baseTafkeet).toBe('ثلاثون ألفًا')
  })
  it('should read 30,001', () => {
    expect(wholeStringTafkeet(30001).baseTafkeet).toBe('ثلاثون ألفًا وواحد')
  })
  it('should read 30,955', () => {
    expect(wholeStringTafkeet(30955).baseTafkeet).toBe(
      'ثلاثون ألفًا وتسعمائة وخمسة وخمسون'
    )
  })
  it('should read 65,900', () => {
    expect(wholeStringTafkeet(65900).baseTafkeet).toBe(
      'خمسة وستون ألفًا وتسعمائة'
    )
  })
  it('should read 101,026', () => {
    expect(wholeStringTafkeet(101026).baseTafkeet).toBe(
      'مائة وواحد ألفًا وستة وعشرون'
    )
  })
  it('should read 101,000', () => {
    expect(wholeStringTafkeet(101000).baseTafkeet).toBe('مائة وواحد ألفًا')
  })
  it('should read 101,100', () => {
    expect(wholeStringTafkeet(101100).baseTafkeet).toBe(
      'مائة وواحد ألفًا ومائة'
    )
  })
  it('should read 100,010', () => {
    expect(wholeStringTafkeet(100010).baseTafkeet).toBe('مائة ألفًا وعشر')
  })
  it('should read 120,066', () => {
    expect(wholeStringTafkeet(120066).baseTafkeet).toBe(
      'مائة وعشرون ألفًا وستة وستون'
    )
  })
  it('should read 120,006', () => {
    expect(wholeStringTafkeet(120006).baseTafkeet).toBe(
      'مائة وعشرون ألفًا وستة'
    )
  })
  it('should read 101,496', () => {
    expect(wholeStringTafkeet(101496).baseTafkeet).toBe(
      'مائة وواحد ألفًا وأربعمائة وستة وتسعون'
    )
  })
  it('should read 120,000', () => {
    expect(wholeStringTafkeet(120000).baseTafkeet).toBe('مائة وعشرون ألفًا')
  })
  it('should read 100,000', () => {
    expect(wholeStringTafkeet(100000).baseTafkeet).toBe('مائة ألفًا')
  })
  it('should read 21,007', () => {
    expect(wholeStringTafkeet(21007).baseTafkeet).toBe(
      'واحد وعشرون ألفًا وسبعة'
    )
  })
  it('should read 20,263', () => {
    expect(wholeStringTafkeet(20263).baseTafkeet).toBe(
      'عشرون ألفًا ومئتان وثلاثة وستون'
    )
  })

  it('should read 19,000', () => {
    expect(wholeStringTafkeet(19000).baseTafkeet).toBe('تسعة عشر ألفًا')
  })
  it('should read 1,105', () => {
    expect(wholeStringTafkeet(1105).baseTafkeet).toBe('ألف ومائة وخمسة')
  })
  it('should read 122', () => {
    expect(wholeStringTafkeet(122).baseTafkeet).toBe('مائة واثنان وعشرون')
  })
  it('should read 100', () => {
    expect(wholeStringTafkeet(100).baseTafkeet).toBe('مائة')
  })
  it('should read 96', () => {
    expect(wholeStringTafkeet(96).baseTafkeet).toBe('ستة وتسعون')
  })
  it('should read 10', () => {
    expect(wholeStringTafkeet(10).baseTafkeet).toBe('عشر')
  })
})
