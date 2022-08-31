const Container = ({ children }) => {
  return (
    <div style={{ margin: 20, padding: 20, border: "1px solid gray" }}>
      {/* JSX 요소 react.element */}
      {children}
    </div>
  );
};

export default Container;
