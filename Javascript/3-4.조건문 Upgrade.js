// 3-4.조건문 Upgrade

// 함수 선언식
// 한식 음식 확인 함수
function isKoreanFood(food) {
  if (["불고기", "비빔밥", "떡볶이"].includes(food)) {
    // includes 해당 파라미터가 배열안에 존재하는지 확인하는 메서드
    return true;
  }

  return false;
}

const food1 = isKoreanFood("불고기");
const food2 = isKoreanFood("파스타");

// console.log(food1); // true
// console.log(food2); // false

// 화살표 함수
// 한식 중식 일식 대표 메뉴 return 해주는 함수

const meal = {
  한식: "불고기",
  양식: "파스타",
  중식: "멘보샤",
  일식: "초밥",
};

const getMeal = (mealType) => {
  //   if (mealType === "한식") return "불고기";
  //   if (mealType === "양식") return "파스타";
  //   if (mealType === "중식") return "멘보샤";
  //   if (mealType === "일식") return "초밥";
  //   return "굶기";

  // meal이라는 객체에서 해당 key의 객체를 가져옴
  // 해당 key가 없을 경우 undefined 출력 || '굶기' 출력
  return meal[mealType] || "굶기";
};

console.log(getMeal("한식"));
console.log(getMeal("양식"));
console.log(getMeal("중식"));
console.log(getMeal("일식"));
console.log(getMeal());
