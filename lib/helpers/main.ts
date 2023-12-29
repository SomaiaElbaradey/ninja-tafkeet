import {
  AND,
  EMPTY_STRING,
  HUNDREDS,
  ONES,
  ONES_TENS,
  SPACE,
  TENS,
} from '../constants'
import { ArabicWords, Hundreds, Ones, OnesTens, Tens } from '../types'
import { getNthDigits, isKey, separateByAnd } from './utils'

export const ones = (value: Ones): ArabicWords => ONES[value]
export const onesTens = (value: OnesTens): ArabicWords => ONES_TENS[value]
export const tens = (value: Tens): ArabicWords => TENS[value]
export const hundreds = (value: Hundreds): ArabicWords => HUNDREDS[value]

/**
 * The below functions generate Arabic Tafkeet based on the provided parameters.
 *
 * @param {string} stringBase - representing the number.
 * @param {number} digits - representing the value of the number.
 * @returns Arabic Tafkeet string, considering whether it's ones, tens and hundreds.
 */

export function getOnes(stringBase: string, digits: number) {
  if (stringBase?.length === 1 && isKey(ONES, digits))
    return ones(digits).trim()
  return undefined
}

export function getTens(stringBase: string, digits: number) {
  if (stringBase.length === 2) {
    const onesDigit = digits % 10
    const tensDigit = Math.floor(digits / 10)

    let onesValue = undefined

    if ((onesDigit === 1 || onesDigit === 2) && tensDigit === 1)
      onesValue =
        isKey(ONES_TENS, onesDigit) &&
        (onesTens(onesDigit) satisfies ArabicWords)
    else onesValue = getOnes(stringBase[1]!, onesDigit)

    const tensValue =
      tensDigit && isKey(TENS, tensDigit)
        ? (tens(tensDigit) satisfies ArabicWords)
        : undefined

    const localizedValue = tensValue
      ? `${onesValue || EMPTY_STRING}${
          (onesValue && SPACE) || EMPTY_STRING
        }${tensValue}`
      : undefined

    return localizedValue && tensDigit !== 1
      ? separateByAnd(localizedValue).trim()
      : localizedValue?.trim()
  }

  return undefined
}

export function getHundreds(stringBase: string, digits: number) {
  if (stringBase.length === 3) {
    const tensString = getNthDigits(stringBase, 1, 2)

    let tensTafkeet = undefined
    if (tensString.length == 1)
      tensTafkeet = getOnes(tensString, parseInt(tensString))
    else tensTafkeet = getTens(tensString, parseInt(tensString))

    const hundredsDigit = Math.floor(digits / 100)

    const hundredsValue =
      hundredsDigit && isKey(HUNDREDS, hundredsDigit)
        ? (hundreds(hundredsDigit) satisfies ArabicWords)
        : undefined

    const hundredsTafkeet = hundredsValue
      ? `${hundredsValue}${SPACE}${
          tensTafkeet ? AND + tensTafkeet : EMPTY_STRING
        }`
      : undefined

    return hundredsTafkeet?.trim()
  }

  return undefined
}
