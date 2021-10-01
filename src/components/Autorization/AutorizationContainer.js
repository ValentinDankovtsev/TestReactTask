import { updateUserNameActionCreator,addUserActionCreator,addUserPasswordActionCreator } from "../../redux/loginReducer";
import { connect } from "react-redux";
import Autoruzation from "./Autorization";
import { store } from "../../redux/store";
import { logIn } from "../services/logIn";
import { Redirect } from "react-router";

const mapStateToProps = (state) => {
    return {
        userName:state.loginPage.newUserName,
        isAuth:state.loginPage.isAuth,
        password:state.loginPage.newPassword
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
      updateUserName:(text)=>{
        dispatch(updateUserNameActionCreator(text));
      },
  
      addLogin:()=>{
        dispatch(addUserActionCreator());
        
      // if(login) {
      //    return window.goBack()
      // }
        
      },
      updatePassword:(text)=>{
        dispatch(addUserPasswordActionCreator(text))
      }
    }
  }

  let UserContainer = connect(mapStateToProps,mapDispatchToProps)(Autoruzation)

export default UserContainer