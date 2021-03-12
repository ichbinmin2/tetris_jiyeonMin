import React from "react";
import styles from "./playBoard.module.css";
import MicroBox from "../microBox/microBox";

const PlayBoard = ({ playBoard, color }) => {
  return (
    <div className={styles.playBoard}>
      {playBoard.map((row) =>
        row.map((micro, x) => (
          <MicroBox key={x} type={micro[0]} color={color} />
        ))
      )}
    </div>
  );
};

export default PlayBoard;
