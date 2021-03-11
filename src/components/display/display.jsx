import React, { useState } from "react";
import styles from "./display.module.css";

const Display = ({ gameOver, text }) => {
  return (
    <section>
      <div className={styles.displayBox}>
        {/* {!gameOver ? <span>{score}</span> : <span>Game Over</span>} */}
        <div gameOver={gameOver} className={styles.text}>
          {text}
        </div>
        <div className={styles.socreCount}>스코어</div>
      </div>
    </section>
  );
};

export default Display;
