// API & fetch
// Application Programming Interface
// (손님) ---- 주문 / 음식 서빙 ---- (웨이터 / 서버) ---- 찾기 / 가져오기 ---- (냉장고)
// (브라우저 Client) ---- 1. 데이터 요청 Request / 4. 요청 데이터 전달 Response ---- (서버 Server) ---- 2. 데이터 검색 Query / 3. 데이터 찾기 Query Result ---- (데이터베이스 Database)
// 웹 브라우저와의 서버간의 데이터를 요청하고 응답받는 행위

// json placeholder
// Resources
// https://jsonplaceholder.typicode.com/posts

async function getData() {
  // fetch api 성공 객체 전체를 반환
  let rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  let jsonResponde = await (await rawResponse).json();

  console.log(jsonResponde); // (100) [Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, …]
}

getData();
