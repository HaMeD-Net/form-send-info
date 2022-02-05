import React from "react";
import { Table, Tag, Space } from "antd";
import { useContext } from "react";
import { myContext } from "../Context/context";

export default function ShowForm() {
  const { info } = useContext(myContext);
  console.log(info);

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
      dataIndex: "type of user",
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

  return (
    <div>
      <Table columns={columns} dataSource={info} />
    </div>
  );
}
