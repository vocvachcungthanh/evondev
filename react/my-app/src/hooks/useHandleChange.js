import React from "react";
export default function useHandleChange(initialValues) {
  const [values, setValues] = React.useState(initialValues);

  const handleChange = (e) => {
    let type = e.target.type;
    setValues((prev) => ({
      ...prev,
      [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
    }));
  };
  return {
    values,
    handleChange,
  };
}
