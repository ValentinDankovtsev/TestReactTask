import React from "react";
import { Table } from "antd";

const Task = (props) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => text,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ];

  const data = [
    {
      name: props.task,
      description: props.description,
      date: props.date,
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Task;
