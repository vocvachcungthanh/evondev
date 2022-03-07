import React from "react";
export default function useHover() {
  // mouseover
  // mouseout

  const [hovered, setHovered] = React.useState(false);
  const nodeRef = React.useRef(null);
  React.useEffect(() => {
    const handleMouseOver = () => {
      setHovered(true);
    };
    const handleMouseOut = () => {
      setHovered(false);
    };
    const dom = nodeRef.current;
    if (dom) {
      dom.addEventListener("mouseover", handleMouseOver);
      dom.addEventListener("mouseout", handleMouseOut);
    }
    return () => {
      dom.removeEventListener("mouseover", handleMouseOver);
      dom.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);
  return {
    hovered,
    nodeRef,
  };
}
