// Call error when something is wrong.
export const error = function (message: string) {
    throw {
        name: "SyntaxError",
        message,
    };
};
