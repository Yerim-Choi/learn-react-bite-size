// 객체 (비 원시 타입)

// 객체 생성 방식
// let person = new Object(); // 1. new 생성자를 이용하여 객체 생성
// let person2 = {}; // 2. 객체 리터럴 방식(주로 이용)

let person = {
  // key - value  형식 (객체 프로퍼티)
  // 모든 자료형을 value에 사용할 수 있다
  // key는 문자열, 따로 쌍따옴표를 사용하지는 않는다.
  // key 중복은 허용이나 중복해서 사용하는 것은 권장하지 않는다.
  //   key: "value",
  //   key1: "value2",
  //   key2: true,
  //   key3: undefined,
  //   key4: [1, 2],
  //   key5: function () {},
  name: "summer",
  age: 20,
};

console.log(person); // { key: 'value', key1: 'value2' }

// 객체의 프로퍼티에 접근하는 방법
// 없는 key 일 경우 undefined
console.log(person.name); // . 점 표기법
console.log(person["name"]); // [] 괄호 표기법 (안에 문자는 "" 문자열 표기)

console.log(getPropertyValue("name")); // 동적인 파라미터를 전달 받거나 key가 고정되어 있지 않을 때 괄호 표기를 사용

function getPropertyValue(key) {
  return person[key];
}

let person2 = {
  name: "spring", // 멤버
  age: 21, // 멤버
  say: function () {
    console.log(`안녕 나는 ${this.name}`); // 객체 안의 함수 프로퍼티 : 메서드
    // this는 객체 안의 name
  },
};

// 프로퍼티 추가
person.location = "한국";
person["gender"] = "남성";

// 프로퍼티수정
person.name = "spring A";
person["age"] = 40;

// 프로퍼티 삭제
// delete person2.age; // 메모리에서 지워지는 것은 아니다.
// delete person2["name"];

person.name = null; // 메모리에서도 지워짐

// const로 객체를 생성 시 아래 와 같이 직접 객체를 수정하게되면 오류 발생
// Assignment to constant variable.
// person2 = {
//   age: 20,
// };

console.log(person2);

// 객체 내 프로터피 함수 호출
person2.say();
person2["say"]();

// 객체에 존재하지 않는 프로퍼티에 접근 시
console.log(person.color); //undefined

// 객체에 해당 프로퍼티가 존재 여부 확인 방법
console.log(`name : ${"name" in person}`); // true
console.log(`age : ${"age" in person}`); // true
console.log(`color : ${"color" in person}`); // false
