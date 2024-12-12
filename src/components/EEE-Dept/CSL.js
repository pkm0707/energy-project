import * as React from "react";
// import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
import GaugeChart from "react-gauge-chart";

const xLabels = [
  "00:00:00",
  "01:00:00",
  "02:00:00",
  "03:00:00",
  "04:00:00",
  "05:00:00",
  "06:00:00",
  "07:00:00",
  "08:00:00",
  "09:00:00",
  "10:00:00",
  "11:00:00",
  "12:00:00",
  "13:00:00",
  "14:00:00",
  "15:00:00",
  "16:00:00",
  "17:00:00",
  "18:00:00",
  "19:00:00",
  "20:00:00",
  "21:00:00",
  "22:00:00",
  "23:00:00",
  "24:00:00",
];
const LDWOO = [
  2.8296583, 4.1466584, 2.580013, 4.4200597, 1.0541725, 0.6493015, 2.7886603,
  28.359695, 29.414558, 30.558348, 28.68865, 39.026722, 52.012783, 55.688488,
  62.57498, 69.69329, 0.83534247, 4.2278624, 1.1239531, 3.8902194, 0.95663947,
  2.0731394, 5.112803, 2.2046554,
];
const LDWO = [
  2.829658269882202, 4.146658420562744, 2.5800130367279053, 4.420059680938721,
  1.0541725158691406, 0.6493015289306641, 2.7886602878570557,
  28.359695434570312, 34.394558410644535, 33.638347702026365, 32.02865013122559,
  39.0267219543457, 43.26278305053711, 46.9384880065918, 53.824981689453125,
  60.94329071044922, 0.8353424668312073, 4.227862358093262, 1.123953104019165,
  3.8902194499969482, 0.9566394686698914, 2.0731394290924072, 5.112802982330322,
  2.204655408859253,
];

export function CSL() {
  return (
    <div>
      <h1 style={{textAlign:"center",color:"red",fontFamily:"fantasy"}}>SUGGESTIONS ON PuLP OPTIMIZATION</h1>
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
        <LineChart
          width={800}
          height={300}
          series={[
            {
              data: LDWOO,
              label: "Without Optimization",
              area: true,
              stack: "total",
              showMark: false,
            },
            {
              data: LDWO,
              label: "With Optimization",
              area: true,
              stack: "total",
              showMark: false,
            },
          ]}
          colors={["#99001B", "#1C5CCA"]}
          xAxis={[{ scaleType: "point", data: xLabels, label: "hours" }]}
          yAxis={[{ label: "Demand Trend (kW)" }]}
          sx={{
            ".MuiLineElement-root": {
              display: "none",
            },
            border: 4,
            borderColor: "darkkhaki",
          }}
        />
        <GaugeChart
          id="gauge-chart2"
          nrOfLevels={20}
          percent={0.5271}
          label = "Solar Contribution"
          textColor="red"
          style={{
            width: 500,
            border: "4px solid red",
            height: 300,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <GaugeChart
          id="gauge-chart3"
          nrOfLevels={30}
          colors={["#FF5F6D", "#FFC371"]}
          textColor="orange"
          arcWidth={0.3}
          percent={0.4729}
          style={{
            width: 500,
            border: "4px solid orange",
            height: 300,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </div>
      <br />
    </div>
  );
}
