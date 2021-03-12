import { useCallback, useEffect, useState } from "react";

export const usePlayGame = (attack) => {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(0);
  const [attackBlock, setAttackBlock] = useState(0);

  const scorePoint = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  const scoreResult = useCallback(() => {
    if (attack > 0) {
      setScore((preview) => preview + scorePoint[attack - 1] * (level + 1));
      setAttackBlock((preview) => preview + attack);
    }
  }, [level, scorePoint, attack]);

  useEffect(() => {
    scoreResult();
  }, [scoreResult, attack, score]);

  return [score, setScore, attackBlock, setAttackBlock, level, setLevel];
};
