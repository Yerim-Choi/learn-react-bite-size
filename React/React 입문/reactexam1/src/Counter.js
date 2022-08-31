import React, { useState } from "react";
import OddEventResult from "./OddEvenResult";

const Counter = ({ initialValue }) => {
  console.log(initialValue); //undefined
  const [count, setCount] = useState(initialValue);

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <OddEventResult count={count} />
    </div>
  );
};

Counter.defaultProps = {
  initialValue: 0, // 기본 값 설정
};

export default Counter;
