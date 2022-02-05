import React from "react";
import styled from "styled-components";
import UsersList from "./users/UsersList";

const List = () => {
  return (
    <StyledUserContainer>
      <div className="list-group h-100">
        <UsersList />
      </div>
    </StyledUserContainer>
  );
};

const StyledUserContainer = styled.div`
  padding-top: 50px;
`;

export default List;
