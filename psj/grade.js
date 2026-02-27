const score = 85;

console.log("=== if-else문 ===");
if (score >= 90) {
  console.log(`점수: ${score}`);
  console.log("학점: A");
} else if (score >= 80) {
  console.log(`점수: ${score}`);
  console.log("학점: B");
} else if (score >= 70) {
  console.log(`점수: ${score}`);
  console.log("학점: C");
} else if (score >= 60) {
  console.log(`점수: ${score}`);
  console.log("학점: D");
} else {
  console.log(`점수: ${score}`);
  console.log("학점: F");
}

console.log("=== switch문 ===");
switch (true) {
  case score >= 90:
    console.log(`점수: ${score}`);
    console.log("학점: A");
    break;
  case score >= 80:
    console.log(`점수: ${score}`);
    console.log("학점: B");
    break;
  case score >= 70:
    console.log(`점수: ${score}`);
    console.log("학점: C");
    break;
  case score >= 60:
    console.log(`점수: ${score}`);
    console.log("학점: D");
    break;
  default:
    console.log(`점수: ${score}`);
    console.log("학점: F");
    break;
}
