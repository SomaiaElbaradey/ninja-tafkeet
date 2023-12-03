import { ONES } from "../constants";

export type Ones = keyof typeof ONES;
export type Currency = {
  singular: string;
  plural: string;
  fraction: string;
  fractions: string;
  decimals: number;
};
