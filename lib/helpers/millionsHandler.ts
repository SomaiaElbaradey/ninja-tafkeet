import {
  AND,
  MILLIONS_DEFAULT,
  MILLIONS_SEVEN_DIGITS,
  ONES,
} from '../constants'
import { ones } from './main'
import {
  getNthDigits,
  generateNumericTafkeet,
  isKey,
  generateLocalizedTafkeet,
} from './utils'

/**
 * The below function generate Arabic Tafkeet based on the provided parameters.
 *
 * @param {string} stringBase - representing the number.
 * @param {boolean} useDefault - differentiate between special cases of millions and the default.
 * @returns Arabic Tafkeet string, considering whether it's Millions.
 */

function getMillionsTafkeet(stringBase: string, useDefault: boolean = false) {
  const millionsStringIndex = getNthDigits(stringBase, 0, stringBase.length - 7)

  const millionsIndex = ['1', '2'].includes(millionsStringIndex)
    ? millionsStringIndex
    : 'default'

  let millionsValue = undefined
  if (useDefault) millionsValue = MILLIONS_DEFAULT['default']
  else {
    millionsValue = isKey(MILLIONS_SEVEN_DIGITS, millionsIndex)
      ? MILLIONS_SEVEN_DIGITS[millionsIndex]
      : undefined
  }

  let firstPartLocalization = undefined
  if (millionsIndex === 'default' && isKey(ONES, millionsStringIndex))
    firstPartLocalization = ones(millionsStringIndex)
  else if (useDefault)
    firstPartLocalization = generateNumericTafkeet(millionsStringIndex)

  const extraDigits = getNthDigits(
    stringBase,
    stringBase.length - 6,
    stringBase.length - 1
  )

  const extraTafkeet = generateNumericTafkeet(extraDigits)

  return generateLocalizedTafkeet(
    millionsValue,
    firstPartLocalization,
    extraTafkeet
  )
}

export function getMillions(stringBase: string) {
  let tafkeetedVal = undefined

  if (stringBase.length === 7) tafkeetedVal = getMillionsTafkeet(stringBase)
  else if ([9, 8].includes(stringBase.length))
    tafkeetedVal = getMillionsTafkeet(stringBase, true)

  return tafkeetedVal
}
