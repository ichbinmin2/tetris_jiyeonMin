import React from "react";
import styles from "./startButton.module.css";

const StartButton = ({ start }) => {
  return (
    <section className={styles.btnBox}>
      <button className={styles.btn}>start button</button>
    </section>
  );
};

export default StartButton;
