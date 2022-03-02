import React, { useState, useEffect, useContext, useMemo } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UserCard from "./UserCard";
import axios from "axios";
import { GlobalContext } from "../../context/GlobalState";
// import Pagination from "../Pagination";
import Hola from  "../Hola";

// let PageSize = 10;
// let users = [{firstName: "a", lastName: "a", email: "a", salary: 123}];

const UsersList = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  const { users, deleteUser, toggleUserDone, getUsers, getUser } = useContext(GlobalContext);
  // const [userList, setUserList] = useState([]);
  // console.log("users", users)

  // const currentTableData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * PageSize;
  //   const lastPageIndex = firstPageIndex + PageSize;
  //   return users.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage]);

  useEffect(() => {
    getUsers();
    // getUser();
  }, []);

  return (
    <>
      <StyledList>
        {users && users.length > 0 ? (
          users.map((user) => {
            return (
              <ListGroup key={user?._id}>
                <UserCard key={user?._id} user={user} />
              </ListGroup>
            );
          })
        ) : (
          <div>No users</div>
        )}
      </StyledList>
    </>
  );
};

export default UsersList;

const StyledList = styled.div`
  padding-top: 50px;
`;
