import React, { FC } from "react";
import { NextPage } from "next";
import MainChart from "./Main.Chart";
import "./Main.css";

interface KoKoProps {
  title: string;
}

const KoKo: NextPage<KoKoProps> = ({ title }) => {
  return (
    <div className="koko">
      <div className="koko_title">{title}</div>
      <div className="wrapper_section">
        <div className="value_section">2400</div>
        <div className="chart_section">
          <MainChart />
        </div>
      </div>
    </div>
  );
};

export default KoKo;
