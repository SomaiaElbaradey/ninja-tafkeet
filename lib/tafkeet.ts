import {
  Currency,
  addSuffixPrefix,
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

export const wholeStringTafkeet = (number: number | string) => {
  const { base, fraction } = numberParts(number)
  if (base === 0) return { baseTafkeet: ZERO }

  const wholeStringNumber = truncateLeadingZeros(number?.toString())
  if (!validDigits(wholeStringNumber) || !digitsIsDefined(wholeStringNumber))
    return { baseTafkeet: SPACE }

  const [stringBase, stringFraction] = [base.toString()!, fraction.toString()!]

  let fractionTafkeet = undefined
  if (fraction !== 0 && stringFraction?.length) {
    const fractionDigits = getNthDigits(
      stringFraction,
      0,
      CURRENCY.decimals - 1
    )

    fractionTafkeet = generateNumericTafkeet(fractionDigits)
  }

  const baseTafkeet =
    getOnes(stringBase, base) ||
    getTens(stringBase, base) ||
    getHundreds(stringBase, base) ||
    getThousands(stringBase) ||
    getMillions(stringBase)

  return { baseTafkeet, fractionTafkeet, base, fraction }
}

export const tafkeet = (
  number: number | string,
  currency: Currency = CURRENCY
) => {
  const { baseTafkeet, fractionTafkeet, base, fraction } =
    wholeStringTafkeet(number)

  let baseCurrency = currency.default
  if (base && base >= 3 && base <= 10) baseCurrency = currency.plural
  else if (base && [1, 2].includes(base)) baseCurrency = currency.singular

  const fractionCurrency =
    fraction && fraction >= 3 && fraction <= 10
      ? currency.fractions
      : currency.fraction

  return !baseTafkeet
    ? error()
    : addSuffixPrefix({
        baseTafkeet,
        fractionTafkeet,
        baseCurrency,
        fractionCurrency,
      })
}
