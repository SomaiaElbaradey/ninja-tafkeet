import { assert, describe, it } from 'vitest'
import { baseTafkeet } from '../tafkeet'

describe('Reading numbers in various formats', () => {
  it('should read 1', () => {
    assert.equal('واحد', baseTafkeet(1))
  })
  it('should read 0', () => {
    assert.equal('صفر', baseTafkeet(0))
  })
  it('should read 11', () => {
    assert.equal('أحدَ عشر', baseTafkeet(11))
  })

  it('should read 30', () => {
    assert.equal('ثلاثون', baseTafkeet(30))
  })
  it('should read 96', () => {
    assert.equal('ستة وتسعون', baseTafkeet(96))
  })
  it('should read 101', () => {
    assert.equal('مائة وواحد', baseTafkeet(101))
  })
  it('should read 999', () => {
    assert.equal('تسعمائة وتسعة وتسعون', baseTafkeet(999))
  })
  it('should read 600', () => {
    assert.equal('ستمائة', baseTafkeet(600))
  })
  it('should read 1,000', () => {
    assert.equal('ألف', baseTafkeet(1000))
  })
  it('should read 2,000', () => {
    assert.equal('ألفان', baseTafkeet(2000))
  })
  it('should read 3,456', () => {
    assert.equal('ثلاثة آلاف وأربعمائة وستة وخمسون', baseTafkeet(3456))
  })
  it('should read 9,056', () => {
    assert.equal('تسعة آلاف وستة وخمسون', baseTafkeet(9056))
  })
  it('should read 9,006', () => {
    assert.equal('تسعة آلاف وستة', baseTafkeet(9006))
  })
  it('should read 1,001', () => {
    assert.equal('ألف وواحد', baseTafkeet(1001))
  })
  it('should read 1,011', () => {
    assert.equal('ألف وأحدَ عشر', baseTafkeet(1011))
  })
  it('should read 10,001', () => {
    assert.equal('عشر آلاف وواحد', baseTafkeet(10001))
  })
  it('should read 10,010', () => {
    assert.equal('عشر آلاف وعشر', baseTafkeet(10010))
  })
  it('should read 10,011', () => {
    assert.equal('عشر آلاف وأحدَ عشر', baseTafkeet(10011))
  })
  it('should read 10,000', () => {
    assert.equal('عشر آلاف', baseTafkeet(10000))
  })
  it('should read 11,000', () => {
    assert.equal('أحدَ عشر ألفًا', baseTafkeet(11000))
  })
  it('should read 30,000', () => {
    assert.equal('ثلاثون ألفًا', baseTafkeet(30000))
  })
  it('should read 30,001', () => {
    assert.equal('ثلاثون ألفًا وواحد', baseTafkeet(30001))
  })
  it('should read 30,955', () => {
    assert.equal('ثلاثون ألفًا وتسعمائة وخمسة وخمسون', baseTafkeet(30955))
  })
  it('should read 65,900', () => {
    assert.equal('خمسة وستون ألفًا وتسعمائة', baseTafkeet(65900))
  })
  it('should read 101,026', () => {
    assert.equal('مائة وواحد ألفًا وستة وعشرون', baseTafkeet(101026))
  })
  it('should read 101,000', () => {
    assert.equal('مائة وواحد ألفًا', baseTafkeet(101000))
  })
  it('should read 101,100', () => {
    assert.equal('مائة وواحد ألفًا ومائة', baseTafkeet(101100))
  })
  it('should read 100,010', () => {
    assert.equal('مائة ألفًا وعشر', baseTafkeet(100010))
  })
  it('should read 120,066', () => {
    assert.equal('مائة وعشرون ألفًا وستة وستون', baseTafkeet(120066))
  })
  it('should read 120,006', () => {
    assert.equal('مائة وعشرون ألفًا وستة', baseTafkeet(120006))
  })
  it('should read 101,496', () => {
    assert.equal('مائة وواحد ألفًا وأربعمائة وستة وتسعون', baseTafkeet(101496))
  })
  it('should read 120,000', () => {
    assert.equal('مائة وعشرون ألفًا', baseTafkeet(120000))
  })
  it('should read 100,000', () => {
    assert.equal('مائة ألفًا', baseTafkeet(100000))
  })
  it('should read 21,007', () => {
    assert.equal('واحد وعشرون ألفًا وسبعة', baseTafkeet(21007))
  })
  it('should read 20,263', () => {
    assert.equal('عشرون ألفًا ومئتان وثلاثة وستون', baseTafkeet(20263))
  })
  it('should read 19,000', () => {
    assert.equal('تسعة عشر ألفًا', baseTafkeet(19000))
  })
  it('should read 1,105', () => {
    assert.equal('ألف ومائة وخمسة', baseTafkeet(1105))
  })
  it('should read 122', () => {
    assert.equal('مائة واثنان وعشرون', baseTafkeet(122))
  })
  it('should read 100', () => {
    assert.equal('مائة', baseTafkeet(100))
  })
  it('should read 96', () => {
    assert.equal('ستة وتسعون', baseTafkeet(96))
  })
  it('should read 10', () => {
    assert.equal('عشر', baseTafkeet(10))
  })
})

describe('Reading strict numbers in (ones, tens, hundreds, thousands) formats', () => {
  it('should read 96', () => {
    assert.strictEqual(baseTafkeet(96), 'ستة وتسعون')
  })
  it('should read 101', () => {
    assert.strictEqual(baseTafkeet(101), 'مائة وواحد')
  })
  it('should read 999', () => {
    assert.strictEqual(baseTafkeet(999), 'تسعمائة وتسعة وتسعون')
  })
})
