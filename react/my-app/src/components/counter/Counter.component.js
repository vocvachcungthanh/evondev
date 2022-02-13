import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);
  const handleIncrement = () => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };
  return <div onClick={handleIncrement}>Increment {count}</div>;
}

export default Counter;
