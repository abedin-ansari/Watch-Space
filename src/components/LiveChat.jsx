import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  useEffect(() => {
    const i = setInterval(() => {
      // API POLLING
      console.log("API Polling");
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-400 rounded-lg">
      <ChatMessage name="Munchun" message="I am Munchun" />
      <ChatMessage name="Munchun" message="I am Munchun" />
      <ChatMessage name="Munchun" message="I am Munchun" />
      <ChatMessage name="Munchun" message="I am Munchun" />
      <ChatMessage name="Munchun" message="I am Munchun" />
      <ChatMessage name="Munchun" message="I am Munchun" />
      <ChatMessage name="Munchun" message="I am Munchun" />
    </div>
  );
};

export default LiveChat;
