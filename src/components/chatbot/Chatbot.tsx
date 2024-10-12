import React, { useEffect, useRef, useState } from "react";
import { ChatMessage } from "@/models/interfaces";
import chatbotImg from "@/../public/chatbot/chatbot.png";
import ChevronDownIcon from "@/icons/ChevronDownIcon";
import ChatbotMessage from "./ChatbotMessage";
import ChatIcon from "@/icons/ChatIcon";
import SendIcon from "@/icons/SendIcon";
import { Button, Input } from "@headlessui/react";
import { motion } from "framer-motion";

export default function Chatbot() {
  // Setup states
  const [collapsed, setCollapsed] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { bot: "Hi!", user: "" },
    {
      bot: "I’m VinBot. An AI assistant here to answer your questions about Vin Bui's portfolio.",
      user: "",
    },
    {
      bot: "How can I help you today?",
      user: "",
    },
  ]);

  // Auto scroll to bottom
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Handle input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSend = async () => {
    if (!userInput) return;

    const userMessage = userInput;
    setMessages([...messages, { user: userMessage, bot: "..." }]); // Placeholder for bot response
    setUserInput("");

    try {
      const response = await fetch("/api", {
        // Send request to API route
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userMessage }),
      });

      const data = await response.json();
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { user: userMessage, bot: data.content || "No response received." },
      ]);
    } catch (err) {
      console.error("Error fetching from API:", err);
      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          user: userMessage,
          bot: "Sorry, I couldn't process that. An error occurred.",
        },
      ]);
    }
  };

  return (
    <motion.div
      initial={{ top: "calc(100% - 64px)" }}
      animate={collapsed ? { top: "calc(100% - 64px)" } : { top: "30%" }}
      transition={{ ease: "easeOut", duration: 0.25 }}
      className="fixed flex flex-col gap-6 max-lg:hidden w-[360px] shadow-sm bg-primary-100 rounded-t-2xl bottom-0 right-[calc((100%-1127px)/2)]"
    >
      {/* Header */}
      <div
        className="flex flex-row justify-between items-center p-4 bg-primary-200 rounded-t-2xl cursor-pointer hover:bg-primary-300 transition-colors"
        onClick={() => setCollapsed(!collapsed)}
      >
        <div className="flex flex-row gap-4 items-center">
          <img src={chatbotImg.src} alt="Image of VinBot" className="w-8 h-8" />
          <p className="b1 font-semibold">VinBot</p>
        </div>
        <ChevronDownIcon
          className={`w-5 h-5 stroke-neutral-900 transition-all ${
            collapsed && "rotate-180"
          }`}
        />
      </div>

      {/* Messages */}
      <div className="flex flex-col mx-4 gap-2 items-start overflow-y-auto h-full">
        {messages.map((msg, index) => (
          <ChatbotMessage msg={msg} key={index} />
        ))}
        <div ref={messagesEndRef} /> {/* Empty div for scrolling */}
      </div>

      {/* Input */}
      <div className="flex flex-row gap-2 items-center py-3 px-4 mx-4 mb-6 rounded-2xl border border-primary-500">
        <ChatIcon className="w-5 h-5 stroke-neutral-500" />
        <Input
          value={userInput}
          type="text"
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="b2 font-regular bg-primary-100 outline-none w-full text-neutral-900"
          placeholder="Ask anything..."
          autoSave="off"
          autoComplete="off"
        />
        <Button onClick={handleSend}>
          <SendIcon
            className={`w-5 h-5 transition-colors ${
              userInput.length > 0 ? "fill-neutral-900" : "fill-neutral-500"
            }`}
          />
        </Button>
      </div>
    </motion.div>
  );
}
