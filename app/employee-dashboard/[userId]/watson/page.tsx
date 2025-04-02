'use client';

import { FileUp } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function WatsonPage() {
  const params = useParams();
  const [documentText, setDocumentText] = useState('');
  const [analysisType, setAnalysisType] = useState('summary');
  const [results, setResults] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [error, setError] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [maxTokens, setMaxTokens] = useState(900);
  const [temperature, setTemperature] = useState(0.1);
  const [fileType, setFileType] = useState('');
  const [usingMockData, setUsingMockData] = useState(false);

  // Read file as text
  const readFileAsText = async (file: File): Promise<string> => {
    const fileExt = file.name.split('.').pop()?.toLowerCase() || '';
    setFileType(fileExt);
    
    // Special handling for PDF files
    if (fileExt === 'pdf') {
      setError('Cannot directly parse PDF files. Please copy and paste PDF content into the text box.');
      return '';
    }
    
    // Process text files
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === 'string') {
          resolve(e.target.result);
        } else {
          reject(new Error('Failed to read file'));
        }
      };
      reader.onerror = () => reject(new Error('Error reading file'));
      reader.readAsText(file);
    });
  };

  // Handle file upload
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    setUsingMockData(false);
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setUploadedFileName(file.name);

      try {
        const text = await readFileAsText(file);
        if (text) {
          setDocumentText(text);
        }
      } catch (error) {
        console.error('File reading error:', error);
        setError('Failed to read file. Please try another file or paste text content directly.');
      }
    }
  };

  // Handle document analysis
  const handleDocumentAnalysis = async () => {
    setError('');
    setUsingMockData(false);
    if (!documentText.trim()) {
      setError('Please provide document content or upload a file');
      return;
    }

    setIsLoading(true);
    setResults('');

    try {
      const response = await fetch('/api/watson/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: documentText,
          analysisType,
          maxTokens,
          temperature
        }),
      });

      // Detailed HTTP error handling
      if (!response.ok) {
        const statusCode = response.status;
        let errorMsg = `API request failed: ${statusCode}`;
        
        // More detailed explanations for common errors
        if (statusCode === 403) {
          // Check if this is a quota issue by examining response
          const errorText = await response.text();
          if (errorText.includes('token_quota_reached')) {
            // The backend should handle this and provide mock data anyway
            errorMsg = 'IBM Watson API quota exceeded. A simulated analysis will be provided.';
            setUsingMockData(true);
          } else {
            errorMsg = 'API authorization failed (403): IBM Watson API key may be expired or invalid';
          }
        } else if (statusCode === 429) {
          errorMsg = 'Request rate too high (429): API call limit exceeded, please try again later';
        } else if (statusCode >= 500) {
          errorMsg = 'Watson server error: Please try again later';
        }
        
        throw new Error(errorMsg);
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }
      
      // Check if this is mock data
      if (data.results && data.results[0] && data.results[0].generated_text &&
          data.results[0].generated_text.includes('Note: This is a simulated result')) {
        setUsingMockData(true);
      }
      
      // Extract analysis results
      if (data.results && data.results[0] && data.results[0].generated_text) {
        setResults(data.results[0].generated_text);
      } else {
        throw new Error('Unable to parse analysis results');
      }
    } catch (error) {
      console.error('Document analysis failed:', error);
      
      // Don't show error if we're using mock data
      if (!usingMockData) {
        setError(`Document analysis failed, please retry: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">IBM Watson Document Analysis</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Input section */}
        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Document Input</h2>
          
          <div className="mb-4">
            <label className="block mb-2 font-medium">Analysis Type</label>
            <select
              value={analysisType}
              onChange={(e) => setAnalysisType(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="summary">Content Summary</option>
              <option value="keywords">Keyword Extraction</option>
              <option value="structure">Document Structure Analysis</option>
              <option value="general">Comprehensive Analysis</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block mb-2 font-medium">Document Content</label>
            <textarea
              value={documentText}
              onChange={(e) => {
                setDocumentText(e.target.value);
                setUsingMockData(false);
              }}
              className="w-full p-2 border rounded h-64"
              placeholder="Enter document content or upload a file..."
            />
          </div>
          
          <div className="mb-4">
            <label className="block mb-2 font-medium">Upload File</label>
            <div className="flex items-center">
              <label className="flex items-center justify-center p-2 border rounded cursor-pointer hover:bg-gray-50">
                <FileUp className="mr-2" size={20} />
                <span>Choose File</span>
                <input 
                  type="file"
                  accept=".txt,.md,.doc,.docx"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
              {uploadedFileName && (
                <span className="ml-2 text-sm text-gray-600">
                  {uploadedFileName}
                  {fileType === 'pdf' && (
                    <span className="text-red-500 ml-1">(PDF must be manually copied)</span>
                  )}
                </span>
              )}
            </div>
            <div className="mt-1 text-xs text-gray-500">
              Note: Only text files (.txt) and Markdown (.md) files are supported for direct parsing
            </div>
          </div>
          
          <div className="mb-4">
            <button
              type="button"
              className="text-sm text-blue-600 hover:text-blue-800"
              onClick={() => setShowAdvanced(!showAdvanced)}
            >
              {showAdvanced ? 'Hide Advanced Options' : 'Show Advanced Options'}
            </button>
            
            {showAdvanced && (
              <div className="mt-2 p-3 border rounded bg-gray-50">
                <div className="mb-3">
                  <label className="block mb-1 text-sm font-medium">Maximum Output Length ({maxTokens})</label>
                  <input 
                    type="range" 
                    min="100" 
                    max="3000" 
                    step="100" 
                    value={maxTokens}
                    onChange={(e) => setMaxTokens(parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Shorter</span>
                    <span>Longer</span>
                  </div>
                </div>
                
                <div className="mb-2">
                  <label className="block mb-1 text-sm font-medium">Creativity Level ({temperature.toFixed(2)})</label>
                  <input 
                    type="range" 
                    min="0" 
                    max="1" 
                    step="0.05" 
                    value={temperature}
                    onChange={(e) => setTemperature(parseFloat(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>More Accurate</span>
                    <span>More Creative</span>
                  </div>
                </div>
                
                <p className="text-xs text-gray-600 mt-1">
                  Tip: Lowering the creativity level can improve analysis accuracy and fidelity, but may result in more conservative results.
                </p>
              </div>
            )}
          </div>
          
          {error && (
            <div className="mb-4 p-2 bg-red-50 text-red-600 border border-red-200 rounded">
              {error}
            </div>
          )}
          
          <button
            onClick={handleDocumentAnalysis}
            disabled={isLoading || !documentText.trim()}
            className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-300"
          >
            {isLoading ? 'Analyzing...' : 'Analyze Document'}
          </button>
        </div>
        
        {/* Output section */}
        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
          
          {usingMockData && (
            <div className="mb-4 p-2 bg-yellow-50 text-amber-700 border border-yellow-200 rounded text-sm">
              <strong>Note:</strong> IBM Watson API quota has been exceeded. The analysis below is generated using a simulation and may not reflect the full capabilities of the Watson AI service.
            </div>
          )}
          
          <div className="p-3 border rounded bg-gray-50 h-[500px] overflow-y-auto">
            {isLoading ? (
              <div className="flex justify-center items-center h-full">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
              </div>
            ) : results ? (
              <div className="whitespace-pre-line">{results}</div>
            ) : (
              <div className="text-gray-500 text-center h-full flex items-center justify-center">
                Analysis results will be displayed here
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 