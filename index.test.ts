import { assert, describe, expect, it } from 'vitest'
import { tafkeet } from './lib/tafkeet'

// 1001
// 1011
// 101
// 10001
// 10010
// 10011
// 101000
// 100010

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
  it('should read 1000', () => {
    expect(tafkeet(1000)).toBe('ألف')
  })
  it('should read 2000', () => {
    expect(tafkeet(2000)).toBe('ألفان')
  })
  it('should read 3456', () => {
    expect(tafkeet(3456)).toBe('ثلاثة آلاف وأربعمائة وستة وخمسون')
  })
  it('should read 9056', () => {
    expect(tafkeet(9056)).toBe('تسعة آلاف وستة وخمسون')
  })
  it('should read 9006', () => {
    expect(tafkeet(9006)).toBe('تسعة آلاف وستة')
  })
  it('should read 10000', () => {
    expect(tafkeet(10000)).toBe('عشر آلاف')
  })
  it('should read 11000', () => {
    expect(tafkeet(11000)).toBe('أحدَ عشر ألفًا')
  })
  it('should read 30000', () => {
    expect(tafkeet(30000)).toBe('ثلاثون ألفًا')
  })
  it('should read 30001', () => {
    expect(tafkeet(30001)).toBe('ثلاثون ألفًا وواحد')
  })
  it('should read 30955', () => {
    expect(tafkeet(30955)).toBe('ثلاثون ألفًا وتسعمائة وخمسة وخمسون')
  })
  it('should read 65900', () => {
    expect(tafkeet(65900)).toBe('خمسة وستون ألفًا وتسعمائة')
  })
  it('should read 101026', () => {
    expect(tafkeet(101026)).toBe('مائة وواحد ألفًا وستة وعشرون')
  })
  it('should read 100000', () => {
    expect(tafkeet(100000)).toBe('مائة ألفًا')
  })
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
