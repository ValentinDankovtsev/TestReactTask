import React from "react";
import { Route, Link } from "react-router-dom";
import Task from "../AddTask/Task";
import s from "./Tasks.module.css";
import { PageHeader, Button } from "antd";
import { Redirect } from "react-router";

const Tasks = (props) => {
  // debugger;
  const tasksElement = props.state.tasksPage.tasks.map((el) => (
    <Task task={el.task} description={el.description} date={el.date} />
  ));

  console.log(props.isAuth);
  if (!props.isAuth) return <Redirect to={"/"} />;

const isSignOut = () => {
  props.signOut()
}

  return (
    <div>
      
      <PageHeader className={s.sitePageHeader} title="Tasks" />
      
      <div>{tasksElement}</div>
      <div>
        <Link to={"/addtask"}>
          <Button type="primary"> Add Task </Button>
        </Link>
      </div>
      <div>
        <Link to={"/"}>
          <Button className={s.buttonSingOut} type="primary" onClick={isSignOut}>Sign Out</Button>
        </Link>
      </div>
      
    </div>
  );
};

export default Tasks;
