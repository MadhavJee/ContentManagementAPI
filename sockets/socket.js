import { sendChatService } from "../services/chat.service.js";

export const registerSocketHandlers = (io) => {
    const onlineUsers = new Map();

    io.on("connection", (socket) => {
        console.log("New client connected:", socket.id);