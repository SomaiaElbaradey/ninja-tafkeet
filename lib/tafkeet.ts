import {
  ArabicWords,
  Ones,
  digitsIsDefined,
  isKey,
  numberParts,
  ones,
  validDigits,
} from './helpers'
import { ONES, SPACE } from './constants'

export const tafkeet = (number: number) => {
  const wholeStringNumber = number?.toString()
  if (!validDigits(wholeStringNumber) || !digitsIsDefined(wholeStringNumber))
    return SPACE

  const { base, fraction } = numberParts(number)
  const [stringBase, stringFraction] = [base?.toString(), fraction?.toString()]

  let one: ArabicWords
  if (stringBase?.length === 1 && isKey(ONES, number)) {
    one = ones(number)
    return one
    // + Fraction
  }

  // Fraction handler
  if (stringFraction?.length) {
  }
}

console.log(tafkeet(1), tafkeet(2), tafkeet(3))
