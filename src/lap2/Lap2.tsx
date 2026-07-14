import { Button, Space, Table, Tag } from "antd";

function Lab2() {
    //bài 1
    const Columns = [
    { title: "ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Age", dataIndex: "age" },
    { title: "Major", dataIndex: "major" }
  ];

  const Data= [
    { id: 1, name: "Dũng A", age: "11", major: "IT" },
    { id: 2, name: "Dũng b", age: "12", major: "Sắt vụn" },
    { id: 3, name: "Dũng c", age: "13", major: "ca sĩ" },
    { id: 4, name: "Dũng d", age: "14", major: "dancer" },
    { id: 5, name: "Dũng e", age: "15"  , major: "doctor" },
  ];
  // BÀi 2
  const productColumns = [
    { title: "ID", dataIndex: "id" },
    { title: "ProductName", dataIndex: "name" },
    { title: "Price", dataIndex: "price" },
    { title: "Category", dataIndex: "category" },
  ];

  const productDataSource = [
    { id: 1, name: "Dũng A", price: "123", category: "ok" },
    { id: 2, name: "Dũng b", price: "456", category: "hahaa" },
    { id: 3, name: "Dũng c", price: "4567", category: "mama" },
    { id: 4, name: "Dũng d", price: "678", category: "max" },
    { id: 5, name: "Dũng e", price: "678", category: "kkk" },
  ];

  // bài 3
  const userColumns = [
    { title: "ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) => (
        <Tag color={status === "active" ? "green" : "red"}>
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <Button>Edit</Button>
          <Button danger>Delete</Button>
        </Space>
      ),
    },
  ];

  const userDataSource = [
    { id: 1, name: "Dũng A", email: "dungdz122", status: "active" },
    { id: 2, name: "Dũng b", email: "dungdz122", status: "inactive" },
    { id: 3, name: "Dũng c", email: "dungdz122", status: "active" },
  ];

  return (
    <div style={{padding: 24 }}>
        <Table columns={Columns} dataSource={Data} rowKey="id" />
      <Table
        columns={productColumns}
        dataSource={productDataSource}
        rowKey="id"
        pagination={{ pageSize: 3 }}
      />

      <Table columns={userColumns} dataSource={userDataSource} rowKey="id" />
    </div>
  );
}

export default Lab2;