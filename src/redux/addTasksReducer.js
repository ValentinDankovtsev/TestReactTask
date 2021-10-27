import { v4 as uuidv4 } from "uuid";
const ADD_TASK_TYPE = "ADD_TASK_TYPE";
const UPDATE_TASK_TYPE = "UPDATE_TASK_TYPE";
const UPDATE_DESCRIPTION_TYPE = "UPDATE_DESCRIPTION_TYPE";
const UPDATE_DATE_TYPE = "UPDATE_DATA_TYPE";

const initialState = {
  Admin: [{ id: 1, task: "Задача Админа" }],
  User: [{ id: 2, task: "Задача Юзера" }],
  newTaskText: "Задача",
  newDescriptionText: "Описание",
  newDate: "Дата",
};

export const updateTaskActionCreator = (text) => {
  return {
    type: UPDATE_TASK_TYPE,
    value: text,
  };
};

export const addTaskActionCreator = (userName) => {
  return {
    type: ADD_TASK_TYPE,
    payload: userName,
  };
};

export const updateDescriptionActionCreator = (text) => {
  return {
    type: UPDATE_DESCRIPTION_TYPE,
    value: text,
  };
};

export const updateDataActionCreator = (text) => {
  return {
    type: UPDATE_DATE_TYPE,
    value: text,
  };
};

const addTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK_TYPE:
      let copy = Object.assign({}, state);
      for (let key in copy) {
        if (key === action.payload) {
          copy[key].push({
            id: uuidv4(),
            task: state.newTaskText,
            description: state.newDescriptionText,
            date: state.newDate,
          });
        }
      }
      return copy;

    case UPDATE_TASK_TYPE:
      return {
        ...state,
        newTaskText: action.value,
      };
    case UPDATE_DESCRIPTION_TYPE:
      return {
        ...state,
        newDescriptionText: action.value,
      };
    case UPDATE_DATE_TYPE:
      return {
        ...state,
        newDate: action.value,
      };

    default:
      return state;
  }
};

export default addTaskReducer;
