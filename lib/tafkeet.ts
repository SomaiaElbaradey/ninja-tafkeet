import {
  digitsIsDefined,
  error,
  generateNumericTafkeet,
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

export const wholeStringTafkeet = (number: number) => {
  const { base, fraction } = numberParts(number)
  if (base === 0) return { baseTafkeet: ZERO }

  const wholeStringNumber = truncateLeadingZeros(number?.toString())
  if (!validDigits(wholeStringNumber) || !digitsIsDefined(wholeStringNumber))
    return { baseTafkeet: SPACE }

  const [stringBase, stringFraction] = [base.toString()!, fraction.toString()!]

  let fractionTafkeet = undefined

  if (stringFraction?.length) {
    const fractionDigits = getNthDigits(stringFraction, 0, CURRENCY.decimals)
    fractionTafkeet = generateNumericTafkeet(fractionDigits)
  }

  const baseTafkeet =
    getOnes(stringBase, number) ||
    getTens(stringBase, number) ||
    getHundreds(stringBase, number) ||
    getThousands(stringBase) ||
    getMillions(stringBase)

  return { baseTafkeet, fractionTafkeet }
}

export const tafkeet = (number: number) => {
  const { baseTafkeet, fractionTafkeet } = wholeStringTafkeet(number)
}
