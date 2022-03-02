import React, { useState, useEffect, useContext, useMemo } from "react";
import styled from "styled-components";
import UsersList from "./users/UsersList";
import Paginator from "./Paginator";
import { GlobalContext } from "../context/GlobalState";
import Hola from  "./Hola";


let PageSize = 5;

const List = () => {
  const { users, deleteUser, toggleUserDone, getUsers, getUser } = useContext(GlobalContext);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <StyledUserContainer>
      <div className="list-group h-100">
        <UsersList />
      </div>
      <Hola />
      <Paginator
        currentPage={currentPage}
        totalCount={users.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </StyledUserContainer>
  );
};

const StyledUserContainer = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default List;
