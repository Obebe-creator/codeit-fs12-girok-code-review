const num1 = 10;
const num2 = 5;
const num3 = 4;

const addition = num1 + num2; //덧셈
const subtraction = num1 - num2; //뺄셈
const multiplication = num1 * num2; //곱셈
const division = num1 / num2; //나눗셈(몫)
const rest = num1 % num2; //나눗셈(나머지)
const compound = (num1 + num2) * num3; // 도전 과제

console.log(`${num1} + ${num2} = ${addition}`);
console.log(`${num1} - ${num2} = ${subtraction}`);
console.log(`${num1} * ${num2} = ${multiplication}`);
console.log(`${num1} / ${num2} = ${Math.floor(division)}`);
console.log(`${num1} % ${num2} = ${rest}`);

// 도전 과제
console.log(`(${num1} + ${num2}) * ${num3} = ${compound}`);
