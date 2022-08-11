// 논리 연산자를 이용한 문법

// 단락회로 평가
// 왼쪽에서 오른쪽으로 연산하게되는 논리 연산자의 연산 순서를 이용하는 문법
// console.log(true && true); // 양쪽이 true일 경우 오른쪽 true 반환

// console.log(true || false); // 첫번째 값이 true일 경우 바로 반환

// console.log(!true);

const getName = (color) => {
  //   if (!color) {
  //     console.log("객체가 아닙니다.");
  //   }
  //   return color.name;

  // return color && color.name; // undefined
  const name = color && color.name; // 객체가 아닙니다.

  return name || "객체가 아닙니다.";
};

let color = null;
const name = getName(color);

console.log(name);
