import {
  CURRENCY,
  HUNDREDS,
  MILLIONS,
  MILLIONS_SEVEN_DIGITS,
  ONES,
  ONES_TENS,
  STRING_ZER0,
  TENS,
  THOUSANDS,
  THOUSANDS_FIVE_DIGITS,
} from './constants'

export type Ones = keyof typeof ONES
export type Tens = keyof typeof TENS
export type OnesTens = keyof typeof ONES_TENS
export type Hundreds = keyof typeof HUNDREDS
export type Thousands = keyof typeof THOUSANDS
export type ThousandsFiveDigits = keyof typeof THOUSANDS_FIVE_DIGITS
export type Millions = keyof typeof MILLIONS
export type MillionsSeven = keyof typeof MILLIONS_SEVEN_DIGITS

export type Currency = {
  singular: string
  plural: string
  fraction: string
  fractions: string
  decimals: number
  default: string
}

export type CurrentCurrency = keyof typeof CURRENCY

export type ArabicWords =
  | (typeof ONES)[Ones]
  | (typeof TENS)[Tens]
  | (typeof HUNDREDS)[Hundreds]
  | (typeof THOUSANDS)[Thousands]
  | (typeof THOUSANDS_FIVE_DIGITS)[ThousandsFiveDigits]
  | (typeof MILLIONS)[Millions]
  | (typeof ONES_TENS)[OnesTens]

/**
 * create type as type guard out of parse int to avoid crashes
 * ex: type NumericStrings = "1" | "42" | "100";
 * type Numbers = ParseInt<NumericStrings>; // Results in 1 | 42 | 100
 */
export type ParseInt<T extends string> = T extends `${infer Int extends number}`
  ? Int
  : never

export type ZeroDefault = ParseInt<typeof STRING_ZER0>

export type AddSuffixPrefix = {
  baseTafkeet: string
  fractionTafkeet: string | undefined
  baseCurrency: string
  fractionCurrency: string
}

export type GenerateLocalizedTafkeet = {
  numericValue: string | undefined
  prefixLocalization: string | undefined
  suffixTafkeet: string | undefined
}
