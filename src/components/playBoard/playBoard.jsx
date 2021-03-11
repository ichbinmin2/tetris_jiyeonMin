import React from "react";
import styles from "./playBoard.module.css";
import MicroBox from "../microBox/microBox";

//  props로 가로(행)를 받았다.
const PlayBoard = ({ playBoard, color }) => {
  return (
    <div className={styles.playBoard}>
      {playBoard.map((row) =>
        row.map((micro, x) => (
          // <MicroBox key={x} type={micro[0]} />
          <MicroBox key={x} type={micro[0]} color={color} />
        ))
      )}
    </div>
  );
};

export default PlayBoard;
