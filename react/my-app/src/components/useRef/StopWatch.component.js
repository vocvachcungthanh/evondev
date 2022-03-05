import React from "react";
function StopWatch() {
  const timerRef = React.useRef(null);
  const [count, setCount] = React.useState(0);
  const handleStart = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  React.useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);
  return (
    <div className="m-5 w-64 rounded-lg bg-gray-300  mx-auto shadow-lg p-3 text-center">
      <h3 className="font-medium text-lg">Timer: {count}s</h3>
      <div className="flex items-center gap-3 justify-center mt-3 ">
        <button
          className="pt-2 pb-2 pl-5 pr-5 rounded-full text-white bg-cyan-600"
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className="pt-2 pb-2 pl-5 pr-5 rounded-full text-white bg-cyan-600"
          onClick={handleStop}
        >
          Stop
        </button>
      </div>
    </div>
  );
}
export default StopWatch;
