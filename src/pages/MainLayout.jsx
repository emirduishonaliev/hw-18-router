import React from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "../components/SideBar";
import styled from "styled-components";

export const MainLayout = () => {
  return (
    <Container>
      <SideBar />
      <Outlet />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
`;
