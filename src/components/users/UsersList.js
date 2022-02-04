import React, { useState, useEffect, useContext } from "react";
import { ListGroup } from "react-bootstrap";
import UserCard from "./UserCard";
import axios from "axios";
import { GlobalContext } from "../../context/GlobalState";
import { Link } from "react-router-dom";

const UsersList = () => {
  const { users, deleteUser, toggleUserDone, getUsers, getUser } =
    useContext(GlobalContext);
  // const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUsers();
    // getUser();
  }, []);

  //   <ListGroup defaultActiveKey="#link1">
  //   <ListGroup.Item action href="#link1">
  //     Link 1
  //   </ListGroup.Item>
  //   <ListGroup.Item action href="#link2" disabled>
  //     Link 2
  //   </ListGroup.Item>
  //   <ListGroup.Item action onClick={alertClicked}>
  //     This one is a button
  //   </ListGroup.Item>
  // </ListGroup>

  return users && users.length > 0 ? (
    users.map((user) => {
      return (
        <ListGroup>
          <UserCard key={user?._id} user={user} />
        </ListGroup>
      );
    })
  ) : (
    <div>No users</div>
  );
};

export default UsersList;
