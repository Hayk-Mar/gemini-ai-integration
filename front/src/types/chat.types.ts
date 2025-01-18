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

export type SendMessageRequestType = Record<"userId" | "chatId" | "message", string>;

export type MessageResponseType = { id: number } & Record<
  "userId" | "chatId" | "user_message" | "ai_response",
  string
>;
