import {
  CURRENCY,
  HUNDREDS,
  MILLIONS,
  ONES,
  ONES_TENS,
  TENS,
  THOUSANDS,
} from '../constants'

export type Ones = keyof typeof ONES
export type Tens = keyof typeof TENS
export type OnesTens = keyof typeof ONES_TENS
export type Hundreds = keyof typeof HUNDREDS
export type Thousands = keyof typeof THOUSANDS
export type Millions = keyof typeof MILLIONS

export type Currency = {
  singular: string
  plural: string
  fraction: string
  fractions: string
  decimals: number
}

export type CurrentCurrency = keyof typeof CURRENCY

export type ArabicWords =
  | (typeof ONES)[Ones]
  | (typeof TENS)[Tens]
  | (typeof HUNDREDS)[Hundreds]
  | (typeof THOUSANDS)[Thousands]
  | (typeof MILLIONS)[Millions]

/**
 * create new type out of parse int to avoid crashes
 * ex: type NumericStrings = "1" | "42" | "100";
 * type Numbers = ParseInt<NumericStrings>; // Results in 1 | 42 | 100
 */
export type ParseInt<T extends string> = T extends `${infer Int extends number}`
  ? Int
  : never
