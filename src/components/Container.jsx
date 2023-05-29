import React from "react";
import styled from "styled-components";

export const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e3e8ec;
  padding: 20px 30px;
`;
