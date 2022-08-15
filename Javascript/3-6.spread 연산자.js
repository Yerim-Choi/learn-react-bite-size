// Spread Operator (스프레드 연산자)
// 객체나 배열을 펼쳐서 나열

const cookie = {
  base: "cookie",
  madeIn: "korea",
};

// base madeIn 프로퍼티가 중복
const chocochipCookie = {
  ...cookie, // spread 연산자
  //   base: "cookie",
  //   madeIn: "korea",
  toping: "chocochip",
};

const blueberryCookie = {
  ...cookie, // spread 연산자
  //   base: "cookie",
  //   madeIn: "korea",
  toping: "blueberry",
};

const strawberryCookie = {
  ...cookie, // spread 연산자
  //   base: "cookie",
  //   madeIn: "korea",
  toping: "strawberry",
};

console.log(chocochipCookie);
console.log(blueberryCookie);
console.log(strawberryCookie);

// ** 배열에서도 사용 가능
const noTopingCookies = ["촉촉한쿠키", "안촉촉한쿠키"];
const topingCookies = ["바나나쿠키", "블루베리쿠키", "딸기쿠키", "초코칩쿠키"];

// 배열 합치기
// concat과 다르게 중간에 요소를 추가할 수 있음
const allCookies = [...noTopingCookies, "함정 쿠키", ...topingCookies];
console.log(allCookies); // [ '촉촉한쿠키', '안촉촉한쿠키', '함정 쿠키', '바나나쿠키', '블루베리쿠키', '딸기쿠키', '초코칩쿠키' ]
