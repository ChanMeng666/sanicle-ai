import React, { useState } from 'react';
import { Input, Button, Card, Upload, Spin, Radio, Typography, message } from 'antd';
import { UploadOutlined, FileTextOutlined } from '@ant-design/icons';
import WatsonService from '../../services/WatsonService';

const { TextArea } = Input;
const { Title, Paragraph } = Typography;

const WatsonDocAnalyzer = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [documentText, setDocumentText] = useState('');
  const [analysisType, setAnalysisType] = useState('summary');
  
  // 处理文件上传
  const handleFileUpload = async (file) => {
    try {
      const text = await readFileAsText(file);
      setDocumentText(text);
      return false; // 阻止自动上传
    } catch (error) {
      message.error('读取文件失败，请重试');
      return false;
    }
  };
  
  // 读取文件为文本
  const readFileAsText = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result);
      reader.onerror = (e) => reject(e);
      reader.readAsText(file);
    });
  };
  
  // 处理文档分析
  const handleDocumentAnalysis = async () => {
    if (!documentText.trim()) {
      message.warning('请输入或上传文档内容');
      return;
    }
    
    setLoading(true);
    try {
      const response = await WatsonService.analyzeDocument(documentText, analysisType);
      setResult(response.results?.[0]?.generated_text || '分析未返回结果');
    } catch (error) {
      console.error('文档分析出错:', error);
      message.error('文档分析失败，请重试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="watson-analyzer-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <Title level={2}>Watson文档智能分析助手</Title>
      <Paragraph>
        使用IBM Watson AI强大的llama-3-405b-instruct模型分析文档内容，生成摘要并提取关键信息。
      </Paragraph>
      
      <Card title="文档输入" style={{ marginBottom: '20px' }}>
        <TextArea 
          rows={10} 
          value={documentText}
          onChange={(e) => setDocumentText(e.target.value)}
          placeholder="请在此输入文档内容或使用下方按钮上传TXT文件..."
          style={{ marginBottom: '15px' }}
        />
        
        <div style={{ display: 'flex', marginBottom: '15px' }}>
          <Upload 
            beforeUpload={handleFileUpload}
            accept=".txt,.md,.json,.csv"
            showUploadList={false}
          >
            <Button icon={<UploadOutlined />}>上传文档</Button>
          </Upload>
          
          <Button 
            type="primary" 
            onClick={handleDocumentAnalysis} 
            loading={loading}
            style={{ marginLeft: '10px' }}
            disabled={!documentText.trim()}
          >
            分析文档
          </Button>
        </div>
        
        <Radio.Group 
          onChange={(e) => setAnalysisType(e.target.value)} 
          value={analysisType}
        >
          <Radio value="summary">生成摘要</Radio>
          <Radio value="keywords">提取关键词</Radio>
          <Radio value="structure">分析结构</Radio>
        </Radio.Group>
      </Card>
      
      {loading && (
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <Spin size="large" tip="正在分析文档..." />
        </div>
      )}
      
      {result && (
        <Card title="分析结果" className="result-card">
          <div style={{ whiteSpace: 'pre-wrap' }}>
            {result}
          </div>
        </Card>
      )}
    </div>
  );
};

export default WatsonDocAnalyzer; 