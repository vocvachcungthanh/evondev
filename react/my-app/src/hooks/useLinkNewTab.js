import React from "react";
export default function useLinkNewTab() {
  const contentRef = React.useRef(null);
  React.useEffect(() => {
    if (contentRef.current) {
      const links = contentRef.current.querySelectorAll("a");
      links.length > 0 &&
        links.forEach((item) => item.setAttribute("target", "_blank"));
    }
  }, []);
  return {
    contentRef,
  };
}
