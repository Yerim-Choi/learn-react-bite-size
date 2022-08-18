// 콜백 지옥을 해결할 수 있는 Promise
// 자바스크립트의 비동기를 돕는 객체

// 비동기 작업이 가질 수 있는 3가지 상태
// Pending (대기상태)
// Fulfilled (성공) - resolve 해결
// Rejected (실패) - reject 거부
// 한번 성공하거나 실패하면 작업 끝

// 2초 뒤에 양수인지 음수인지 판단

// 콜백 사용
// function isPositive(number, resolve, reject) {
//   setTimeout(() => {
//     if (typeof number === "number") {
//       resolve(number >= 0 ? "양수" : "음수");
//       // 성공 -> resolve
//     } else {
//       // 실패 -> reject
//       reject("주어진 값이 숫자형 값이 아닙니다.");
//     }
//   }, 2000);
// }

// isPositive(
//   [],
//   (res) => {
//     console.log("성공적으로 수행됨 : ", res);
//   },
//   (err) => {
//     console.log("실패 하였음 : ", err);
//   }
// );

// // 프로미스 사용
// function isPositiveP(number) {
//   const executor = (resolve, reject) => {
//     // 실행자
//     setTimeout(() => {
//       if (typeof number === "number") {
//         resolve(number >= 0 ? "양수" : "음수");
//         // 성공 -> resolve
//       } else {
//         // 실패 -> reject
//         reject("주어진 값이 숫자형 값이 아닙니다.");
//       }
//     }, 2000);
//   };

//   const asyncTask = new Promise(executor); // 프로미스 객체 생성자로 executor 넘겨주기
//   return asyncTask;
// }

// const res = isPositiveP(101);
// res
//   .then((res) => {
//     // resolve
//     console.log("성공적으로 수행됨 : ", res);
//   })
//   .catch((err) => {
//     // reject
//     console.log("실패 하였음 : ", err);
//   });

function taskA(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 3000);
  });
}

function taskB(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * 2;
      resolve(res);
    }, 1000);
  });
}

function taskC(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * -1;
      resolve(res);
    }, 2000);
  });
}

// 콜백지옥식 처럼 사용
// taskA(5, 1).then((a_res) => {
//   console.log("A RESULT : ", a_res);
//   taskB(a_res).then((b_res) => {
//     console.log("B RESULT : ", b_res);
//     taskC(b_res).then((c_res) => {
//       console.log("C RESULT : ", c_res);
//     });
//   });
// });

// then 체이닝
taskA(5, 1)
  .then((a_res) => {
    console.log("A RESULT : ", a_res);
    return taskB(a_res);
  })
  .then((b_res) => {
    console.log("B RESULT : ", b_res);
    return taskC(b_res);
  })
  .then((c_res) => {
    console.log("C RESULT : ", c_res);
  });

// 비동기 처리를 호출하는 코드와  결과를 처리하는 코드를 분리할 수 있음
// 가독성 있고 깔끔한 비동기 처리 작업이 가능
const bPromiseResult = taskA(5, 1).then((a_res) => {
  console.log("A RESULT : ", a_res);
  return taskB(a_res);
});

console.log("test");
console.log("test");
console.log("test");
console.log("test");

bPromiseResult
  .then((b_res) => {
    console.log("B RESULT : ", b_res);
    return taskC(b_res);
  })
  .then((c_res) => {
    console.log("C RESULT : ", c_res);
  });

// 기존 콜백
// taskA(3, 4, (a_res) => {
//   console.log("task A : ", a_res);
//   taskB(a_res, (b_res) => {
//     console.log("taksB :", b_res);
//     taskC(b_res, (c_res) => {
//       console.log("task C :", c_res);
//     });
//   });
// });
