// 콜백 함수
// 어떤 다른 함수의 매개변수로 함수를 넘겨준 것을 의미
// 배열 내장함수와 연관

function checkMood(mood, goodCallback, badCallback) {
  if (mood === "good") {
    // 기분 좋을 때 하는 동작
    goodCallback();
  } else {
    // 기분 안 좋을 때 하는 동작
    badCallback();
  }
}

function cry() {
  console.log("ACTION :: CRY");
}

function sing() {
  console.log("ACTION :: SING");
}

function dance() {
  console.log("ACTION :: DANCE");
}

// 함수를 값에 담는 것 : 함수 표현식 개념
// badCallback 함수를 매개변수로 전달
checkMood("sad", sing, cry);
