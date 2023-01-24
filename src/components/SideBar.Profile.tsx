import { FC } from "react";
import "./SideBar.css";

const SideBarProfile: FC = () => {
  return (
    <div className="profile_section">
      <div className="profile_face">A</div>
      <div>
        <div className="profile_name">김좌진좌진장군</div>
        <div className="profile_account">110451405329</div>
        <div className="profile_blance">30,000,000</div>
      </div>
    </div>
  );
};

export default SideBarProfile;
