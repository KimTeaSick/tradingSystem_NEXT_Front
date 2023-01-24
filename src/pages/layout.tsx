import SideBar from "@/components/SideBar";
import { FC, ReactNode } from "react";
import "./layout.css";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html>
      <head>
        <title>nctrading</title>
      </head>
      <body>
        <SideBar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
