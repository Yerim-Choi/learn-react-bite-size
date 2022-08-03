// 배열 Array (비 원시 타입)
// 동시에 여러 데이터를 가질 수 있음

// let arr = new Array(); // 생성자 함수를 이용하여 선언
// let arr2 = []; // 배열 리터럴 선언

// console.log(arr); // [] 빈배열 출력

// let arr = [1, "2", true, null, undefined, {}, [], function () {}]; // 객체와 동일하게 모든 자료형의 데이터가 들어 갈 수 있다.

let arr = [1, 2, 3, 4, 5];
console.log(arr);

// 배열의 인덱스를 통하여 접근
console.log(arr[0]); // 1
console.log(arr[1]); // 2
console.log(arr[2]); // 3
console.log(arr[3]); // 4
console.log(arr[4]); // 5

arr.push(6); // 배열의 마지막 위치에다가 삽입
console.log(arr.length); // 배열의 길이
