// 학생 이름 배열
const names = ["홍길동", "김철수", "이영희"];

// 점수 배열
const scores = [85, 90, 78];

// TODO: 각 학생의 이름과 점수 출력
// 홍길동: 85점
// 김철수: 90점
// 이영희: 78점

console.log(`${names[0]}: ${scores[0]}`);
console.log(`${names[1]}: ${scores[1]}`);
console.log(`${names[2]}: ${scores[2]}`);

// TODO: 평균 점수 계산

const num = scores[0] + scores[1] + scores[2];

console.log(`평균: ${num / 3}`);

// 학생 객체
const student = {
  name: "홍길동",
  korean: 90,
  english: 85,
  math: 88,
};

// TODO: 총점 계산
const sum = student.korean + student.english + student.math;

// TODO: 평균 계산

const avr = sum / 3;

// TODO: 결과 출력

console.log(`홍길동 평균: ${avr}`);

// 여러 학생 관리
const students = [
  { name: "홍길동", korean: 90, english: 85, math: 88 },
  { name: "김철수", korean: 78, english: 92, math: 81 },
  { name: "이영희", korean: 95, english: 89, math: 93 },
];

// TODO: 각 학생의 평균 계산

const sum2 = [
  students[0].korean + students[0].english + students[0].math,
  students[1].korean + students[1].english + students[1].math,
  students[2].korean + students[2].english + students[2].math,
];

const avr2 = [sum2[0] / 3, sum2[1] / 3, sum2[2] / 3];

console.log(`홍길동 평균2: ${avr2[0]}`);
console.log(`김철수 평균2: ${avr2[1]}`);
console.log(`이영희 평균2: ${avr2[2]}`);

// TODO: 전체 학생 평균 계산

// TODO: 최고 점수 학생 찾기
