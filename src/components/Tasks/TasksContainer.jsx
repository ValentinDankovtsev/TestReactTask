import Tasks from "./Tasks";
import { connect } from "react-redux";
import { addSignOutActionCreator } from "../../redux/loginReducer";

let mapStateToProps = (state) => {
  return {
    isAuth: state.loginPage.isAuth,
    currentUser: state.loginPage.userName,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      dispatch(addSignOutActionCreator());
    },
  };
};

const TasksContainer = connect(mapStateToProps, mapDispatchToProps)(Tasks);
export default TasksContainer;
