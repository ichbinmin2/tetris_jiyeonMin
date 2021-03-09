import React from "react";
import styles from "./microBox.module.css";

const MicroBox = ({ type }) => (
  <div
    type={type}
    className={`${styles.container} type === 0 ? ${styles.none} : ${styles.line}`}
  >
    box
  </div>
);

export default MicroBox;
