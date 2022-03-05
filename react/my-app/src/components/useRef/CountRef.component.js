import React from "react";

function CountRef() {
  // const [count, setCount] = React.useState(0);
  const countRef = React.useRef(0);
  const handle = () => {
    const updateCount = countRef.current + 1;
    console.log(`Clicked ${updateCount} times`);
    countRef.current++;
  };
  console.log("Render");
  return (
    <div className="m-5">
      <button
        className="pl-5 pr-5 pt-3 pb-3 bg-cyan-300 text-white rounded-full hover:bg-cyan-500 transition-all"
        onClick={handle}
      >
        Click me!
      </button>
    </div>
  );
}
export default CountRef;
