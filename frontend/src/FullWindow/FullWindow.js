import Midbar from "../Midbar/Midbar";
import Sidebar from "../Sidebar/Sidebar";
import ChatWindow from "../ChatWindow/ChatWindow";
import "./FullWindow.css";
import { useState } from "react";
import ExampleMessages from "../ExampleMessages.json";

function FullWindow() {
  // This tells us which friend we are conversing with
  var [selectedPreviewIndex, setSelectedPreviewIndex] = useState(-1);
  const [messages, setMessages] = useState([]);

  // Using example messages, but we need to replace this with database calls
  const handleGetMessages = (otherID) => {
    var items = ExampleMessages.filter((item) => item.id == otherID);
    setMessages(items[0].messages);
  };

  const handleSetNewMessage = (otherID, senderID, date, msg) => {
    var chat = ExampleMessages.find((chat) => chat.id == otherID);
    const newMessage = { sender: senderID, dateTime: date, msg: msg };
    chat.messages.push(newMessage);
  };

  return (
    <div class="fullWindow">
      <Sidebar />
      <Midbar
        selectedPreviewIndex={selectedPreviewIndex}
        setSelectedPreviewIndex={setSelectedPreviewIndex}
        handleGetMessages={handleGetMessages}
      />
      <ChatWindow
        messages={messages}
        handleGetMessages={handleGetMessages}
        setMessages={setMessages}
        otherID={selectedPreviewIndex}
        handleSetNewMessage={handleSetNewMessage}
      />
    </div>
  );
}

export default FullWindow;
