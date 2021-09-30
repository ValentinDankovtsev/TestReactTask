import React from "react";
import { Route, Link } from "react-router-dom";
import Task from "../AddTask/Task";

 const Tasks = (props) => {
  // debugger;
  const tasksElement = props.state.tasksPage.tasks.map((el) => (
    <Task task={el.task} description={el.description} date={el.date}/>
  ));
  return (
    
    <div>
      <span>Задачи</span>
      <div>{tasksElement}</div>
      <Link to={"/addtask"}>
        <button> Добавить задачу </button>
      </Link>
    </div>
  );
};

export default Tasks
