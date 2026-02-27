const num1 = 10;
const num2 = 5;
const num3 = 2;

const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;
const remainder = num1 % num2;

let complex1 = (num1 + num2) * num3;
let complex2 = num1 + num2 * num3;
let complex3 = (num1 - num2) / num3;

console.log(`${num1} + ${num2} = ${sum}`);
console.log(`${num1} - ${num2} = ${difference}`);
console.log(`${num1} * ${num2} = ${product}`);
console.log(`${num1} / ${num2} = ${quotient}`);
console.log(`${num1} % ${num2} = ${remainder}`);
console.log(`(${num1} + ${num2}) *${num3} = ${complex1}`);
console.log(`${num1} + ${num2} *${num3} = ${complex2}`);
console.log(`(${num1} - ${num2}) /${num3} = ${complex3}`);
