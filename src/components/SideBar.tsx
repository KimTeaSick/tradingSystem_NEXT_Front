import { FC } from "react";
import "./SideBar.css";
import SideBarButton from "./SideBar.Button";
import SideBarProfile from "./SideBar.Profile";

const SideBar: FC = () => {
  return (
    <div className="sidebar_inner">
      <div>NC trading system</div>
      <SideBarProfile />
      <SideBarButton title="Dash" />
      <SideBarButton title="Investment" />
      <SideBarButton title="Dash" />
      <SideBarButton title="Dash" />
      <SideBarButton title="Dash" />
      <SideBarButton title="Dash" />
      <SideBarButton title="Dash" />
    </div>
  );
};

export default SideBar;
