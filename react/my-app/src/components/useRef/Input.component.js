import React from "react";

function Input() {
  const divRef = React.useRef();
  const inputRef = React.useRef();
  const [title, setTitle] = React.useState("React thanh_dev");
  React.useEffect(() => {
    inputRef.current.focus();
    document.title = title;
  }, [title]);
  return (
    <div className="input-div m-5" ref={divRef}>
      <input
        type="text"
        placeholder="Auto focus input"
        className="inline-block p-3 border border-gray-200 focus:border-blue-500 outline-none rounded-lg"
        ref={inputRef}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
}

export default Input;
