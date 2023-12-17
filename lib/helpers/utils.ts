import { CURRENCY, ONES, ONE_AND_ONLY, ONLY } from '../constants'
import { ArabicWords, CurrentCurrency, Ones } from './types'
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
  let stringDigits = '0'
  if (digitsIsDefined(digits))
    stringDigits = typeof digits !== 'string' ? digits?.toString() : digits

  const [base = '0', fraction = '0'] = stringDigits.split('.')
  const baseNumber = validDigits(base) ? parseInt(base) : 0
  const fractionNumber = validDigits(fraction) ? parseInt(fraction) : 0

  return {
    base: baseNumber,
    fraction: fractionNumber,
  }
}

/**
 * Return parts of the digits
 */
export const getDigitsNth = (digits: string, first: number, end: number) =>
  digits.substring(first, end + 1)

export const addSuffixPrefix = (
  arabicWords: string,
  currency: CurrentCurrency
) => `${ONLY} ${arabicWords} ${currency} ${ONE_AND_ONLY}`

// ones -> if it exists in any of theses
// util : separate each word by "and"
// sing plural
