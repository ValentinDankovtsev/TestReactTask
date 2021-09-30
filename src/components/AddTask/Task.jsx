import React from "react";


const Task = (props) => {
  return (
    <div >
      <div>
        <span>Задача: </span>
      {props.task}
      </div>
      <div>
      
      <span>Описание: </span>
      {props.description}
      </div>
      <div>
      
      <span>Дата: </span>
      {props.date}
      </div>
      <hr></hr>
    </div>
  );
};

export default Task;
