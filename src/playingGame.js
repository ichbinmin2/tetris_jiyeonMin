export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 20;

export const playingBoard = () =>
  // 다차원 배열(그리드를 위한) 만들기
  // 1. 빈 배열안에서 board 높이 값(열)만큼의 배열을 만들고
  Array.from(Array(BOARD_HEIGHT), () =>
    // 2. 인라인 함수를 사용하여 새로운 배열 안에 다시 board 넓이 값(각 행(가로))만큼을 만들어서
    // [0, "empty"] 로 초기값을 설정해주었다.
    new Array(BOARD_WIDTH).fill([0, "fix"])
  );

export const checkBumped = (player, playBoard, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.blockType.length; y += 1) {
    for (let x = 0; x < player.blockType[y].length; x += 1) {
      if (player.blockType[y][x] !== 0) {
        if (
          // 1. 높이 안에서 움직이고 있는지 체크 (바닥 통과도 체크)
          !playBoard[y + player.position.y + moveY] ||
          // 2. 너비안에서 움직이고 있는지 체크
          !playBoard[y + player.position.y + moveY][
            x + player.position.x + moveX
          ] ||
          // 3. 움직이는 블럭이 'fix'인지 아닌지(스테이지 안인지) 체크
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
