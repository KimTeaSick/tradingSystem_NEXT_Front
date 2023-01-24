import { FC } from "react";
import "./content.css";
import KoKo from "./Main.KospiKosdaq";

const Main: FC = () => {
  return (
    <div>
      <div className="content_title">Main</div>
      <KoKo title="Kospi" />
      <KoKo title="Kosdaq" />
    </div>
  );
};

export default Main;
