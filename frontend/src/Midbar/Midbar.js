import { BiSearch } from "react-icons/bi";
import "./Midbar.css";
import ReactSearchBox from "react-search-box";
import { CgAdd } from "react-icons/cg";
import Preview from "../Previews/Preview";
import { useState } from "react";

function Midbar({
  selectedPreviewIndex,
  setSelectedPreviewIndex,
  handleGetMessages,
  allChats,
}) {
  const groupingButtons = ["All", "Unread", "Favorites"];
  var [selectedGroupingIndex, setSelectedGroupingIndex] = useState(-1);
  return (
    <div class="midBar">
      <div class="titleTop">
        <h1>Chats</h1>
        <CgAdd onClick={() => {}} />
      </div>
      <div class="searchbar">
        <ReactSearchBox
          leftIcon={<BiSearch />}
          placeholder="Search"
          onSelect={() => {}}
          onFocus={() => {}}
          data={[]}
        />
      </div>

      <div class="groupings">
        {groupingButtons.map((_, i) => (
          <button
            key={i}
            class={`groupingItem ${
              i == selectedGroupingIndex ? "groupingClicked" : ""
            }`}
            onClick={() => {
              setSelectedGroupingIndex(i);
            }}
          >
            {_}
          </button>
        ))}
      </div>

      <div class="previews">
        {/* Sample */}
        {allChats.map((chat, i) => {
          console.log(chat.messages[chat.messages.length - 1]);
          return (
            <Preview
              key={i}
              clicked={i == selectedPreviewIndex}
              onClick={() => {
                setSelectedPreviewIndex(i);
                handleGetMessages(i);
              }}
              name={chat.id}
              lastMessage={chat.messages[chat.messages.length - 1]}
            />
          );
        })}

        {/* {[...Array(18)].map((_, i) => (
          <Preview
            key={i}
            clicked={i == selectedPreviewIndex}
            onClick={() => {
              setSelectedPreviewIndex(i);
              handleGetMessages(i);
            }}
          />
        ))} */}
      </div>
    </div>
  );
}

export default Midbar;
