// 5단 출력
const dan = 5;

// TODO: 5단 구구단 출력
// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 9 = 45
console.log(`== 5 단 ==`);
for (let i = 1; i <= 9; i++) {
  console.log(`${dan} x ${i} = ${dan * i}`);
}

// TODO: 2단부터 9단까지 모두 출력

for (let j = 2; j <= 9; j++) {
  console.log(`== ${j} 단 ==`);

  for (let k = 1; k <= 9; k++) {
    console.log(`${j} x ${k} = ${j * k}`);
  }
}

// TODO: 다음 패턴 출력
// *
// **
// ***
// ****
// *****

for (let l = 1; l <= 5; l++) {
  let star = "";

  for (let m = 1; m <= l; m++) {
    star = star + "*";
  }

  console.log(star);
}

// **도전 과제:**

console.log(`=== 도전 과제 ===`);

// 1. 역삼각형 별 찍기

for (let n = 1; n <= 5; n++) {
  let star2 = "";

  for (let o = 5; o >= n; o--) {
    star2 = star2 + "*";
  }

  console.log(star2);
}
// 2. 짝수 단만 출력

for (let p = 1; p <= 5; p++) {
  console.log(p * 2);
}
// 3. 특정 결과값 이상만 출력

for (let q = 1; q <= 10; q++) {
  if (q > 5) {
    console.log(q);
  }
}
