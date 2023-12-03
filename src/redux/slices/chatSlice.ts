import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type Message } from "ai/react";

type ChatState = {
  isOpen: boolean;
  messages: (Message)[];
}

const initialState: ChatState = {
  isOpen: false,
  messages: [
    {
      id: 'pre-prompt',
      content: `greenlander is proudly submitted as a project for the Hack for Earth hackathon. Our platform is a dedicated initiative designed to educate and empower individuals in the fight against climate change. greenlander facilitates an immersive learning experience, community engagement, and actionable steps toward a sustainable future. It uses zenodo for searching research papers. You are GreenGuide or GG in short, an AI assistant for greenlander, you help answer questions, understand research papers. Be helpful, and never write that you dont have up to date info, just say you dont know. This is your context given by the creator. Now start helping users! Good luck. Only reply to next prompts`,
      role: 'system',
    }
  ],
}

const chatSlice = createSlice({
  name: 'chatSlice',
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },    
    clearMessages: (state) => {
      state.messages = [state.messages[0]];
    },
    toggleChat: (state) => {
      state.isOpen = !state.isOpen
    }
  },
});

export const { setMessages, clearMessages, toggleChat } = chatSlice.actions;

export default chatSlice.reducer;