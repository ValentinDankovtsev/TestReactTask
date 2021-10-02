import { connect } from "react-redux";
import AddTask from "./AddTask";
import {
  updateTaskActionCreator,
  addTaskActionCreator,
  updateDescriptionActionCreator,
  updateDataActionCreator,
} from "../../redux/addTasksReducer";

const mapStateToProps = (state) => {
  return {
    tasks: state.tasksPage.tasks,
    newTaskText: state.tasksPage.newTaskText,
    newDescriptionText: state.tasksPage.newDescriptionText,
    newDate: state.tasksPage.newDate,
    isAuth: state.loginPage.isAuth,
    newUser: state.loginPage.userName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewTask: (text) => {
      dispatch(updateTaskActionCreator(text));
    },
    updateDescription: (text) => {
      dispatch(updateDescriptionActionCreator(text));
    },
    updateData: (text) => {
      dispatch(updateDataActionCreator(text));
    },
    addTask: () => {
      dispatch(addTaskActionCreator());
    },
  };
};

let AddTaskContainer = connect(mapStateToProps, mapDispatchToProps)(AddTask);

export default AddTaskContainer;
