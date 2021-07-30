import { useState, useEffect } from "react";

function useCounter(method) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (method === "forward") {
        setCounter((prevCounter) => prevCounter + 1);
      }
      if (method === "backward") {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [method]);

  return counter;
}

export default useCounter;
