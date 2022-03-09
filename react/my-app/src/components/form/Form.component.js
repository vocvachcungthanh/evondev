import React from "react";
import useHandleChange from "../../hooks/useHandleChange";

function Form() {
  const { values, handleChange } = useHandleChange({
    fullName: "",
    email: "",
  });
  const { fullName, email } = values;
  const [nameError, setNameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (fullName === "") setNameError("Your fullName is empty");
    else setNameError("");

    if (email === "") setEmailError("Your email is empty ");
    else setEmailError("");
  };
  return (
    <div className="p-5">
      <form
        className="flex gap-x-3"
        autoComplete="off"
        onSubmit={handleSubmitForm}
      >
        <div className="flex flex-col gap-y-3">
          <input
            type="text"
            name="fullName"
            placeholder="Enter your name"
            className="w-full max-w-[300px] border border-gray-200 rounded-lg outline-none p-3"
            onChange={handleChange}
            defaultValue={fullName}
          />
          {nameError && nameError}
        </div>
        <div className="flex flex-col gap-y-3">
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="w-full max-w-[300px] border border-gray-200 rounded-lg outline-none p-3"
            onChange={handleChange}
            defaultValue={email}
          />
          {emailError && emailError}
        </div>
        <button className="p-3 rounded-lg text-white bg-blue-500">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Form;
