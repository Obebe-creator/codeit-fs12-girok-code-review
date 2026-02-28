/*
==================================
레벨 1: 배열 사용
==================================
*/
const names = ["홍길동", "김철수", "이영희"];
const scores = [85, 90, 78];

// TODO: 각 학생의 이름과 점수 출력
for (let i = 0; i < names.length; i++) {
  console.log(`${names[i]}: ${scores[i]}점`);
}

// TODO: 평균 점수 계산
let scoresTotal = 0;

for (let score of scores) {
  scoresTotal += score;
}

let scoresAverage = scoresTotal / scores.length;

console.log(`평균 점수는 ${scoresAverage.toFixed(2)}점입니다.`);

/*
==================================
레벨 2: 객체 사용
==================================
*/
const student = {
  name: "홍길동",
  korean: 90,
  english: 85,
  math: 88,
};

// TODO: 총점 계산
let total = student.korean + student.english + student.math;

// TODO: 평균 계산
let average = total / 3;

// TODO: 결과 출력
console.log(`이름: ${student.name}`);
console.log(`총점: ${total}`);
console.log(`평균: ${average.toFixed(2)}`);

/*
==================================
레벨 3: 객체 배열
==================================
*/
const students = [
  { name: "홍길동", korean: 90, english: 85, math: 88 },
  { name: "김철수", korean: 78, english: 92, math: 81 },
  { name: "이영희", korean: 95, english: 89, math: 93 },
];

// TODO: 각 학생의 평균 계산
console.log("=== 학생별 성적 ===");
for (let student of students) {
  let total = student.korean + student.english + student.math;
  student.average = total / 3; // 객체에 평균 추가
}

for (let student of students) {
  console.log(`${student.name} 평균: ${student.average.toFixed(2)}`);
}

// TODO: 전체 학생 평균 계산
let totalAverage = 0;

for (let student of students) {
  totalAverage += student.average;
}

let classAverage = totalAverage / students.length;

console.log("=== 전체 통계 ===");
console.log(`전체 평균: ${classAverage.toFixed(2)}점`);

// TODO: 최고 점수 학생 찾기
let topStudent = students[0];

for (let student of students) {
  if (student.average > topStudent.average) {
    topStudent = student;
  }
}

console.log(
  `최고 점수 학생: ${topStudent.name} (${topStudent.average.toFixed(2)}점)`,
);

// 도전 과제: 과목별 평균 계산
console.log("=== 과목별 평균 ===");
let totalKorean = 0;
let totalEnglish = 0;
let totalMath = 0;

for (let student of students) {
  totalKorean += student.korean;
  totalEnglish += student.english;
  totalMath += student.math;
}

const averageKorean = totalKorean / students.length;
const averageEnglish = totalEnglish / students.length;
const averageMath = totalMath / students.length;

console.log(`국어 평균: ${averageKorean.toFixed(2)}점`);
console.log(`영어 평균: ${averageEnglish.toFixed(2)}점`);
console.log(`수학 평균: ${averageMath.toFixed(2)}점`);

// 도전 과제: 학점 계산 (A, B, C, D, F)
console.log("=== 학생별 과목 학점 === ");

function calculateGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

for (let student of students) {
  const koreanGrade = calculateGrade(student.korean);
  const englishGrade = calculateGrade(student.english);
  const mathGrade = calculateGrade(student.math);

  console.log(`${student.name} 국어 학점: ${koreanGrade}`);
  console.log(`${student.name} 영어 학점: ${englishGrade}`);
  console.log(`${student.name} 수학 학점: ${mathGrade}`);
}
