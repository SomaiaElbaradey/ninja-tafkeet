import {
  digitsIsDefined,
  error,
  getHundreds,
  getOnes,
  getTens,
  getThousands,
  numberParts,
  truncateLeadingZeros,
  validDigits,
} from './helpers'
import { SPACE, ZERO } from './constants'

export const tafkeet = (number: number) => {
  const { base, fraction } = numberParts(number)
  if (base === 0) return ZERO

  const wholeStringNumber = truncateLeadingZeros(number?.toString())
  if (!validDigits(wholeStringNumber) || !digitsIsDefined(wholeStringNumber))
    return SPACE

  const [stringBase, stringFraction] = [base?.toString(), fraction?.toString()]

  // Fraction handler -> zero, ...
  if (stringFraction?.length) {
  }

  const wholeTafkeetedString =
    getOnes(stringBase, number) ||
    getTens(stringBase, number) ||
    getHundreds(stringBase, number) ||
    getThousands(stringBase)

  return wholeTafkeetedString || error()
}
