import { PiUserCircleDuotone } from "react-icons/pi";
import "./Preview.css";
import { useState } from "react";

function Preview({ key, clicked, onClick, name, lastMessage }) {
  return (
    <div class={`preview ${clicked ? "clicked" : ""}`} onClick={onClick}>
      <PiUserCircleDuotone />
      <div class="body">
        <div class="top">
          <div class="name">Name: {name} </div>
          <div class="time">{lastMessage?.dateTime.substring(0, 10)}</div>
        </div>

        <div class="text">{lastMessage?.msg}</div>
      </div>
    </div>
  );
}

export default Preview;
