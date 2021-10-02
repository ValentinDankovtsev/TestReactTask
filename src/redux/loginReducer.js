import { logIn } from "../components/services/logIn";
const ADD_USER_TYPE = "ADD_USER_TYPE";
const UPDATE_USERNAME_TYPE = "UPDATE_USERNAME_TYPE";
const UPDATE_USERPASSWORD_TYPE = "UPDATE_USERPASSWORD_TYPE";
const SIGN_OUT = "SIGN_OUT";
export const addUserActionCreator = () => {
  return {
    type: ADD_USER_TYPE,
  };
};

export const addSignOutActionCreator = () => {
  return {
    type: SIGN_OUT,
  };
};

export const addUserPasswordActionCreator = (text) => {
  return {
    type: UPDATE_USERPASSWORD_TYPE,
    value: text,
  };
};

export const updateUserNameActionCreator = (text) => {
  return {
    type: UPDATE_USERNAME_TYPE,
    value: text,
  };
};

const initialState = {};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERNAME_TYPE:
      return {
        ...state,
        newUserName: action.value,
      };
    case UPDATE_USERPASSWORD_TYPE:
      return {
        ...state,
        newPassword: action.value,
      };
    case SIGN_OUT:
      return {
        ...state,
        isAuth: false,
        userName: "",
        password: "",
        newPassword: "",
        newUserName: "",
      };

    case ADD_USER_TYPE:
      const result = logIn(state.newUserName, state.newPassword);
      if (result === "successfully") {
        return {
          ...state,
          userName: state.newUserName,
          isAuth: true,
          newPassword: "",
          newUserName: "",
        };
      } else {
        return {
          ...state,
          isAuth: false,
          userName: "",
          newPassword: "",
          newUserName: "",
        };
      }

    default:
      return state;
  }
};

export default loginReducer;
