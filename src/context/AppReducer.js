export default function appReducer(state, action) {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "GET_USER":
    return {
        ...state,
        user: action.payload,
    };  
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "UPDATE_USER": {
      const updatedUser = action.payload;

      const updatedUsers = state.users.map((user) => {
        if (user.id === updatedUser.id) {
          updatedUser.done = user.done;
          return updatedUser;
        }
        return user;
      });
      return {
        ...state,
        users: updatedUsers,
      };
    }
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case "TOGGLE_USER_DONE":
      const updatedUsers = state.users.map((user) => {
        if (user.id === action.payload) {
          return { ...user, done: !user.done };
        }
        return user;
      });
      return {
        ...state,
        users: updatedUsers,
      };
    default:
      return state;
  }
}