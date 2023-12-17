import { ONES, TENS } from '../constants'
import { Ones, Tens } from './types'

export const ones = (value: Ones) => ONES[value]
export const tens = (value: Tens) => TENS[value]
