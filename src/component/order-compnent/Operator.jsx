import React from 'react'
import { Flex,Button, Row, Col } from 'antd';

const Operator = () => {
  return (
    <div>
      <Row justify="end" gutter={16} style={{ marginTop: '20px' }}>
          <Col>
            <Flex wrap gap="small" className="site-button-ghost-wrapper"/>
            <Button type="primary" ghost>Cancel</Button>
          </Col>
          <Col>
            <Button type="primary">Preview</Button>
          </Col>
          <Col>
            <Button type="primary" ghost>Save as Draft</Button>
          </Col>
          <Col>
            <Button type="primary" htmlType='submit'>Save & Send</Button>
          </Col>
        </Row>
    </div>
  )
}

export default Operator
