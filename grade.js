const score = 85;

// if-else
if (score >= 95) {
  console.log("A+");
} else if (score >= 90) {
  console.log("A");
} else if (score >= 85) {
  console.log("B+");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 75) {
  console.log("B-");
} else if (score >= 70) {
  console.log("C+");
} else if (score >= 65) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
}

// switch
switch (true) {
  case score >= 95:
    console.log("A+");
    break;
  case score >= 90:
    console.log("A");
    break;
  case score >= 85:
    console.log("B+");
    break;
  case score >= 80:
    console.log("B");
    break;
  case score >= 75:
    console.log("B-");
    break;
  case score >= 70:
    console.log("C+");
    break;
  case score >= 65:
    console.log("C");
    break;
  case score >= 60:
    console.log("D");
    break;
  default:
    console.log("F");
}

// 여러 학생 점수 배열로 관리 및 평균 계산
const scores = [85, 92, 76, 88];
let total = 0;

for (let i = 0; i < scores.length; i++) {
  total += scores[i];
  let grade;

  if (scores[i] >= 95) grade = "A+";
  else if (scores[i] >= 90) grade = "A";
  else if (scores[i] >= 85) grade = "B+";
  else if (scores[i] >= 80) grade = "B";
  else if (scores[i] >= 75) grade = "B-";
  else if (scores[i] >= 70) grade = "C+";
  else if (scores[i] >= 65) grade = "C";
  else if (scores[i] >= 60) grade = "D";
  else grade = "F";

  console.log(`학생${i + 1}의 점수는 ${scores[i]}이며, 학점은 ${grade}입니다.`);
}

let average = total / scores.length;
console.log(`평균 점수는 ${average}점입니다.`);
