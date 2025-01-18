import {
  ChatHistoryType,
  MessageResponseType,
  SendMessageRequestType,
  UserHistoryType,
} from "types/chat.types";
import { ChatHistoryUrl, GeminiAISendMessageUrl, UserHistoryUrl } from "./configs";
import { PostJSON, getJSON } from "./http-service";

export const getUserHistoryRequest = (userId: string) => {
  return getJSON<UserHistoryType[]>(UserHistoryUrl(userId));
};

export const getChatConversationRequest = (chatId: string, userId: string) => {
  return getJSON<ChatHistoryType[]>(ChatHistoryUrl(chatId, userId));
};

export const sendMessageRequest = (data: SendMessageRequestType, signal?: AbortSignal) => {
  return PostJSON<MessageResponseType>(GeminiAISendMessageUrl, { data, signal });
};
