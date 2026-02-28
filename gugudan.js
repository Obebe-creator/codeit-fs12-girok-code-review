// 특정 단 출력
const dan = 5;

console.log(`=== ${dan}단 ===`);

for (let i = 1; i < 10; i++) {
  console.log(`${dan} x ${i} = ${dan * i}`);
}

// 전체 구구단 출력
for (let i = 2; i < 10; i++) {
  console.log(`=== ${i}단 ===`);

  for (let j = 1; j < 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// 별 찍기
for (let i = 1; i <= 5; i++) {
  let stars = "";

  for (let j = 1; j <= i; j++) {
    stars += "*";
  }

  console.log(stars);
}

// 역삼각형 별 찍기
for (let i = 5; i >= 1; i--) {
  let stars = "";

  for (let j = 1; j <= i; j++) {
    stars += "*";
  }

  console.log(stars);
}

// 짝수 단만 출력
for (let i = 2; i < 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }

  console.log(`=== ${i}단 ===`);

  for (let j = 1; j < 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// 특정 결과값 이상만 출력
for (let i = 2; i < 10; i++) {
  console.log(`=== ${i}단 ===`);

  for (let j = 1; j < 10; j++) {
    let result = i * j;
    if (result > 10) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
}
