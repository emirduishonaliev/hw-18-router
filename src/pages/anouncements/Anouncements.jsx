import React from "react";
import { Container } from "../../components/Container";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import styled from "styled-components";

export const Anouncements = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Anouncement Page</Title>
        <Link to="/courses/students">
          <Button>Go to Student Page</Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  height: 100%;
  background-color: #fff;
  padding: 30px 20px;
`;

const Title = styled.h2`
  font-weight: normal;
  margin-bottom: 50px;
`;
