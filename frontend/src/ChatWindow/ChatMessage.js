import React from 'react';
import './ChatMessage.css';

function ChatMessage({ message, isSender }) {
 
  const fromMessage = isSender ? 'Sender: ' : 'Receiver:'

  return (
    <div className={`chat-message ${isSender ? 'sender' : 'receiver'}`}>
      <p> {fromMessage} {message}  </p>
    </div>
  );
}

export default ChatMessage;