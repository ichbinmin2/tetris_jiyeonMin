import { useCallback, useState } from "react";
import { randomColorfulBlock, BLOCKS } from "../../block";
import { BOARD_WIDTH } from "../../playingGame";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    position: { x: 0, y: 0 },
    blockType: BLOCKS[0].shape,
    color: randomColorfulBlock(),
    bumped: false,
  });

  const playerUpdatePostion = ({ x, y, bumped }) => {
    setPlayer((preview) => ({
      ...preview,
      position: {
        x: (preview.position.x = preview.position.x + x),
        y: (preview.position.y = preview.position.y + y),
      },
      bumped,
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      position: { x: BOARD_WIDTH / 2 - 1, y: 0 },
      blockType: BLOCKS.block.shape,
      color: randomColorfulBlock(),
      bumped: false,
    });
  }, []);

  return [player, playerUpdatePostion, resetPlayer];
};
