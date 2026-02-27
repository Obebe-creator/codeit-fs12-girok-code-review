// grade.js

const score = 85;

// TODO: if-else 문으로 학점 계산

console.log(`=== if문 ===`);

console.log(`점수: ${score}`);

if (score >= 90) {
  console.log(`학점: A`);
} else if (score >= 80) {
  console.log(`학점: B`);
} else if (score >= 70) {
  console.log(`학점: C`);
} else if (score >= 60) {
  console.log(`학점: D`);
} else {
  console.log(`학점: F`);
}

// TODO: switch 문으로도 구현해보기 (도전!)

console.log(`=== switch문 ===`);

switch (true) {
  case score >= 90:
    console.log(`점수: ${score}`);
    console.log(`학점: A`);
    break;

  case score >= 80:
    console.log(`점수: ${score}`);
    console.log(`학점: B`);
    break;

  case score >= 70:
    console.log(`점수: ${score}`);
    console.log(`학점: C`);
    break;

  case score >= 60:
    console.log(`점수: ${score}`);
    console.log(`학점: D`);
    break;

  default:
    console.log(`점수: ${score}`);
    console.log(`학점: F`);
    break;
}

// **도전 과제:**

// 1. +, - 학점 추가 (예: B+, B, B-)

console.log(`=== 도전 과제 ===`);

console.log(`점수: ${score}`);

if (score >= 95) {
  console.log(`학점: A+`);
} else if (score >= 90) {
  console.log(`학점: A`);
} else if (score >= 85) {
  console.log(`학점: A-`);
} else if (score >= 80) {
  console.log(`학점: B+`);
} else if (score >= 75) {
  console.log(`학점: B`);
} else if (score >= 70) {
  console.log(`학점: B-`);
} else if (score >= 65) {
  console.log(`학점: C+`);
} else if (score >= 60) {
  console.log(`학점: C`);
} else if (score >= 55) {
  console.log(`학점: C-`);
} else if (score >= 50) {
  console.log(`학점: D+`);
} else if (score >= 45) {
  console.log(`학점: D`);
} else if (score >= 40) {
  console.log(`학점: D-`);
} else {
  console.log(`학점: F`);
}
