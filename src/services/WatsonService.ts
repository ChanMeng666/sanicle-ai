// Watson API服务类
import { WatsonAPIResponse, AnalysisType } from './types';

const API_KEY = 'j7aNOU6BcA-4-3BGbFKnm3VAgu2Np71U8HrTPHuKNWI0';
const PROJECT_ID = '0dfba07f-e18a-4468-879e-3c055588f361';
const MODEL_ID = 'meta-llama/llama-3-405b-instruct';
const API_URL = 'https://us-south.ml.cloud.ibm.com/ml/v1/text/generation?version=2023-05-29';

class WatsonService {
  /**
   * 获取Watson API的访问令牌
   * @returns {Promise<string>} 访问令牌
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
        throw new Error(`获取访问令牌失败: ${response.status}`);
      }
      
      const data = await response.json();
      return data.access_token;
    } catch (error) {
      console.error('获取访问令牌出错:', error);
      throw error;
    }
  }

  /**
   * 分析文档内容
   * @param {string} text - 要分析的文本内容
   * @param {AnalysisType} analysisType - 分析类型（summary, keywords, structure）
   * @returns {Promise<WatsonAPIResponse>} - 分析结果
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
        throw new Error(`API请求失败: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('文档分析出错:', error);
      throw error;
    }
  }
  
  /**
   * 根据分析类型获取提示词
   * @param {AnalysisType} type - 分析类型
   * @param {string} text - 文本内容
   * @returns {string} - 格式化的提示词
   */
  static getAnalysisPrompt(type: AnalysisType, text: string): string {
    switch (type) {
      case 'summary':
        return `请对以下文档内容生成一个详细的摘要，突出主要观点和关键信息：\n\n${text}`;
      case 'keywords':
        return `请从以下文档中提取关键词和核心概念，并解释它们的重要性：\n\n${text}`;
      case 'structure':
        return `请分析以下文档的结构，识别主要章节、论点和逻辑关系：\n\n${text}`;
      default:
        return `请分析以下文档并提供详细摘要：\n\n${text}`;
    }
  }
}

export default WatsonService; 