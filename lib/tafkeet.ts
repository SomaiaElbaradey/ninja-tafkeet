import { ones } from './helpers'
import { ONES } from './constants'

export const tafkeet = (number: number) => {
  if (number) ones(number as any)
}

console.log(tafkeet(1), tafkeet(2), tafkeet(3))
