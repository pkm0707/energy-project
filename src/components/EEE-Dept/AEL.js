import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
import GaugeChart from "react-gauge-chart";
export function AEL() {
  const worldElectricityProduction = [
    {
      country: "World",
      year: 1985,
      other: 0,
      bio: 0,
      solar: 0.011747475,
      wind: 0.064220205,
      hydro: 1979.2446,
      nuclear: 1488.9216,
      oil: 1110.7847,
      gas: 1426.3086,
      coal: 3748.3848,
    },
    {
      country: "World",
      year: 1986,
      other: 0,
      bio: 0,
      solar: 0.015183838,
      wind: 0.13883132,
      hydro: 2006.0651,
      nuclear: 1594.7357,
      oil: 1168.3097,
      gas: 1432.6683,
      coal: 3839.0095,
    },
    {
      country: "World",
      year: 1987,
      other: 0,
      bio: 0,
      solar: 0.01060303,
      wind: 0.19537677,
      hydro: 2033.1884,
      nuclear: 1734.7332,
      oil: 1183.1947,
      gas: 1516.4941,
      coal: 4058.0767,
    },
    {
      country: "World",
      year: 1988,
      other: 0,
      bio: 0,
      solar: 0.01019596,
      wind: 0.3315798,
      hydro: 2098.3518,
      nuclear: 1891.2493,
      oil: 1256.5684,
      gas: 1540.9414,
      coal: 4200.6743,
    },
    {
      country: "World",
      year: 1989,
      other: 0,
      bio: 0,
      solar: 0.26222324,
      wind: 2.6497767,
      hydro: 2087.588,
      nuclear: 1945.0106,
      oil: 1350.2358,
      gas: 1728.5189,
      coal: 4376.982,
    },
    {
      country: "World",
      year: 1990,
      other: 0,
      bio: 0,
      solar: 0.38834995,
      wind: 3.6324706,
      hydro: 2158.854,
      nuclear: 2000.596,
      oil: 1364.6844,
      gas: 1789.7031,
      coal: 4460.2417,
    },
    {
      country: "World",
      year: 1991,
      other: 0,
      bio: 0,
      solar: 0.5053229,
      wind: 4.086107,
      hydro: 2208.702,
      nuclear: 2096.3098,
      oil: 1349.9071,
      gas: 1815.2444,
      coal: 4557.0664,
    },
    {
      country: "World",
      year: 1992,
      other: 0,
      bio: 0,
      solar: 0.4666791,
      wind: 4.732812,
      hydro: 2208.4592,
      nuclear: 2112.223,
      oil: 1328.2163,
      gas: 1829.3868,
      coal: 4649.9165,
    },
    {
      country: "World",
      year: 1993,
      other: 0,
      bio: 0,
      solar: 0.5566775,
      wind: 5.704169,
      hydro: 2341.4597,
      nuclear: 2184.9646,
      oil: 1266.6155,
      gas: 1863.8153,
      coal: 4727.899,
    },
    {
      country: "World",
      year: 1994,
      other: 0,
      bio: 0,
      solar: 0.5969829,
      wind: 7.13173,
      hydro: 2356.203,
      nuclear: 2225.9788,
      oil: 1302.1187,
      gas: 1925.1002,
      coal: 4891.904,
    },
    {
      country: "World",
      year: 1995,
      other: 0,
      bio: 0,
      solar: 0.63888276,
      wind: 8.272123,
      hydro: 2483.6868,
      nuclear: 2322.5298,
      oil: 1259.9452,
      gas: 2036.3821,
      coal: 5038.9316,
    },
    {
      country: "World",
      year: 1996,
      other: 0,
      bio: 0,
      solar: 0.69922996,
      wind: 9.215601,
      hydro: 2517.03,
      nuclear: 2406.615,
      oil: 1245.6957,
      gas: 2101.594,
      coal: 5279.661,
    },
    {
      country: "World",
      year: 1997,
      other: 0,
      bio: 0,
      solar: 0.7496558,
      wind: 12.028216,
      hydro: 2561.359,
      nuclear: 2390.0642,
      oil: 1244.647,
      gas: 2271.0615,
      coal: 5395.626,
    },
    {
      country: "World",
      year: 1998,
      other: 0,
      bio: 0,
      solar: 0.811852,
      wind: 15.92926,
      hydro: 2581.1204,
      nuclear: 2431.1948,
      oil: 1294.6146,
      gas: 2408.5476,
      coal: 5511.2935,
    },
    {
      country: "World",
      year: 1999,
      other: 0,
      bio: 0,
      solar: 0.9052879,
      wind: 21.226898,
      hydro: 2600.65,
      nuclear: 2523.7056,
      oil: 1266.6599,
      gas: 2600.75,
      coal: 5630.859,
    },
    {
      country: "World",
      year: 2000,
      other: 52.37,
      bio: 148.65,
      solar: 1.08,
      wind: 31.16,
      hydro: 2621.36,
      nuclear: 2507.43,
      oil: 1209.51,
      gas: 2681.11,
      coal: 5719.12,
    },
    {
      country: "World",
      year: 2001,
      other: 52.6,
      bio: 143.1,
      solar: 1.35,
      wind: 38.16,
      hydro: 2561.04,
      nuclear: 2573.71,
      oil: 1197.6,
      gas: 2827.65,
      coal: 5801.14,
    },
    {
      country: "World",
      year: 2002,
      other: 54.08,
      bio: 156.61,
      solar: 1.69,
      wind: 52.04,
      hydro: 2601.39,
      nuclear: 2601.89,
      oil: 1175.58,
      gas: 3033.78,
      coal: 6056.12,
    },
    {
      country: "World",
      year: 2003,
      other: 56.07,
      bio: 167.91,
      solar: 2.07,
      wind: 63.43,
      hydro: 2602.33,
      nuclear: 2577.71,
      oil: 1198.2,
      gas: 3165.78,
      coal: 6458.61,
    },
    {
      country: "World",
      year: 2004,
      other: 57.94,
      bio: 184.54,
      solar: 2.71,
      wind: 85.26,
      hydro: 2796.69,
      nuclear: 2682.73,
      oil: 1177.47,
      gas: 3408.19,
      coal: 6697.61,
    },
    {
      country: "World",
      year: 2005,
      other: 58.74,
      bio: 208.44,
      solar: 3.78,
      wind: 103.89,
      hydro: 2895.17,
      nuclear: 2686.95,
      oil: 1186.13,
      gas: 3579.99,
      coal: 7040.85,
    },
    {
      country: "World",
      year: 2006,
      other: 60.11,
      bio: 220.96,
      solar: 5.11,
      wind: 132.79,
      hydro: 3001.53,
      nuclear: 2721.42,
      oil: 1097.06,
      gas: 3792.38,
      coal: 7439.88,
    },
    {
      country: "World",
      year: 2007,
      other: 62.87,
      bio: 243.14,
      solar: 6.92,
      wind: 170.91,
      hydro: 3046.18,
      nuclear: 2666.92,
      oil: 1119.39,
      gas: 4109.47,
      coal: 7931.82,
    },
    {
      country: "World",
      year: 2008,
      other: 65.97,
      bio: 258.44,
      solar: 11.36,
      wind: 220.07,
      hydro: 3231.07,
      nuclear: 2656.04,
      oil: 1078.99,
      gas: 4210.51,
      coal: 7927.59,
    },
    {
      country: "World",
      year: 2009,
      other: 68.02,
      bio: 279.55,
      solar: 19.19,
      wind: 275.88,
      hydro: 3229.55,
      nuclear: 2619,
      oil: 1005.12,
      gas: 4247.72,
      coal: 7817.32,
    },
    {
      country: "World",
      year: 2010,
      other: 68.38,
      bio: 322.22,
      solar: 31.05,
      wind: 345.99,
      hydro: 3412.33,
      nuclear: 2686.44,
      oil: 1011.78,
      gas: 4701.27,
      coal: 8358.6,
    },
    {
      country: "World",
      year: 2011,
      other: 69.67,
      bio: 342.44,
      solar: 61.85,
      wind: 440.39,
      hydro: 3479.25,
      nuclear: 2575.35,
      oil: 1103.87,
      gas: 4767.24,
      coal: 8814.17,
    },
    {
      country: "World",
      year: 2012,
      other: 70.88,
      bio: 370.87,
      solar: 95.18,
      wind: 529.11,
      hydro: 3645.02,
      nuclear: 2403.21,
      oil: 1157.13,
      gas: 5042.66,
      coal: 8855.83,
    },
    {
      country: "World",
      year: 2013,
      other: 72.58,
      bio: 402.92,
      solar: 131.42,
      wind: 641.17,
      hydro: 3776.88,
      nuclear: 2418.44,
      oil: 1118.61,
      gas: 4939.52,
      coal: 9306.75,
    },
    {
      country: "World",
      year: 2014,
      other: 77.68,
      bio: 438.47,
      solar: 196.46,
      wind: 716.51,
      hydro: 3865.63,
      nuclear: 2472.7,
      oil: 1063.74,
      gas: 5096.07,
      coal: 9495.57,
    },
    {
      country: "World",
      year: 2015,
      other: 81.57,
      bio: 475.79,
      solar: 254.87,
      wind: 828.37,
      hydro: 3870.04,
      nuclear: 2502.45,
      oil: 1068.09,
      gas: 5418.55,
      coal: 9160.63,
    },
    {
      country: "World",
      year: 2016,
      other: 83.91,
      bio: 483.77,
      solar: 329.15,
      wind: 959.65,
      hydro: 3996.54,
      nuclear: 2540.48,
      oil: 1004.96,
      gas: 5669.08,
      coal: 9226.85,
    },
    {
      country: "World",
      year: 2017,
      other: 86.39,
      bio: 515.07,
      solar: 444.54,
      wind: 1136.41,
      hydro: 4053.96,
      nuclear: 2566.22,
      oil: 913.07,
      gas: 5791.83,
      coal: 9518.91,
    },
    {
      country: "World",
      year: 2018,
      other: 89.54,
      bio: 546.21,
      solar: 570.57,
      wind: 1265.29,
      hydro: 4174.81,
      nuclear: 2619.57,
      oil: 841.34,
      gas: 6015.24,
      coal: 9899.44,
    },
    {
      country: "World",
      year: 2019,
      other: 91.15,
      bio: 575.5,
      solar: 701.19,
      wind: 1419.51,
      hydro: 4220.11,
      nuclear: 2724.08,
      oil: 776.78,
      gas: 6176.34,
      coal: 9680.92,
    },
    {
      country: "World",
      year: 2020,
      other: 94.16,
      bio: 602.57,
      solar: 850.89,
      wind: 1587.13,
      hydro: 4341.1,
      nuclear: 2634.69,
      oil: 741,
      gas: 6132.47,
      coal: 9292.9,
    },
    {
      country: "World",
      year: 2021,
      other: 95,
      bio: 663.78,
      solar: 1040.06,
      wind: 1849.4,
      hydro: 4244.57,
      nuclear: 2740.78,
      oil: 793.53,
      gas: 6326,
      coal: 10081.8,
    },
    {
      country: "World",
      year: 2022,
      other: 99.74,
      bio: 677.57,
      solar: 1289.27,
      wind: 2139.23,
      hydro: 4326.76,
      nuclear: 2610.04,
      oil: 884.98,
      gas: 6309.46,
      coal: 10190.71,
    },
  ];

  const keyToLabel = {
    coal: "Electricity from coal (TWh)",
    gas: "Electricity from gas (TWh)",
    oil: "Electricity from oil (TWh)",
    nuclear: "Electricity from nuclear (TWh)",
    hydro: "Electricity from hydro (TWh)",
    wind: "Electricity from wind (TWh)",
    solar: "Electricity from solar (TWh)",
    bio: "Electricity from bioenergy (TWh)",
    other: "Other renewables excluding bioenergy (TWh)",
  };

  const colors = {
    other: "lightgray",
    bio: "lightgreen",
    solar: "yellow",
    wind: "lightblue",
    hydro: "blue",
    nuclear: "orange",
    oil: "darkgrey",
    gas: "gray",
    coal: "black",
  };
  const stackStrategy = {
    stack: "total",
    area: true,
    stackOffset: "none", // To stack 0 on top of others
  };

  const customize = {
    height: 300,
    legend: { hidden: true },
    margin: { top: 5 },
    stackingOrder: "descending",
  };

  return (
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
      <GaugeChart
        id="gauge-chart2"
        nrOfLevels={20}
        percent={1}
        textColor="red"
        style={{ width: 810,border:"4px solid red"}}
      />
      <GaugeChart
        id="gauge-chart3"
        nrOfLevels={30}
        colors={["#FF5F6D", "#FFC371"]}
        textColor="orange"
        arcWidth={0.3}
        percent={0.37}
        style={{ width: 810,border:"4px solid orange"}}
      />
      <LineChart
        xAxis={[
          {
            dataKey: "year",
            valueFormatter: (v) => v.toString(),
            min: 1985,
            max: 2022,
          },
        ]}
        series={Object.keys(keyToLabel).map((key) => ({
          dataKey: key,
          label: keyToLabel[key],
          color: colors[key],
          showMark: false,
          ...stackStrategy,
        }))}
        dataset={worldElectricityProduction}
        {...customize}
        sx={{ padding: 2 ,border:4,borderColor:"darkviolet"}}
      />
      <BarChart
        xAxis={[{ scaleType: "band", data: ["group A", "group B", "group C"] }]}
        series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
        width={500}
        height={300}
        sx={{padding: 1,border:4,borderColor:"darkgreen" }}
      />
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "series A" },
              { id: 1, value: 15, label: "series B" },
              { id: 2, value: 20, label: "series C" },
            ],
          },
        ]}
        width={500}
        height={300}
        sx={{padding: 1,border:4,borderColor:"darkturquoise" }}
      />
    </div>
  );
}
