import Midbar from "../Midbar/Midbar";
import Sidebar from "../Sidebar/Sidebar";
import ChatWindow from "../ChatWindow/ChatWindow";
import "./FullWindow.css";
import { useEffect, useState } from "react";
import ExampleMessages from "../ExampleMessages.json";

function FullWindow() {
  // This tells us which friend we are conversing with
  var [selectedPreviewIndex, setSelectedPreviewIndex] = useState(-1);
  const [messages, setMessages] = useState([]);

  const [chats, setChats] = useState([]);

  useEffect(() => {
    const sortedChats = [...ExampleMessages].sort((a, b) => {
      const lastMessageA = a.messages.length
        ? new Date(a.messages[a.messages.length - 1].dateTime)
        : null;
      const lastMessageB = b.messages.length
        ? new Date(b.messages[b.messages.length - 1].dateTime)
        : null;

      // If one of the chats has no messages, place it at the end
      if (!lastMessageA) return 1;
      if (!lastMessageB) return -1;

      // Otherwise, sort by the most recent message date
      return lastMessageB - lastMessageA;
    });

    setChats(sortedChats);
  }, [messages]);

  // Using example messages, but we need to replace this with database calls
  const handleGetMessages = (otherID) => {
    var items = ExampleMessages.filter((item) => item.id == otherID);
    setMessages(items[0].messages);
  };

  const handleSetNewMessage = (otherID, senderID, date, msg) => {
    var chat = ExampleMessages.find((chat) => chat.id == otherID);
    const newMessage = { sender: senderID, dateTime: date, msg: msg };
    chat.messages.push(newMessage);
    // Want the preview to move to the top and have the highlight also move
    setSelectedPreviewIndex(0);
  };

  return (
    <div class="fullWindow">
      <Sidebar />
      <Midbar
        selectedPreviewIndex={selectedPreviewIndex}
        setSelectedPreviewIndex={setSelectedPreviewIndex}
        handleGetMessages={handleGetMessages}
        allChats={chats}
      />
      <ChatWindow
        messages={messages}
        setMessages={setMessages}
        otherID={chats[selectedPreviewIndex]?.id}
        handleSetNewMessage={handleSetNewMessage}
      />
    </div>
  );
}

export default FullWindow;
