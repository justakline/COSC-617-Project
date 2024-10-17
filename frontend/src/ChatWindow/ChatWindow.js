import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import "./ChatWindow.css";
import { ResizableBox } from "react-resizable";

function ChatWindow() {
  // Test values for now
  const [messages, setMessages] = useState([
    { text: "Hi there!", isSender: false },
    { text: "Hello!", isSender: true },
    { text: "How are you?", isSender: false },
    { text: "I'm good, thanks!", isSender: true },
  ]);

  const [inputValue, setInputValue] = useState("");

  const sendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, { text: inputValue, isSender: true }]);
      setInputValue("");
    }
  };

  return (
    // Allows for changing the size of teh boz
    // <ResizableBox
    //   // width={300}
    //   // height={400}

    //   minConstraints={[200, 200]}
    //   maxConstraints={[600, 800]}
    //   handleSize={[20, 20]}
    // >
    <div className="chat-window">
      <div className="chat-header">Chat</div>
      <div className="chat-body">
        {/* Creates a chat message for each message and then displays them based on if they are the sender or not */}
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg.text} isSender={msg.isSender} />
        ))}
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
