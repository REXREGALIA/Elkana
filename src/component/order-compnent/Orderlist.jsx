import React,{useState} from 'react';
import { Form, Input, Button, InputNumber, Table, Divider,Popconfirm, Select } from 'antd';
// const { TextArea } = Input;
import { DeleteFilled } from '@ant-design/icons';

export default function Orderlist() {
    const [form] = Form.useForm();
    
    const [items, setItems] = useState([
        {key: '1', itemName: '', quantity: 0, hsn: '', price: 0, amount: 0, discount: 0, finalAmount: 0 }
    ]);

    const addItem = () => {
        setItems([...items, { key: `${items.length + 1}`, itemName: '', quantity: 0, hsn:'', price: 0, amount: 0, discount: 0, finalAmount: 0 }]);
    };
    const handleDelete = (key) => {
        const newData = items.filter((item) => item.key !== key);
        setItems(newData);
       calculateTotals(newData);
      };
    const [total,setTotal]= useState(0);
    const [quantity,setQuantity]=useState(0);
    const handleTableChange = (value, key, column) => {
        const newItems = [...items];
        const itemIndex = newItems.findIndex((item) => item.key === key);
        newItems[itemIndex][column] = value;
        newItems[itemIndex].amount = newItems[itemIndex].quantity * newItems[itemIndex].price;
        newItems[itemIndex].finalAmount = newItems[itemIndex].amount - newItems[itemIndex].amount * (newItems[itemIndex].discount / 100);
        setItems(newItems);
        calculateTotals(newItems);
    };
    const calculateTotals = (items) => {
        const totalQuantity = items.reduce((a, item) => a + item.quantity, 0);
        const subTotal = items.reduce((a, item) => a + item.finalAmount, 0);
        setQuantity(totalQuantity);
        setTotal(subTotal);
      };

    const columns = [
        {
        title: 'Sl.no',
        dataIndex: 'key',
        key: 'key',
        },
        {
        title: 'Item Name',
        dataIndex: 'itemName',
        key: 'itemName',
        render: (text, record) => (
          <Form.Item>
              <Select>
              <Select.Option value={text} onChange={(e) => handleTableChange(e.target.value, record.key, 'itemName')}>Classmate</Select.Option>
              <Select.Option value={text} onChange={(e) => handleTableChange(e.target.value, record.key, 'itemName')}>youvna</Select.Option>
              <Select.Option value={text} onChange={(e) => handleTableChange(e.target.value, record.key, 'itemName')}>camel</Select.Option>
              </Select>
            </Form.Item>
            // <Input value={text} onChange={(e) => handleTableChange(e.target.value, record.key, 'itemName')} />
        ),
        },
        {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
        render: (text, record) => (
            <InputNumber min={0} value={text} onChange={(value) => handleTableChange(value, record.key, 'quantity')} />
        ),
        },
        {
        title: 'HSN',
        dataIndex: 'hsn',
        key: 'hsn',
        render: (text, record) => (
            <Input value={text} onChange={(e) => handleTableChange(e.target.value, record.key, 'hsn')} />
        ),
        },
        {
        title: 'Price/unit',
        dataIndex: 'price',
        key: 'price',
        render: (text, record) => (
            <InputNumber min={0} value={text} onChange={(value) => handleTableChange(value, record.key, 'price')} />
        ),
        },
        {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
        render: (text, record) => (
            <InputNumber value={text} />
        ),
        },
        {
        title: 'Discount %',
        dataIndex: 'discount',
        key: 'discount',
        render: (text, record) => (
            <InputNumber min={0} max={100} value={text} onChange={(value) => handleTableChange(value, record.key, 'discount')} />
        ),
        },
        {
        title: 'Final Amount',
        dataIndex: 'finalAmount',
        key: 'finalAmount',
        render: (text, record) => (
            <InputNumber value={text} disabled />
        ),
        },
        {
            title: '',
            dataIndex: 'operation',
            render: (_, record) =>
              items.length >= 1 ? (
                <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                  {/* <a>Delete</a> */}
                  <DeleteFilled />
                </Popconfirm>
              ) : null,
          },
    ];
  return (
    <>
        <Table dataSource={items} columns={columns} pagination={false} rowKey="key"/>
        <Button id="additem" type="dashed" onClick={addItem} style={{ width: '20%', marginTop: '20px' }}>
        + Add Another Item
        </Button>
        <Divider/>
          <pre>                              Total Quantity:{quantity}                                                                         Sub Total:{total}         </pre>
        <Divider/>
    </>
  )
}