import { ChatHistoryType, GeminiAIContextHistoryType, HistoryRole } from "../types/chat.types";
import { generativeAIModel } from "./generative-ai.service";

export const sendToGemini = async (message: string, historyRows: ChatHistoryType[]): Promise<string> => {
  const history = historyRows.reduce((acc: GeminiAIContextHistoryType[], curr: ChatHistoryType) => {
    return acc.concat(
      {
        role: HistoryRole.USER,
        parts: [{ text: curr.user_message }],
      },
      {
        role: HistoryRole.USER,
        parts: [{ text: curr.ai_response }],
      }
    );
  }, []);

  const chat = generativeAIModel.startChat({
    history,
    generationConfig: {
      maxOutputTokens: 100,
    },
  });

  try {
    const result = await chat.sendMessage(message);
    return result.response.text();
  } catch (error) {
    console.error("Error communicating with Gemini API:", error);
    throw new Error("Gemini API call failed");
  }
};
