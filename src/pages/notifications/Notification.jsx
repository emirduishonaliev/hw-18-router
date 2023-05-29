import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

export const Notification = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Notifications Page</Title>
        <Link to={'/courses/materials'}>
          <Button>Go to Materails Page</Button>
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
