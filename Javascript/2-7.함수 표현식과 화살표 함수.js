// 함수
// 값처럼 취급해서 변수에 담을 수 잇는 함수 표현식

// Non-Primitive Data Type
// 변수나 상수에 담아서 값으로 사용할 수 있다.

// 함수를 값에 담을 때 는 함수의 이름을 따로 지정하지 않아도된다.

// 함수를 아래에 선언했는데도 불구하고 정상 출력
// 자바스크립트 엔진이 프로그램 실행전에 함수선언을 코드의 최상단으로 올라가는 현상(**호이스팅**)
console.log(helloB()); // 안녕하세요 여러분

// 함수표현식은 호이스팅이 되지 않는다.
// console.log(helloA()); // helloA is not a function

let helloA = function () {
  return "안녕하세요 여러분";
}; // 함수 표현식

function helloB() {
  return "안녕하세요 여러분";
} // 함수 선언식

const helloText = helloA();
console.log(helloText); // helloText

// 화살표 함수
let helloC = () => {
  return "안녕하세요 여러분";
};

let helloD = () => "안녕하세요 여러분"; // return 문 하나라면 간략하게 표현해서 사용할 수 있다.
