import React from 'react';
import {Form,Divider,Table } from 'antd';
import Orderlist from './Orderlist';
import Ordetail from './Ordetail';
import Shipdetail from './Shipdetail';
import Terms from './Terms';
import Operator from './Operator';

const Ordcomp = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
  console.log('Received values of form: ', JSON.stringify(values));
    };
  return (
      <div className="Ordpage">
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Ordetail/>
          <Divider/>
          <Orderlist />
          <Shipdetail/>
          <Divider/>
          <Terms/>
          <Divider/>
          <Operator/>
        </Form>
      </div>
  )
}
export default Ordcomp;