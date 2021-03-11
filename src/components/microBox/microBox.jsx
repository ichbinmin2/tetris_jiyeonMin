import React from "react";
import { StyledMicroBox } from "../styles/StyledMicroBox";

const MicroBox = ({ type, color }) => {
  // return <StyledMicroBox type={type} color={BLOCKS[type].color} />;
  return <StyledMicroBox type={type} color={color}></StyledMicroBox>;
};

export default React.memo(MicroBox);
