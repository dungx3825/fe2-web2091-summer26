import { Form, Input, Button, InputNumber } from "antd";

function Lab3() {
  const onFinish = (data: any) => {
    console.log(data);
  };
  return (
    <Form onFinish={onFinish}>
      <Form.Item label="Title" name="title">
        <Input />
      </Form.Item>
      <Form.Item label="Price" name="price">
        <InputNumber />
        {/* Select */}
        {/* Checkbox */}
      </Form.Item>
      <Button htmlType="submit">Submit</Button>
    </Form>
  );
}
export default Lab3;
