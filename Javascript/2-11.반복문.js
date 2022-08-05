// 반복문

const arr = ["a", "b", "c"];

// 1. for
// 배열을 순회할 때 좋음
// for(초기식, 조건식, 연산식)
for (let i = 1; i <= 100; i++) {
  // 반복 수행할 명령
  console.log("summer");
}

// arr 배열 순회
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let fruit = {
  name: "apple",
  color: "red",
  price: 100,
};

// 객체의 key와 value 배열로 반환
const fruitKeys = Object.keys(fruit);
const fruitValues = Object.values(fruit);

for (let i = 0; i < fruitKeys.length; i++) {
  console.log(fruitKeys[i]);
  console.log(fruitValues[i]);
  //   const curKey = fruitKeys[i];
  //   const curValue = fruit[curKey];

  //   console.log(`${curKey} : ${curValue}`);
}
