import React from "react";
import styles from "./tetris.module.css";
//

import Display from "../display/display";
import PlayBoard from "../playBoard/playBoard";
import StartButton from "../startButton/startButton";

import { playingBoard } from "../../playingGame";

const Tetris = (props) => {
  return (
    <section className={styles.warp}>
      <div className={styles.container}>
        <h1>Teta's Tetris Game!</h1>
        <div className={styles.boxContainer}>
          <PlayBoard board={playingBoard()} />
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
