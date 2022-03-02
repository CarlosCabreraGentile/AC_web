import { createContext, useReducer } from "react";
import { v4 } from "uuid";
import axios from "axios";

import appReducer from "./AppReducer";

const initialState = {
  users: [],
  user: null,
};

// const getUsers = async () => {
//     await axios.get("http://localhost:3001/user/")
//     .then((res) => {
//         console.log('res', res)
//         return res.data;
//         // setUsers(res?.data);
//     })
//     .catch(error => {console.log(error)});
//   };

//   const getUser = async (id) => {
//     await axios.get("http://localhost:3001/user/" + id)
//     .then((res) => {
//         console.log('res', res)
//         return res.data;
//         // setUsers(res?.data);
//     })
//     .catch(error => {console.log(error)});
//   };

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  //   function getUsers() {
  //       dispatch({
  //           type: "GET_USERS",
  //           payload: {
  //           }
  //       });
  //   }

  const getUsers = async () => {
    const response = await axios.get("http://localhost:3001/user/");
    dispatch({
      type: "GET_USERS",
      payload: response.data,
    });
  };

  const getUser = async (id) => {
    const response = await axios.get("http://localhost:3001/user/" + id);
    dispatch({
      type: "GET_USER",
      payload: response.data,
    });
  };

  const addUser = async (user) => {
    await axios
      .post("http://localhost:3001/user/", user)
      .then((response) => {
        console.log("EXITO", response);
        dispatch({
          type: "ADD_USER",
          payload: {
            ...user,
            //   id: v4(),
            done: false,
          },
        });
      })
      .catch((response) => {
        console.log("ERROR", response);
      });
  };

  const updateUser = async (updatedUser, id) => {
    await axios
      .put(`http://localhost:3001/user/${id}`, updatedUser)
      .then((response) => {
        console.log("EXITO", response);
        dispatch({
          type: "UPDATE",
          payload: updatedUser,
        });
      })
      .catch((response) => {
        console.log("ERROR", response);
      });

    dispatch({
      type: "UPDATE_USER",
      payload: updatedUser,
    });
  };

  const deleteUser = async (id) => {
    await axios
      .delete(`http://localhost:3001/user/${id}`)
      .then((response) => {
        console.log("EXITO", response);
        dispatch({
          type: "DELETE_USER",
          payload: id,
        });
      })
      .catch((response) => {
        console.log("ERROR", response);
      });
  };

  function toggleUserDone(id) {
    dispatch({
      type: "TOGGLE_USER_DONE",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        getUsers,
        getUser,
        addUser,
        updateUser,
        deleteUser,
        toggleUserDone,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
