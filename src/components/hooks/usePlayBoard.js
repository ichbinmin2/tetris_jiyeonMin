import { useState } from "react";
import { playingBoard } from "../../playingGame";

export const usePlayBoard = (props) => {
  // 플레잉 보드의 초기값 설정
  const [playBoard, setPlayBoard] = useState(playingBoard());

  return [playBoard, setPlayBoard];
};
