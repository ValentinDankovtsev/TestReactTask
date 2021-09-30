import { updateUserNameActionCreator,addUserActionCreator } from "../../redux/loginReducer";
import { connect } from "react-redux";
import Autoruzation from "./Autorization";


const mapStateToProps = (state) => {
    return {
        userName:state.loginPage.userName,
        isAuth:state.loginPage.isAuth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      updateUserName:(text)=>{
        dispatch(updateUserNameActionCreator(text));
      },
  
      addLogin:()=>{
        dispatch(addUserActionCreator());
      }
    }
  }

  let UserContainer = connect(mapStateToProps,mapDispatchToProps)(Autoruzation)

export default UserContainer