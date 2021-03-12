export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 20;

export const playingBoard = () =>
  Array.from(Array(BOARD_HEIGHT), () =>
    new Array(BOARD_WIDTH).fill([0, "fix"])
  );

export const checkBumped = (player, playBoard, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.blockType.length; y += 1) {
    for (let x = 0; x < player.blockType[y].length; x += 1) {
      if (player.blockType[y][x] !== 0) {
        if (
          !playBoard[y + player.position.y + moveY] ||
          !playBoard[y + player.position.y + moveY][
            x + player.position.x + moveX
          ] ||
          playBoard[y + player.position.y + moveY][
            x + player.position.x + moveX
          ][1] !== "fix"
        ) {
          return true;
        }
      }
    }
  }
};
