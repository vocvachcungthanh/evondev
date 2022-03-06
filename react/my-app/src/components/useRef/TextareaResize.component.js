import React from "react";

const TextareaResize = () => {
  const textareaRef = React.useRef();
  const [text, setText] = React.useState("Demo");
  const [textareaHeight, setTextareaHeight] = React.useState("auto");
  const handleChange = (e) => {
    setTextareaHeight("auto");
    setText(e.target.value);
  };
  React.useEffect(() => {
    setTextareaHeight(`${textareaRef?.current?.scrollHeight}px`);
  }, [text]);
  return (
    <div className="p-5">
      <textarea
        className="w-full transition-all max-w-[400px] overflow-hidden p-5 rounded-lg border border-gray-100 outline-none"
        placeholder="please enter your content..."
        defaultValue={text}
        ref={textareaRef}
        onChange={handleChange}
        style={{ height: textareaHeight }}
      ></textarea>
    </div>
  );
};

export default TextareaResize;
