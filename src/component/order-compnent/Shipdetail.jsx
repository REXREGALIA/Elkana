import React from 'react'
import { Form, Input, InputNumber, Row, Col} from 'antd';
const {TextArea}= Input;
const Shipdetail = () => {
  return (
    <>
    {/* gutter=90 */}
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ marginTop: '10px' }}>
          <Col span={12}>
            <Form.Item name="trans_dtl" label="Add Transport Details">
              <TextArea rows={9} placeholder='Add Transport Details'/>
            </Form.Item>
          </Col>
          <Col span={12}>
          <Row justify="end">
          <Col span={8} style={{ textAlign: 'right' }}>
            <Form.Item name="mre_dis" label="More Discount%">
              <InputNumber style={{ width: '45' }} />
            </Form.Item>
            <Form.Item name="dis_amt"label="Dis(Amount)">
              <InputNumber style={{ width: '45' }} />
            </Form.Item>
            <hr/>
            <Form.Item name="ttl_amt"label="Total Amount">
              <InputNumber style={{ width: '30' }} />
            </Form.Item>
          </Col>
          </Row>
          </Col>
          </Row>
    </>
  )
}

export default Shipdetail
