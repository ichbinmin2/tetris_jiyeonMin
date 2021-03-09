import React from "react";
import styles from "./playBoard.module.css";

import MicroBox from "../microBox/microBox";

//  props로 가로(행)를 받았다.
const PlayBoard = ({ board }) => {
  return (
    <div className={styles.playBoard}>
      {board.map((row) =>
        row.map((micro, x) => <MicroBox key={x} type={micro[0]} />)
      )}
    </div>
  );
};

export default PlayBoard;
