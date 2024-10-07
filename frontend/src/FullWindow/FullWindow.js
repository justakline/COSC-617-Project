import Midbar from "../Midbar/Midbar";
import Sidebar from "../Sidebar/Sidebar";
import "./FullWindow.css";
function FullWindow() {
  return (
    <div class="fullWindow">
      <Sidebar />
      <Midbar />
    </div>
  );
}

export default FullWindow;
