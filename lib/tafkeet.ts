import {
  digitsIsDefined,
  error,
  getHundreds,
  getMillions,
  getNthDigits,
  getOnes,
  getTens,
  getThousands,
  numberParts,
  truncateLeadingZeros,
  validDigits,
} from './helpers'
import { CURRENCY, SPACE, ZERO } from './constants'

export const tafkeet = (number: number) => {
  const { base, fraction } = numberParts(number)

  if (base === 0) return ZERO

  const wholeStringNumber = truncateLeadingZeros(number?.toString())
  if (!validDigits(wholeStringNumber) || !digitsIsDefined(wholeStringNumber))
    return SPACE

  const [stringBase, stringFraction] = [base.toString()!, fraction.toString()!]

  let fractionTafkeet = undefined
  // Fraction handler -> zero, ...
  if (stringFraction?.length) {
    const fractionDigits = getNthDigits(stringFraction, 0, CURRENCY.decimals)
    fractionTafkeet = getTens(fractionDigits, fraction)
  }

  const wholeTafkeetedString =
    getOnes(stringBase, number) ||
    getTens(stringBase, number) ||
    getHundreds(stringBase, number) ||
    getThousands(stringBase) ||
    getMillions(stringBase)

  return wholeTafkeetedString || error()
}
