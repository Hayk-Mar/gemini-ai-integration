export const GeminiAISendMessageUrl = "http://localhost:3000/api/chat/send";

export const UserHistoryUrl = (userId: string) => `http://localhost:3000/api/chat/user-history/${userId}`;
export const ChatHistoryUrl = (chatId: string, userId: string) =>
  `http://localhost:3000/api/chat/chat-conversation/${chatId}/${userId}`;
