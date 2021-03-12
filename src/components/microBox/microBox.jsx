import React from "react";
import { StyledMicroBox } from "../styles/StyledMicroBox";

const MicroBox = ({ type, color }) => {
  return <StyledMicroBox type={type} color={color} />;
};

export default React.memo(MicroBox);
