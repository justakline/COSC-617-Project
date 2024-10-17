import { BiSearch } from "react-icons/bi";
import "./Midbar.css";
import ReactSearchBox from "react-search-box";
import { CgAdd } from "react-icons/cg";
import Preview from "../Previews/Preview";
import { useState } from "react";

function Midbar() {
  return (
    <div class="midBar">
      <div class="titleTop">
        <h1>Chats</h1>
        <CgAdd />
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
        <button class="groupingItem">All</button>
        <button class="groupingItem">Unread</button>
        <button class="groupingItem">Favorites</button>
      </div>

      <div class="previews">
        {/* Sample */}
        {[...Array(18)].map((_, i) => (
          <Preview key={i} />
        ))}
      </div>
    </div>
  );
}

export default Midbar;
