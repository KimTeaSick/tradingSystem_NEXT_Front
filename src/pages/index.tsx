import Main from "@/components/Main";
import { Inter } from "@next/font/google";
import Investment from "../components/Investment";
import RootLayout from "./layout";
import "./layout.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <RootLayout>
      <div className="content_section">
        {/* <Investment /> */}
        <Main />
      </div>
    </RootLayout>
  );
}
