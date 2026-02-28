// LV.1
const names = ['짱구', '철수', '맹구'];

const scores = [55, 80, 65];

const avg = (scores[0] + scores[1] + scores[2]) / names.length 
console.log(avg)

// LV.2
// 학생 객체
const student = {
    name: '홍길동',
    korean: 90,
    english: 85,
    math: 88
};

// TODO: 총점 계산
// TODO: 평균 계산
// TODO: 결과 출력

sub = student.korean + student.english + student.math;
avgS = (student.korean + student.english + student.math)/3;
console.log("총점 :" + sub);
console.log("평균 :" + avgS);




// LV.3
const students = [
    {name: '홍길동', korean: 90, english: 85, math: 88},
    {name: '김철수', korean: 78, english: 92, math: 81},
    {name: '이영희', korean: 95, english: 89, math: 93}
];

const sub1 = students[0].korean + students[0].english + students[0].math;
const avg1 = sub1 / 3;
console.log("=== 학생별 성적 ===");
console.log(students[0].name + " 총점: " + sub1);
console.log(students[0].name + " 평균: " + avg1);

const sub2 = students[1].korean + students[1].english + students[1].math;
const avg2 = sub2 / 3;

console.log(students[1].name + " 총점: " + sub2);
console.log(students[1].name + " 평균: " + avg2);

const sub3 = students[2].korean + students[2].english + students[2].math;
const avg3 = sub3 / 3;

console.log(students[2].name + " 총점: " + sub3);
console.log(students[2].name + " 평균: " + avg3);

const top = Math.max(avg1,avg2,avg3);

if(top == avg1) topName = students[0].name;
if(top == avg2) topName = students[1].name;
if(top == avg3) topName = students[2].name;

console.log("=== 전체 통계 ===");
console.log("전체 평균 : " + (avg1 + avg2 + avg3)/3 + "점");
console.log("최고 점수 : " +  topName + top);