import React from "react";

const Input = () => {
  const [fullName, setFullName] = React.useState();
  const [message, setMessage] = React.useState();
  const handleInputChange = (e) => {
    setFullName(e.target.value);
  };
  const handleTextareaChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div className="m-5">
      <h3>{fullName}</h3>
      <p>{message}</p>
      <input
        type="text"
        name="fullName"
        className="w-full max-w-[300px] border border-gray-100 p-5 outline-none"
        placeholder="Enter your name"
        defaultValue={fullName}
        onChange={handleInputChange}
      />
      <textarea
        name="message"
        defaultValue={message}
        onChange={handleTextareaChange}
        placeholder="Enter message"
        id=""
        cols="30"
        rows="10"
        className="w-full max-w-[300px] border border-gray-100 p-5 outline-none"
      ></textarea>
    </div>
  );
};

export default Input;
