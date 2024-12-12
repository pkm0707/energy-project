import * as React from "react";
// import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const data = [
  ["City", "2010 Population", "2000 Population"],
  ["New York City, NY", 8175000, 8008000],
  ["Los Angeles, CA", 3792000, 3694000],
  ["Chicago, IL", 2695000, 2896000],
  ["Houston, TX", 2099000, 1953000],
  ["Philadelphia, PA", 1526000, 1517000],
];
export const options = {
  title: "Population of Largest U.S. Cities",
  chartArea: { width: "50%" },
  isStacked: true,
  hAxis: {
    title: "Total Population",
    minValue: 0,
  },
  vAxis: {
    title: "City",
  },
};
const SOLAR_DATA = [
  0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.04, 0.93, 1.71, 2.81, 3.69, 4.01, 4.01, 3.81,
  3.29, 2.45, 1.54, 0.54, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
];
const LOAD_DATA = [
  0.20902099, 0.9694787, 2.5949316, 2.0929828, 4.0383596, 5.983044, 4.8616037,
  32.26351, 29.336252, 30.558348, 28.68865, 38.623947, 44.833176, 44.096844,
  53.82498, 60.94329, 2.3914952, 4.7612762, 1.6637243, 5.5601864, 2.9580417,
  2.7206943, 5.0233016, 4.115013,
];
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

export function PL() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 style={{textAlign:"center",color:"red",fontFamily:"fantasy"}}>DAY AHEAD ENERGY TREND</h1>
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
          width={950}
          height={300}
          series={[
            {
              data: SOLAR_DATA,
              label: "Forecasted Solar Trend",
              area: true,
              stack: "total",
              showMark: false,
            },
          ]}
          colors={["#2ecc71"]}
          xAxis={[{ scaleType: "point", data: xLabels, label: "Hours" }]}
          yAxis={[{ label: "Estimated Solar Power(kW)" }]}
          sx={{
            ".MuiLineElement-root": {
              display: "none",
            },
            border: 4,
            borderColor: "antiquewhite",
          }}
        />
        <LineChart
          width={950}
          height={300}
          series={[
            {
              data: LOAD_DATA,
              label: "Forecasted Demand Trend",
              area: true,
              stack: "total",
              showMark: false,
            },
          ]}
          colors={[ " #5499c7 " ]}
          xAxis={[{ scaleType: "point", data: xLabels, label: "Hours" }]}
          yAxis={[{ label: "Estimated Demand Trend (kW)" }]}
          sx={{
            ".MuiLineElement-root": {
              display: "none",
            },
            border: 4,
            borderColor: "antiquewhite",
          }}
        />
      </div>
      <br />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <a
          href="https://metamask.io/"
          target="_blank"
          rel="noreferrer"
          title="Pay for Applied Electronics Lab"
        >
          <Button variant="contained">Make a Payment</Button>
        </a>
        <Button variant="contained" onClick={() => navigate(-1)}>
          Back
        </Button>
      </div>
    </div>
  );
}
