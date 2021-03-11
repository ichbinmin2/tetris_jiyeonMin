import { useCallback, useState } from "react";
// import { randomColorfulBlock, BLOCKS } from "../../block";
import { randomColorfulBlock, BLOCKS } from "../../block";
import { BOARD_WIDTH } from "../../playingGame";
// import { BOARD_WIDTH } from "../../playingGame";

export const usePlayer = (props) => {
  // 플레이어의 초기값 설정
  const [player, setPlayer] = useState({
    position: { x: 0, y: 0 },
    blockType: BLOCKS.block.shape,
    color: randomColorfulBlock(),
    bumped: false,
  });

  const playerUpdatePostion = ({ x, y, bumped }) => {
    // player의 움직이는 상태 업데이트 위치와 충돌 관련 값을 지정
    setPlayer((prev) => ({
      ...prev,
      position: {
        x: (prev.position.x = prev.position.x + x),
        y: (prev.position.y = prev.position.y + y),
      },
      bumped,
    }));
  };

  // 무한 루프를 막기 위한 콜백 함수 사용
  const resetPlayer = useCallback(() => {
    // player의 상태값 재 초기화
    setPlayer({
      position: { x: BOARD_WIDTH / 2 - 1, y: 0 },
      blockType: BLOCKS.block.shape,
      color: randomColorfulBlock(),
      bumped: false,
    });
  }, []);

  return [player, playerUpdatePostion, resetPlayer];
};
