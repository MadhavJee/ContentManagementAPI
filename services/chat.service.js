import { now } from "mongoose";
import Chat from "../models/chat.model.js";
import Thread from "../models/thread.model.js";

export const getChatsByThreadService = async (threadId) => {
    return await Chat.find({thread:threadId})
    .populate("sender", "name email")
    .sort({ createdAt: -1 });
};

export const sendChatService = async ({
    senderId,
    receiverId,
    message
})=>{
    const thread = await findOrCreateThreadService(senderId, receiverId);

    const chat = await Chat.create({
        thread: thread._id,
        sender: senderId,
        message:message
    });

    thread.lastMessage = message;
    thread.lastMessageAt = new Date();
    await thread.save();
    return chat;

};

export const findOrCreateThreadService = async (userId1, userId2) => {

    const participants = [userId1, userId2].sort(); // Sort to ensure consistent order

    let threads = await Thread.findOne({
        participants: { $all: participants },
        $expr: { $eq: [{ $size: "$participants" }, 2] } // Ensure exactly 2 participants
    });

    if (!threads) {
        threads = await Thread.create({
            participants
        });
    }

    return threads;
};
