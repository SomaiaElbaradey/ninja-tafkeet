// IDE Feat
import { Currency } from "./helpers";

export declare const ZERO = "صفر";
export declare const AND = "و";
export declare const SPACE = " ";
export declare const ONLY = "فقط ";
export declare const ONE_AND_ONLY = " لا غير";
export declare const MAX_DIGITS_LENGTH = 7;

export declare const CURRENCY = {
    singular: "جنيهًا مصري",
    plural: "جنيهات مصرية",
    fraction: "قرش",
    fractions: "قروش",
    decimals: 2,
} as const satisfies Currency;

export declare const ONES = {
    1: "واحد",
    2: "اثنان",
    3: "ثلاثة",
    4: "أربعة",
    5: "خمسة",
    6: "ستة",
    7: "سبعة",
    8: "ثمانية",
    9: "تسعة",
    10: "عشرة",
    11: "أحد عشر",
    12: "اثنى عشر",
} as const;

export declare const TENS = {
    1: "عشر",
    2: "عشرون",
    3: "ثلاثون",
    4: "أربعون",
    5: "خمسون",
    6: "ستون",
    7: "سبعون",
    8: "ثمانون",
    9: "تسعون",
} as const;

export declare const HUNDREDS = {
    1: "مائة",
    2: "مئتان",
    3: "ثلاثمائة",
    4: "أربعمائة",
    5: "خمسمائة",
    6: "ستمائة",
    7: "سبعمائة",
    8: "ثمانمائة",
    9: "تسعمائة",
} as const;

export declare const THOUSANDS = {
    1: "ألف",
    2: "ألفان",
    39: "آلاف",
    1199: "ألفًا",
} as const;

export declare const MILLIONS = {
    1: "مليون",
    2: "مليونان",
    39: "ملايين",
    1199: "مليونًا",
} as const;
