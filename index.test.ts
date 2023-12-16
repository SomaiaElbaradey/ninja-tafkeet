import { describe, expect, it } from 'vitest'
import { tafkeet } from './lib/tafkeet'

describe('Reading numbers from 1 - 999', () => {
  it('should read 1', () => {
    expect(tafkeet(1)).toBe('واحد')
  })
})

// describe('Reading numbers from 1 - 999', function() {
//     it('should read 11', function() {
//         assert.equal("أحد عشر", text.read(11));
//     });
// });

// describe('Reading full amounts without a currecy specified', function() {
//     it('should read 7,564,654', function() {
//         assert.equal("فقط سبعة ملايين وخمسمائة وأربعة وستون ألف وستمائة وأربعة وخمسون لا غير", new Tafgeet('7564654', '').parse());
//     });
// });

// describe('Reading full amounts', function() {
//     it('should read SDG 1', function() {
//         assert.equal("فقط واحد جنيه سوداني لا غير", new Tafgeet('1').parse());
//     });
// });
