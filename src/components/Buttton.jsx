import styled from "styled-components";

export const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 16px;
  padding: 10px 18px;
  width: 220px;
  height: 44px;
  border: 2px solid transparent;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    border: 2px solid black;
    color: black;
  }
`;
export const TransparentBtn = styled(Button)`
  background-color: white;
  color: black;
  border: 2px solid black;
  &:hover {
    background-color: black;
    border: 2px solid transparent;
    color: white;
  }
`;
