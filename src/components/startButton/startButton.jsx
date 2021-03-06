import React from "react";
import styles from "./startButton.module.css";

const StartButton = ({ callback }) => {
  return (
    <section className={styles.btnBox}>
      <button className={styles.btn} onClick={callback}>
        GAME START!
      </button>
    </section>
  );
};

export default StartButton;
