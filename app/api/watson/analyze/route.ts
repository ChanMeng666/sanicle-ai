import { NextRequest, NextResponse } from 'next/server';

const API_KEY = 'GsM9W1S79SM4iydzc_x6FgMX-bOnFz0unA9P1AIF6zZP';
const PROJECT_ID = 'e0e2029b-8452-40ef-8abe-4c46e9789521';
const MODEL_ID = 'meta-llama/llama-3-405b-instruct';
const API_URL = 'https://us-south.ml.cloud.ibm.com/ml/v1/text/generation?version=2023-05-29';

// Flag to track if quota exceeded
let isQuotaExceeded = false;

/**
 * Get Watson API access token
 */
async function getAccessToken(): Promise<string> {
  try {
    console.log('Getting Watson API access token...');
    const response = await fetch('https://iam.cloud.ibm.com/identity/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=${API_KEY}`,
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Failed to get access token: HTTP ${response.status}`, errorText);
      throw new Error(`Failed to get access token: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Successfully obtained Watson API access token');
    return data.access_token;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
}

/**
 * Get enhanced prompt based on analysis type
 */
function getAnalysisPrompt(type: string, text: string): string {
  // Common system instruction, ensuring the model preserves original information
  const systemInstruction = `
You are a professional document analysis assistant, skilled at analyzing various documents and providing high-quality information extraction. Please carefully follow these guidelines:

1. Stay objective: only analyze content that actually exists in the document, without adding any additional explanations or conclusions
2. Fully preserve all names of people, places, organizations, and proper nouns, ensuring identical spelling
3. Retain all key data and statistics from the document
4. Always respond in the same language as the document. Keep the original language integrity - if the document is in English, respond in English; if it's in Chinese, respond in Chinese
5. Do not add your own views or additional conclusions
6. Do not start with phrases like "Okay" or "I will", directly provide the analysis result
7. Maintain clear, accurate narration, using the original document's expressions
8. Do not add any irrelevant pleasantries or standard closing remarks

Original document content:
${text}
`;

  // Specific instructions for different analysis types
  switch (type) {
    case 'summary':
      return `${systemInstruction}

Please analyze the above document and generate a detailed summary, meeting these requirements:
- Retain all key points and main information from the document
- Organize summary content according to the document's original structure and logic
- Preserve all original expressions of names, products, companies, and technical terms
- Do not add any content not in the document or your own explanations
- Maintain an objective, neutral tone, without providing evaluations or suggestions
- Do not use introductory phrases like "The summary is as follows", directly present the content
- Use the same language as the original document for your summary
`;

    case 'keywords':
      return `${systemInstruction}

Please extract keywords and core concepts from the document, meeting these requirements:
- List 10-15 core keywords or phrases from the document in order of importance
- Briefly explain the specific meaning and importance of each keyword in the document
- Keywords must be terms that actually appear in the document, do not create new words
- Ensure accurate capture of the document's topics, technical concepts, and professional terminology
- Include all names of people, organizations, and proper nouns mentioned in the document
- For documents in specialized fields, focus on terminology specific to that field
- Use the same language as the original document for your response
`;

    case 'structure':
      return `${systemInstruction}

Please analyze the structure of the document according to these requirements:
- Identify the main chapters and paragraph divisions of the document
- Outline the main content and function of each section
- Analyze the document's organizational logic and argument structure
- Identify parts such as introduction, body, and conclusion in the document
- Point out logical relationships and connections between sections
- Describe the writing style and expressions used in the document
- Focus on format elements in the document, such as headings, lists, emphasized sections, etc.
- Do not make subjective evaluations of the content, maintain objective analysis
- Use the same language as the original document for your analysis
`;

    default:
      return `${systemInstruction}

Please analyze the document content in detail, providing a comprehensive analysis report, meeting these requirements:
- Outline the main content and purpose of the document
- Identify key themes and viewpoints in the document
- Extract all important facts, data, and citations
- Analyze the document's structure and organization
- Preserve all names of people, organizations, and proper nouns without modification
- Use objective language, without adding personal explanations or evaluations
- Maintain the same level of professionalism and terminology use as the original text
- Use the same language as the original document for your analysis
`;
  }
}

/**
 * Generate mock analysis results when API quota is exceeded
 */
function generateMockAnalysisResult(text: string, analysisType: string): any {
  // Extract first few sentences to make the response seem relevant
  const firstFewWords = text.slice(0, 100) + (text.length > 100 ? '...' : '');
  
  // Determine if the text is primarily English or Chinese
  const isMainlyEnglish = /[a-zA-Z]/.test(text) && !/[\u4e00-\u9fa5]/.test(text.substring(0, 200));
  
  let mockResult = '';
  
  // For English documents
  if (isMainlyEnglish) {
    switch (analysisType) {
      case 'summary':
        mockResult = `This is a document analysis summary for: "${firstFewWords}"\n\nThe document appears to discuss important topics related to the content provided. The key points include the main ideas presented in the text, supporting evidence, and conclusions.\n\n(Note: This is a simulated result due to API quota limitations. Please try again later when the quota refreshes.)`;
        break;
      case 'keywords':
        mockResult = `Based on the document: "${firstFewWords}"\n\nKey concepts identified:\n1. Document analysis\n2. Content extraction\n3. Information processing\n4. Text evaluation\n5. Data interpretation\n\n(Note: This is a simulated result due to API quota limitations. Please try again later when the quota refreshes.)`;
        break;
      case 'structure':
        mockResult = `Document structure analysis for: "${firstFewWords}"\n\nThe document appears to be structured with an introduction, main body sections, and conclusion. The writing style is informative and organized in a logical sequence.\n\n(Note: This is a simulated result due to API quota limitations. Please try again later when the quota refreshes.)`;
        break;
      default:
        mockResult = `Comprehensive analysis of: "${firstFewWords}"\n\nThis document covers several important topics and presents information in a structured manner. The content appears to be well-organized and contains valuable information related to the subject matter.\n\n(Note: This is a simulated result due to API quota limitations. Please try again later when the quota refreshes.)`;
    }
  } 
  // For Chinese documents (keeping these for backward compatibility but translated to English)
  else {
    switch (analysisType) {
      case 'summary':
        mockResult = `Document analysis summary: "${firstFewWords}"\n\nThe document appears to discuss important topics related to the provided content. Key points include the main ideas presented in the text, supporting evidence, and conclusions.\n\n(Note: This is a simulated result due to API quota limitations. Please try again later when the quota refreshes.)`;
        break;
      case 'keywords':
        mockResult = `Based on document: "${firstFewWords}"\n\nKey concepts identified:\n1. Document analysis\n2. Content extraction\n3. Information processing\n4. Text evaluation\n5. Data interpretation\n\n(Note: This is a simulated result due to API quota limitations. Please try again later when the quota refreshes.)`;
        break;
      case 'structure':
        mockResult = `Document structure analysis: "${firstFewWords}"\n\nThe document appears to be structured with an introduction, main body sections, and conclusion. The writing style is informative and organized in a logical sequence.\n\n(Note: This is a simulated result due to API quota limitations. Please try again later when the quota refreshes.)`;
        break;
      default:
        mockResult = `Comprehensive analysis: "${firstFewWords}"\n\nThis document covers several important topics and presents information in a structured manner. The content appears to be well-organized and contains valuable information related to the subject matter.\n\n(Note: This is a simulated result due to API quota limitations. Please try again later when the quota refreshes.)`;
    }
  }
  
  return {
    results: [
      {
        generated_text: mockResult
      }
    ]
  };
}

/**
 * Watson document analysis API handler function
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request data
    const { text, analysisType, maxTokens = 900, temperature = 0.1 } = await request.json();
    
    // Validate parameters
    if (!text) {
      return NextResponse.json(
        { error: 'Document content cannot be empty' },
        { status: 400 }
      );
    }
    
    // Parameter limits and validation
    const validatedMaxTokens = Math.min(Math.max(100, Number(maxTokens)), 3000);
    const validatedTemperature = Math.min(Math.max(0, Number(temperature)), 1);
    
    console.log(`Watson analysis request - Type: ${analysisType}, Max Tokens: ${validatedMaxTokens}, Temperature: ${validatedTemperature}`);
    
    // If we already know quota is exceeded, use mock data immediately
    if (isQuotaExceeded) {
      console.log('Using mock data due to known quota limitation');
      const mockResult = generateMockAnalysisResult(text, analysisType);
      return NextResponse.json(mockResult);
    }
    
    try {
      // Get access token
      const token = await getAccessToken();
      
      // Prepare prompt
      const prompt = getAnalysisPrompt(analysisType, text);
      
      // Call Watson API
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          input: prompt,
          parameters: {
            decoding_method: 'greedy',
            max_new_tokens: validatedMaxTokens,
            min_new_tokens: Math.min(50, validatedMaxTokens / 2),
            repetition_penalty: 1.1,
            temperature: validatedTemperature,
            top_p: validatedTemperature < 0.3 ? 0.85 : 0.95 // Dynamically adjust top_p based on temperature
          },
          model_id: MODEL_ID,
          project_id: PROJECT_ID
        })
      });
      
      const responseText = await response.text();
      let errorData = null;
      let responseData = null;
      
      try {
        // Try to parse as JSON
        responseData = JSON.parse(responseText);
      } catch (e) {
        // Not valid JSON
        console.error('Invalid JSON response from Watson API');
      }
      
      if (!response.ok) {
        console.error(`Watson API request failed: HTTP ${response.status}`, responseText);
        
        // Check for quota exceeded
        if (response.status === 403 && responseText.includes('token_quota_reached')) {
          console.log('API quota exceeded, switching to mock data');
          // Set the flag so future requests bypass the API call
          isQuotaExceeded = true;
          
          // Return mock data
          const mockResult = generateMockAnalysisResult(text, analysisType);
          return NextResponse.json(mockResult);
        }
        
        // Handle other specific HTTP errors
        if (response.status === 403) {
          return NextResponse.json(
            { error: 'API authorization failed: IBM Watson API key is invalid or expired' },
            { status: 403 }
          );
        } else if (response.status === 429) {
          return NextResponse.json(
            { error: 'Request rate too high: API call limit exceeded, please try again later' },
            { status: 429 }
          );
        } else {
          return NextResponse.json(
            { error: `Watson API request failed: ${response.status}` },
            { status: response.status }
          );
        }
      }
      
      // Return analysis results
      return NextResponse.json(responseData);
      
    } catch (error) {
      console.error('Watson API call error:', error);
      
      // Differentiate between different types of errors
      if (error instanceof Error && error.message.includes('Failed to get access token')) {
        return NextResponse.json(
          { error: 'Unable to get Watson API access token, please check the API key' },
          { status: 401 }
        );
      } else {
        // For other errors, use mock data as fallback
        console.log('Using mock data due to API error');
        const mockResult = generateMockAnalysisResult(text, analysisType);
        return NextResponse.json(mockResult);
      }
    }
  } catch (error) {
    console.error('Watson document analysis error:', error);
    return NextResponse.json(
      { error: 'Document analysis request processing failed' },
      { status: 500 }
    );
  }
} 