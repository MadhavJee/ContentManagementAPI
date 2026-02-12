import express from "express";
import { getChatsByThread,sendChat } from "../controllers/chat.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const chatrouter = express.Router();

chatrouter.get("/:threadId", authMiddleware, getChatsByThread);
chatrouter.post("/", authMiddleware, sendChat);

export default chatrouter;