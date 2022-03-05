import React from "react";

function HeaderTop() {
  React.useEffect(() => {
    const handleFixedHeader = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 100) header.classList.add("fixed");
      else header.classList.remove("fixed");
    };
    window.addEventListener("scroll", handleFixedHeader);

    return () => {
      window.removeEventListener("scroll", handleFixedHeader);
    };
  }, []);
  return <header className="header bg-cyan-900 h-20 w-full"></header>;
}
export default HeaderTop;
