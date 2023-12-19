import {
  AND,
  CURRENCY,
  ONE_AND_ONLY,
  ONLY,
  STRING_ZER0,
  ZERO_NUMBER,
} from '../constants'
import { CurrentCurrency } from './types'
import { digitsIsDefined, validDigits } from './validation'

/**
 *
 * @param object of type T
 * @param key of type PropertyKey = string | number | symbol
 * @returns boolean true if the key in the object
 */
export const isKey = <T extends object>(
  object: T,
  key: PropertyKey
): key is keyof T => key in object

/**
 * Extract the number parts (base, fraction) from the digits
 */
export const numberParts = (digits: string | number) => {
  let stringDigits = STRING_ZER0
  if (digitsIsDefined(digits))
    stringDigits = typeof digits !== 'string' ? digits?.toString() : digits

  const [base = STRING_ZER0, fraction = STRING_ZER0] = stringDigits.split('.')
  const baseNumber = validDigits(base) ? parseInt(base) : ZERO_NUMBER
  const fractionNumber = validDigits(fraction)
    ? parseInt(fraction)
    : ZERO_NUMBER

  return {
    base: baseNumber,
    fraction: fractionNumber,
  }
}

/**
 * Return parts of the digits
 */
export const getNthDigits = (digits: string, first: number, end: number) =>
  digits.substring(first, end + 1)

export const addSuffixPrefix = (
  arabicWords: string,
  currency: CurrentCurrency
) => {
  // arabicWords: truncate it to not have extra spaces in the start or the end
  return `${ONLY} ${arabicWords} ${currency} ${ONE_AND_ONLY}`
}

/**
 * Separate each word by "and"
 */
export const separateByAnd = (digits: string) =>
  digits.split(' ').join(` ${AND}`)
