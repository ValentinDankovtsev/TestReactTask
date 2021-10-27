import React from "react";
import { Redirect } from "react-router-dom";
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
    props.login(
      props.state.loginPage.newUserName,
      props.state.loginPage.newPassword
    );
  };

  if (props.isAuth) return <Redirect to={"/tasks"} />;

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
          <Button type="primary" onClick={addUserNameAndPassword}>
            Sign In
          </Button>
          {/* </Link> */}
        </Form.Item>
      </Form>
    </div>
  );
};

export default Autorization;
