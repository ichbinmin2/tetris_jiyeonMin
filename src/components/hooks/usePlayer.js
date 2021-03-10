import { useState } from "react";
import { randomColorfulBlock, BLOCKS } from "../../block";

export const usePlayer = (props) => {
  // 플레이어의 초기값 설정
  const [player, setPlayer] = useState({
    shape: BLOCKS.block.shape,
    color: randomColorfulBlock(),
    position: { x: 0, y: 0 },
    bumped: false,
  });

  return [player];
};
