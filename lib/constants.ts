// IDE
import { Currency, ZeroDefault } from './helpers'

export const STRING_ZER0 = '0'
export const ZERO = 'صفر'
export const AND = 'و'
export const SPACE = ' '
export const EMPTY_STRING = ''
export const ONLY = 'فقط '
export const ONE_AND_ONLY = ' لا غير'
export const MAX_DIGITS_LENGTH = 9
export const ZERO_NUMBER: ZeroDefault = 0

export const CURRENCY = {
  singular: 'جنيهًا مصري',
  plural: 'جنيهات مصرية',
  fraction: 'قرشًا',
  fractions: 'قروش',
  decimals: 2,
} as const satisfies Currency

export const ONES = {
  1: 'واحد',
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

export const THOUSANDS_FOUR_DIGITS = {
  1: 'ألف',
  2: 'ألفان',
  default: 'آلاف',
} as const

export const THOUSANDS_FIVE_DIGITS = {
  10: 'آلاف',
  default: 'ألفًا',
} as const

export const THOUSANDS_SIX_DIGITS = {
  default: 'ألفًا',
} as const

export const THOUSANDS =
  THOUSANDS_FOUR_DIGITS || THOUSANDS_FIVE_DIGITS || THOUSANDS_SIX_DIGITS

export const MILLIONS_SEVEN_DIGITS = {
  1: 'مليون',
  2: 'مليونان',
  default: 'ملايين',
} as const

export const MILLIONS_DEFAULT = {
  default: 'مليونًا',
} as const

export const MILLIONS = MILLIONS_SEVEN_DIGITS || MILLIONS_DEFAULT
