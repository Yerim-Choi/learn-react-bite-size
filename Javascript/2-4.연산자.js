// 연산자
// 사칙연산을 도와주는 문자

// 1. 대입 연산자
// 변수의 값을 할당

let a = 1;
let b = 2;

// 2. 산술 연산자
// 사칙 연산을 할 때 사용
console.log(a + b);
console.log(a * b);
console.log(a - b);
console.log(a / b);
console.log(a % b);

// 3. 연결 연산자
// 두 개 이상의 문자열을 이어붙이는 연산

let c = "1";
let d = "2";

console.log(c + d); // 12

// 4. 복합 연산자
// 산술연산자와 대입연산자가 합쳐짐

// a = a + 10;
a += 10;
console.log(a); // 15

// 5. 증감 연산자
// ++ = +1
// -- = +
// 위치에 따라 값이 달라짐
// 증감 연산자가 뒤에 있으면 코드라인이 끝나고 값이 바뀜 (후위연산)
// 증감 연산자가 앞에 있으면 바로 값이 적용됨 (전위연산)

b++;
console.log(b); // 3

// 6. 논리 연산자
// boolean 자료형과 연관
// 조건문에서 유용하게 사용

// 6.1 ! not
console.log(!true); // false

// 6.2 && and
console.log(true && true); // true
console.log(true && false); // false

// 6.3 || or
console.log(true || true); // true
console.log(true || false); // true

// 7. 비교 연산자

let compareA = 1 == "1";
console.log(compareA); // true
// '==' 데이터 타입이 달라도 값을 동일하게 적용

let compareB = 1 == "1";
console.log(compareB); // false
// '===' 값과 데이터 타입도 비교

let compareC = 1 !== "1"; // false
// '!==' 값이 같지 않을 시 true 비교

let compareE = 1 !== "1"; // false
// '!===' 데이터 타입과 값이 같지 않을 시 true 반환

let compareF = 1 > 2; // true
let compareG = 1 < 2; // false

// 8. typeof
// 변수나 상수에 들어 있는 값이 현재 어떤 타입을 갖고 있는지 알 수 있다.
let number = 1;
number = "1";

// 자바스크립트는 타입에 있어서 자유로운 언어이기 때문에 (동적타입언어)
// 유연하다는 장점이 있지만 에러가 발생할 확률이 있다.

console.log(typeof number); //string

// 9. null 병합 연산자
// 양쪽의 피연산자중에 null 이나 undefined이 아닌 값을 선택

let result; //undefined

result = result ?? 10;
console.log(result); // 10
