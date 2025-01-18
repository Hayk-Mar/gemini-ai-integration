import { Request, Response } from "express";
import { sendToGemini } from "../services/gemini.service";
import { saveChatMessage, fetchUserChatHistory, fetchHistoryByUserId } from "../models/chat.model";
import { v6 as uuid6 } from "uuid";

export const sendMessage = async (req: Request, res: Response) => {
  const { userId, message } = req.body;
  let { chatId } = req.body;

  if (!userId || !message) {
    res.status(400).json({ error: "userId and message are required" });
    return;
  }

  try {
    let history = chatId ? await fetchUserChatHistory(chatId, userId) : [];
    if (!chatId) {
      chatId = uuid6();
    }
    const aiResponse = await sendToGemini(message, history);
    const insertId = await saveChatMessage(userId, chatId, message, aiResponse);
    res.json({ id: insertId, user_message: message, ai_response: aiResponse, chatId, userId });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to process the request" });
  }
};

export const getUserHistory = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const history = await fetchHistoryByUserId(userId);
    res.json(history);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch history" });
  }
};

export const getChat = async (req: Request, res: Response) => {
  const { chatId, userId } = req.params;

  try {
    const chat = await fetchUserChatHistory(chatId, userId);
    res.json(chat);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch chat history" });
  }
};
