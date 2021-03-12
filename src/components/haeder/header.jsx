import React from "react";
import styles from "./header.module.css";

const Header = () => (
  <div className={styles.title}>
    <span className={styles.span}>"Tetris</span>
    <span className={styles.span}>Game"</span>
  </div>
);

export default Header;
