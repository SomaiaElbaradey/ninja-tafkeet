// IDE Feat
import { Currency } from './helpers'

export const ZERO = 'صفر'
export const AND = 'و'
export const SPACE = ' '
export const ONLY = 'فقط '
export const ONE_AND_ONLY = ' لا غير'
export const MAX_DIGITS_LENGTH = 7

export const CURRENCY = {
  singular: 'جنيهًا مصري',
  plural: 'جنيهات مصرية',
  fraction: 'قرش',
  fractions: 'قروش',
  decimals: 2,
} as const satisfies Currency

export const ONES = {
  1: 'واحد', //singular
  2: 'اثنان',
  3: 'ثلاثة',
  4: 'أربعة',
  5: 'خمسة',
  6: 'ستة',
  7: 'سبعة',
  8: 'ثمانية',
  9: 'تسعة',
  10: 'عشرة',
} as const

export const ONES_TENS = {
  1: 'أحدَ',
  2: 'اثنا',
} as const

export const TENS = {
  1: 'عشر',
  2: 'عشرون',
  3: 'ثلاثون',
  4: 'أربعون',
  5: 'خمسون',
  6: 'ستون',
  7: 'سبعون',
  8: 'ثمانون',
  9: 'تسعون',
} as const

export const HUNDREDS = {
  1: 'مائة',
  2: 'مئتان',
  3: 'ثلاثمائة',
  4: 'أربعمائة',
  5: 'خمسمائة',
  6: 'ستمائة',
  7: 'سبعمائة',
  8: 'ثمانمائة',
  9: 'تسعمائة',
} as const

export const THOUSANDS = {
  1: 'ألف',
  2: 'ألفان',
  39: 'آلاف',
  1199: 'ألفًا',
} as const

export const MILLIONS = {
  1: 'مليون',
  2: 'مليونان',
  39: 'ملايين',
  1199: 'مليونًا',
} as const
