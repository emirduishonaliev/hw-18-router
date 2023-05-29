import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { NavBar } from "../../components/NavBar";

export const Courses = () => {
  return (
    <CoursesContainer>
      <CoursesHeader>
        <NavBar />
      </CoursesHeader>
      <div>
        <Outlet />
      </div>
    </CoursesContainer>
  );
};

const CoursesContainer = styled.div`
  width: 83vw;
  display: flex;
  flex-direction: column;
`;

const CoursesHeader = styled.div`
  background-color: #2c88d9;
  padding: 30px 20px;
  /* display: flex;
  flex-direction: row; */
`;
