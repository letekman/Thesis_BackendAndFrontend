import styled from "styled-components";
import { buttonColor } from "./configuration";

export const CenterWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 3%;
`;

export const HorizontalWrapper = styled(CenterWrapper)`
    padding: 0px;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    padding-bottom: 100px;
`;


export const Button = styled.button`
display:inline-block;
  background-color:${buttonColor};
  padding:0.3em 1.2em;
  margin: 15px;
  border:0.16em solid rgba(255,255,255,0);
  border-radius:2em;
  box-sizing: border-box;
  text-decoration:none;
  font-family: Helvetica, sans-serif;
  font: 5vmin;
  text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
  text-align:center;
  transition: all 0.2s;
  color: #212121;

  &:active {
      box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
      transform: translateY(4px);
   
  }

  &:hover {
      border-color: rgba(255,255,255,1);
  }

  &:disabled {
      border:0.16em solid rgba(255,255,255,0);
      background-color: rgba(241, 78, 78, 0.2);
  }`;