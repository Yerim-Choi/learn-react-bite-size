// 참 같은 값, 거짓 같은 값
// Truthy & Falsy

// boolean 값이 아니더라도 true false 인식

// TRUE
// let a = "string"; // TRUE
// let a = []; // TRUE
// let a = {}; // TRUE
// let a = 12; // TRUE
// let a = '0'; // TRUE
// let a = 'false'; // TRUE
// let a = Infinity; // TRUE

// FALSE
// let a = ""; // FALSE
// let a = null; // FALSE
// let a = 0; // FALSE
// let a = Nan; // FALSE
let a = undefined; // FALSE

if (a) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}

// 객체를 매개변수로 받아서 특정한 프로퍼티를 반환
const getName = (color) => {
  //   if (color === undefined || color === null) {
  if (!color) {
    // false NOT => True
    return "객체가 아닙니다.";
  }
  return color.name;
};

// let color = { name: "color" };
let color; // TypeError: Cannot read property 'name' of undefined 에러 발생
const name = getName(color);
console.log(name);
