import {
  THOUSANDS_FOUR_DIGITS,
  THOUSANDS_FIVE_DIGITS,
  THOUSANDS_SIX_DIGITS,
} from '../constants'
import {
  getNthDigits,
  isKey,
  handleThousandsHundredsPart,
  generateLocalizedTafkeet,
  generateNumericTafkeet,
} from './utils'

/**
 * The below functions generate Arabic Tafkeet based on the provided parameters.
 *
 * @param {string} stringBase - representing the number.
 * @returns Arabic Tafkeet string, considering whether it's Thousands and Millions.
 */

function handleFourDigitsThousands(stringBase: string) {
  const thousandStringIndex = getNthDigits(stringBase, 0, 0)
  const thousandsIndex = ['1', '2'].includes(thousandStringIndex)
    ? thousandStringIndex
    : 'default'

  const thousandsValue = isKey(THOUSANDS_FOUR_DIGITS, thousandsIndex)
    ? THOUSANDS_FOUR_DIGITS[thousandsIndex]
    : undefined

  const firstPartLocalization =
    thousandsIndex === 'default'
      ? generateNumericTafkeet(thousandStringIndex)
      : undefined

  const extraTafkeet = handleThousandsHundredsPart(stringBase)

  const thousandsTafkeet = generateLocalizedTafkeet(
    thousandsValue,
    firstPartLocalization,
    extraTafkeet
  )

  return thousandsTafkeet
}

function handleFiveDigitsThousands(stringBase: string) {
  const thousandsDigits = getNthDigits(stringBase, 0, 1)
  const firstPartLocalization = generateNumericTafkeet(thousandsDigits)

  const thousandsIndex = ['10'].includes(thousandsDigits)
    ? thousandsDigits
    : 'default'

  const thousandsValue = isKey(THOUSANDS_FIVE_DIGITS, thousandsIndex)
    ? THOUSANDS_FIVE_DIGITS[thousandsIndex]
    : undefined

  const extraTafkeet = handleThousandsHundredsPart(stringBase)

  const thousandsTafkeet = generateLocalizedTafkeet(
    thousandsValue,
    firstPartLocalization,
    extraTafkeet
  )
  return thousandsTafkeet
}

function handleSixDigitsThousands(stringBase: string) {
  const thousandsDigits = getNthDigits(stringBase, 0, 2)

  const numberDigits = parseInt(stringBase)
  if (!numberDigits) return undefined
  const firstPartLocalization = generateNumericTafkeet(thousandsDigits)

  const thousandsValue = thousandsDigits
    ? THOUSANDS_SIX_DIGITS['default']
    : undefined

  const extraTafkeet = handleThousandsHundredsPart(stringBase)
  const thousandsTafkeet = generateLocalizedTafkeet(
    thousandsValue,
    firstPartLocalization,
    extraTafkeet
  )

  return thousandsTafkeet
}

export function getThousands(stringBase: string) {
  let tafkeetedVal = undefined

  if (stringBase.length === 4)
    tafkeetedVal = handleFourDigitsThousands(stringBase)
  else if (stringBase.length === 5)
    tafkeetedVal = handleFiveDigitsThousands(stringBase)
  else if (stringBase.length === 6)
    tafkeetedVal = handleSixDigitsThousands(stringBase)

  return tafkeetedVal
}
