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
import { getThousands } from './thousandsHandler'
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
  truncateLeadingZeros(digits.substring(first, end + 1))

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

export const generateNumericTafkeet = (numericString: string) => {
  let tafkeetComponent = undefined
  let numericVal = parseInt(numericString, 10)

  if ([4, 5, 6].includes(numericString.length))
    tafkeetComponent = getThousands(numericString)

  if (numericString.length === 3)
    tafkeetComponent = getHundreds(numericString, numericVal)

  if (numericString.length === 2)
    tafkeetComponent = getTens(numericString, numericVal)

  if (numericString.length === 1)
    tafkeetComponent = getOnes(numericString, numericVal)

  return tafkeetComponent
}

//Handler for hundreds part of the thousand number
export const handleThousandsHundredsPart = (stringBase: string) => {
  let length = stringBase.length
  const hundredsString = getNthDigits(stringBase, length - 3, length - 1)

  const otherDigits = truncateLeadingZeros(hundredsString)

  const extraTafkeet = otherDigits
    ? generateNumericTafkeet(otherDigits)
    : undefined

  return extraTafkeet
}

/** Arabic final tafkeet for thousands depending on
 * its thousandsValue, firstPartLocalization and extra secondary Tafkeet part
 **/
export const generateLocalizedTafkeet = (
  numericValue: string | undefined,
  prefixLocalization: string | undefined,
  suffixTafkeet: string | undefined
) => {
  const localizedTafkeet = numericValue
    ? `${
        prefixLocalization ? `${prefixLocalization}${SPACE}` : EMPTY_STRING
      }${numericValue} ${suffixTafkeet ? AND + suffixTafkeet : EMPTY_STRING}`
    : undefined

  return localizedTafkeet?.trim()
}
