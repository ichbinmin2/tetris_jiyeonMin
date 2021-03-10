import React, { useState } from "react";
import styles from "./display.module.css";

const Display = ({ text }) => {
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <section>
      <div className={styles.displayBox}>
        {/* {!gameOver ? <span>{score}</span> : <span>Game Over</span>} */}
        <div className={styles.text}>{text}</div>
        <div className={styles.socreCount}>{score}</div>
      </div>
    </section>
  );
};

export default Display;
