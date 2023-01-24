import React, { FC } from "react";
import { Border, VictoryChart, VictoryLine } from "victory";

const MainChart: FC = () => {
  return (
    <>
      <VictoryChart
        domain={{ y: [0, 10] }}
        scale={{ x: "time", y: "linear" }}
        style={{ parent: { backgroundColor: "#202222" } }}
      >
        <VictoryLine
          style={{
            data: { stroke: "#45A452" },
            parent: { border: "1px solid #fff" },
          }}
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 },
            { x: 6, y: 6 },
            { x: 7, y: 3 },
            { x: 8, y: 4 },
            { x: 9, y: 6 },
            { x: 10, y: 5 },
            { x: 11, y: 2 },
            { x: 12, y: 7 },
          ]}
        />
      </VictoryChart>
    </>
  );
};

export default MainChart;
