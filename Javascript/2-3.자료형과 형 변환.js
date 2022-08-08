// 자료형
// 값을 성질에 따라 분류 한 것

// Data Types

// 1. Primitive Data Type (원시타입)
// 한번에 하나의 값 만 가질 수 있음
let number = 12;
// 하나의 고정된 저장 공간 이용

// 1-1. 숫자형 Number ex) 25
let age = 25;
let tall = 180;

let inf = Infinity; // 무한대
let minusinf = -Infinity; // 음의 무한대
let nan = NaN; // 수학적 연산의 실패
console.log(age + tall);
// - 정수와 실수 등 구분하지 않고 모두 숫자형
// - 사칙연산 제공

// 1-2. String ex) '25'
let name = "summer";

let name1 = `spring ${name}`;
console.log(name1);
// - 따옴표를 이용하여 표현
// - 템플릿리터럴 : 백틱을 이용하여 변수와 함께 문자열을 출력

// 1-3. Boolean
let isSwitchOff = true;
let isSwitchOm = false;

// - 참이나 거짓의 값을 저장
// - 그 값이 참이나 거짓이냐를 저장할 때 사용

// 1-4. Undefined
let variable;
console.log(variable); //undefined

// - 변수 선언 후 아무 값을 할당하지 않으면 undefined 할당

// 1-5. Null
let a = null;
// - 의도적으로 아무 값도 안담고 있다.

// 형변환
// 값은 유지하면서 자료형은 변경할 수 있음

let numberA = 10;
let numberB = "2";

console.log(numberA * numberB); // 12
// 자동으로 문자열을 숫자형으로 "자동"으로 변경해줌 - 자바스크립트의 엔진이 암묵적으로 진행 (=묵시적 형변환)

let numberC = 12;
let numberD = "2";

console.log(numberC * numberD); // 122
// 문자열과 숫자의 덧셈은 숫자를 문자열로 변경해서 더함

console.log(numberC * parseInt(numberD)); // 14
// parseInt() 문자형을 숫자형으로 "의도"해서 변경 (=명시적 형변환)

// 2. Non-Primitive Data Type (비 원시 타입)
// 한번에 여러 개의 값을 가질 수 있음
let array = [1, 2, 3, 4];
// 여러 개의 고정되지 않은 동적 공간 사용
// 2-1. Object
// 2-2. Array
// 2-3. Function
