// 중복되는 동일한 동작들을 코드로 하나로 묶어서

// 직사각형 면적 구하기
let width1 = 10;
let height1 = 20;

let area1 = width1 * height1;
console.log(area1);

let width2 = 30;
let height2 = 15;

let area2 = width2 * height2;
console.log(area2);

let count = 1; // 외부에 선언한 변수로 어디서나 접근이 가능하다. (전역변수)

// 함수 선언식, 함수 선언 방식의 함수 생성
// function 키워드 함수이름 (매개변수)
// { 실행할 코드 }
function getArea(width, height) {
  //   let width = 10;
  //   let height = 20;

  let area = width * height; // 함수 외부에서 접근할 수 없다. (지역변수)
  console.log(area);

  return area; // 값을 반환
}

getArea(100, 200); // 함수 호출
let result = getArea(200, 200); // 반환한 값을 변수에 할당해서 사용할 수 있다.
// console.log(area); // area is not defined
console.log("함수 실행 완료");
