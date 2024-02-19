import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
import GaugeChart from "react-gauge-chart";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

export function PEL() {
  const navigate = useNavigate();
  return (
    <div>
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
          width={1000}
          height={300}
          series={[
            { data: pData, label: "pv" },
            { data: uData, label: "uv" },
          ]}
          xAxis={[{ scaleType: "point", data: xLabels }]}
          colors={["red","orange"]}
          sx={{
            padding: 1,
            border: 4,
            borderColor: "darkmagenta",
          }}
        />
        <GaugeChart
          id="gauge-chart2"
          nrOfLevels={20}
          percent={1}
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
        <BarChart
          xAxis={[
            {
              scaleType: "band",
              data: [
                "12:00",
                "1:00",
                "2:00",
                "3:00",
                "4:00",
                "5:00",
                "6:00",
                "7:00",
                "8:00",
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00",
                "24:00",
              ],
            },
          ]}
          series={[
            { data: [4, 3, 5, 7, 2, 6, 8, 9, 10, 11, 2, 12, 4, 6, 8, 9, 3, 8, 1, 4, 5, 10, 9, 7, 3] },
            { data: [1, 6, 2, 6, 8, 9, 10, 11, 2, 12, 4, 3, 5, 7, 2, 6, 8, 9, 1, 5, 7, 8, 3, 2, 10 ] },
          ]}
          width={1000}
          height={300}
          sx={{ padding: 1, border: 4, borderColor: "darkgreen" }}
        />
        <GaugeChart
          id="gauge-chart3"
          nrOfLevels={30}
          colors={["#FF5F6D", "#FFC371"]}
          textColor="orange"
          arcWidth={0.3}
          percent={0.37}
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
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap:10
        }}
      >
        <a href="https://metamask.io/" target="_blank" rel="noreferrer" title="Pay for Power Electronics Lab"><Button variant="contained">Make a Payment</Button></a>
        <Button variant="contained" onClick={()=>navigate(-1)}>Back</Button>
      </div>
    </div>
  );
}
