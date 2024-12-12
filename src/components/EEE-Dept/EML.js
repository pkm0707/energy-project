import * as React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["City", "Solar Contribution (kW)", "Grid Contribution (kW)"],
  ["7:00", 0.04, 5.29],
  ["8:00", 0.93, 3.07],
  ["9:00", 3.69, 3.31],
  ["10:00", 1.71, 1.5341],
  ["11:00", 2.81, 0],
  ["12:00", 3.69, 0],
  ["13:00", 4.01, 0],
  ["14:00", 4.01, 0],
  ["15:00", 3.81, 0],
  ["16:00", 3.29, 3.29],
  ["17:00", 2.45, 2.81],
  ["18:00", 0.54, 5.7],
];
export const options = {
  title: "Power Sharing for EV Charging Port",
  chartArea: { width: "50%" },
  isStacked: true,
  hAxis: {
    title: "Power (kW)",
    minValue: 0,
  },
  vAxis: {
    title: "Timestamp (Working Hrs)",
  },
};

export function EML() {
  return (
    <div>
      <h1 style={{textAlign:"center",color:"red",fontFamily:"fantasy"}}>BENEFACTION ON EV CHARGING SOURCE</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 18,
        }}
        className="background"
      >
        <Chart
          chartType="BarChart"
          width="100%"
          height="1000px"
          data={data}
          options={options}
          style={{border: "2px solid black"}}
        />
      </div>
      <br />
    </div>
  );
}
