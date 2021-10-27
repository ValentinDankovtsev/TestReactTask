import {
  updateUserNameActionCreator,
  addUserPasswordActionCreator,
  login,
  updatePassword,
  updateUserName
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

    // login: () =>   (dispatch) => {
    //   // const result = await logIn(userName, password);

    //   // if (result) {
    //   //   dispatch(addUserActionCreator());
    //   // } else {
    //   //   return alert("ошибка");
    //   // }
    //   setTimeout(()=>console.log('dsfsd'),2000)
    // },
    updatePassword: (text) => {
      dispatch(addUserPasswordActionCreator(text));
    },
  };
};

let LoginContainer = connect(mapStateToProps, {updateUserName,updatePassword,login})(Autorization);

export default LoginContainer;
