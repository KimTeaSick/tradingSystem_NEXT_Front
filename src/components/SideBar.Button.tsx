import { FC } from "react";
import "./SideBar.css";

interface SideBarButtonProps {
  title: string;
}

const SideBarButton: FC<SideBarButtonProps> = ({ title }) => {
  return (
    <div className="button">
      <div className="button_text">{title}</div>
    </div>
  );
};

export default SideBarButton;
