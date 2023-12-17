import { MAX_DIGITS_LENGTH } from '../constants'

/**
 * Never operate on undefined (value - types)
 */
export const digitsIsDefined = (stringNumber: string | number): boolean =>
  typeof stringNumber !== 'undefined' || stringNumber !== 'undefined'

/**
 * Digits are numbers and not more than millions
 */
export const validDigits = (digits: string): boolean =>
  /^[0-9]+$/.test(digits) && digits.length <= MAX_DIGITS_LENGTH
