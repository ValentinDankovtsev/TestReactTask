import React from "react";
import { Redirect, Link } from "react-router-dom";
import { Form, Input, Button } from "antd";

const Autorization = (props) => {
  const changeUserNameValue = (e) => {
    const text = e.target.value;
    props.updateUserName(text);
  };

  const changeUserPasswordValue = (e) => {
    const text = e.target.value;
    props.updatePassword(text);
  };
  const addUserNameAndPassword = () => {
    props.addLogin();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  if (props.isAuth) return <Redirect to={"/tasks"} />;
  console.log(props.isAuth);
  return (
    <div>
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
        onSubmit={handleSubmit}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input value={props.userName} onChange={changeUserNameValue} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input value={props.password} onChange={changeUserPasswordValue} />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Link to={"/tasks"}>
            <Button type="primary" onClick={addUserNameAndPassword}>
              Sign In
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Autorization;
