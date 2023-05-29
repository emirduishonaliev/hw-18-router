import React from "react";
import { NavLink } from "react-router-dom";
import { activeLinkSideBar } from "../helpers/helpers";
import styled from "styled-components";

export const SideBar = () => {
  return (
    <SideBarContainer>
      <Logo>Logo</Logo>
      <NavList>
        <li>
          <NavLink style={activeLinkSideBar} to="/courses">
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink style={activeLinkSideBar} to="/anouncements">
            Anouncements
          </NavLink>
        </li>
        <li>
          <NavLink style={activeLinkSideBar} to="/notifications">
            Notifications
          </NavLink>
        </li>
        <li>
          <NavLink style={activeLinkSideBar} to="/schedule">
            Schedule
          </NavLink>
        </li>
      </NavList>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.aside`
  width: 17vw;
  background-color: #e6e4de;
`;

const Logo = styled.h2`
  padding: 40px;
  color: #822dc6;
  height: 20%;
`;

const NavList = styled.ul`
  margin-top: 50px;
  list-style: none;
  a {
    font-size: 20px;
    display: block;
    padding: 5px 20px;
    text-decoration: none;
  }
`;
