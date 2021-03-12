import { useEffect, useState } from "react";

export const useResize = (myRef) => {
  const getDimensions = () => ({
    WIDTH: myRef.current.offsetWidth,
  });

  const [dimensions, setDimensions] = useState({ WIDTH: 0 });
  useEffect(() => {
    const handleResize = () => {
      setDimensions(getDimensions());
    };

    if (myRef.current) {
      setDimensions(getDimensions());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [myRef]);

  return dimensions;
};
