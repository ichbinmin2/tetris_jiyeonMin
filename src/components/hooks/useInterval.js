import { useEffect, useRef } from "react";

// * useInterval 레퍼런스 : https://overreacted.io/making-setinterval-declarative-with-react-hooks/

export function useInterval(callback, delay) {
  const savedCallback = useRef();
  // ref는 어떤 것이든 넣을 수 있는 "박스"
  // useRef()를 사용하여 가장 최근의 callback을 저장
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Interval 일시정지 하기
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [delay]);
}
