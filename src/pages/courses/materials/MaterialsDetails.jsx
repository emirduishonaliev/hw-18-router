import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../../components/Button";
import { NavBar } from "../../../components/NavBar";

export const MaterialsDetails = () => {
  const param = useParams();
  return (
    <>
      <DetailBox>
        <Link to="/courses/materials">
          <Button>Go Back</Button>
        </Link>
        <Title>Material Details Page</Title>
        <p>Material {param.id}</p>
      </DetailBox>
      <NavBarContainer>
        <NavBar nav={true} id={param.id} />
      </NavBarContainer>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </>
  );
};

const DetailBox = styled.div`
  padding: 10px 20px 50px 20px;
  background-color: #fff;
`;

const Title = styled.p`
  margin-top: 20px;
`;

const NavBarContainer = styled.div`
  background-color: #19ae9f;
  padding: 10px 5px;
`;

const OutletWrapper = styled.div`
  height: 50%;
  background-color: #d0efec;
  padding: 30px;
`;
