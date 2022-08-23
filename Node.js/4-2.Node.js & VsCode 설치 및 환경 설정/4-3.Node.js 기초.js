console.log("Hello Node js");

// VSCode
// Terminal
// 아이콘을 클릭하여 프로그램 실행 GUI Graphic User Interface
// 명령어를 입력하여 프로그램 실행 CLI Command Line Interface : Node에게 간단하게 명령어를 통하여 실행할 수 있음

// 1. node 파일 실행 하기
// node 실행시킬 파일의 경로
// node.js로 실행 시 터미널 창에 콘솔 로그가 찍힘

// calc.js 함수 모듈 가져오기
const calc = require("./calc");

console.log(calc);
// {
//     moduleName: 'calc module',
//     add: [Function: add],
//     sub: [Function: sub]
//  }

console.log(calc.add(1, 2)); // 3
console.log(calc.add(4, 5)); // 9
console.log(calc.sub(10, 2)); // 8

// module.exports & require : node 에만 존재하는 내장함수 (바닐라JS 사용 X)
