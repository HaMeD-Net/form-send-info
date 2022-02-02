import React from "react";
import { Table, Tag, Space } from "antd";
import { useContext } from "react";
import { myContext } from "../Context/context";

export default function ShowForm() {
  const { info } = useContext(myContext);

  const columns = [
    {
      title: "UserName",
      dataIndex: "username",
      key: "username",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "Type of User",
      dataIndex: "Type of User",
      key: "Type of User",
    },
    {
      title: "Color",
      key: "Color",
      dataIndex: "Color",
    },
    {
      title: "remember",
      key: "remember",
      dataIndex: "Color",
    },
  ];

  const data = null;
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
