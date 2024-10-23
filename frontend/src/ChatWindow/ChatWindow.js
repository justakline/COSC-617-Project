import React, { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import "./ChatWindow.css";
import { PiUserCircleDuotone } from "react-icons/pi";

import { BiDotsVerticalRounded } from "react-icons/bi";

function ChatWindow({ messages, setMessages, otherID, handleSetNewMessage }) {
  // Create a ref to track the bottom of the message list. Used to make it scroll you to the bottom when sending a new message
  const messageEndRef = useRef(null);
  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // When you click send or enter for a messages that is typed out
  const [inputValue, setInputValue] = useState("");
  const sendMessage = () => {
    if (otherID === -1) {
      return;
    }
    // If not empty
    if (inputValue.trim() !== "") {
      const date = new Date();
      console.log(`Sending to ${otherID}`);
      const formattedDate = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      // console.log(formattedDate);

      setMessages([
        ...messages,
        {
          sender: -1, //Myself right now
          dateTime: formattedDate,
          msg: inputValue,
        },
      ]);
      handleSetNewMessage(otherID, -1, formattedDate, inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <div className="chat-header-left">
          <PiUserCircleDuotone class="user-icon-chat" />
          Name: {otherID ? otherID : ""}
        </div>
        <div className="chat-header-right">
          <BiDotsVerticalRounded class="user-right" />
        </div>
      </div>
      <div className="chat-body">
        {/* Creates a chat message for each message and then displays them based on if they are the sender or not */}

        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            message={msg.msg}
            isSender={msg.sender === -1 ? true : false}
            time={msg.dateTime}
          />
        ))}
        <div ref={messageEndRef} />
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
    // </ResizableBox>
  );
}

export default ChatWindow;
