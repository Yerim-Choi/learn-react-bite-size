// 조건문
// 어떤 연산의 결과에 참 거짓에 따라서 다른 명령을 각각 실행 할 수 있도록 도와주는 함수

let a = 3;

if (a >= 7) {
  console.log("7 이상입니다.");
} else if (a >= 5) {
  console.log("5 이상입니다.");
} else {
  console.log("5 미만입니다.");
}

// if 문
// 조건식에 해당하는 방법이 실행
// if > else if (반복 사용 가능) > else (위의 조건식에 해당되지 않을 때)

let country = "ko";

if (country === "ko") {
  console.log("한국");
} else if (country === "cn") {
  console.log("중국");
} else if (cocountry === "jp") {
  console.log("일본");
} else {
  console.log("미 분류");
}

// switch
switch (country) {
  case "ko":
    console.log("한국");
    break; // break가 없을 시 아래가 다 실행
  case "cn":
    console.log("중국");
    break;
  case "jp":
    console.log("일본");
    break;
  case "uk":
    console.log("영국");
    break;
  default: // if문의 else와 동일
    console.log("미 분류");
    break;
}
