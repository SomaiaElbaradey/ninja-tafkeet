import { ONES, ONES_TENS, TENS, ZERO } from '../constants'
import { Ones, OnesTens, Tens } from './types'
import { isKey, separateByAnd } from './utils'

export const ones = (value: Ones) => ONES[value]
export const onesTens = (value: OnesTens) => ONES_TENS[value]
export const tens = (value: Tens) => TENS[value]

export const getOnes = (stringBase: string, digits: number) => {
  if (stringBase?.length === 1 && isKey(ONES, digits)) return ones(digits)
  return undefined
}

export const getTens = (stringBase: string, digits: number) => {
  if (stringBase.length === 2) {
    let onesValue = undefined
    let tensValue = undefined

    const onesDigit = digits % 10
    const tensDigit = Math.floor(digits / 10)

    if ((onesDigit === 1 || onesDigit === 2) && tensDigit === 1)
      onesValue = isKey(ONES_TENS, onesDigit) && onesTens(onesDigit)
    else onesValue = getOnes(stringBase[1]!, onesDigit)

    if (tensDigit && isKey(TENS, tensDigit)) tensValue = tens(tensDigit)

    const localizedValue = tensValue
      ? `${onesValue || ''}${(onesValue && ' ') || ''}${tensValue}`
      : undefined

    return localizedValue && tensDigit !== 1
      ? separateByAnd(localizedValue)
      : localizedValue
  }

  return undefined
}
