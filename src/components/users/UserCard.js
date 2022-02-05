import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Link } from "react-router-dom";
import { ListGroup, Container, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";

const UserCard = (props) => {
  const [user, setUser] = useState([]);
  const {
    users,
    deleteUser,
    toggleUserDone,
    getUsers,
    getUser,
    addUser,
    updateUser,
  } = useContext(GlobalContext);

  useEffect(() => {
    setUser(props?.user);
  }, [props?.user]);

  function alertClicked() {
    alert("You clicked the third ListGroupItem");
  }

  const handleDelete = async (id) => {
    deleteUser(id);
  };

  const handleUpdate = async (id) => {
    updateUser(id);
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <StyledRow>
            <ListGroup.Item action onClick={alertClicked}>
              {`${user?.firstName}`}
              {`${user?.lastName}`}
              {`${user?.email}`}
            </ListGroup.Item>
            <Link to={`/edit/${user._id}`}>
              Edit
            </Link>
              <Button variant="primary" onClick={() => handleUpdate(user._id)}>
                Edit
              </Button>
            <Button variant="danger" onClick={() => handleDelete(user._id)}>
              Delete
            </Button>
          </StyledRow>
        </Col>
      </Row>
    </Container>
  );
};

export default UserCard;

const StyledRow = styled.div`
  display: flex;
  padding: 6px;
  // flex-direction: column;
`;
