// 조건문 한 줄로 끝내기

let a = 3;
let arr = [1, 2, 3];

// if 조건문
// if (a >= 0) {
//   console.log("양수");
// } else {
//   console.log("음수");
// }

// 삼항 연산자
// 조건문 ? 참 일 때 수행 : 거짓일 때 수행
// a >= 0 ? console.log("양수") : console.log("음수");

// 배열 조건문
// if (arr.length === 0) {
//   console.log("빈 배열");
// } else {
//   console.log("안 빈 배열");
// }

// arr.length === 0 ? console.log("빈 배열") : console.log("안 빈 배열");

// 값을 명시해서 넣어줄 수도 있음
// const arrayStatus = arr.length === 0 ? "빈 배열" : "안 빈 배열";
// console.log(arrayStatus);

// Truthy & Falsy
let b;
let c = [];
const bResult = b ? true : false;
const cResult = b ? true : false;

console.log(bResult); //false
console.log(cResult); //true

// 삼항 연산자 중첩
// TODO : 학점 계산 프로그램
// 90점 이상 A+
// 50점 이상 B+
// 둘다 아니면 F

let score = 40;

score >= 90
  ? console.log("A+")
  : score >= 50
  ? console.log("B+")
  : console.log("F");

// ** 단 삼항 연산자 사용 시 가독성이 떨어짐
// 아래와 같이 중접 if문이 더 가독성이 좋음
if (score >= 90) {
  console.log("A+");
} else if (score >= 50) {
  console.log("B+");
} else {
  console.log("F");
}
