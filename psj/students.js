console.log("=== 레벨 1: 배열 사용===\n");

const names = ["홍길동", "김철수", "이영희"];
const scores = [85, 90, 78];
let sum = 0;

console.log(`${names[0]}: ${Math.floor(scores[0])}점`);
console.log(`${names[1]}: ${Math.floor(scores[1])}점`);
console.log(`${names[2]}: ${Math.floor(scores[2])}점`);

for (let i = 0; i < scores.length; i++) {
  sum += scores[i];
}

console.log(`평균 점수 계산: ${(sum / scores.length).toFixed(2)}점\n`);

console.log("=== 레벨 2: 객체 사용===\n");

const student = {
  name: "홍길동",
  korean: 90,
  english: 85,
  math: 88,
};

const total_score = student.korean + student.english + student.math;
const average = total_score / 3;

console.log(`총점 계산: ${total_score}`);
console.log(`평균 계산: ${average.toFixed(2)}\n`);

console.log("=== 레벨 3: 객체 배열===\n");

const students = [
  { name: "홍길동", korean: 90, english: 85, math: 88 },
  { name: "김철수", korean: 78, english: 92, math: 81 },
  { name: "이영희", korean: 95, english: 89, math: 93 },
];

let total_score2 = [];
let sum2 = 0;

for (let i = 0; i < 3; i++) {
  sum2 += students[i].korean + students[i].english + students[i].math;
  total_score2.push(sum2 / 3);
  sum2 = 0;
}

console.log("<학생별 성적>\n");
let max = { name: "", average: 0 };
for (let j = 0; j < students.length; j++) {
  console.log(`${students[j].name}: 평균 ${total_score2[j].toFixed(2)}점`);
  if (max.average < total_score2[j]) {
    max.name = students[j].name;
    max.average = total_score2[j].toFixed(2);
  }
}

console.log("\n<전체 통계>\n");
for (let k = 0; k < total_score2.length; k++) {
  sum2 += total_score2[k];
}

console.log(`전체 평균: ${(sum2 / students.length).toFixed(2)}점`);
console.log(`최고 점수: ${max.name} (${max.average}점)`);
