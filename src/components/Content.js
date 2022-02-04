import "antd/dist/antd.css";
import React from "react";
import styled from "styled-components";
// import { Layout, Card } from "antd";
import UserInsert from "./users/UserInsert";
import UserCard from "./users/UserCard";
import UsersList from "./users/UsersList";
// const { Content } = Layout;

const List = () => {
  return (
    // <Content
    //   className="site-layout"
    //   style={{ padding: "0 50px", marginTop: 64 }}
    // >
    //   <div
    //     className="site-layout-background"
    //     style={{ padding: 24, minHeight: 380 }}
    //   >
    //     <StyledUserContainer>
    //       <UserInsert />
    //       <Card>
    //         <UserCard />
    //         <UsersList />
    //       </Card>
    //       <Card style={{ width: 300 }}></Card>
    //     </StyledUserContainer>
    //   </div>
    // </Content>
    <div className="list-group h-100">
      <UsersList />
    </div>
  );
};

const StyledUserContainer = styled.div`
  display: flex;
`;

export default List;
