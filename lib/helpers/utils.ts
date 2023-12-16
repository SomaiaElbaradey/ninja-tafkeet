import { CURRENCY, ONE_AND_ONLY, ONLY } from '../constants'
import { typeofDigitsIsDefined, validDigits } from './validation'

/**
 * Extract the number parts (base, fraction) from the digits
 */
export const numberParts = (digits: string | number) => {
  let stringDigits = '0'
  if (typeofDigitsIsDefined(digits))
    stringDigits = typeof digits !== 'string' ? digits?.toString() : digits

  const [base, fraction = '0'] = stringDigits.split('.')
  const baseNumber = validDigits(base as string) ? parseInt(base as string) : 0
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

export const addSuffixPrefix = (arabicWords: string) =>
  `${ONLY} ${arabicWords} ${CURRENCY.singular} ${ONE_AND_ONLY}`

/**
 * create new type out of parse int to avoid crashes
 * ex: type NumericStrings = "1" | "42" | "100";
 * type Numbers = ParseInt<NumericStrings>; // Results in 1 | 42 | 100
 */
export type ParseInt<T extends string> = T extends `${infer Int extends number}`
  ? Int
  : never
