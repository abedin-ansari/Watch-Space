import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/Helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API POLLING
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div>
        <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-400 rounded-lg overflow-y-scroll flex flex-col-reverse">
          {chatMessages.map((c, i) => (
            <ChatMessage name={c.name} message={c.message} key={i} />
          ))}
        </div>
        <form
          className="w-full p-2 ml-2 border border-gray-600"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: "AJ",
                message: liveMessage,
              })
            );
            setLiveMessage("");
          }}
        >
          <input
            className="w-96 px-2"
            type="text"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
            placeholder="Type Here"
          />
          <button className="px-2 mx-2 bg-green-200">Send</button>
        </form>
      </div>
    </>
  );
};

export default LiveChat;
