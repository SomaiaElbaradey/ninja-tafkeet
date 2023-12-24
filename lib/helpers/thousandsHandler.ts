import {
  THOUSANDS_FOUR_DIGITS,
  THOUSANDS_FIVE_DIGITS,
  THOUSANDS_SIX_DIGITS,
  ONES,
} from '../constants'
import { getHundreds, getTens, ones } from './main'
import {
  getNthDigits,
  isKey,
  handleHundredsPart,
  wholeThousandsTafkeet,
} from './utils'

/**
 * The below functions generate Arabic Tafkeet based on the provided parameters.
 *
 * @param {string} stringBase - representing the number.
 * @returns Arabic Tafkeet string, considering whether it's Thousands and Millions.
 */

const handleFourDigitsThousands = (stringBase: string) => {
  const thousandStringIndex = getNthDigits(stringBase, 0, 0)
  const thousandsIndex = ['1', '2'].includes(thousandStringIndex)
    ? thousandStringIndex
    : 'default'

  const thousandsValue = isKey(THOUSANDS_FOUR_DIGITS, thousandsIndex)
    ? THOUSANDS_FOUR_DIGITS[thousandsIndex]
    : undefined

  const firstPartLocalization =
    thousandsIndex === 'default' && isKey(ONES, thousandStringIndex)
      ? ones(thousandStringIndex)
      : undefined

  const extraTafkeet = handleHundredsPart(stringBase)

  const thousandsTafkeet = wholeThousandsTafkeet(
    thousandsValue,
    firstPartLocalization,
    extraTafkeet
  )

  return thousandsTafkeet
}

const handleFiveDigitsThousands = (stringBase: string) => {
  const thousandsDigits = getNthDigits(stringBase, 0, 1)
  const firstPartLocalization = getTens(
    thousandsDigits,
    parseInt(thousandsDigits)
  )

  const thousandsIndex = ['10'].includes(thousandsDigits)
    ? thousandsDigits
    : 'default'

  const thousandsValue = isKey(THOUSANDS_FIVE_DIGITS, thousandsIndex)
    ? THOUSANDS_FIVE_DIGITS[thousandsIndex]
    : undefined

  const extraTafkeet = handleHundredsPart(stringBase)

  const thousandsTafkeet = wholeThousandsTafkeet(
    thousandsValue,
    firstPartLocalization,
    extraTafkeet
  )
  return thousandsTafkeet
}

const handleSixDigitsThousands = (stringBase: string) => {
  const thousandsDigits = getNthDigits(stringBase, 0, 2)

  const firstPartLocalization = getHundreds(
    thousandsDigits,
    parseInt(thousandsDigits)
  )

  const thousandsValue = THOUSANDS_SIX_DIGITS['default']

  const extraTafkeet = handleHundredsPart(stringBase)
  const thousandsTafkeet = wholeThousandsTafkeet(
    thousandsValue,
    firstPartLocalization,
    extraTafkeet
  )

  return thousandsTafkeet
}

export const getThousands = (stringBase: string) => {
  let tafkeetedVal = undefined

  if (stringBase.length === 4)
    tafkeetedVal = handleFourDigitsThousands(stringBase)
  else if (stringBase.length === 5)
    tafkeetedVal = handleFiveDigitsThousands(stringBase)
  else if (stringBase.length === 6)
    tafkeetedVal = handleSixDigitsThousands(stringBase)

  return tafkeetedVal
}
