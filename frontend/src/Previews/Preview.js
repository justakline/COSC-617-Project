import { PiUserCircleDuotone } from "react-icons/pi";
import "./Preview.css";

function Preview() {
  return (
    <div class="preview">
      <PiUserCircleDuotone />
      <div class="body">
        <div class="top">
          <div class="name"> My name</div>
          <div class="time"> 08/30/2024 01:20PM</div>
        </div>

        <div class="text">This is a sample message</div>
      </div>
    </div>
  );
}

export default Preview;
