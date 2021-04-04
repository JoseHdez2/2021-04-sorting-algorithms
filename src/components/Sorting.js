import styled from "styled-components";

export const ErrorDiv = styled.div`
  background: red;
  color: white;
  border: 1px solid darkred;
`;

export const BarContainer = styled.div`
  background: lightyellow;
  padding: 1rem;
  position: relative;
  height: 60vh;
  /* display: grid;
  grid-auto-columns: 2; */
`;

export const Bar = styled.div`
  color: white;
  background: ${(props) => props.color || "darkgray"};
  border: 1px solid black;
  width: ${(props) => props.width}px;
  height: ${(props) => (props.value / props.max) * 100}%;
  position: absolute;
  top: 0px;
  left: ${(props) => props.pos * props.width}px;
`;

export const LogDiv = styled.div`
  background: cyan;
`;
