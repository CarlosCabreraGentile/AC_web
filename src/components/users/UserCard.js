import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { useNavigate, useParams } from "react-router-dom";
import UserDetails from "./UserDetails";
import { Link } from "react-router-dom";
import { ListGroup, Container, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";

const UserCard = (props) => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const { deleteUser } = useContext(GlobalContext);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    setUser(props?.user);
  }, [props?.user]);

  const handleDetails = () => {
    // alert("You clicked the third ListGroupItem");
    setShowDetails(!showDetails);
  };

  const handleDelete = async (id) => {
    deleteUser(id);
  };

  const handleUpdate = async (id) => {
    // updateUser(id);
    navigate(`/add/${user._id}`);
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <StyledRow>
              <ListGroup.Item action onClick={handleDetails}>
                {`${user?.firstName} `}
                {`${user?.lastName} `}
                {`${user?.email}`}
                {`${user?._id}`}
              </ListGroup.Item>
              {/* <Link to={`/edit/${user._id}`}>
              Edit
            </Link> */}
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
      {showDetails ? <UserDetails /> : null}
    </>
  );
};

export default UserCard;

const StyledRow = styled.div`
  display: flex;
  padding: 6px;
  justify-content: space-between;
  // flex-direction: column;
`;
