import "./Toggle.css";
import React from "react";

function Toggle({ handleChange }) {
  const [on, setOn] = React.useState(false);
  const handleToggle = () => {
    setOn(!on);
  };
  React.useEffect(() => {
    handleChange(on);
  }, [on]);

  return (
    <div>
      <div
        className={`toggle ${on ? "active" : ""}`}
        onClick={handleToggle}
        title="Play"
      >
        <div className={`spinner ${on ? " active" : ""}`}></div>
      </div>
    </div>
  );
}

export default Toggle;
