import React, { useState, useEffect } from "react";

function ConditionalView({ children, minWidth, maxWidth }) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= minWidth && window.innerWidth <= maxWidth) {
        setShouldRender(true);
      } else {
        setShouldRender(false);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [minWidth, maxWidth]);

  return shouldRender ? children : null;
}

export default ConditionalView;