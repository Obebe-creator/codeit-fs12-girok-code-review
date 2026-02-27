// 학생 이름 배열
const names = ["홍길동", "김철수", "이영희"];

// 점수 배열
const scores = [85, 90, 78];

// TODO: 각 학생의 이름과 점수 출력
// 홍길동: 85점
// 김철수: 90점
// 이영희: 78점

console.log(`=== 학생별 성적 ===`);
console.log(`${names[0]}: ${scores[0]}점`);
console.log(`${names[1]}: ${scores[1]}점`);
console.log(`${names[2]}: ${scores[2]}점`);

// TODO: 평균 점수 계산

const sum = scores[0] + scores[1] + scores[2];
const avr = sum / 3;

console.log(`=== 전체 학생 평균 ===`);
console.log(`전체 평균: ${avr}점`);

// 학생 객체
const student = {
  name: "홍길동",
  korean: 90,
  english: 85,
  math: 88,
};

// TODO: 총점 계산
const sum2 = student.korean + student.english + student.math;

// TODO: 평균 계산

const avr2 = sum2 / 3;

// TODO: 결과 출력

console.log(`=== 학생 통계 ===`);
console.log(`${student.name} 총점: ${sum2}`);
console.log(`${student.name} 평균: ${avr2}`);

// 여러 학생 관리
const students = [
  { name: "홍길동", korean: 90, english: 85, math: 88 },
  { name: "김철수", korean: 78, english: 92, math: 81 },
  { name: "이영희", korean: 95, english: 89, math: 93 },
];

// TODO: 각 학생의 평균 계산

const sum3 = [
  students[0].korean + students[0].english + students[0].math,
  students[1].korean + students[1].english + students[1].math,
  students[2].korean + students[2].english + students[2].math,
];

const avr3 = [sum3[0] / 3, sum3[1] / 3, sum3[2] / 3];

// TODO: 전체 학생 평균 계산

const sum4 = avr3[0] + avr3[1] + avr3[2];
const avr4 = sum4 / 3;

// TODO: 최고 점수 학생 찾기

let best = avr3[0];
for (let i = 0; i <= avr3.length; i++) {
  if (best < avr3[i]) {
    best = avr3[i];
  }
}

let n = 0;
switch (best) {
  case avr3[0]:
    n = 0;
  case avr3[1]:
    n = 1;
  case avr3[2]:
    n = 2;
}

const bestStu = students[n].name;

console.log(`=== 전체 통계 ===`);
console.log(`${students[0].name}: 평균 ${avr3[0]}점`);
console.log(`${students[1].name}: 평균 ${avr3[1]}점`);
console.log(`${students[2].name}: 평균 ${avr3[2]}점`);

console.log(`전체 학생: 평균 ${avr4}점`);

console.log(`최고 점수: ${bestStu} (${best}점)`);

// **도전 과제:**

console.log(`=== 도전 과제 ===`);

// 1. 과목별 평균 계산

const korSum = students[0].korean + students[1].korean + students[2].korean;
const engSum = students[0].english + students[1].english + students[2].english;
const mathSum = students[0].math + students[1].math + students[2].math;

const korEvr = korSum / 3;
const engEvr = engSum / 3;
const mathEvr = mathSum / 3;

console.log(`국어 평균: ${korEvr}`);
console.log(`영어 평균: ${engEvr}`);
console.log(`수학 평균: ${mathEvr}`);

// 2. 학점 계산(A, B, C, D, F)
for (m = 0; m < 3; m++) {
  console.log(`${students[m].name} 평균 점수: ${avr3[m]}`);

  if (avr3[m] >= 90) {
    console.log(`${students[m].name} 학점: A`);
  } else if (avr3[m] >= 80) {
    console.log(`${students[m].name} 학점: B`);
  } else if (avr3[m] >= 70) {
    console.log(`${students[m].name} 학점: C`);
  } else if (avr3[m] >= 60) {
    console.log(`${students[m].name} 학점: D`);
  } else {
    console.log(`${students[m].name} 학점: F`);
  }
}

// 3. 성적순 정렬
// 포기하겠습니;다 .... 도저히 모르겠습니다 ..........
