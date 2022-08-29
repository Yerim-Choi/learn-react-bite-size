import React from "react";
// import "./App.css";

import MyHeader from "./MyHeader";

function App() {
  let name = "apple";

  const style = {
    App: {
      backgroundColor: "black",
    },
    h2: {
      color: "red",
    },
    bold_text: {
      color: "green",
    },
  };

  const func = () => {
    return "hi";
  };

  const number = 5;

  return (
    <div className="App" style={style.App}>
      <MyHeader />
      <h2 style={style.h2}>
        안녕 리액트 {name} {func()}
      </h2>
      <b style={style.bold_text} id="bold_text">
        {/* 삼항연산자를 이용해서 조건부 렌더링 */}
        React.js {number}는 : {number % 2 === 0 ? "짝수" : "홀수"}
      </b>
    </div>
  );
}

export default App;
