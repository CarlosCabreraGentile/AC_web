import React from "react";
// import { Form, Input, InputNumber } from "antd";
import styled from "styled-components";
import axios from "axios";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

// const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };

// const validateMessages = {
//   required: "${label} is required!",
//   types: {
//     email: "${label} is not a valid email!",
//     number: "${label} is not a valid number!",
//   },
//   number: {
//     range: "${label} must be between ${min} and ${max}",
//   },
// };

const UserInsert = () => {
  //   const onFinish = async (values) => {
  //     console.log(values);
  //     await axios
  //       .post("http://localhost:3001/user/", values)
  //       .then((response) => {
  //         console.log("EXITO", response);
  //       })
  //       .catch((response) => {
  //         console.log("ERROR", response);
  //       });
  //   };

  return (
    // <FormContainer>
    //   <Card title="User Information" style={{ width: 500 }}>
    //     <StyledForm
    //       {...layout}
    //       name="nest-messages"
    //       onFinish={onFinish}
    //       validateMessages={validateMessages}
    //     >
    //       <StyledInputs>
    //         <Form.Item
    //           name={["firstName"]}
    //           label="Name"
    //           rules={[
    //             {
    //               required: true,
    //             },
    //           ]}
    //         >
    //           <Input />
    //         </Form.Item>
    //         <Form.Item name={["lastName"]} label="lastname">
    //           <Input />
    //         </Form.Item>
    //         <Form.Item
    //           name={["email"]}
    //           label="Email"
    //           rules={[
    //             {
    //               type: "email",
    //             },
    //           ]}
    //         >
    //           <Input />
    //         </Form.Item>
    //         <Form.Item
    //           name={["salary"]}
    //           label="salary"
    //           rules={[
    //             {
    //               type: "number",
    //               min: 0,
    //               max: 10000,
    //             },
    //           ]}
    //         >
    //           <InputNumber />
    //         </Form.Item>
    //         <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
    //           <Button type="primary" htmlType="submit">
    //             Submit
    //           </Button>
    //         </Form.Item>
    //       </StyledInputs>
    //     </StyledForm>
    //   </Card>
    // </FormContainer>
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body>
              <Form>
                <Row className="mb-3">
                  <Form.Group controlId="formFirstName">
                    <Form.Label>Firstname</Form.Label>
                    <Form.Control type="text" placeholder="Enter firstname" />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group controlId="formLastName">
                    <Form.Label>Lastname</Form.Label>
                    <Form.Control type="text" placeholder="Lastname" />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group controlId="formSalary">
                    <Form.Label>Salary</Form.Label>
                    <Form.Control type="number" placeholder="Enter Salary" />
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
  );
};

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
