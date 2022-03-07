import React from "react";

export default function useClickOutSide(dom) {
  const nodeRef = React.useRef();
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const handleClickOutSide = (e) => {
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        !e.target.matches(dom)
      ) {
        setShow(false);
      }
    };
    document.addEventListener("click", handleClickOutSide);

    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, []);
  return {
    show,
    setShow,
    nodeRef,
  };
}
