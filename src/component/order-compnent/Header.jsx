import React from 'react'
import { Col, Row,Button, Divider,Dropdown,message,Space,Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
// import { Button, Dropdown, message, Space, Tooltip } from 'antd';
const handleButtonClick = (e) => {
  message.info('Click on left button.');
  console.log('click left button', e);
};
const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};
const items = [
  {
    label: 'Print',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: 'Home',
    key: '2',
    icon: <UserOutlined />,
  },
  {
    label: 'Report',
    key: '3',
    icon: <UserOutlined />,
    danger: true,
  },
  // {
  //   label: '4rd menu item',
  //   key: '4',
  //   icon: <UserOutlined />,
  //   danger: true,
  //   disabled: true,
  // },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};
export default function Header() {
  

  return (
    <>
    <Row justify="end">
    <Col>
      <Button type="primary">Convert to invoice</Button>
      {/* <Button type="primary">More</Button> */}
          <Dropdown type="primary" menu={menuProps} >
          <Button>
            <Space>
              More
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
    </Col>
  </Row>
  <Row>
    <Col span={5}>
    <h2><font color="#00000">Purchase Order</font></h2>
    </Col>
  </Row>
  <Divider/>
    </>
    
  )
}
