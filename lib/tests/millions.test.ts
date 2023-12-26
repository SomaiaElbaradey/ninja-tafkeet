import { assert, describe, expect, it } from 'vitest'
import { baseTafkeet } from '../tafkeet'

describe('Reading millions', () => {
  it('should read 2,000,000', () => {
    expect(baseTafkeet(2000000)).toBe('مليونان')
  })
  it('should read 1,000,000', () => {
    expect(baseTafkeet(1000000)).toBe('مليون')
  })
  it('should read 1,100,000', () => {
    expect(baseTafkeet(1100000)).toBe('مليون ومائة ألفًا')
  })
  it('should read 1,101,100', () => {
    expect(baseTafkeet(1101100)).toBe('مليون ومائة وواحد ألفًا ومائة')
  })
  it('should read 1,001,100', () => {
    expect(baseTafkeet(1001100)).toBe('مليون وألف ومائة')
  })
  it('should read 6,010,000', () => {
    expect(baseTafkeet(6010000)).toBe('ستة ملايين وعشر آلاف')
  })
  it('should read 66,090,900', () => {
    expect(baseTafkeet(66090900)).toBe(
      'ستة وستون مليونًا وتسعون ألفًا وتسعمائة'
    )
  })
  it('should read 3,044,092', () => {
    expect(baseTafkeet(3044092)).toBe(
      'ثلاثة ملايين وأربعة وأربعون ألفًا واثنان وتسعون'
    )
  })
  it('should read 3,014,636', () => {
    expect(baseTafkeet(3014636)).toBe(
      'ثلاثة ملايين وأربعة عشر ألفًا وستمائة وستة وثلاثون'
    )
  })
  it('should read 3,151,504', () => {
    expect(baseTafkeet(3151504)).toBe(
      'ثلاثة ملايين ومائة وواحد وخمسون ألفًا وخمسمائة وأربعة'
    )
  })
  it('should read 3,029,242', () => {
    expect(baseTafkeet(3029242)).toBe(
      'ثلاثة ملايين وتسعة وعشرون ألفًا ومئتان واثنان وأربعون'
    )
  })
  it('should read 3,129,247', () => {
    expect(baseTafkeet(3129247)).toBe(
      'ثلاثة ملايين ومائة وتسعة وعشرون ألفًا ومئتان وسبعة وأربعون'
    )
  })
  it('should read 3,120,500', () => {
    expect(baseTafkeet(3120500)).toBe(
      'ثلاثة ملايين ومائة وعشرون ألفًا وخمسمائة'
    )
  })
  it('should read 3,100,000', () => {
    expect(baseTafkeet(3100000)).toBe('ثلاثة ملايين ومائة ألفًا')
  })
  it('should read 3,000,000', () => {
    expect(baseTafkeet(3000000)).toBe('ثلاثة ملايين')
  })
  it('should read 2,044,092', () => {
    expect(baseTafkeet(2044092)).toBe(
      'مليونان وأربعة وأربعون ألفًا واثنان وتسعون'
    )
  })
  it('should read 2,014,636', () => {
    expect(baseTafkeet(2014636)).toBe(
      'مليونان وأربعة عشر ألفًا وستمائة وستة وثلاثون'
    )
  })
  it('should read 2,151,504', () => {
    expect(baseTafkeet(2151504)).toBe(
      'مليونان ومائة وواحد وخمسون ألفًا وخمسمائة وأربعة'
    )
  })
  it('should read 2,129,247', () => {
    expect(baseTafkeet(2129247)).toBe(
      'مليونان ومائة وتسعة وعشرون ألفًا ومئتان وسبعة وأربعون'
    )
  })
  it('should read 2,029,242', () => {
    expect(baseTafkeet(2029242)).toBe(
      'مليونان وتسعة وعشرون ألفًا ومئتان واثنان وأربعون'
    )
  })
  it('should read 2,120,500', () => {
    expect(baseTafkeet(2120500)).toBe('مليونان ومائة وعشرون ألفًا وخمسمائة')
  })
  it('should read 2,100,000', () => {
    expect(baseTafkeet(2100000)).toBe('مليونان ومائة ألفًا')
  })
  it('should read 1,000,005', () => {
    expect(baseTafkeet(1000005)).toBe('مليون وخمسة')
  })
  it('should read 1,000,500', () => {
    expect(baseTafkeet(1000500)).toBe('مليون وخمسمائة')
  })
  it('should read 1,014,636', () => {
    expect(baseTafkeet(1014636)).toBe(
      'مليون وأربعة عشر ألفًا وستمائة وستة وثلاثون'
    )
  })
  it('should read 1,192,928', () => {
    expect(baseTafkeet(1192928)).toBe(
      'مليون ومائة واثنان وتسعون ألفًا وتسعمائة وثمانية وعشرون'
    )
  })
  it('should read 1,120,500', () => {
    expect(baseTafkeet(1120500)).toBe('مليون ومائة وعشرون ألفًا وخمسمائة')
  })
})

describe('Reading millions digits', function () {
  it('should read 2,000,000', function () {
    assert.equal('مليونان', baseTafkeet(2000000))
  })
  it('should read 3,044,092', function () {
    assert.equal(
      'ثلاثة ملايين وأربعة وأربعون ألفًا واثنان وتسعون',
      baseTafkeet(3044092)
    )
  })
})
