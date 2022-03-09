import React from "react";

export default function useDebounce(initializeValue = "", delay = 1000) {
  const [debounce, setDebounce] = React.useState(initializeValue);

  React.useEffect(() => {
    const time = setTimeout(() => {
      setDebounce(initializeValue);
    }, delay);

    return () => {
      clearTimeout(time);
    };
  }, [delay, initializeValue]);

  return debounce;
}
