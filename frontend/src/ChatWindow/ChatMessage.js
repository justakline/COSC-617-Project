import React from "react";
import "./ChatMessage.css";

function ChatMessage({ message, isSender }) {
  const fromMessage = isSender ? "sender" : "receiver";

  return (
    <div class={`chat-message-wrapper-${fromMessage}`}>
      <div className={`chat-message-${fromMessage} chat-message`}>
        <p> {message} </p>
      </div>
    </div>
  );
}

export default ChatMessage;
