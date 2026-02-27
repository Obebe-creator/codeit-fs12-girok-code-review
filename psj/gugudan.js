console.log("=== 레벨 1: 특정 단 출력 ===");
const dan = 5;

for (let i = 1; i <= 9; i++) {
  console.log(`${dan} x ${i} = ${dan * i}`);
}

console.log("=== 레벨 2: 전체 구구단 출력 ===");
for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

console.log("=== 레벨 3: 별 찍기 ===");
let star = "";

for (let i = 0; i < 5; i++) {
  star = "";
  for (let j = 0; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}

console.log("=== 도전 과제-역삼각형 별 찍기===");
let star2 = 7;
const num = Math.ceil(star2 / 2);

for (let i = 0; i < num; i++) {
  console.log(" ".repeat(i) + "*".repeat(star2) + " ".repeat(i));
  star -= 2;
}

console.log("=== 도전 과제-짝수 단만 출력===");
for (let i = 2; i <= 9; i++) {
  if (i % 2 === 0) {
    for (let j = 1; j <= 9; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
}

console.log("=== 도전 과제-특정 결과값 이상만 출력(50 이상)===");
for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    if (i * j >= 50) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
}
