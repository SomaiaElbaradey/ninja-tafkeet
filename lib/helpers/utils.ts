import {
  AND,
  CURRENCY,
  EMPTY_STRING,
  ONE_AND_ONLY,
  ONLY,
  SPACE,
  STRING_ZER0,
  ZERO_NUMBER,
} from '../constants'
import { getHundreds, getOnes, getTens } from './main'
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
  const curr = CURRENCY[currency]
  console.log(curr)

  return `${ONLY} ${arabicWords} ${currency} ${ONE_AND_ONLY}`
}

/**
 * Separate each word by "and"
 */
export const separateByAnd = (digits: string) =>
  digits.split(' ').join(` ${AND}`)

export const truncateLeadingZeros = (numString: string) => {
  const digits = numString.replace(/^0+/, '')
  return digits || EMPTY_STRING
}

export const getThousandsSecondaryParts = (otherDigits: string) => {
  let extraTafkeet = undefined

  if (otherDigits.length === 3)
    extraTafkeet = getHundreds(otherDigits, parseInt(otherDigits, 10))

  if (otherDigits.length === 2)
    extraTafkeet = getTens(otherDigits, parseInt(otherDigits, 10))

  if (otherDigits.length === 1)
    extraTafkeet = getOnes(otherDigits, parseInt(otherDigits, 10))

  return extraTafkeet
}

//Handler for hundreds part of the thousand number
export const handleThousandsHundredsPart = (stringBase: string) => {
  let length = stringBase.length
  const hundredsString = getNthDigits(stringBase, length - 3, length - 1)

  const otherDigits = truncateLeadingZeros(hundredsString)

  const extraTafkeet = otherDigits
    ? getThousandsSecondaryParts(otherDigits)
    : undefined

  return extraTafkeet
}

/** Arabic final tafkeet for thousands depending on
 * its thousandsValue, firstPartLocalization and extra secondary Tafkeet part
 **/
export const wholeThousandsTafkeet = (
  thousandsValue: string | undefined,
  firstPartLocalization: string | undefined,
  extraTafkeet: string | undefined
) => {
  const thousandsTafkeet = thousandsValue
    ? `${
        firstPartLocalization
          ? `${firstPartLocalization}${SPACE}`
          : EMPTY_STRING
      }${thousandsValue} ${extraTafkeet ? AND + extraTafkeet : EMPTY_STRING}`
    : undefined

  return thousandsTafkeet?.trim()
}
