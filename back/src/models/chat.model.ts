import { db } from "../db";
import dotenv from "dotenv";
import { ChatHistoryType, UserHistoryType } from "../types/chat.types";
import { ResultSetHeader } from "mysql2";
dotenv.config();

export const saveChatMessage = async (
  userId: string,
  chatId: string,
  userMessage: string,
  aiResponse: string
): Promise<number> => {
  const query = "INSERT INTO chat_history (user_id, chat_id, user_message, ai_response) VALUES (?, ?, ?, ?)";
  const [result] = await db.execute<ResultSetHeader>(query, [userId, chatId, userMessage, aiResponse]);
  return result.insertId;
};

export const fetchHistoryByUserId = async (userId: string, limit?: number): Promise<UserHistoryType[]> => {
  const query =
    "SELECT id, chat_id, user_message FROM chat_history WHERE user_id = ? GROUP BY chat_id ORDER BY created_at DESC LIMIT ?";
  const [rows] = await db.execute(query, [userId, limit || 10]);
  return rows as UserHistoryType[];
};

export const fetchUserChatHistory = async (chatId: string, userId: string): Promise<ChatHistoryType[]> => {
  const query =
    "SELECT id, user_message, ai_response FROM chat_history WHERE chat_id = ? AND user_id = ? ORDER BY created_at ASC";
  const [rows] = await db.execute(query, [chatId, userId]);
  return rows as ChatHistoryType[];
};
