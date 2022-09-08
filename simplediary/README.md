### 🤔 학습 목표

## 6-1. React에서 사용자 입력 처리하기

- 세부 목표
  - 한줄 입력 처리하기
  - 여러줄 입력 처리하기
  - 선택 박스 입력 처리하기
  - 사용자 입력 데이터 핸들링하기

## 6-2. React에서 DOM에 조작하기 - useRef

- 세부 목표
  - 일기 저장 버튼을 클릭했을 때 작성자와 일기가 정상적으로 입력되었는지 확인하고 아니라면 focus 하기

## 6-3. React에서 리스트 사용하기

- 세부 목표
  - 배열을 이용하여 React에서 List를 렌더링 해보고 개별적인 컴포넌트로 만들어보기

## 6-4. React에서 배열 사용하기 2 - 데이터 추가하기

- 세부 목표
  - 배열을 이용한 React의 List에 아이템을 동적으로 추가해보기
  - With React처럼 생각하기
  <!-- - React는 단방향으로만 데이터가 흐른다. -->

## 6-5. React에서 배열 사용하기 3 - 데이터 삭제하기

- 세부 목표
  - 삭제하기 버튼을 클릭했을 때 해당 일기만 List에서 삭제하기

## 6-6. React에서 배열 사용하기 4 - 데이터 수정하기

- 세부 목표
  - 배열을 이용한 React의 List에 아이템을 동적으로 수정 해보기 With 조건부 렌더링

## 6-7. React Lifecycle 제어하기 - useEffect

- Lifecycle , React 컴포넌트의 생명 주기
  - 화면에 나타나는 것 Mount / ex) 초기화 작업 
    - ComponentDidMount (Class React Component Only)
  - 업데이트 (리렌더) Update / ex) 예외 처리 작업
    - ComponentDidUpdate
  - 화면에서 사라짐 UnMount / ex) 메모리 정리 작업
    - ComponentWillUnmount

- React Hooks 2019년 6월 정식 출시
  - Class형 컴포넌트의 길어지는 코드 길이 문제
  - 중복 코드, 가독성 문제 등등을 해결하기 위해 동작함

- useEffect 
  - Callback 함수, Dependency Array(의존성 배열)
  - 이 배열 내에 들어있는 값이 변화하면 콜백 함수가 수행된다.

## 6-8. React에서 API 호출하기

- 세부 목표
  - useEffect를 이용하여 컴포넌트 Mount 시점에 API를 호출하고 해당 API의 결과값을 일기 데이터의 초기값으로 이용하기
  - https://jsonplaceholder.typicode.com/