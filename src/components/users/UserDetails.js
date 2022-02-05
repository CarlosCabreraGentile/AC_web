import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ListGroup, Container, Row, Card, Button } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";

const UserDetails = (props) => {
  return (
    <Container>
      <Row>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default UserDetails;

const StyledRow = styled.div`
  display: flex;
  padding: 6px;
  justify-content: space-between;
  // flex-direction: column;
`;
