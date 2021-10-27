import React from "react";
import { Link, Redirect } from "react-router-dom";
import { PageHeader, Form, Input, Button, DatePicker } from "antd";
import s from "./addTask.module.css";

const AddTask = (props) => {
  const inTask = () => {
    props.addTask(props.newUser);
  };
  console.log(props.newUser);
  const changeTask = (e) => {
    const text = e.target.value;
    props.updateNewTask(text);
  };

  const changeDescription = (e) => {
    const text = e.target.value;
    props.updateDescription(text);
  };

  const changeData = (data, datestring) => {
    props.updateData(datestring);
  };

  if (!props.isAuth) return <Redirect to="/" />;
  return (
    <div>
      <div className={s.pageAddTaskHeader}>
        <PageHeader
          title="Add Task"
          onBack={() => window.history.back()}
        ></PageHeader>
      </div>

      <Form
        name="basic"
        labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 6,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Task"
          name="task"
          rules={[
            {
              required: true,
              message: "Please input your nameTask!",
            },
          ]}
        >
          <Input
            value={props.newTaskText}
            required
            onChange={changeTask}
          ></Input>
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input your description!",
            },
          ]}
        >
          <Input
            value={props.newDescriptionText}
            onChange={changeDescription}
          ></Input>
        </Form.Item>

        <Form.Item
          label="Date"
          name="date"
          rules={[
            {
              required: true,
              message: "Please input your date!",
            },
          ]}
        >
          <DatePicker value={props.newDate} onChange={changeData}></DatePicker>
        </Form.Item>

        <div>
          <Link to="/tasks">
            <Form.Item
              wrapperCol={{
                offset: 10,
                span: 10,
              }}
            >
              <Button type="primary" htmlType="submit" onClick={inTask}>
                Add
              </Button>
            </Form.Item>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default AddTask;
