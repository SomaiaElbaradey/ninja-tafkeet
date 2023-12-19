import { assert, describe, expect, it } from 'vitest'
import { tafkeet } from './lib/tafkeet'

describe('Reading numbers', () => {
  console.log(tafkeet(1000))
  console.log(tafkeet(2000))
  console.log(tafkeet(3456))
  console.log(tafkeet(9056)) //
  console.log(tafkeet(9006)) //

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
  it('should read 999', () => {
    expect(tafkeet(999)).toBe('تسعمائة وتسعة وتسعون')
  })
  it('should read 600', () => {
    expect(tafkeet(600)).toBe('ستمائة ')
  })
})

describe('Reading digits', function () {
  it('should read 1', function () {
    assert.equal('واحد', tafkeet(1))
  })
  it('should read 0', function () {
    assert.equal('صفر', tafkeet(0))
  })
})
