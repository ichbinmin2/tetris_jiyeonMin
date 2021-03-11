import React, { useState } from "react";
import styles from "./display.module.css";

const Display = ({ gameOver, text }) => {
  return (
    <section>
      <div className={styles.displayBox}>
        <div className={styles.text}>
          {gameOver ? <span>Game Over</span> : <span>{text}</span>}
        </div>
      </div>
    </section>
  );
};

export default Display;
