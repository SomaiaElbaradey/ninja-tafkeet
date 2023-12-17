import {
  ArabicWords,
  digitsIsDefined,
  getOnes,
  getTens,
  numberParts,
  validDigits,
} from './helpers'
import { SPACE, ZERO } from './constants'

export const tafkeet = (number: number) => {
  // truncate zeross
  const wholeStringNumber = number?.toString()
  if (!validDigits(wholeStringNumber) || !digitsIsDefined(wholeStringNumber))
    return SPACE

  const { base, fraction } = numberParts(number)
  const [stringBase, stringFraction] = [base?.toString(), fraction?.toString()]

  if (base === 0) return ZERO
  // zero check (base, fraction)

  // let one: ArabicWords
  // Fraction handler
  if (stringFraction?.length) {
  }

  return getOnes(stringBase, number) || getTens(stringBase, number)
}
