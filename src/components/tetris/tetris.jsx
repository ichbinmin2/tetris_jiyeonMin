import React, { useState } from "react";
import styles from "./tetris.module.css";
import Display from "../display/display";
import PlayBoard from "../playBoard/playBoard";
import StartButton from "../startButton/startButton";
import { usePlayer } from "../hooks/usePlayer";
import { usePlayBoard } from "../hooks/usePlayBoard";

const Tetris = (props) => {
  const [gameOver, setGameOver] = useState(false);
  const [fallTime, setFallTime] = useState(null);
  const [player] = usePlayer();
  const [playBoard, setPlayBoard] = usePlayBoard(player);

  console.log("리렌더링");
  return (
    <section className={styles.warp}>
      <div className={styles.container}>
        <h1>Teta's Tetris Game!</h1>
        <div className={styles.boxContainer}>
          <PlayBoard board={playBoard} />
          <div className={styles.displayBox}>
            <Display text="score" />
            <StartButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tetris;
