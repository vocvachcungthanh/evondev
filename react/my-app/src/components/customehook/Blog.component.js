import React from "react";
import useLinkNewTab from "../../hooks/useLinkNewTab";

function Blog() {
  const { contentRef } = useLinkNewTab();
  return (
    <div ref={contentRef}>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fuga
        facilis incidunt dolor impedit similique rem quia dolore, ea in deserunt
        magnam repellat velit laboriosam, eius ad optio sunt iusto.
        <a href="https://google.com" className="underline">
          Google.com
        </a>
        ?
      </p>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugit vel
        blanditiis quas nemo fugiat molestias, saepe natus minima debitis
        asperiores, excepturi ipsam consequatur, ad expedita facilis deserunt
        temporibus ut!
        <a href="https://google.com" className="underline">
          Google.com
        </a>
      </p>
    </div>
  );
}

export default Blog;
