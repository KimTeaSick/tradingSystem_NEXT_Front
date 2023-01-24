import React, { FC } from "react";
import { NextPage } from "next";
import { VictoryBar } from "victory";

const temp = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
] as const;
// import MainChart from "./Main.Chart";
import "./Main.css";

interface KoKoProps {
  title: string;
}

const KoKo: FC<KoKoProps> = ({ title }) => {
  return (
    <div className="koko">
      <div className="koko_title">{title}</div>
      <div>
        {/* <MainChart /> */}
        <VictoryBar data={temp} x="quarter" y="earnings" />
      </div>
    </div>
  );
};

export default KoKo;
