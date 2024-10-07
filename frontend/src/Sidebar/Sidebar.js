import { BiChat } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { GrGroup, GrStatusInfo, GrStatusPlaceholder } from "react-icons/gr";
import { SiStatuspage } from "react-icons/si";
import { SlSettings } from "react-icons/sl";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div class="sideBar">
      <div class="iconSection upper">
        <BiChat />
        <SiStatuspage />
        <GrGroup />
      </div>
      <div class="iconSection lower">
        <SlSettings />
        <CgProfile />
      </div>
    </div>
  );
}

export default Sidebar;
