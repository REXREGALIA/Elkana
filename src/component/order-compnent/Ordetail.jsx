import React from 'react'
import { Form, Input, DatePicker, Row, Col} from 'antd';
const { TextArea } = Input;
export default function Ordetail() {
  return (
    <>
        {/* gutter=70 */}
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={5}>
          <Form.Item name="order_no" label="Order No.">
              <Input />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item name="reference_no" label="Reference No.">
              <Input />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item name="order_date" label="Order Date">
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="due_date" label="Due Date">
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>
        {/* row=10 */}
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={8}>
            <Form.Item name="party_no" label="Party Name">
              <Input placeholder='Name'/>
            </Form.Item>
          </Col>
        </Row>
        {/* gutter=80 */}
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={8}>
            <Form.Item name="bill_nme" label="Billing Address">
              <TextArea rows={3} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="ship_name" label="Shipping Address">
              <TextArea rows={3} />
            </Form.Item>
          </Col>
          </Row>
        </>
  );
};
