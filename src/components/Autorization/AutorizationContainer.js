import {
  updateUserNameActionCreator,
  addUserActionCreator,
  addUserPasswordActionCreator,
} from "../../redux/loginReducer";
import { connect } from "react-redux";
import Autorization from "./Autorization";

const mapStateToProps = (state) => {
  return {
    userName: state.newUserName,
    isAuth: state.loginPage.isAuth,
    password: state.newPassword,
    currentUser: state.newUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserName: (text) => {
      dispatch(updateUserNameActionCreator(text));
    },

    addLogin: () => {
      dispatch(addUserActionCreator());
    },
    updatePassword: (text) => {
      dispatch(addUserPasswordActionCreator(text));
    },
  };
};

let LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Autorization);

export default LoginContainer;
