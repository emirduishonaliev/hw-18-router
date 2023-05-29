import React from "react";
import styled from "styled-components";

export const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  background-color: #19ae9f;
  border-radius: 20px;
  padding: 10px 50px;
  border: none;
  color: white;
  cursor: pointer;
`;
