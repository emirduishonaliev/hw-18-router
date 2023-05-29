import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../../components/Button";
import styled from "styled-components";

export const StudentDetail = () => {
  const param = useParams();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
      <Title>Student Details Page</Title>
      <p>Student Name {param.id}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  background-color: #fff;
  padding: 30px 20px;
  border: 1px solid black;
  width: 800px;
  margin-left: 200px;
  margin-top: 40px;
`;

const Title = styled.p`
  margin: 20px 0;
`;
