const ADD_TASK_TYPE = "ADD_TASK_TYPE";
const UPDATE_TASK_TYPE = "UPDATE_TASK_TYPE";
const UPDATE_DESCRIPTION_TYPE = "UPDATE_DESCRIPTION_TYPE";
const UPDATE_DATE_TYPE = "UPDATE_DATA_TYPE";

const initialState = {
  tasks: [
    { id: 1, task: "Name1", description: "Name", date: "Date" },
    { id: 2, task: "Name2", description: "Vas", date: "Date2" },
    { id: 3, task: "Name3", description: "Serg", date: "Date3" },
  ],
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

export const addTaskActionCreator = () => {
  return {
    type: ADD_TASK_TYPE,
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
      const newState = {
        ...state,
        tasks: [
          ...state.tasks,
          { id: 5, task: state.newTaskText, description: state.newDescriptionText, date: state.newDate},
        ],
        newTaskText:'',
        newDescriptionText:'',
        newDate:'',
      };
      console.log(newState)
      return newState
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
