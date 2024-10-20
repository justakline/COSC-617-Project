import React from "react";
import "./ChatMessage.css";

function ChatMessage({ key, message, isSender, time }) {
  const fromMessage = isSender ? "sender" : "receiver";

  return (
    <div class={`chat-message-wrapper-${fromMessage}`}>
      <div className={`chat-message-${fromMessage} chat-message`}>
        <div className={`message-${fromMessage}`}> {message} </div>
        <div className={`time-${fromMessage}`}>{time.substring(10)}</div>
      </div>
    </div>
  );
}

export default ChatMessage;
