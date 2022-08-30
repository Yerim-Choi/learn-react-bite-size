import React, { useState } from "react";

const Counter = () => {
  // 0 에서 출발
  // 1씩 증가하고
  // 1씩 감소하는
  // count 상태

  console.log("counter 호출!"); // count 값이 바뀔 때마다 리렌더링

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  // 여러개의 state를 하나의 컴포넌트가 가져도 문제가 되지 않음

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  const onIncrease2 = () => {
    setCount2(count + 1);
  };

  const onDecrease2 = () => {
    setCount2(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>

      <h2>{count2}</h2>
      <button onClick={onIncrease2}>+</button>
      <button onClick={onDecrease2}>-</button>
    </div>
  );
};

export default Counter;
