import { Form, Input, Button, Checkbox } from "antd";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import  IStory  from "./interface";

const AddCategory = () => {
  const mutation = useMutation({
  mutationFn: async (data: IStory) => {
    const res = await axios.post(
      "http://localhost:3000/stories",
      data
    );

    return res.data;
  },
});

const onFinish = (values: IStory) => {
  mutation.mutate(values);
};

  return (
    <Form onFinish={onFinish} >
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập Title",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item
        name="active"
        valuePropName="checked"
      >
        <Checkbox>Active</Checkbox>
      </Form.Item>
    <Button
        type="primary"
        htmlType="submit"
        loading={mutation.isPending}
    >
         Thêm truyện
    </Button>   
    </Form>
  );
};

export default AddCategory;