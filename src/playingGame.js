export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 20;

export const playingBoard = () =>
  // 다차원 배열(그리드) 만들기
  // 1. 빈 배열안에서 board 높이 값(열)만큼의 배열을 만들고
  Array.from(Array(BOARD_HEIGHT), () =>
    // 2. 인라인 함수를 사용하여 새로운 배열 안에 다시 board 넓이 값(각 행(가로))만큼을 만들어서
    // [0, "empty"] 로 초기값을 설정해주었다.
    new Array(BOARD_WIDTH).fill([0, "fix"])
  );
