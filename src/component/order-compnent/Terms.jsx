import React from 'react'
import { Form, Input, Row, Col} from 'antd';
const {TextArea}= Input;
const Terms = () => {
  return (
    <>
    {/* row g=16 */}
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
          <Col span={24}>
            <Form.Item name="cust_nts" label="Add Customer Notes">
              <TextArea rows={3} placeholder='Add Customer Notes' />
            </Form.Item>
          </Col>
          </Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={24}>
            <Form.Item name="term_cond" label="Add Terms & Condition">
              <TextArea rows={3} placeholder='Enter the Terms and Condition '/>
            </Form.Item>
          </Col>
        </Row>
    </>
  )
}

export default Terms
