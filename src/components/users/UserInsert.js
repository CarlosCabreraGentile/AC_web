import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { GlobalContext } from "../../context/GlobalState";

const UserInsert = () => {
  const { users, deleteUser, toggleUserDone, getUsers, getUser, addUser } = useContext(GlobalContext);
  const navigate = useNavigate();
  const params = useParams();
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");

  const onFinish = async (e) => {
    e.preventDefault();
    const values = { firstName, lastName, email, salary };
    addUser(values);
    navigate("/");
  };

  return (
    <StyledUserContainer>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Body>
                <Form id="userForm" onSubmit={onFinish}>
                  <Row className="mb-3">
                    <Form.Group controlId="formFirstName">
                      <Form.Label>Firstname</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter firstname"
                        value={firstName}
                        onChange={(e) => setFirstname(e.target.value)}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group controlId="formLastName">
                      <Form.Label>Lastname</Form.Label>
                      <Form.Control
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastname(e.target.value)}
                        placeholder="Lastname"
                      />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group controlId="formSalary">
                      <Form.Label>Salary</Form.Label>
                      <Form.Control
                        type="number"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        placeholder="Enter Salary"
                      />
                    </Form.Group>
                  </Row>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </StyledUserContainer>
  );
};

const StyledUserContainer = styled.div`
  padding-top: 50px;
`;

// const FormContainer = styled.div`
//   //   display: flex;
//   //   // flex-di: wrap;
// `;

// const StyledForm = styled(Form)`
//   //   display: flex;
//   //   justify-content: flex-start;
//   //   flex-direction: column;
// `;

// const StyledInputs = styled.div`
//   // display: flex;
//   // flex-direction: column;
//   // justify-content: flex-start;
// `;

export default UserInsert;
