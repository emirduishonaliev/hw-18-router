import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

export const Modal = ({ children, onClose }) => {
  return (
    <ModalBox>
      <ModalContent>
        <div>{children}</div>
        <BtnBox>
          <Button onClick={onClose}>Close modal </Button>
        </BtnBox>
      </ModalContent>
    </ModalBox>
  );
};

const ModalBox = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  background-color: #f5dade;
  margin: 10% auto;
  padding: 40px 50px;
  border: 1px solid #888;
  width: 60%;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: end;
`;
