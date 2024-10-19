import { PiUserCircleDuotone } from "react-icons/pi";
import "./Preview.css";
import { useState } from "react";

function Preview({key,clicked, onClick }) {

  
  return (
    <div class={`preview ${clicked? "clicked": ""}` } onClick={onClick}>
      <PiUserCircleDuotone />
      <div class="body">
        <div class="top">
          <div class="name">My name </div>
          <div class="time">08/30/2024 01:20PM</div>
        </div>

        <div class="text">This is a sample message</div>
      </div>
    </div>
  );
}

export default Preview;
