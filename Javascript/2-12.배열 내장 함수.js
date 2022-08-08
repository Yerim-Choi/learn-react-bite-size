// 배열 내장 함수

const arr = [1, 2, 3, 4];
const newArr = arr.map((elm) => {
  return elm * 2;
});

const colorArr = [
  { num: 1, color: "red" },
  { num: 2, color: "black" },
  { num: 3, color: "blue" },
  { num: 4, color: "green" },
  { num: 5, color: "blue" },
];

const colorArr1 = [
  { num: 1, color: "red" },
  { num: 2, color: "black" },
  { num: 3, color: "blue" },
];

const colorArr2 = [
  { num: 4, color: "green" },
  { num: 5, color: "blue" },
];

// 1. forEach
// arr.forEach((elm) => console.log(elm));
// const newArr = [];

arr.forEach(function (elm) {
  //   console.log(elm * 2); // 출력
  //   newArr.push(elm * 2); //newArr 삽입
});

// 2. map
// 배열을 순회하면서 배열로 반환
// console.log(newArr);

// for문을 이용해서 객체 조회
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// 3. includes
// 주어진 배열에서 해당 인자가 속해져 있는지 확인 (boolean 반환)
let number = 3;

// forEach 할 경우
// arr.forEach((elm) => {
//   if (elm === number) {
//     console.log(true);
//   }
// });

// console.log(arr.includes(number));

// 4. indexOf
// 주어진 배열에서 해당 인자의 index 조회
// 일치하는 데이터가 없을 경우 -1 반환
// console.log(arr.indexOf(number)); // 2

// 객체 배열에서 활용
// 5. findIndex
// 요소의 index 반환

const idx = colorArr.findIndex((elm) => {
  return elm.color === "red"; // 0
  // 일치하는 데이터가 없을 경우 -1 반환
  // 일치하는 데이터가 여러개 있을 경우 가장 먼저 조건에 만족하는 인덱스를 먼저 반환
});

// console.log(colorArr[idx]);

// 6. find
// 요소 자체를 반환
const element = colorArr.find((elm) => {
  return elm.color === "red"; // 0
  // 일치하는 데이터가 없을 경우 -1 반환
  // 일치하는 데이터가 여러개 있을 경우 가장 먼저 조건에 만족하는 인덱스를 먼저 반환
});

// console.log(element);

// 7. filter
// 특정한 조건을 만족하는 모든 요소를 배열로 반환
// console.log(colorArr.filter((elm) => elm.color === "blue")); // [ { num: 3, color: 'blue' }, { num: 5, color: 'blue' } ]

// 8. slice
// console.log(colorArr.slice(0, 2)); // 0 부터 1번까지반 반환

// 9. concat
// 배열 합치기
console.log(colorArr1.concat(colorArr2));

// 10. sort
// 배열 정렬

let chars = ["나", "다", "가"];
let numbers = [0, 1, 3, 2, 10, 30, 20];

// chars.sort(); // 원본 배열을 정렬
// console.log(chars);

// numbers.sort(); //숫자로 정렬 하는 것이 아니라 문자열 기준으로 정렬

const compare = (a, b) => {
  // 1. 같다
  // 2. 크다
  // 3. 작다

  if (a > b) {
    // 크다
    // 클 때 뒤로
    return 1;
    // return -1; 내림차순
  }

  if (a < b) {
    // 작다
    // 작을 때 앞으로
    return -1;
    // return 1; 내림차순
  }

  // 같다
  return 0;
};

numbers.sort(compare);
console.log(numbers);

// 11. join
// 배열내의 모든 원소를 문자열로 합치기

const sample = ["안녕하세요", "환영", "합니다."];

console.log(sample[0], sample[1], sample[2]);
console.log(sample.join(" "));
