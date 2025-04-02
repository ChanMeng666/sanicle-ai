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
          <Breadcrumb.Item>首页</Breadcrumb.Item>
          <Breadcrumb.Item>工具</Breadcrumb.Item>
          <Breadcrumb.Item>Watson文档分析</Breadcrumb.Item>
        </Breadcrumb>
        
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <Title level={2} style={{ marginBottom: '24px' }}>IBM Watson文档分析工具</Title>
          <WatsonDocAnalyzer />
        </div>
      </Content>
    </Layout>
  );
};

export default WatsonPage; 