import { Router } from "express";
import { sendMessage, getChat, getUserHistory } from "../controllers/chat.controller";

const router = Router();

router.post("/send", sendMessage);
router.get("/user-history/:userId", getUserHistory);
router.get("/chat-conversation/:chatId/:userId", getChat);

export default router;
