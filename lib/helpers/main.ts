import { AND, HUNDREDS, ONES, ONES_TENS, TENS } from '../constants'
import { ArabicWords, Hundreds, Ones, OnesTens, Tens } from './types'
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
 * @returns Arabic Tafkeet string, considering whether it's ones, tens, etc.
 */

export const getOnes = (stringBase: string, digits: number) => {
  if (stringBase?.length === 1 && isKey(ONES, digits)) return ones(digits)
  return undefined
}

export const getTens = (stringBase: string, digits: number) => {
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
      ? `${onesValue || ''}${(onesValue && ' ') || ''}${tensValue}`
      : undefined

    return localizedValue && tensDigit !== 1
      ? separateByAnd(localizedValue)
      : localizedValue
  }

  return undefined
}

export const getHundreds = (stringBase: string, digits: number) => {
  if (stringBase.length === 3) {
    const tensString = getNthDigits(stringBase, 1, 2)
    const tensTafkeet = getTens(tensString, parseInt(tensString))

    const hundredsDigit = Math.floor(digits / 100)

    const hundredsValue =
      hundredsDigit && isKey(HUNDREDS, hundredsDigit)
        ? (hundreds(hundredsDigit) satisfies ArabicWords)
        : undefined

    const hundredsTafkeet = hundredsValue
      ? `${hundredsValue} ${tensTafkeet ? AND + tensTafkeet : ''}`
      : undefined

    return hundredsTafkeet
  }

  return undefined
}
