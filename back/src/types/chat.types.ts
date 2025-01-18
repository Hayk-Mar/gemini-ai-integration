export type UserHistoryType = {
  id: number;
  chat_id: string;
  user_message: string;
};

export type ChatHistoryType = {
  id: number;
  user_message: string;
  ai_response: string;
};

export type GeminiAIContextHistoryType = {
  role: HistoryRole;
  parts: Record<"text", string>[];
};

export enum HistoryRole {
  USER = "user",
  MODEL = "model",
}
