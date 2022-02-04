import React, { useState, useEffect } from "react";
import { ListGroup, Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import axios from "axios";
// import { Card } from "antd";

const UserCard = (props) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    setUser(props?.user);
  }, [props?.user]);

  function alertClicked() {
    alert('You clicked the third ListGroupItem');
  }

  return (
    // <Card style={{ width: 300 }}>
    //   <p>Card content</p>
    //   <p>{user?.firstName}</p>
    //   <p>{user?.lastName}</p>
    //   <p>{user?.email}</p>
    // </Card>
    <Container>
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
    <ListGroup.Item action onClick={alertClicked}>
      {/* <a
        style={{ width: 300 }}
        href="#!"
        className="list-group-item list-group-item-action d-flex flex-column justify-content-center"
      > */}
        {/* Card content */}
        {`${user?.firstName}`}
        {`${user?.lastName}`}
        {`${user?.email}`}
      {/* </a> */}
    </ListGroup.Item>
    </Col>
      </Row>
    </Container>
  );
};

export default UserCard;
