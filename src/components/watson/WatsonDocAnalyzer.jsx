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
  
  // Handle file upload
  const handleFileUpload = async (file) => {
    try {
      const text = await readFileAsText(file);
      setDocumentText(text);
      return false; // Prevent automatic upload
    } catch (error) {
      message.error('Failed to read file, please try again');
      return false;
    }
  };
  
  // Read file as text
  const readFileAsText = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result);
      reader.onerror = (e) => reject(e);
      reader.readAsText(file);
    });
  };
  
  // Handle document analysis
  const handleDocumentAnalysis = async () => {
    if (!documentText.trim()) {
      message.warning('Please enter or upload document content');
      return;
    }
    
    setLoading(true);
    try {
      const response = await WatsonService.analyzeDocument(documentText, analysisType);
      setResult(response.results?.[0]?.generated_text || 'Analysis returned no results');
    } catch (error) {
      console.error('Document analysis error:', error);
      message.error('Document analysis failed, please try again');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="watson-analyzer-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <Title level={2}>Watson Document Intelligent Analysis Assistant</Title>
      <Paragraph>
        Use IBM Watson AI's powerful llama-3-405b-instruct model to analyze document content, generate summaries, and extract key information.
      </Paragraph>
      
      <Card title="Document Input" style={{ marginBottom: '20px' }}>
        <TextArea 
          rows={10} 
          value={documentText}
          onChange={(e) => setDocumentText(e.target.value)}
          placeholder="Enter document content here or use the button below to upload a TXT file..."
          style={{ marginBottom: '15px' }}
        />
        
        <div style={{ display: 'flex', marginBottom: '15px' }}>
          <Upload 
            beforeUpload={handleFileUpload}
            accept=".txt,.md,.json,.csv"
            showUploadList={false}
          >
            <Button icon={<UploadOutlined />}>Upload Document</Button>
          </Upload>
          
          <Button 
            type="primary" 
            onClick={handleDocumentAnalysis} 
            loading={loading}
            style={{ marginLeft: '10px' }}
            disabled={!documentText.trim()}
          >
            Analyze Document
          </Button>
        </div>
        
        <Radio.Group 
          onChange={(e) => setAnalysisType(e.target.value)} 
          value={analysisType}
        >
          <Radio value="summary">Generate Summary</Radio>
          <Radio value="keywords">Extract Keywords</Radio>
          <Radio value="structure">Analyze Structure</Radio>
        </Radio.Group>
      </Card>
      
      {loading && (
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <Spin size="large" tip="Analyzing document..." />
        </div>
      )}
      
      {result && (
        <Card title="Analysis Results" className="result-card">
          <div style={{ whiteSpace: 'pre-wrap' }}>
            {result}
          </div>
        </Card>
      )}
    </div>
  );
};

export default WatsonDocAnalyzer; 