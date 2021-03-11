import { useEffect, useState } from "react";
import { playingBoard } from "../../playingGame";

export const usePlayBoard = (player, resetPlayer) => {
  const [playBoard, setPlayBoard] = useState(playingBoard());

  // 클래스의 라이프 사이클 메소드를 대체하는 useEffect 사용
  useEffect(() => {
    // 상태 업데이트 준비 단계(업데이트 속성값 지정)
    const boardUpdateStep = (beforeBoard) => {
      const newBoard = beforeBoard.map((row) =>
        // micro box가 병합되었으면, 다시 초기값으로 깨끗하게 해주고, 아니면 있는 그대로 반환한다.
        row.map((micro) => (micro[1] === "fix" ? [0, "fix"] : micro))
      );

      // 블럭을 그려주는 과정
      player.blockType.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            // board에 있는 좌표를 설정하고
            newBoard[y + player.position.y][x + player.position.x] = [
              value,
              `${player.bumped ? "merge" : "fix"}`,
            ];
          }
        });
      });
      if (player.bumped) {
        resetPlayer();
      }

      return newBoard;
    };

    // 상태 업데이트
    setPlayBoard((before) => boardUpdateStep(before));
  }, [player, resetPlayer]);
  // }, [player.bumped, player.position.x, player.position.y, player.blockType]);

  return [playBoard, setPlayBoard];
};
