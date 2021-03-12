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

  const handlerMovePlayer = (dir) => {
    if (!checkBumped(player, playBoard, { x: dir, y: 0 })) {
      playerUpdatePostion({ x: dir, y: 0 });
    }
  };

  const onStartGame = () => {
    setPlayBoard(playingBoard());
    setFallTime(1000);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setAttackBlock(0);
    setLevel(0);
  };

  const onFallingBlock = () => {
    if (attackBlock > (level + 1) * 10) {
      setLevel((preview) => preview + 1);
      setFallTime(1000 / (level + 1) + 200);
    }

    if (!checkBumped(player, playBoard, { x: 0, y: 1 })) {
      playerUpdatePostion({ x: 0, y: 1, bumped: false });
    } else {
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

  const handlerFalling = () => {
    setFallTime(null);
    onFallingBlock();
  };

  const onKeyboardMove = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        handlerMovePlayer(-1);
      } else if (keyCode === 39) {
        handlerMovePlayer(1);
      } else if (keyCode === 40) {
        handlerFalling();
      }
    }
  };

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
