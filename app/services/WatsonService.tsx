// Watson API Service Class

// Define response type
export interface WatsonAPIResponse {
  results: {
    generated_text: string;
  }[];
  model_id: string;
  created_at?: string;
  input_token_count?: number;
}

export type AnalysisType = 'summary' | 'keywords' | 'structure';

const API_KEY = 'GsM9W1S79SM4iydzc_x6FgMX-bOnFz0unA9P1AIF6zZP';
const PROJECT_ID = 'e0e2029b-8452-40ef-8abe-4c46e9789521';
const MODEL_ID = 'meta-llama/llama-3-405b-instruct';
const API_URL = 'https://us-south.ml.cloud.ibm.com/ml/v1/text/generation?version=2023-05-29';

class WatsonService {
  /**
   * Get Watson API access token
   * @returns {Promise<string>} Access token
   */
  static async getAccessToken(): Promise<string> {
    try {
      const response = await fetch('https://iam.cloud.ibm.com/identity/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=${API_KEY}`,
      });
      
      if (!response.ok) {
        throw new Error(`Failed to get access token: ${response.status}`);
      }
      
      const data = await response.json();
      return data.access_token;
    } catch (error) {
      console.error('Error getting access token:', error);
      throw error;
    }
  }

  /**
   * Analyze document content
   * @param {string} text - Text content to analyze
   * @param {AnalysisType} analysisType - Analysis type (summary, keywords, structure)
   * @returns {Promise<WatsonAPIResponse>} - Analysis result
   */
  static async analyzeDocument(text: string, analysisType: AnalysisType = 'summary'): Promise<WatsonAPIResponse> {
    try {
      const token = await this.getAccessToken();
      const prompt = this.getAnalysisPrompt(analysisType, text);
      
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
            max_new_tokens: 900,
            min_new_tokens: 50,
            repetition_penalty: 1.1
          },
          model_id: MODEL_ID,
          project_id: PROJECT_ID
        })
      });
      
      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Document analysis error:', error);
      throw error;
    }
  }
  
  /**
   * Get prompt based on analysis type
   * @param {AnalysisType} type - Analysis type
   * @param {string} text - Text content
   * @returns {string} - Formatted prompt
   */
  static getAnalysisPrompt(type: AnalysisType, text: string): string {
    switch (type) {
      case 'summary':
        return `Please generate a detailed summary of the following document, highlighting the main points and key information:\n\n${text}`;
      case 'keywords':
        return `Please extract keywords and core concepts from the following document, and explain their importance:\n\n${text}`;
      case 'structure':
        return `Please analyze the structure of the following document, identifying main sections, arguments, and logical relationships:\n\n${text}`;
      default:
        return `Please analyze the following document and provide a detailed summary:\n\n${text}`;
    }
  }
}

export default WatsonService; 