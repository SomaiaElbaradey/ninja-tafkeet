import { assert, describe, expect, it } from 'vitest'
import { wholeStringTafkeet } from '../../tafkeet'

describe('Reading millions', () => {
  it('should read 2,000,000', () => {
    expect(wholeStringTafkeet(2000000).baseTafkeet).toBe('مليونان')
  })
  it('should read 1,000,000', () => {
    expect(wholeStringTafkeet(1000000).baseTafkeet).toBe('مليون')
  })
  it('should read 1,100,000', () => {
    expect(wholeStringTafkeet(1100000).baseTafkeet).toBe('مليون ومائة ألفًا')
  })
  it('should read 1,101,100', () => {
    expect(wholeStringTafkeet(1101100).baseTafkeet).toBe(
      'مليون ومائة وواحد ألفًا ومائة'
    )
  })
  it('should read 1,001,100', () => {
    expect(wholeStringTafkeet(1001100).baseTafkeet).toBe('مليون وألف ومائة')
  })
  it('should read 6,010,000', () => {
    expect(wholeStringTafkeet(6010000).baseTafkeet).toBe('ستة ملايين وعشر آلاف')
  })
  it('should read 66,090,900', () => {
    expect(wholeStringTafkeet(66090900).baseTafkeet).toBe(
      'ستة وستون مليونًا وتسعون ألفًا وتسعمائة'
    )
  })
  it('should read 3,044,092', () => {
    expect(wholeStringTafkeet(3044092).baseTafkeet).toBe(
      'ثلاثة ملايين وأربعة وأربعون ألفًا واثنان وتسعون'
    )
  })
  it('should read 3,014,636', () => {
    expect(wholeStringTafkeet(3014636).baseTafkeet).toBe(
      'ثلاثة ملايين وأربعة عشر ألفًا وستمائة وستة وثلاثون'
    )
  })
  it('should read 3,151,504', () => {
    expect(wholeStringTafkeet(3151504).baseTafkeet).toBe(
      'ثلاثة ملايين ومائة وواحد وخمسون ألفًا وخمسمائة وأربعة'
    )
  })
  it('should read 3,029,242', () => {
    expect(wholeStringTafkeet(3029242).baseTafkeet).toBe(
      'ثلاثة ملايين وتسعة وعشرون ألفًا ومئتان واثنان وأربعون'
    )
  })
  it('should read 3,129,247', () => {
    expect(wholeStringTafkeet(3129247).baseTafkeet).toBe(
      'ثلاثة ملايين ومائة وتسعة وعشرون ألفًا ومئتان وسبعة وأربعون'
    )
  })
  it('should read 3,120,500', () => {
    expect(wholeStringTafkeet(3120500).baseTafkeet).toBe(
      'ثلاثة ملايين ومائة وعشرون ألفًا وخمسمائة'
    )
  })
  it('should read 3,100,000', () => {
    expect(wholeStringTafkeet(3100000).baseTafkeet).toBe(
      'ثلاثة ملايين ومائة ألفًا'
    )
  })
  it('should read 3,000,000', () => {
    expect(wholeStringTafkeet(3000000).baseTafkeet).toBe('ثلاثة ملايين')
  })
  it('should read 2,044,092', () => {
    expect(wholeStringTafkeet(2044092).baseTafkeet).toBe(
      'مليونان وأربعة وأربعون ألفًا واثنان وتسعون'
    )
  })
  it('should read 2,014,636', () => {
    expect(wholeStringTafkeet(2014636).baseTafkeet).toBe(
      'مليونان وأربعة عشر ألفًا وستمائة وستة وثلاثون'
    )
  })
  it('should read 2,151,504', () => {
    expect(wholeStringTafkeet(2151504).baseTafkeet).toBe(
      'مليونان ومائة وواحد وخمسون ألفًا وخمسمائة وأربعة'
    )
  })
  it('should read 2,129,247', () => {
    expect(wholeStringTafkeet(2129247).baseTafkeet).toBe(
      'مليونان ومائة وتسعة وعشرون ألفًا ومئتان وسبعة وأربعون'
    )
  })
  it('should read 2,029,242', () => {
    expect(wholeStringTafkeet(2029242).baseTafkeet).toBe(
      'مليونان وتسعة وعشرون ألفًا ومئتان واثنان وأربعون'
    )
  })
  it('should read 2,120,500', () => {
    expect(wholeStringTafkeet(2120500).baseTafkeet).toBe(
      'مليونان ومائة وعشرون ألفًا وخمسمائة'
    )
  })
  it('should read 2,100,000', () => {
    expect(wholeStringTafkeet(2100000).baseTafkeet).toBe('مليونان ومائة ألفًا')
  })
  it('should read 1,000,005', () => {
    expect(wholeStringTafkeet(1000005).baseTafkeet).toBe('مليون وخمسة')
  })
  it('should read 1,000,500', () => {
    expect(wholeStringTafkeet(1000500).baseTafkeet).toBe('مليون وخمسمائة')
  })
  it('should read 1,014,636', () => {
    expect(wholeStringTafkeet(1014636).baseTafkeet).toBe(
      'مليون وأربعة عشر ألفًا وستمائة وستة وثلاثون'
    )
  })
  it('should read 1,192,928', () => {
    expect(wholeStringTafkeet(1192928).baseTafkeet).toBe(
      'مليون ومائة واثنان وتسعون ألفًا وتسعمائة وثمانية وعشرون'
    )
  })
  it('should read 1,120,500', () => {
    expect(wholeStringTafkeet(1120500).baseTafkeet).toBe(
      'مليون ومائة وعشرون ألفًا وخمسمائة'
    )
  })
})

describe('Reading millions digits', function () {
  it('should read 2,000,000', function () {
    assert.equal('مليونان', wholeStringTafkeet(2000000).baseTafkeet)
  })
  it('should read 3,044,092', function () {
    assert.equal(
      'ثلاثة ملايين وأربعة وأربعون ألفًا واثنان وتسعون',
      wholeStringTafkeet(3044092).baseTafkeet
    )
  })
})
