import React from "react";
import { useContext } from "react";
import { myContext } from "../Context/context";
import { Form, Input, Button, Checkbox, Row, Col, Select } from "antd";
const { Option } = Select;

export default function Login() {
  const { info,setinfo } = useContext(myContext);

  const onFinish = (values) => {
    console.log("Success:", values);
    setinfo(values);
    console.log(info)
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row gutter={(16, 16)}>
      <Col span={24}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Col span={8}>
              <Form.Item
                className="formItem1"
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
                style={{ flexDirection: "column" }}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
                style={{ flexDirection: "column" }}
              >
                <Input.Password />
              </Form.Item>
            </Col>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Col span={8}>
              <Form.Item
                name="type of user"
                label="Type of user"
                rules={[{ required: true }]}
                style={{ flexDirection: "column" }}
              >
                <Select
                  placeholder="Select your user type"
                  //   onChange={onGenderChange}
                  allowClear
                >
                  <Option value="Admin">Admin</Option>
                  <Option value="Public">Public</Option>
                  <Option value="Private">Private</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Color"
                name="Color"
                style={{ flexDirection: "column", justifyContent: "center" }}
              >
                <input type="color" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </div>
          <Col>
            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item wrapperCol={{ span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Form>
      </Col>
    </Row>
  );
}
