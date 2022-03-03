import React from "react";

function DoubleCounter() {
  const [count, setCount] = React.useState(0);
  const handleDoubleNumber = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  return (
    <React.Fragment>
      <button onClick={handleDoubleNumber}>Double counter</button>
      <span>{count}</span>
    </React.Fragment>
  );
}

export default DoubleCounter;
