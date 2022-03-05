import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);

  const [info, setInfo] = React.useState({
    firstName: "nguyen",
    lastName: "thanh",
    ags: 23,
  });
  React.useEffect(() => {
    console.log("thanh");
  }, [info.firstName, info.lastName]);
  return (
    <div className="p-5 flex gap-x-4 items-center">
      <input
        type="text"
        name="firstName"
        value={info.firstName}
        onChange={(e) => setInfo({ ...info, firstName: e.target.value })}
      />
      <input
        type="text"
        name="lastName"
        value={info.lastName}
        onChange={(e) => setInfo({ ...info, lastName: e.target.value })}
      />

      <input
        type="text"
        name="ags"
        value={info.ags}
        onChange={(e) => setInfo({ ...info, ags: e.target.value })}
      />

      <span className="text-2xl font-bold">{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="inline-block p-3 bg-green-400 text-white"
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
