import { useCallback, useEffect, useState } from "react";

export const usePlayGame = (attack) => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);

  const scorePoint = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  const scoreResult = useCallback(() => {
    if (attack > 0) {
      setScore((preview) => preview + scorePoint[attack - 1]);
      setRows((preview) => preview + attack);
    }
  }, [scorePoint, attack]);

  useEffect(() => {
    scoreResult();
  }, [scoreResult, attack, score]);

  return [score, setScore, rows, setRows];
};
