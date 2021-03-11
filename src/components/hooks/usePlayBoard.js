import { useEffect, useState } from "react";
import { playingBoard } from "../../playingGame";

export const usePlayBoard = (player, resetPlayer) => {
  const [playBoard, setPlayBoard] = useState(playingBoard());
  const [attack, setAttack] = useState(0);

  // 클래스의 라이프 사이클 메소드를 대체하는 useEffect 사용
  useEffect(() => {
    setAttack(0);

    const attackBomb = (newBoard) =>
      newBoard.reduce((total, row) => {
        // arr.findIndex(callback
        // 행(row)에 0이 포함되어 있는지 체크
        if (row.findIndex((micro) => micro[0] === 0) === -1) {
          setAttack((preview) => preview + 1);
          // 새로운 행(row)을 추가
          total.unshift(new Array(newBoard[0].length).fill([0, "fix"]));
          return total;
        }
        total.push(row);
        return total;
      }, []);

    // 게임 보드의 상태 업데이트 준비 단계(업데이트 속성값 지정)
    const boardUpdateStep = (beforeBoard) => {
      const newBoard = beforeBoard.map((row) =>
        // 다차원 배열이기 때문에 Row행 을 매핑하고 하고
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
              // 충돌을 하면 병합시키고, 아니면 fix
              `${player.bumped ? "merge" : "fix"}`,
            ];
          }
        });
      });
      // 최종 업데이트 위치에서 충돌 체크
      if (player.bumped) {
        resetPlayer();
        return attackBomb(newBoard);
      }
      return newBoard;
    };

    // 상태 업데이트
    setPlayBoard((preview) => boardUpdateStep(preview));
  }, [player, resetPlayer]);

  return [playBoard, setPlayBoard, attack];
};
