import { useEffect, useState } from "react";
import { playingBoard } from "../../playingGame";

export const usePlayBoard = (player, resetPlayer) => {
  const [playBoard, setPlayBoard] = useState(playingBoard());
  const [attack, setAttack] = useState(0);

  useEffect(() => {
    setAttack(0);

    const attackBomb = (newBoard) =>
      newBoard.reduce((total, row) => {
        if (row.findIndex((micro) => micro[0] === 0) === -1) {
          setAttack((preview) => preview + 1);
          total.unshift(new Array(newBoard[0].length).fill([0, "fix"]));
          return total;
        }
        total.push(row);
        return total;
      }, []);

    const boardUpdateStep = (beforeBoard) => {
      const newBoard = beforeBoard.map((row) =>
        row.map((micro) => (micro[1] === "fix" ? [0, "fix"] : micro))
      );

      player.blockType.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newBoard[y + player.position.y][x + player.position.x] = [
              value,
              `${player.bumped ? "merge" : "fix"}`,
            ];
          }
        });
      });

      if (player.bumped) {
        resetPlayer();
        return attackBomb(newBoard);
      }
      return newBoard;
    };

    setPlayBoard((preview) => boardUpdateStep(preview));
  }, [
    player.bumped,
    player.position.y,
    player.position.x,
    player.blockType,
    resetPlayer,
  ]);

  return [playBoard, setPlayBoard, attack];
};
