import React from "react";
// import { Layout, Menu } from "antd";
import styled from "styled-components";
import { Container, Navbar, Nav } from "react-bootstrap";

// const { Header } = Layout;

import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

const Heading = () => {
  return (
    //   <Layout>
    //   <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
    //     <div className="logo" />
    //     <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
    //       <Menu.Item key="1">nav 1</Menu.Item>
    //       <Menu.Item key="2">nav 2</Menu.Item>
    //       <Menu.Item key="3">nav 3</Menu.Item>
    //     </Menu>
    //   </Header>
    //   <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
    //     <Breadcrumb style={{ margin: '16px 0' }}>
    //       <Breadcrumb.Item>Home</Breadcrumb.Item>
    //       <Breadcrumb.Item>List</Breadcrumb.Item>
    //       <Breadcrumb.Item>App</Breadcrumb.Item>
    //     </Breadcrumb>
    //     <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
    //       Content
    //     </div>
    //   </Content>
    //   <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    // </Layout>
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="add">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
const StyledHeader = styled(Header)`
  background: #005ea0;
  position: "fixed";
  zindex: 1;
  width: "100%";
`;

const StyledMenu = styled(Menu)`
  background: #005ea0;
  border-bottom: 0;
`;

export default Heading;
