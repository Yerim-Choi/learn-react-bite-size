// 비구조화 할당(Destructuring Assignment)
// 배열이나 객체의 속성 혹은 값을 해체하여 그 값을 변수에 각각 담아 사용하는 자바스크립트 표현식

// ** 배열의 비 구조화 할당

let arr = ["one", "two", "three"];

// 인덱스 순서대로 변수에 할당
// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// 비 구조화 할당 사용 시
// let [one, two, three] = arr;
// let [one, two, three, four] = ["one", "two", "three"]; // one two three undefined

// 기본 값 할당
// let [one, two, three, four = "four"] = ["one", "two", "three"];

// console.log(one, two, three, four);

// * 두개 변수의 값을 바꾸기
let a = 10;
let b = 20;
// let tmp = 0; // 임시 변수

// tmp = a;
// a = b;
// b = tmp;

// 비 구조화 할당 사용 시
// [a, b] = [b, a];
// console.log(a, b);

// ** 객체의 비구조화 할당
let object = { one: "one", two: "two", three: "three", color: "red" };

// let one = object["one"];
// let two = object.two;
// let three = object.three;

// 비 구조화 할당 사용 시
// 순서가 아닌 key값을 기준으로 설정
// myColor 변수의 이름을 바꿔서 할당 가능하
// 배열과 마찬가지로 기본 값 할당
let { one, two, three, color: myColor, abc = "test" } = object;

console.log(one, two, three, myColor, abc);
