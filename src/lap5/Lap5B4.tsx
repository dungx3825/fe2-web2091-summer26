import { Form, Select } from "antd";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const { data: categories } = useQuery({
  queryKey: ["categories"],
  queryFn: async () => {
    const res = await axios.get(
      "http://localhost:3000/categories"
    );
    return res.data;
  },
});
<Form.Item
  label="Danh mục"
  name="categoryId"
>
  <Select
    placeholder="Chọn danh mục"
    options={categories?.map((item: any) => ({
      value: item.id,
      label: item.title,
    }))}
  />
</Form.Item>