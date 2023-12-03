import { typeofDigitsIsDefined, validDigits } from "./validation";

/**
 * Extract the number parts (base, fraction) from the digits
 */
export const numberParts = (digits: string | number) => {
    let stringDigits = "0";
    if (typeofDigitsIsDefined(digits))
        stringDigits = typeof digits !== "string" ? digits?.toString() : digits;

    const [base, fraction = "0"] = stringDigits.split(".");
    const baseNumber = validDigits(base) ? parseInt(base) : 0;
    const fractionNumber = validDigits(fraction) ? parseInt(fraction) : 0;

    return {
        base: baseNumber,
        fraction: fractionNumber,
    };
};

/**
 * Return parts of the digits 
 */
// function getNth(number, first, end){
//     var finalNumber = "";
//     for (var i=first;i<=end;i++){
//         finalNumber = finalNumber + String (number).charAt(i);
//     }
//     return finalNumber;
// }

