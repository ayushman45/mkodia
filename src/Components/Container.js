import React from 'react';
import { Layout, Space, Col, Row } from 'antd';
import mkOdiaLogo from '../assets/mkodia-logo.png'
import HeaderContent from './HeaderContent';

const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: "10vh",
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#ffb703',
  alignItems:"center"
};
const contentStyle = {
  textAlign: 'center',
  minHeight: "80vh",
  color: '#fff',
};
const footerStyle = {
    height:"10vh",
    textAlign: 'center',
    backgroundColor: '#ffb703',
    color: '#fff',
};
const Container = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >
    <Layout>
      <Header style={headerStyle}>
        <Row>
            <Col span={6}>
                <img src={mkOdiaLogo} height={"80vh"}/>
            </Col>
        </Row>
      </Header>
      <Content style={contentStyle} id="content">
        <HeaderContent />
      </Content>
      <Footer style={footerStyle}>

      </Footer>
    </Layout>
  </Space>
);
export default Container;