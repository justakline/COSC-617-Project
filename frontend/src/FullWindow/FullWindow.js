import Midbar from "../Midbar/Midbar";
import Sidebar from "../Sidebar/Sidebar";
import ChatWindow from "../ChatWindow/ChatWindow";
import "./FullWindow.css";
function FullWindow() {
  return (
    <div class="fullWindow">
      <Sidebar />
      <Midbar />
      <ChatWindow />
    </div>
  );
}

export default FullWindow;
