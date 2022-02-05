import React, { useState, useEffect, useContext } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UserCard from "./UserCard";
import axios from "axios";
import { GlobalContext } from "../../context/GlobalState";

const UsersList = () => {
  const { users, deleteUser, toggleUserDone, getUsers, getUser } = useContext(GlobalContext);
  // const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUsers();
    // getUser();
  }, []);

  return (
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
      ;
    </StyledList>
  );
};

export default UsersList;

const StyledList = styled.div`
  padding-top: 50px;
`;
