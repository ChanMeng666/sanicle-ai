// Watson服务响应类型定义

export interface WatsonAPIResponse {
  results: {
    generated_text: string;
  }[];
  model_id: string;
  created_at?: string;
  input_token_count?: number;
}

export type AnalysisType = 'summary' | 'keywords' | 'structure'; 