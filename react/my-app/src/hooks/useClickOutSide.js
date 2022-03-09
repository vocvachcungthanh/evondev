import React from "react";

export default function useClickOutSide() {
  const nodeRef = React.useRef();
  const [show, setShow] = React.useState(false);
  const handleClickOutSide = React.useRef({});
  React.useEffect(() => {
    handleClickOutSide.current = (e) => {
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        !e.target.matches()
      ) {
        setShow(false);
      }
    };
    document.addEventListener("click", handleClickOutSide.current);

    return () => {
      document.removeEventListener("click", handleClickOutSide.current);
    };
  }, []);
  return {
    show,
    setShow,
    nodeRef,
  };
}
