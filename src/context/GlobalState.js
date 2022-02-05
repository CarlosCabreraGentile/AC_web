import { createContext, useReducer } from "react";
import { v4 } from "uuid";
import axios from "axios";

import appReducer from "./AppReducer";

const initialState = {
  users: [],
  user: null
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
    await axios.get("http://localhost:3001/user/")
    .then((res) => {
        console.log('res', res)
        console.log('res.data', res.data)
        dispatch({
            type: "GET_USERS",
            payload: res.data
          });
    })
    .catch(error => {console.log(error)});
  };

  const getUser = async (id) => {
    await axios.get("http://localhost:3001/user/" + id)
    .then((res) => {
        dispatch({
            type: "GET_USER",
            payload: res.data
          });
    })
    .catch(error => {console.log(error)});
  };

  const addUser = async (user) => {
    await axios.post("http://localhost:3001/user/", user)
      .then((response) => {
        console.log("EXITO", response);
        dispatch({
          type: "ADD_USER",
          payload: { 
              ...user, 
            //   id: v4(), 
              done: false 
            },
        });
      })
      .catch((response) => {
        console.log("ERROR", response);
      });

  }

  function updateUser(updatedUser) {
    dispatch({
      type: "UPDATE_USER",
      payload: updatedUser,
    });
  }

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
  }

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
        toggleUserDone
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};