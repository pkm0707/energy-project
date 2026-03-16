import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PieChart } from "@mui/x-charts/PieChart";
import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

const AEL_actual_values = [
  1.25, 0.72, 2.43, 5.31, 3.82, 1.45, 1.83, 5.7, 6.99, 7.36, 7.059999999999999,
  6.83, 6.72, 6.87, 6.889999999999999, 6.81, 6.69, 0.8700000000000001, 0.24,
  0.14, 9.19, 9.22, 9.24, 9.03, 8.78, 1.21, 0.18, 7.219999999999999, 7.21, 7.96,
  7.85, 7.54, 1.99, 1.54, 8.41, 8.87, 6.779999999999999, 0.95, 6.68
];
const AEL_predicted_values = [
  7.2861876, 7.51754, 8.578745, 8.115843, 8.015641, 7.0298033, 7.5296235,
  7.2425337, 7.68905, 7.778889, 8.192826, 8.488126, 8.7835865, 8.9879675,
  9.106377, 9.402587, 9.0055895, 9.300282, 9.272956, 9.425046, 9.285658,
  8.759851, 8.282048, 7.983716, 7.830942, 7.5900207, 7.99506, 8.657633,
  8.631118, 8.500691, 7.582116, 7.615717, 7.5488687, 7.372418, 7.1565657,
  6.9906306, 6.8031735, 6.550669, 7.28471, 7.2566833, 8.195253, 8.582519,
  8.869644, 8.485752, 8.866181, 8.2215805, 8.999243, 7.8528576, 7.7030616,
  7.4655223, 7.3423696, 6.9700093, 6.621236, 8.37383, 9.273954, 10.256979,
  10.264287, 10.243198, 10.229378, 10.77988, 11.059968, 11.145991, 10.413143,
  10.131024, 10.130522, 10.170378, 10.07336, 9.918522, 10.058836, 9.811378,
  9.157332, 8.404374, 9.643481, 10.450872, 10.665165, 10.804059, 10.564202,
  10.574335, 10.346755, 9.330748, 9.3508415, 9.683061,10.931429, 10.565577, 
  9.41005, 8.519517, 7.4181423, 7.6926603, 7.929297,8.645937, 9.146844, 
  8.33418, 8.7913265, 9.021356, 9.5989895, 9.179984, 8.627755, 8.959565, 
  9.414534, 7.982726, 7.360668, 7.591808, 8.325375, 8.698947, 4.0976195,
  3.1424062, 7.156017, 7.843657, 7.533696, 7.342911, 8.471757, 9.139758,
  10.019574, 10.1419735, 9.472493, 8.134669, 9.510166, 9.956856, 10.551393,
  8.924312, 8.922895, 9.200277, 9.660131, 9.066629,
];
const xLabels = [
  "00:05:00",
  "00:10:00",
  "00:15:00",
  "00:20:00",
  "00:25:00",
  "00:30:00",
  "00:35:00",
  "00:40:00",
  "00:45:00",
  "00:50:00",
  "00:55:00",
  "01:00:00",
  "01:05:00",
  "01:10:00",
  "01:15:00",
  "01:20:00",
  "01:25:00",
  "01:30:00",
  "01:35:00",
  "01:40:00",
  "01:45:00",
  "01:50:00",
  "01:55:00",
  "02:00:00",
  "02:05:00",
  "02:10:00",
  "02:15:00",
  "02:20:00",
  "02:25:00",
  "02:30:00",
  "02:35:00",
  "02:40:00",
  "02:45:00",
  "02:50:00",
  "02:55:00",
  "03:00:00",
  "03:05:00",
  "03:10:00",
  "03:15:00",
  "03:20:00",
  "03:25:00",
  "03:30:00",
  "03:35:00",
  "03:40:00",
  "03:45:00",
  "03:50:00",
  "03:55:00",
  "04:00:00",
  "04:05:00",
  "04:10:00",
  "04:15:00",
  "04:20:00",
  "04:25:00",
  "04:30:00",
  "04:35:00",
  "04:40:00",
  "04:45:00",
  "04:50:00",
  "04:55:00",
  "05:00:00",
  "05:05:00",
  "05:10:00",
  "05:15:00",
  "05:20:00",
  "05:25:00",
  "05:30:00",
  "05:35:00",
  "05:40:00",
  "05:45:00",
  "05:50:00",
  "05:55:00",
  "06:00:00",
  "06:05:00",
  "06:10:00",
  "06:15:00",
  "06:20:00",
  "06:25:00",
  "06:30:00",
  "06:35:00",
  "06:40:00",
  "06:45:00",
  "06:50:00",
  "06:55:00",
  "07:00:00",
  "07:05:00",
  "07:10:00",
  "07:15:00",
  "07:20:00",
  "07:25:00",
  "07:30:00",
  "07:35:00",
  "07:40:00",
  "07:45:00",
  "07:50:00",
  "07:55:00",
  "08:00:00",
  "08:05:00",
  "08:10:00",
  "08:15:00",
  "08:20:00",
  "08:25:00",
  "08:30:00",
  "08:35:00",
  "08:40:00",
  "08:45:00",
  "08:50:00",
  "08:55:00",
  "09:00:00",
  "09:05:00",
  "09:10:00",
  "09:15:00",
  "09:20:00",
  "09:25:00",
  "09:30:00",
  "09:35:00",
  "09:37:00",
  "09:40:00",
  "09:45:00",
  "09:50:00",
  "09:52:00",
  "09:55:00",
  "10:00:00",
];

export function getData() {
  return [
    ["Label", "Value"],
    ["kWh", 9.687],
  ];
}
export function getData2() {
  return [
    ["Label", "Value"],
    ["₹", 45.105],
  ];
}
export function getData3() {
  return [
    ["Label", "Value"],
    ["Ξ", 0.00024],
  ];
}
export const options = {
  width: 700,
  height: 300,
  redFrom: 20,
  redTo: 25,
  yellowFrom: 15,
  yellowTo: 20,
  greenFrom: 0,
  greenTo: 15,
  minorTicks: 5,
  max: 25,
};
export const options2 = {
  width: 700,
  height: 300,
  redFrom: 150,
  redTo: 200,
  yellowFrom: 100,
  yellowTo: 150,
  greenFrom: 0,
  greenTo: 100,
  minorTicks: 5,
  max: 200,
};
export const options3 = {
  width: 700,
  height: 300,
  redFrom: 0.00062,
  redTo: 0.00082,
  yellowFrom: 0.00041,
  yellowTo: 0.00062,
  greenFrom: 0,
  greenTo: 0.00041,
  minorTicks: 5,
  max: 0.00082,
};

export function AEL() {
  const navigate = useNavigate();
  const [data, setData] = useState(getData);
  const [data2, setData2] = useState(getData2);
  const [data3, setData3] = useState(getData3);

  useEffect(() => {
    const id = setInterval(() => {
      setData(getData());
    }, 3000);
    return () => {
      clearInterval(id);
    };
  });

  useEffect(() => {
    const id2 = setInterval(() => {
      setData2(getData2());
    }, 3000);
    return () => {
      clearInterval(id2);
    };
  });

  useEffect(() => {
    const id3 = setInterval(() => {
      setData3(getData3());
    }, 3000);
    return () => {
      clearInterval(id3);
    };
  });
  const [date, setDate] = useState(new Date());
  console.log(setDate);

  return (
    <div>
    <h2>Power Electronics Lab</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-end",
          alignItems: "center",
          marginBottom: 15,
          color: "yellow",
        }}
      >
        <h5>Current Date : {date.toLocaleString()}</h5>
      </div>
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
          width={700}
          height={300}
          series={[
            {
              data: AEL_actual_values,
              label: "Actual Values",
              area: true,
              stack: "total",
              showMark: false,
            },
            {
              data: AEL_predicted_values,
              label: "Predicted Values",
              area: true,
              stack: "total",
              showMark: false,
            },
          ]}
          colors={["#89ABE3", "#EA738D"]}
          xAxis={[{ scaleType: "point", data: xLabels, label: "Time" }]}
          yAxis={[{ label: "Predicted Day Ahead Demand Trend" }]}
          sx={{
            ".MuiLineElement-root": {
              display: "none",
            },
            border: 4,
            borderColor: "antiquewhite",
            fontWeight:10
          }}
        />

        <div style={{ border: "3px solid antiquewhite" }}>
          <Chart
            chartType="Gauge"
            width="100%"
            height="300px"
            data={data}
            options={options}
          />
        </div>

        <div style={{ border: "3px solid antiquewhite" }}>
          <Chart
            chartType="Gauge"
            width="100%"
            height="300px"
            data={data2}
            options={options2}
          />
        </div>

        <BarChart
          yAxis={[{ label: "Cost(₹)" }]}
          xAxis={[
            {
              scaleType: "band",
              label: "Time",
              data: [
                "1:00",
                "2:00",
                "3:00",
                "4:00",
                "5:00",
                "6:00",
                "7:00",
              ],
            },
          ]}
          series={[
            {
              data: [
                388.2375, 550.1115, 526.014, 433.602, 160.65, 668.9925, 828.342,
              ],
            },
            {
              data: [
                751.5896303, 790.9243368, 683.0942101, 746.2880457, 808.1353558,
                829.0122548, 674.8377327, 866.3551216, 948.006207,
              ],
            },
          ]}
          width={500}
          height={300}
          colors={["red", "yellow"]}
          sx={{ padding: 1, border: 4, borderColor: "antiquewhite",color:"red" }}
        />

        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 50.38, label: "Total kWh" },
                { id: 1, value: 9.687, label: "PE kWh" },
              ],
            },
          ]}
          width={500}
          height={300}
          sx={{ border: 3, padding: 2, borderColor: "antiquewhite" }}
          colors={["#00A4CCFF", "#D6ED17FF"]}
        />

        <div style={{ border: "3px solid antiquewhite" }}>
          <Chart
            chartType="Gauge"
            width="100%"
            height="300px"
            data={data3}
            options={options3}
          />
        </div>
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
          title="Pay for Power Electronics Lab"
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
