import { compose } from "redux";

function multiplyString(string) {
    return string+string;
}

function upperCaseString(string) {
    return string.toUpperCase();
}

const input = "Hello";

// const output = upperCaseString(multiplyString(input));
// console.log(output);

// Using redux compose
const output = compose(multiplyString, upperCaseString)(input);
console.log(output);