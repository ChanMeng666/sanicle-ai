import React from 'react';
import { Layout, Typography, Breadcrumb } from 'antd';
import WatsonDocAnalyzer from '../components/watson/WatsonDocAnalyzer';

const { Content } = Layout;
const { Title } = Typography;

const WatsonPage = () => {
  return (
    <Layout className="site-layout" style={{ minHeight: '100vh' }}>
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Tools</Breadcrumb.Item>
          <Breadcrumb.Item>Watson Document Analysis</Breadcrumb.Item>
        </Breadcrumb>
        
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <Title level={2} style={{ marginBottom: '24px' }}>IBM Watson Document Analysis Tool</Title>
          <WatsonDocAnalyzer />
        </div>
      </Content>
    </Layout>
  );
};

export default WatsonPage; 