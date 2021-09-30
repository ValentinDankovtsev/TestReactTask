import React from "react";
import Task from './Task';
import { Link } from "react-router-dom";

const AddTask = (props) => {
  
  // const tasksElement = props.tasks.map((el) => (
  //   <Task task={el.task} description={el.description} date={el.date}/>
  // ));
  
const inTask = () => {
  props.addTask();
  
}

const changeTask = (e) => {
  const text = e.target.value;
    props.updateNewTask(text)
}

const changeDescription = (e) => {
  const text = e.target.value;
    props.updateDescription(text)
}

const changeData = (e) => {
  const text = e.target.value;
    props.updateData(text)
}

  return (
    <div>
      <div>Добавить задачу</div>
      <div>
      <span>Имя</span>
      <textarea value={props.newTaskText} onChange={changeTask}></textarea>
      </div>
      <div>
      <span>Описание</span>
      <textarea value={props.newDescriptionText} onChange={changeDescription}></textarea>
      </div>
      <div>
      <span>Дата</span>
      <textarea value={props.newDate} onChange={changeData}></textarea>
      </div>
     
      {/* <span>Описание</span>
      <input></input>
      <span>Дата</span>
      <input></input> */}
      <div>
        <Link to='/tasks'>
        <button onClick={inTask}>ок</button>
        </Link>
        {/* <div>{tasksElement}</div> */}
      </div>
    </div>
    
  );
};

export default AddTask;
