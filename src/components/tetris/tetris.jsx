import React, { useState } from "react";
import styles from "./tetris.module.css";
import Display from "../display/display";
import PlayBoard from "../playBoard/playBoard";
import StartButton from "../startButton/startButton";
import { playingBoard } from "../../playingGame";
import { usePlayer } from "../hooks/usePlayer";
import { usePlayBoard } from "../hooks/usePlayBoard";

const Tetris = (props) => {
  const [gameOver, setGameOver] = useState(false);
  // const [fallTime, setFallTime] = useState(null);
  const [player, playerUpdatePostion, resetPlayer] = usePlayer();
  const [playBoard, setPlayBoard] = usePlayBoard(player);

  console.log("리렌더링");

  // 플레이어(블럭) 핸들러
  const handlerMovePlayer = (dir) => {
    // 플레이어(블록)의 위치의 상태값을 업데이트하여 지정
    playerUpdatePostion({ x: dir, y: 0 });
  };

  // 게임 Start 처리
  const onStartGame = () => {
    console.log("스타트게임");
    // playingBoard를 초기화시킴
    setPlayBoard(playingBoard());
    // player 상태를 초기화시킴
    resetPlayer();
    // setGameOver(false);
  };

  // 플레이어(블록)의 떨어지는 움직임 감지
  const onFallingBlock = () => {
    // 플레이어(블록)의 위치의 상태값을 업데이트하여 지정
    playerUpdatePostion({ x: 0, y: 1, bumped: false });
  };

  // 플레이어의 의도대로 블록이 떨어지도록 하는 기능 처리
  const handlerFalling = () => {
    onFallingBlock();
  };

  // 플레이어의 키보드 화살표 움직임 감지
  const onKeyboardMove = ({ keyCode }) => {
    console.log({ keyCode });
    if (!gameOver) {
      // 아래 화살표 키코드 감지
      if (keyCode === 37) {
        // 플레이어(블록)를 왼쪽으로 이동
        handlerMovePlayer(-1);
      }
      // 오른쪽 화살표 키코드 감지
      else if (keyCode === 39) {
        // 플레이어(블록)를 오른쪽으로 이동
        handlerMovePlayer(1);
      }
      // 왼쪽 화살표 키코드 감지
      else if (keyCode === 40) {
        // 플레이어(블록)를 아래로 떨어지도록 함
        handlerFalling();
      }
    }
  };

  // 플레이어의 마우스(좌우) 움직임 감지
  const onMouseMove = () => {};

  return (
    <section
      className={styles.warp}
      role="button"
      tabIndex="0"
      onKeyDown={(event) => onKeyboardMove(event)}
    >
      <div className={styles.container}>
        <h1>Teta's Tetris Game!</h1>
        <div className={styles.boxContainer}>
          <PlayBoard playBoard={playBoard} color={player.color} />
          <div className={styles.displayBox}>
            {gameOver ? (
              <Display gameOver={gameOver} text="Game Over" />
            ) : (
              <Display text="score" />
            )}
            <StartButton callback={onStartGame} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tetris;
