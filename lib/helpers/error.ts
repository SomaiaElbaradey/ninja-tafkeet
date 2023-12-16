// Call error when something is wrong.
export const error = (message: string) => {
    throw {
        name: "SyntaxError",
        message,
    };
};
