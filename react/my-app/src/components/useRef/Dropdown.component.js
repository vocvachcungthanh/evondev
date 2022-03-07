import React from "react";
import useClickOutSide from "../../hooks/useClickOutSide";
const Dropdown = () => {
  const { show, setShow, nodeRef } = useClickOutSide();

  return (
    <div className="relative f-full max-w-[400px] m-5" ref={nodeRef}>
      <div
        className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
        onClick={() => setShow(!show)}
      >
        Selected
      </div>
      {show && (
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
