const OddEventResult = ({ count }) => {
  console.log(count);
  console.log("RENDER!");

  // 본인이 관리하고 갖고있는 state가 변경될 때 마다 리렌더링
  // 전달받는 props가 변경될 때 마다 리렌더링
  // 부모가 리렌더링이 되면 자식 컴포넌트도 리렌더링
  return <>{count % 2 === 0 ? "짝수" : "홀수"}</>;
};

export default OddEventResult;
