import React from "react";

const Dropdown = () => {
  const dropdownRef = React.useRef();
  const [showDropdow, setShowDropdow] = React.useState(false);

  React.useEffect(() => {
    const handleClickOutDropdown = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdow(false);
      }
    };
    document.addEventListener("click", handleClickOutDropdown);

    return () => {
      document.removeEventListener("click", handleClickOutDropdown);
    };
  }, []);

  return (
    <div className="relative f-full max-w-[400px] m-5" ref={dropdownRef}>
      <div
        className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
        onClick={() => setShowDropdow(!showDropdow)}
      >
        Selected
      </div>
      {showDropdow && (
        <div className="border border-gray-200 rounded-lg absolute top-100 left-0 bg-white w-full">
          <div className="p-5 border-b border-b-gray-200 cursor-pointer">
            Javascript
          </div>
          <div className="p-5 border-b border-b-gray-200 cursor-pointer">
            ReactJS
          </div>
          <div className="p-5 border-b border-b-gray-200 cursor-pointer">
            VueJS
          </div>
          <div className="p-5">Kedo Ractjs</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
