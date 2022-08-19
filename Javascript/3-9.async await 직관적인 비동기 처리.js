// async
// promise를 더 쉽게 이용할 수 있도록 도와줌

// function hello() {
//   return "hello";
// }

// delay 함수
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// async function helloAsync() {
//   // return "hello Async"; // Promise를 반환
//   return delay(3000).then(() => {
//     return "hello Async";
//   });
// }

async function helloAsync() {
  await delay(3000); // await 함수가 끝난 후 뒤에 코드가 실행
  return "hello async";
}

// console.log(hello());
// console.log(helloAsync());

// helloAsync().then((res) => {
//   console.log(res); // hello Async
// });

async function main() {
  const res = await helloAsync();
  console.log(res);
}

main();
