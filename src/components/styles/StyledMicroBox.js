import styled from "styled-components";

export const StyledMicroBox = styled.div`
  box-sizing: border-box;
  width: auto;
  background-color: ${(props) =>
    props.type === 0 ? "none" : `rgba(${props.color})`};
  border: ${(props) => (props.type === 0 ? "0px solid" : "2px solid")};
  border-bottom-color: rgba(${(props) => props.color}, 0.1);
  border-right-color: rgba(${(props) => props.color}, 1);
  border-top-color: rgba(${(props) => props.color}, 1);
  border-left-color: rgba(${(props) => props.color}, 0.3);
`;
