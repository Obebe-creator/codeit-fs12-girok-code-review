// calculator.js

// TODO: 두 숫자 변수 선언
// 힌트: const num1 = ...

const num1 = 10;
const num2 = 5;

// TODO: 덧셈 결과 계산 및 출력
// 힌트: const sum = num1 + num2

const sum = num1 + num2;

console.log(`${num1} + ${num2} = ${sum}`);

// TODO: 뺄셈 결과 계산 및 출력

const sub = num1 - num2;

console.log(`${num1} - ${num2} = ${sub}`);

// TODO: 곱셈 결과 계산 및 출력

const mul = num1 * num2;

console.log(`${num1} * ${num2} = ${mul}`);

// TODO: 나눗셈 결과 계산 및 출력

const div = num1 / num2;

console.log(`${num1} / ${num2} = ${div}`);

// TODO: 나머지 계산 및 출력

const rem = num1 % num2;

console.log(`${num1} % ${num2} = ${rem}`);

// **도전 과제:**

console.log(`=== 도전 과제 ===`);

// 1. 복합 계산 추가 (예: (a + b) * c)

const num3 = 2;
const hard = (num1 + num2) * num3;

console.log(`(${num1} + ${num2}) * ${num3} = ${hard}`);

// 2. 템플릿 리터럴로 출력 형식 개선
// 이미 실천 중

// 3. 다른 숫자로도 테스트

const num4 = 6;
const num5 = 3;
const num6 = 7;

const sum2 = num4 + num5;
const sub2 = num4 - num5;
const mul2 = num4 * num5;
const div2 = num4 / num5;
const rem2 = num4 % num5;
const hard2 = (num4 + num5) * num6;

console.log(`${num4} + ${num5} = ${sum2}`);
console.log(`${num4} - ${num5} = ${sub2}`);
console.log(`${num4} * ${num5} = ${mul2}`);
console.log(`${num4} / ${num5} = ${div2}`);
console.log(`${num4} % ${num5} = ${rem2}`);
console.log(`(${num4} + ${num5}) * ${num6} = ${hard2}`);
