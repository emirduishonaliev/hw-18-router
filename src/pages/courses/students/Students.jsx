import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../components/Button";
import styled from "styled-components";

export const Students = () => {
  return (
    <StudentsList>
      <Item>
        <p>Student 1</p>
        <Link to="/courses/students/1/details">
          <Button>Details</Button>
        </Link>
      </Item>
      <Item>
        <p>Student 2</p>
        <Link to="/courses/students/2/details">
          <Button>Details</Button>
        </Link>
      </Item>
    </StudentsList>
  );
};

const StudentsList = styled.ul`
  list-style: none;
`;

const Item = styled.li`
  margin: 15px 0;
  padding: 10px;
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  width: 900px;
  border: 1px solid black;
  margin-left: 150px;
`;
