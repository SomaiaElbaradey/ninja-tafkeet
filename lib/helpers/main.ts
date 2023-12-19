import { AND, HUNDREDS, ONES, ONES_TENS, TENS, THOUSANDS } from '../constants'
import {
  ArabicWords,
  Hundreds,
  Ones,
  OnesTens,
  ParseInt,
  Tens,
  Thousands,
} from './types'
import {
  getNthDigits,
  isKey,
  separateByAnd,
  truncateLeadingZeros,
} from './utils'

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

// make it 30 line
export const getThousands = (stringBase: string, digits: number) => {
  // 1,000 -> 9,999 : 4 digits alf alfan 3alaf 4 alaf ... //getOnes(0,1) + alf post
  // 10,000 -> 99,999 : 5 digits 10 alaf, 11 alfn, 99 alfn
  // 100,000 -> 999,999: 6 digits 100 alf, alf
  // 101,000 -> 100 alf and alf

  if (stringBase.length === 4) {
    const hundredsString = getNthDigits(stringBase, 1, 3)

    const otherDigits = truncateLeadingZeros(hundredsString)

    let extraTafkeet = undefined
    if (otherDigits) {
      if (otherDigits.length === 3)
        extraTafkeet = getHundreds(otherDigits, parseInt(otherDigits, 10))

      if (otherDigits.length === 2)
        extraTafkeet = getTens(otherDigits, parseInt(otherDigits, 10))

      if (otherDigits.length === 1)
        extraTafkeet = getOnes(otherDigits, parseInt(otherDigits, 10))
    }

    const hundredsTafkeet = getHundreds(
      hundredsString,
      parseInt(hundredsString, 10)
    )

    const thousandsDigit = Math.floor(digits / 1000)

    const thousandsIndex =
      thousandsDigit <= 2 ? thousandsDigit.toString() : '39'
    const numberIndex = parseInt(thousandsIndex)

    const thousandsValue = isKey(THOUSANDS, thousandsIndex)
      ? THOUSANDS[thousandsIndex]
      : THOUSANDS['39']

    const onesDigit = getNthDigits(stringBase, 0, 0)
    const onesVal =
      numberIndex === 39 ? ones(parseInt(onesDigit) as Ones) : undefined

    const thousandsTafkeet = thousandsValue
      ? `${onesVal ? `${onesVal} ` : ''}${thousandsValue} ${
          extraTafkeet ? AND + extraTafkeet : ''
        }`
      : undefined

    return thousandsTafkeet
  }

  return undefined
}
