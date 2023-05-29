import React from "react";
import { NavLink } from "react-router-dom";
import { activeLink } from "../helpers/helpers";
import styled from "styled-components";

export const NavBar = ({ nav, id }) => {
  const firstPath = nav
    ? `/courses/materials/${id}/details/submitted`
    : "/courses/materials";
  const secondPath = nav
    ? `/courses/materials/${id}/details/waiting`
    : "/courses/students";
  const thirdPath = nav
    ? `/courses/materials/${id}/details/late`
    : "/courses/ratings";

  return (
    <NavList>
      <Li>
        <div>
          <NavLink to={firstPath} style={activeLink}>
            {nav ? "Submitted" : "Material"}
          </NavLink>
        </div>
        <div>
          <NavLink to={secondPath} style={activeLink}>
            {nav ? "Waiting" : "Students"}
          </NavLink>
        </div>
        <div>
          <NavLink to={thirdPath} style={activeLink}>
            {nav ? "Late" : "Ratings"}
          </NavLink>
        </div>
      </Li>
    </NavList>
  );
};

const NavList = styled.ul`
  width: 40%;
  display: flex;
  justify-content: space-around;
  list-style: none;
  a {
    text-decoration: none;
    font-size: 25px;
    font-weight: bold;
  }
`;

const Li = styled.li`
  margin-left: 600px;
  display: flex;
  gap: 400px;
`;
