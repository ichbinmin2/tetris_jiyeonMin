import React from "react";
import styles from "./display.module.css";

const Display = ({ gameOver, text }) => {
  return (
    <div className={styles.display}>
      {gameOver ? (
        <div className={`${styles.displayBox} ${styles.gameOverBox}`}>
          <span className={`${styles.span} ${styles.gameOver}`}>{text}</span>
        </div>
      ) : (
        <div className={styles.displayBox}>
          <span className={styles.span}>{text}</span>
        </div>
      )}
    </div>
  );
};

export default Display;
