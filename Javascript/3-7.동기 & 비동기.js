// 동기 & 비동기
// 순서대로 실행하는 것과 그렇지 않은 것 들

// <자바스크립트의 싱글 스레드 작업 수행 방식>
// TaskA > TaskB > TaskC
// 자바스크립트는 코드가 작성된 순서대로 작업을 처리함
// 이전 작업이 진행중 일 때는 다음 작업을 수행하지 않고 기다림
// 먼저 작성된 코드를 먼저 다 실행하고 나서 뒤에 작성된 코드를 실행한다. (블로킹 방식)
// 동기 방식의 처리

// ** 동기 처리의 문제 **
// 동기적 처리의 단점은 하나의 작업이 너무 오래 걸리게 될 시,
// 모든 작업이 오래 걸리는 하나의 작업이 종료되기 전 까지 올 스탑 되기 때문에, 전반적인 흐름이 느려진다.

// MultiThread
// 코드를 실행하는 일꾼 Thread를 여러 개 사용하는 방식인 '멀티 쓰레드' 방식으로 작동시키면 작업 분할 가능
// 오래 걸리는 일이 있어도 다른 일꾼 Thread에게 지시하면 되므로 괜찮음

// ** 그러나 자바스크립트의 경우 싱글 쓰레드로 동작함 **
// 비동기 작업
// 여러 개의 작업을 동시에 실행시킴
// 즉, 먼저 작성된 코드의 결과를 기다리지 않고 다음 코드를 바로 실행함 (논 블로킹 방식)

function taskA(a, b, cb) {
  setTimeout(() => {
    // console.log("A TASK END"); // 3초 있다가 console.log 출력
    const res = a + b;
    cb(res);
  }, 3000);
}

function TaskB(a, cb) {
  setTimeout(() => {
    const res = a * 2;
    cb(res);
  }, 1000);
}

function TaskC(a, cb) {
  setTimeout(() => {
    const res = a * -1;
    cb(res);
  }, 2000);
}

// taskA(3, 4, (res) => {
//   console.log("A TASK RESULT : ", res);
// });

// TaskB(7, (res) => {
//   console.log("B TASK RESULT : ", res);
// });

// TaskC(14, (res) => {
//   console.log("C TASK RESULT : ", res);
// });

// 비동기 처리 출력
// 콜백 함수로 처리 시 '콜백 지옥' > 'Promise'
taskA(4, 5, (a_res) => {
  console.log("A TASK RESULT : ", a_res);
  TaskB(a_res, (b_res) => {
    console.log("B TASK RESULT : ", b_res);
    TaskC(b_res, (c_res) => {
      console.log("C TASK RESULT : ", c_res);
    });
  });
});

console.log("코드 끝");

// JS Engine
// Heap : 메모리 할당
// Call Stack : 코드 실행

// 프로그램 실행 시
// Main Context > 작업한 코드

// 비동기 방식으로 실행 시 자바스크립트의 코드 실행 방식
// Web APIs : setTimeout과 같이 웹 브라우저에서 제공하는 함수
// Event Loop : Call Stack이 비어 있을 경우 Callback Queue에서 옮겨줌
//  - 참고로 이렇게 매 순간 태스크 큐와 스택을 확인하는 작업을 틱(Tick)이라고 한다.
// Callback Queue : Web APIs에서 발생한 콜백 함수가 옮겨짐 (스택이 비는 순간 스택에 순서대로 푸시)
