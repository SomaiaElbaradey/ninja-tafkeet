import { assert, describe, it } from 'vitest'
import { wholeStringTafkeet } from '../../tafkeet'

describe('Reading numbers in various formats', () => {
  it('should read 1', () => {
    assert.equal('واحد', wholeStringTafkeet(1).baseTafkeet)
  })
  it('should read 0', () => {
    assert.equal('صفر', wholeStringTafkeet(0).baseTafkeet)
  })
  it('should read 11', () => {
    assert.equal('أحدَ عشر', wholeStringTafkeet(11).baseTafkeet)
  })

  it('should read 30', () => {
    assert.equal('ثلاثون', wholeStringTafkeet(30).baseTafkeet)
  })
  it('should read 96', () => {
    assert.equal('ستة وتسعون', wholeStringTafkeet(96).baseTafkeet)
  })
  it('should read 101', () => {
    assert.equal('مائة وواحد', wholeStringTafkeet(101).baseTafkeet)
  })
  it('should read 999', () => {
    assert.equal('تسعمائة وتسعة وتسعون', wholeStringTafkeet(999).baseTafkeet)
  })
  it('should read 600', () => {
    assert.equal('ستمائة', wholeStringTafkeet(600).baseTafkeet)
  })
  it('should read 1,000', () => {
    assert.equal('ألف', wholeStringTafkeet(1000).baseTafkeet)
  })
  it('should read 2,000', () => {
    assert.equal('ألفان', wholeStringTafkeet(2000).baseTafkeet)
  })
  it('should read 3,456', () => {
    assert.equal(
      'ثلاثة آلاف وأربعمائة وستة وخمسون',
      wholeStringTafkeet(3456).baseTafkeet
    )
  })
  it('should read 9,056', () => {
    assert.equal('تسعة آلاف وستة وخمسون', wholeStringTafkeet(9056).baseTafkeet)
  })
  it('should read 9,006', () => {
    assert.equal('تسعة آلاف وستة', wholeStringTafkeet(9006).baseTafkeet)
  })
  it('should read 1,001', () => {
    assert.equal('ألف وواحد', wholeStringTafkeet(1001).baseTafkeet)
  })
  it('should read 1,011', () => {
    assert.equal('ألف وأحدَ عشر', wholeStringTafkeet(1011).baseTafkeet)
  })
  it('should read 10,001', () => {
    assert.equal('عشر آلاف وواحد', wholeStringTafkeet(10001).baseTafkeet)
  })
  it('should read 10,010', () => {
    assert.equal('عشر آلاف وعشر', wholeStringTafkeet(10010).baseTafkeet)
  })
  it('should read 10,011', () => {
    assert.equal('عشر آلاف وأحدَ عشر', wholeStringTafkeet(10011).baseTafkeet)
  })
  it('should read 10,000', () => {
    assert.equal('عشر آلاف', wholeStringTafkeet(10000).baseTafkeet)
  })
  it('should read 11,000', () => {
    assert.equal('أحدَ عشر ألفًا', wholeStringTafkeet(11000).baseTafkeet)
  })
  it('should read 30,000', () => {
    assert.equal('ثلاثون ألفًا', wholeStringTafkeet(30000).baseTafkeet)
  })
  it('should read 30,001', () => {
    assert.equal('ثلاثون ألفًا وواحد', wholeStringTafkeet(30001).baseTafkeet)
  })
  it('should read 30,955', () => {
    assert.equal(
      'ثلاثون ألفًا وتسعمائة وخمسة وخمسون',
      wholeStringTafkeet(30955).baseTafkeet
    )
  })
  it('should read 65,900', () => {
    assert.equal(
      'خمسة وستون ألفًا وتسعمائة',
      wholeStringTafkeet(65900).baseTafkeet
    )
  })
  it('should read 101,026', () => {
    assert.equal(
      'مائة وواحد ألفًا وستة وعشرون',
      wholeStringTafkeet(101026).baseTafkeet
    )
  })
  it('should read 101,000', () => {
    assert.equal('مائة وواحد ألفًا', wholeStringTafkeet(101000).baseTafkeet)
  })
  it('should read 101,100', () => {
    assert.equal(
      'مائة وواحد ألفًا ومائة',
      wholeStringTafkeet(101100).baseTafkeet
    )
  })
  it('should read 100,010', () => {
    assert.equal('مائة ألفًا وعشر', wholeStringTafkeet(100010).baseTafkeet)
  })
  it('should read 120,066', () => {
    assert.equal(
      'مائة وعشرون ألفًا وستة وستون',
      wholeStringTafkeet(120066).baseTafkeet
    )
  })
  it('should read 120,006', () => {
    assert.equal(
      'مائة وعشرون ألفًا وستة',
      wholeStringTafkeet(120006).baseTafkeet
    )
  })
  it('should read 101,496', () => {
    assert.equal(
      'مائة وواحد ألفًا وأربعمائة وستة وتسعون',
      wholeStringTafkeet(101496).baseTafkeet
    )
  })
  it('should read 120,000', () => {
    assert.equal('مائة وعشرون ألفًا', wholeStringTafkeet(120000).baseTafkeet)
  })
  it('should read 100,000', () => {
    assert.equal('مائة ألفًا', wholeStringTafkeet(100000).baseTafkeet)
  })
  it('should read 21,007', () => {
    assert.equal(
      'واحد وعشرون ألفًا وسبعة',
      wholeStringTafkeet(21007).baseTafkeet
    )
  })
  it('should read 20,263', () => {
    assert.equal(
      'عشرون ألفًا ومئتان وثلاثة وستون',
      wholeStringTafkeet(20263).baseTafkeet
    )
  })
  it('should read 19,000', () => {
    assert.equal('تسعة عشر ألفًا', wholeStringTafkeet(19000).baseTafkeet)
  })
  it('should read 1,105', () => {
    assert.equal('ألف ومائة وخمسة', wholeStringTafkeet(1105).baseTafkeet)
  })
  it('should read 122', () => {
    assert.equal('مائة واثنان وعشرون', wholeStringTafkeet(122).baseTafkeet)
  })
  it('should read 100', () => {
    assert.equal('مائة', wholeStringTafkeet(100).baseTafkeet)
  })
  it('should read 96', () => {
    assert.equal('ستة وتسعون', wholeStringTafkeet(96).baseTafkeet)
  })
  it('should read 10', () => {
    assert.equal('عشر', wholeStringTafkeet(10).baseTafkeet)
  })
})

describe('Reading strict numbers in (ones, tens, hundreds, thousands) formats', () => {
  it('should read 96', () => {
    assert.strictEqual(wholeStringTafkeet(96).baseTafkeet, 'ستة وتسعون')
  })
  it('should read 101', () => {
    assert.strictEqual(wholeStringTafkeet(101).baseTafkeet, 'مائة وواحد')
  })
  it('should read 999', () => {
    assert.strictEqual(
      wholeStringTafkeet(999).baseTafkeet,
      'تسعمائة وتسعة وتسعون'
    )
  })
})
