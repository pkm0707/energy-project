import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PieChart } from "@mui/x-charts/PieChart";
import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

const CL_actual_values = [
  1.25, 0.72, 2.43, 5.31, 3.82, 1.45, 1.83, 5.7, 6.99, 7.36, 7.059999999999999,
  6.83, 6.72, 6.87, 6.889999999999999, 6.81, 6.69, 0.8700000000000001, 0.24,
  0.14, 9.19, 9.22, 9.24, 9.03, 8.78, 1.21, 0.18, 7.219999999999999, 7.21, 7.96,
  7.85, 7.54, 1.99, 1.54, 8.41, 8.87, 6.779999999999999, 0.95, 6.68,
  7.120000000000001, 0.81, 1.16, 6.01, 7.16, 6.67, 6.21, 6.17, 0.96, 1.14, 6.6,
  6.82, 1.29, 1.39, 0.68, 0.92, 0.15, 0.8, 0.78, 0.26, 0.17, 0.25, 7.67, 8.76,
  9.1, 8.7, 7.66, 7.7, 6.35, 7.84, 7.32, 8.07, 8.01, 8.51, 8.74, 8.94, 9.07,
  9.11, 9.53, 8.63, 9.47, 9.3, 9.41, 9.18, 8.39, 8.11, 8.09, 8.03, 7.73, 8.6,
  9.32, 8.56, 8.4, 7.14, 7.879999999999999, 7.889999999999999, 7.47, 7.35,
  7.260000000000001, 7.04, 6.790000000000001, 7.980000000000001, 7.49, 8.98,
  8.91, 8.85, 8.17, 9.15, 7.83, 9.61, 7.18, 7.65, 7.780000000000001, 7.46,
  7.089999999999999, 6.86, 9.58, 9.91, 10.54, 10.97, 9.65, 8.19, 8.12, 6.97,
  7.9, 8.37, 9.39, 9.54, 7.609999999999999, 9.29, 9.43, 9.72, 8.82, 8.2, 9.4,
  9.0, 8.86, 9.51, 9.96, 8.49, 9.68, 7.03, 7.150000000000001, 8.0, 8.92, 9.14,
  0.1, 1.26, 9.45, 7.3, 7.27, 7.52, 9.21, 9.5, 10.18, 9.92, 8.53, 7.23, 10.43,
  10.33, 10.47, 9.82, 9.97, 10.12, 10.98, 10.99, 10.84, 9.57, 9.88, 10.2, 10.1,
  9.94, 9.79, 10.14, 9.6, 8.68, 8.1, 10.61, 11.01, 10.4, 10.6, 10.17, 10.34,
  10.07, 8.42, 9.59, 10.15, 10.01,
];
const CL_predicted_values = [
  3.0748675, 2.2069516, 2.1665275, 2.7537687, 4.482818, 3.8905938, 2.2930794,
  2.5276506, 5.0904937, 6.2444525, 6.868273, 7.013033, 7.0123997, 6.792918,
  6.741348, 6.681676, 6.577971, 6.4489665, 3.0895057, 2.1801746, 1.7846195,
  6.5788817, 8.754946, 8.909508, 9.391767, 8.835707, 4.7366257, 2.7090309,
  5.97464, 7.0636783, 7.634468, 8.067866, 7.6919537, 4.24424, 3.1440544,
  7.0049896, 8.3045845, 7.556589, 3.6702104, 6.3548036, 6.01696, 3.9004343,
  2.5847383, 5.352148, 6.5914164, 6.614627, 6.3192196, 6.174239, 3.0789216,
  2.6518798, 5.3944473, 6.6064525, 3.6539023, 2.7398458, 2.1716795, 1.8906149,
  1.1637131, 1.7338074, 1.7282395, 1.4535089, 1.6029869, 1.567354, 5.7053456,
  7.2861876, 7.51754, 8.578745, 8.115843, 8.015641, 7.0298033, 7.5296235,
  7.2425337, 7.68905, 7.778889, 8.192826, 8.488126, 8.7835865, 8.9879675,
  9.106377, 9.402587, 9.0055895, 9.300282, 9.272956, 9.425046, 9.285658,
  8.759851, 8.282048, 7.983716, 7.830942, 7.5900207, 7.99506, 8.657633,
  8.631118, 8.500691, 7.582116, 7.615717, 7.5488687, 7.372418, 7.1565657,
  6.9906306, 6.8031735, 6.550669, 7.28471, 7.2566833, 8.195253, 8.582519,
  8.869644, 8.485752, 8.866181, 8.2215805, 8.999243, 7.8528576, 7.7030616,
  7.4655223, 7.3423696, 6.9700093, 6.621236, 8.37383, 9.273954, 10.256979,
  10.931429, 10.565577, 9.41005, 8.519517, 7.4181423, 7.6926603, 7.929297,
  8.645937, 9.146844, 8.33418, 8.7913265, 9.021356, 9.5989895, 9.179984,
  8.627755, 8.959565, 8.924312, 8.922895, 9.200277, 9.660131, 9.066629,
  9.414534, 7.982726, 7.360668, 7.591808, 8.325375, 8.698947, 4.0976195,
  3.1424062, 7.156017, 7.843657, 7.533696, 7.342911, 8.471757, 9.139758,
  10.019574, 10.1419735, 9.472493, 8.134669, 9.510166, 9.956856, 10.551393,
  10.264287, 10.243198, 10.229378, 10.77988, 11.059968, 11.145991, 10.413143,
  10.131024, 10.130522, 10.170378, 10.07336, 9.918522, 10.058836, 9.811378,
  9.157332, 8.404374, 9.643481, 10.450872, 10.665165, 10.804059, 10.564202,
  10.574335, 10.346755, 9.330748, 9.3508415, 9.683061,
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
  "10:05:00",
  "10:10:00",
  "10:15:00",
  "10:20:00",
  "10:25:00",
  "10:30:00",
  "10:35:00",
  "10:39:00",
  "10:40:00",
  "10:45:00",
  "10:50:00",
  "10:55:00",
  "11:00:00",
  "11:05:00",
  "11:10:00",
  "11:15:00",
  "11:20:00",
  "11:25:00",
  "11:30:00",
  "11:35:00",
  "11:36:00",
  "11:40:00",
  "11:45:00",
  "11:50:00",
  "11:55:00",
  "12:00:00",
  "12:05:00",
  "12:10:00",
  "12:11:00",
  "12:15:00",
  "12:16:00",
  "12:20:00",
  "12:25:00",
  "12:30:00",
  "12:35:00",
  "12:40:00",
  "12:45:00",
  "12:50:00",
  "12:55:00",
  "13:00:00",
  "13:02:00",
  "13:05:00",
  "13:10:00",
  "13:14:00",
  "13:15:00",
  "13:20:00",
  "13:25:00",
  "13:30:00",
  "13:35:00",
  "13:40:00",
  "13:45:00",
  "13:46:00",
  "13:50:00",
  "13:55:00",
  "14:00:00",
  "14:05:00",
  "14:10:00",
  "14:15:00",
  "14:20:00",
  "14:25:00",
  "14:27:00",
  "14:30:00",
  "14:35:00",
  "14:40:00",
  "14:45:00",
  "14:50:00",
  "14:55:00",
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
    ["₹", 74.105],
  ];
}
export function getData3() {
  return [
    ["Label", "Value"],
    ["Ξ", 0.00031],
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

export function CL() {
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
              data: CL_actual_values,
              label: "Actual Values",
              area: true,
              stack: "total",
              showMark: false,
            },
            {
              data: CL_predicted_values,
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
                "8:00",
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
              ],
            },
          ]}
          series={[
            {
              data: [
                388.2375, 550.1115, 526.014, 433.602, 160.65, 668.9925, 828.342,
                743.733, 732.87, 797.742, 790.6275, 797.13, 683.757, 922.8195,
              ],
            },
            {
              data: [
                570.3919338, 570.3384573, 524.3418921, 438.7181578, 369.8307271,
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
