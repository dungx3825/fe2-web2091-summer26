import { Table, Image, Spin, Button, Input } from "antd";
import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";

const StoryList = () => {
  const queryClient = useQueryClient();
  const [keyword, setKeyword] = useState("");
  const { data, isLoading, isError } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/stories");
      return res.data;
    },
  });
  const deleteStory = useMutation({
    mutationFn: async (id: number) => {
      await axios.delete(`http://localhost:3000/stories/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["stories"],
      });
    },
  });

  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm(
      "Bạn có chắc muốn xóa truyện này?"
    );

    if (confirmDelete) {
      deleteStory.mutate(id);
    }
  };

  const filteredData = data?.filter((item: any) =>
    item.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      render: (url: string) => <Image src={url} width={60} />,
    },
    {
      title: "Tên truyện",
      dataIndex: "title",
    },
    {
      title: "Tác giả",
      dataIndex: "author",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (date: string) =>
        new Date(date).toLocaleDateString("vi-VN"),
    },
    {
      title: "Action",
      render: (_: any, record: any) => (
        <Button
          danger
          onClick={() => handleDelete(record.id)}
        >
          Xóa
        </Button>
      ),
    },
  ];

  if (isLoading) return <Spin />;

  if (isError) return <h2>Lỗi khi tải dữ liệu!</h2>;

  return (
    <div>
      <Input
        placeholder="Tìm kiếm theo tên truyện..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <Table
        rowKey="id"
        columns={columns}
        dataSource={filteredData}
      />
    </div>
  );
};

export default StoryList;