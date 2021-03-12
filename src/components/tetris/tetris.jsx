import React, { useRef, useState } from "react";
import styles from "./tetris.module.css";
import Header from "../haeder/header";
import Display from "../display/display";
import PlayBoard from "../playBoard/playBoard";
import StartButton from "../startButton/startButton";
import { playingBoard, checkBumped } from "../../playingGame";

import { useInterval } from "../hooks/useInterval";
import { usePlayer } from "../hooks/usePlayer";
import { usePlayBoard } from "../hooks/usePlayBoard";
import { usePlayGame } from "../hooks/usePlayGame";
import { useResize } from "../hooks/useResize";

const Tetris = () => {
  const [fallTime, setFallTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [player, playerUpdatePostion, resetPlayer] = usePlayer();
  const [playBoard, setPlayBoard, attack] = usePlayBoard(player, resetPlayer);
  const [
    score,
    setScore,
    attackBlock,
    setAttackBlock,
    level,
    setLevel,
  ] = usePlayGame(attack);
  const myRef = useRef();
  const { WIDTH } = useResize(myRef);

  // 플레이어(블럭) 핸들러
  const handlerMovePlayer = (dir) => {
    // 충돌이 되지 않으면 플레이어(블록)의 위치와 상태값을 받아서
    if (!checkBumped(player, playBoard, { x: dir, y: 0 })) {
      // 플레이어(블록)의 위치의 상태값을 업데이트하여 지정
      playerUpdatePostion({ x: dir, y: 0 });
    }
  };

  // 게임 Start 처리
  const onStartGame = () => {
    // playingBoard를 초기화시킴
    setPlayBoard(playingBoard());
    // 떨어지는 시간 설정
    setFallTime(1000);
    // player 상태를 초기화시킴
    resetPlayer();
    // 게임오버
    setGameOver(false);
    setScore(0);
    setAttackBlock(0);
    setLevel(0);
  };

  // 플레이어(블록)의 떨어지는 움직임 감지
  const onFallingBlock = () => {
    // 레벨 올리기!
    if (attackBlock > (level + 1) * 10) {
      setLevel((preview) => preview + 1);
      setFallTime(1000 / (level + 1) + 200);
    }

    // 충돌이 되지 않으면 플레이어(블록)의 위치와 상태값을 받아서
    if (!checkBumped(player, playBoard, { x: 0, y: 1 })) {
      // 플레이어(블록)의 위치의 상태값을 업데이트하여 지정
      playerUpdatePostion({ x: 0, y: 1, bumped: false });
    } else {
      // 게임오버
      if (player.position.y < 1) {
        setGameOver(true);
        setFallTime(null);
      }
      playerUpdatePostion({ x: 0, y: 0, bumped: true });
    }
  };

  const onKeyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40) {
        setFallTime(1000);
      }
    }
  };
  // 플레이어의 의도대로 블록이 떨어지도록 하는 기능 처리
  const handlerFalling = () => {
    setFallTime(null);
    onFallingBlock();
  };

  // 플레이어의 키보드 화살표 움직임 감지
  const onKeyboardMove = ({ keyCode }) => {
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
  const onMouseMove = (event) => {
    const mousePointer = event.clientX;
    const currentPoint = WIDTH - mousePointer;

    if (!gameOver) {
      if (mousePointer < currentPoint) {
        handlerMovePlayer(-1);
      } else {
        handlerMovePlayer(1);
      }
    }
  };

  useInterval(() => {
    onFallingBlock();
  }, fallTime);

  return (
    <section
      className={styles.warp}
      role="button"
      tabIndex="0"
      onKeyDown={(event) => onKeyboardMove(event)}
      onKeyUp={onKeyUp}
      onMouseMove={(event) => onMouseMove(event)}
      ref={myRef}
    >
      <div className={styles.container}>
        <Header />
        <div className={styles.boxContainer}>
          <PlayBoard playBoard={playBoard} color={player.color} />

          <div className={styles.displayBox}>
            {gameOver ? (
              <div className={styles.display}>
                <Display gameOver={gameOver} text="GAME OVER" />
              </div>
            ) : (
              <div className={styles.display}>
                <Display text={`SCORE : ${score}`} />
                <Display text={`ATTACK : ${attackBlock}`} />
                <Display text={`LEVEL : ${level}`} />
              </div>
            )}
            <StartButton callback={onStartGame} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tetris;
