import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

export const Schedule = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Schedule Page</Title>
        <Link to={'/notifications'}>
          <Button>Go to Notifications Page</Button>
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
