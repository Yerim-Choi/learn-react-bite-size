// Node Package Manaer
// Node.js의 Pakage 관리 도구
// Node.js에서 사용할 수 있는 모듈들을 패키지화하여 모아둔 저장소 역할과 패키지 설치 및 관리를 위한 CLI(Command line interface)를 제공

// Pakage(module) ?
// 로그인 모듈, 메일 모듈 등 프로그램을 구성하는 구성요소의 일부

// npm init
// package.json 파일 생성

//  {
//     "name": "package-example1", // 이름
//     "version": "1.0.0", // 버전
//     "description": "",
//     "main": "index.js", // 실행할 메인 파일
//     "scripts": { // 자주 실행해야하는 명령어를 사전에 정의
//       "test": "echo \"Error: no test specified\" && exit 1",
//       "start": "node index.js"
//     },
//     "author": "",
//     "license": "ISC",
//     "dependencies": {
//       "randomcolor": "^0.6.2" // 외부 패키지 설치 정보 (^ 버전 이상이 설치)
//     }
//   }

// npm 모듈 설치
// npm i randomcolor
// npm istall randomcolor

// node_modules 하위 폴더안에 전체 패키지 관련 코드가 담기는 곳
// package.json : 생성한 프로젝트의 메타정보와 해당 프로젝트에 설치된 모듈과 패키지들에 대한 정보
// package-lock.json : 외부 패키지의 기본 설정값 및 버전 등 상세 내용
