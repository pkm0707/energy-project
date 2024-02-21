import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import CalculateIcon from '@mui/icons-material/Calculate';

const AEL = [
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.08",
  "0.08",
  "0.09",
  "0.08",
  "0.09",
  "0.09",
  "0.08",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.08",
  "0.09",
  "0.09",
  "0.09",
  "0.08",
  "0.08",
  "0.09",
  "0.09",
  "0.1",
  "0.08",
  "0.09",
  "0.09",
  "0.15",
  "0.15",
  "0.15",
  "0.15",
  "0.15",
  "0.15",
  "0.04",
  "0.39",
  "0.46",
  "0.38",
  "0.04",
  "0.36",
  "0.34",
  "0.35",
  "0.37",
  "0.3",
  "0.28",
  "0.28",
  "0.29",
  "0.28",
  "0.08",
  "0.3",
  "0.51",
  "0.46",
  "0.42",
  "0.31",
  "0.29",
  "0.35",
  "0.35",
  "0.36",
  "0.37",
  "0.37",
  "0.35",
  "0.04",
  "0.36",
  "0.3",
  "0.34",
  "0.42",
  "0.63",
  "0.37",
  "0.36",
  "0",
  "0.68",
  "0.04",
  "0.39",
  "0.4",
  "0.43",
  "0.39",
  "0.41",
  "0.35",
  "0.55",
  "0.33",
  "0.38",
  "0.04",
  "0.53",
  "0.49",
  "0.04",
  "0.37",
  "0.32",
  "0.35",
  "0.35",
  "0.33",
  "0.32",
  "0.33",
  "0.04",
  "0.33",
  "0.33",
  "0.33",
  "0.34",
  "0.34",
  "0.32",
  "0.33",
  "0.33",
  "0.03",
  "0.32",
  "0.46",
  "0.32",
  "0.32",
  "0.32",
  "1.04",
  "0.34",
  "0.31",
  "0.46",
  "0.3",
  "0.32",
  "0.33",
  "0.31",
  "0.32",
  "0.32",
  "0.32",
  "0",
  "0.31",
  "0.54",
  "0.31",
  "0.31",
  "0.32",
  "0.32",
  "0.31",
  "0.31",
  "0.03",
  "0.3",
  "0.33",
  "0.31",
  "0.3",
  "0.32",
  "0.31",
  "0.68",
  "0.38",
  "0.14",
  "0.14",
  "0.47",
  "0.46",
  "0.11",
  "0.11",
  "0.11",
  "0.1",
  "0.1",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.1",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.1",
  "0.09",
  "0.1",
  "0.1",
  "0.1",
  "0.09",
  "0.1",
  "0.1",
  "0.1",
  "0.1",
  "0.1",
  "0.1",
  "0.09",
  "0.1",
  "0.09",
  "0.1",
  "0.1",
  "0.1",
  "0.1",
  "0.1",
  "0.1",
  "0.1",
  "0.1",
  "0.1",
  "0.09",
  "0.1",
  "0.1",
  "0.09",
  "0.09",
  "0.1",
  "0.1",
  "0.09",
  "0.09",
  "0.1",
  "0.09",
  "0.09",
  "0.1",
  "0.1",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
  "0.09",
];
const EML = [
  "0.19",
  "0.21",
  "0.2",
  "0.21",
  "0.2",
  "0.2",
  "0",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.19",
  "0.2",
  "0.19",
  "0.2",
  "0.2",
  "0",
  "0",
  "0.2",
  "0.2",
  "0.2",
  "0.19",
  "0.19",
  "0.21",
  "0.19",
  "0.19",
  "0.21",
  "0.2",
  "0.2",
  "0.19",
  "0.2",
  "0.2",
  "0.2",
  "0.21",
  "0.2",
  "0.21",
  "0.2",
  "0.2",
  "0.2",
  "0.21",
  "0.2",
  "0.21",
  "0.2",
  "0.2",
  "0.21",
  "0.2",
  "0.21",
  "0.2",
  "0.2",
  "0.21",
  "0",
  "0",
  "0.19",
  "0.2",
  "0.21",
  "0.2",
  "0.2",
  "0",
  "0",
  "0",
  "0",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.19",
  "0",
  "0.2",
  "0.2",
  "0.19",
  "0.19",
  "0.19",
  "0.2",
  "0.2",
  "0.19",
  "0.19",
  "0.2",
  "0.19",
  "0.19",
  "0.19",
  "0.19",
  "0.19",
  "0.19",
  "0.19",
  "0.19",
  "0.2",
  "0.2",
  "0.19",
  "0.19",
  "0.19",
  "0.19",
  "0.19",
  "0.2",
  "0.19",
  "0.19",
  "0.3",
  "0.29",
  "0.34",
  "0.39",
  "0.38",
  "0.51",
  "0.64",
  "0.6",
  "0.59",
  "0.92",
  "0.6",
  "0.71",
  "0.97",
  "1",
  "1.01",
  "1.2",
  "1.38",
  "1.11",
  "0.34",
  "1.07",
  "1.04",
  "1.41",
  "0.55",
  "1.07",
  "1.21",
  "1.3",
  "1.19",
  "1.19",
  "1.19",
  "1.18",
  "1.23",
  "1.31",
  "0.52",
  "1.23",
  "1.16",
  "1.11",
  "1.11",
  "1.04",
  "1.02",
  "1.02",
  "1.08",
  "1.14",
  "1.45",
  "1.36",
  "1.39",
  "0.69",
  "1.38",
  "1.41",
  "1.41",
  "1.41",
  "1.38",
  "1.36",
  "1.39",
  "0.5",
  "1.41",
  "0.39",
  "1.39",
  "1.32",
  "1.33",
  "1.31",
  "1.34",
  "1.38",
  "1.37",
  "1.2",
  "1.18",
  "0.41",
  "1.18",
  "1.19",
  "0.6",
  "1.03",
  "0.98",
  "1.17",
  "0.99",
  "0.97",
  "0.98",
  "0.95",
  "0.39",
  "0.98",
  "1",
  "1.1",
  "1.12",
  "1.12",
  "1.31",
  "1.28",
  "1.39",
  "0.52",
  "1.45",
  "1.4",
  "1.42",
  "1.42",
  "1.4",
  "1.4",
  "1.38",
  "1.47",
  "1.45",
  "1.37",
  "1.7",
  "1.74",
  "1.5",
  "1.4",
  "1.56",
  "1.61",
  "1.09",
  "1.54",
  "1.57",
  "1.7",
  "1.7",
  "1.65",
  "1.51",
  "1.52",
  "1.36",
  "0.91",
  "1.35",
  "1.22",
  "1.2",
  "1.18",
  "1.2",
  "1.08",
  "1.17",
  "1.1",
  "1.04",
  "0.66",
  "0.99",
  "0.6",
  "0.58",
  "1.02",
  "0.96",
  "0.6",
  "0.62",
  "0.67",
  "0.63",
  "0.62",
  "0.62",
  "0.61",
  "0.52",
  "0.54",
  "0.26",
  "0.26",
  "0.27",
  "0.2",
  "0.19",
  "0.2",
  "0.19",
  "0.19",
  "0.19",
  "0",
  "0",
  "0.19",
  "0.2",
  "0.19",
  "0.2",
  "0.2",
  "0.2",
  "0",
  "0",
  "0",
  "0",
  "0.19",
  "0.2",
  "0.2",
  "0.19",
  "0.19",
  "0",
  "0.19",
  "0.2",
  "0.19",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.19",
  "0.19",
  "0.2",
  "0.19",
  "0.19",
  "0.19",
  "0",
  "0",
  "0",
  "0.19",
  "0.19",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.21",
  "0.19",
  "0.19",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0",
  "0",
  "0",
  "0.2",
  "0.19",
  "0",
  "0",
  "0",
  "0",
];
const CL = [
  "1.032",
  "1.02",
  "1.016",
  "1.028",
  "1.04",
  "1.032",
  "1.052",
  "1.04",
  "1.052",
  "1.024",
  "1.024",
  "1.016",
  "1.024",
  "1.028",
  "1.024",
  "1.016",
  "1.016",
  "1.012",
  "1.024",
  "1.028",
  "1.036",
  "1.032",
  "1.016",
  "1.024",
  "1.032",
  "1.032",
  "1.028",
  "1.04",
  "1.044",
  "1.032",
  "1.056",
  "1.044",
  "1.04",
  "1.028",
  "1.036",
  "1.036",
  "1.032",
  "1.036",
  "1.036",
  "1.036",
  "1.04",
  "1.04",
  "1.052",
  "1.028",
  "1.032",
  "1.036",
  "1.04",
  "1.032",
  "1.028",
  "1.028",
  "1.036",
  "1.028",
  "1.028",
  "1.032",
  "1.016",
  "1.024",
  "1.02",
  "1.02",
  "1.016",
  "1.008",
  "1.004",
  "1.012",
  "0.988",
  "0.98",
  "0.964",
  "0.964",
  "0.964",
  "0.952",
  "0.944",
  "0.928",
  "0.92",
  "0.928",
  "0.916",
  "0.512",
  "0.992",
  "0.984",
  "0.98",
  "0.996",
  "0.992",
  "1.076",
  "1.132",
  "1.172",
  "1.272",
  "1.272",
  "1.296",
  "1.308",
  "1.356",
  "1.408",
  "1.428",
  "1.464",
  "1.544",
  "1.6",
  "1.732",
  "1.848",
  "2.2",
  "2.128",
  "2.604",
  "2.504",
  "2.672",
  "2.496",
  "3.436",
  "2.896",
  "2.812",
  "2.912",
  "3.732",
  "3.888",
  "3.724",
  "3.188",
  "3.688",
  "3.92",
  "4.04",
  "4.156",
  "4.196",
  "4.344",
  "4.98",
  "4.432",
  "1.184",
  "4.704",
  "4.896",
  "4.66",
  "2.996",
  "4.432",
  "4.556",
  "4.784",
  "4.744",
  "4.92",
  "5.024",
  "4.932",
  "5.072",
  "5.236",
  "1.956",
  "5.016",
  "5.056",
  "5.272",
  "5.42",
  "5.496",
  "4.904",
  "4.992",
  "5.384",
  "4.856",
  "5.476",
  "5.316",
  "5.376",
  "1.98",
  "5.296",
  "5.392",
  "4.892",
  "4.916",
  "4.8",
  "5.736",
  "5.692",
  "3.12",
  "5.664",
  "1.74",
  "5.672",
  "5.616",
  "5.776",
  "5.936",
  "5.136",
  "5.844",
  "5.08",
  "6.032",
  "5.88",
  "1.976",
  "5.756",
  "5.72",
  "2.004",
  "5.536",
  "4.664",
  "5.452",
  "4.992",
  "4.368",
  "4.328",
  "5.16",
  "1.976",
  "5.004",
  "5.04",
  "4.992",
  "4.936",
  "4.92",
  "4.868",
  "4.54",
  "5.34",
  "1.48",
  "4.656",
  "5.352",
  "4.792",
  "5.304",
  "5.18",
  "5.352",
  "4.756",
  "4.736",
  "4.684",
  "6.472",
  "5.184",
  "4.868",
  "5.276",
  "4.956",
  "4.272",
  "4.404",
  "0",
  "4.252",
  "5.12",
  "4.888",
  "4.264",
  "4.096",
  "3.688",
  "3.024",
  "3.464",
  "0",
  "3.664",
  "3.716",
  "3.592",
  "2.348",
  "2.212",
  "2.152",
  "2.068",
  "1.872",
  "1.616",
  "1.588",
  "1.424",
  "1.096",
  "1.288",
  "1.44",
  "1.464",
  "1.528",
  "1.536",
  "1.564",
  "1.612",
  "1.58",
  "1.828",
  "1.756",
  "0.936",
  "0.94",
  "0.676",
  "0.76",
  "0.74",
  "0.74",
  "0.748",
  "0.76",
  "0.784",
  "0.752",
  "0.764",
  "0.748",
  "0.752",
  "0.76",
  "0.76",
  "0.74",
  "0.76",
  "0.748",
  "0.748",
  "0.748",
  "0.744",
  "0.492",
  "0.504",
  "0.492",
  "0.504",
  "0.512",
  "0.504",
  "0.5",
  "0.5",
  "0.508",
  "0.504",
  "0.5",
  "0.504",
  "0.508",
  "0.512",
  "0.476",
  "0.504",
  "0.488",
  "0.524",
  "0.512",
  "0.512",
  "0.512",
  "0.496",
  "0.488",
  "0.512",
  "0.5",
  "0.584",
  "0.516",
  "0.532",
  "0.5",
  "0.5",
  "0.508",
  "0.528",
  "0.516",
  "0.524",
  "0.516",
  "0.504",
  "0.496",
  "0.524",
  "0.492",
  "0.516",
  "0.512",
  "0.508",
  "0.516",
  "0.5",
  "0.516",
  "0.504",
  "0.492",
];
const PEL = [
  "0.774",
  "0.765",
  "0.762",
  "0.771",
  "0.78",
  "0.774",
  "0.789",
  "0.78",
  "0.789",
  "0.768",
  "0.768",
  "0.762",
  "0.768",
  "0.771",
  "0.768",
  "0.762",
  "0.762",
  "0.759",
  "0.768",
  "0.771",
  "0.777",
  "0.774",
  "0.762",
  "0.768",
  "0.774",
  "0.774",
  "0.771",
  "0.78",
  "0.783",
  "0.774",
  "0.792",
  "0.783",
  "0.78",
  "0.771",
  "0.777",
  "0.777",
  "0.774",
  "0.777",
  "0.777",
  "0.777",
  "0.78",
  "0.78",
  "0.789",
  "0.771",
  "0.774",
  "0.777",
  "0.78",
  "0.774",
  "0.771",
  "0.771",
  "0.777",
  "0.771",
  "0.771",
  "0.774",
  "0.762",
  "0.768",
  "0.765",
  "0.765",
  "0.762",
  "0.756",
  "0.753",
  "0.759",
  "0.741",
  "0.735",
  "0.723",
  "0.723",
  "0.723",
  "0.714",
  "0.708",
  "0.696",
  "0.69",
  "0.696",
  "0.687",
  "0.384",
  "0.744",
  "0.738",
  "0.735",
  "0.747",
  "0.744",
  "0.807",
  "0.849",
  "0.879",
  "0.954",
  "0.954",
  "0.972",
  "0.981",
  "1.017",
  "1.056",
  "1.071",
  "1.098",
  "1.158",
  "1.2",
  "1.299",
  "1.386",
  "1.65",
  "1.596",
  "1.953",
  "1.878",
  "2.004",
  "1.872",
  "2.577",
  "2.172",
  "2.109",
  "2.184",
  "2.799",
  "2.916",
  "2.793",
  "2.391",
  "2.766",
  "2.94",
  "3.03",
  "3.117",
  "3.147",
  "3.258",
  "3.735",
  "3.324",
  "0.888",
  "3.528",
  "3.672",
  "3.495",
  "2.247",
  "3.324",
  "3.417",
  "3.588",
  "3.558",
  "3.69",
  "3.768",
  "3.699",
  "3.804",
  "3.927",
  "1.467",
  "3.762",
  "3.792",
  "3.954",
  "4.065",
  "4.122",
  "3.678",
  "3.744",
  "4.038",
  "3.642",
  "4.107",
  "3.987",
  "4.032",
  "1.485",
  "3.972",
  "4.044",
  "3.669",
  "3.687",
  "3.6",
  "4.302",
  "4.269",
  "2.34",
  "4.248",
  "1.305",
  "4.254",
  "4.212",
  "4.332",
  "4.452",
  "3.852",
  "4.383",
  "3.81",
  "4.524",
  "4.41",
  "1.482",
  "4.317",
  "4.29",
  "1.503",
  "4.152",
  "3.498",
  "4.089",
  "3.744",
  "3.276",
  "3.246",
  "3.87",
  "1.482",
  "3.753",
  "3.78",
  "3.744",
  "3.702",
  "3.69",
  "3.651",
  "3.405",
  "4.005",
  "1.11",
  "3.492",
  "4.014",
  "3.594",
  "3.978",
  "3.885",
  "4.014",
  "3.567",
  "3.552",
  "3.513",
  "4.854",
  "3.888",
  "3.651",
  "3.957",
  "3.717",
  "3.204",
  "3.303",
  "0",
  "3.189",
  "3.84",
  "3.666",
  "3.198",
  "3.072",
  "2.766",
  "2.268",
  "2.598",
  "0",
  "2.748",
  "2.787",
  "2.694",
  "1.761",
  "1.659",
  "1.614",
  "1.551",
  "1.404",
  "1.212",
  "1.191",
  "1.068",
  "0.822",
  "0.966",
  "1.08",
  "1.098",
  "1.146",
  "1.152",
  "1.173",
  "1.209",
  "1.185",
  "1.371",
  "1.317",
  "0.702",
  "0.705",
  "0.507",
  "0.57",
  "0.555",
  "0.555",
  "0.561",
  "0.57",
  "0.588",
  "0.564",
  "0.573",
  "0.561",
  "0.564",
  "0.57",
  "0.57",
  "0.555",
  "0.57",
  "0.561",
  "0.561",
  "0.561",
  "0.558",
  "0.369",
  "0.378",
  "0.369",
  "0.378",
  "0.384",
  "0.378",
  "0.375",
  "0.375",
  "0.381",
  "0.378",
  "0.375",
  "0.378",
  "0.381",
  "0.384",
  "0.357",
  "0.378",
  "0.366",
  "0.393",
  "0.384",
  "0.384",
  "0.384",
  "0.372",
  "0.366",
  "0.384",
  "0.375",
  "0.438",
  "0.387",
  "0.399",
  "0.375",
  "0.375",
  "0.381",
  "0.396",
  "0.387",
  "0.393",
  "0.387",
  "0.378",
  "0.372",
  "0.393",
  "0.369",
  "0.387",
  "0.384",
  "0.381",
  "0.387",
  "0.375",
  "0.387",
  "0.378",
  "0.369",
];
const CSL = [
  "0.774",
  "0.765",
  "0.762",
  "0.771",
  "0.78",
  "0.774",
  "0.789",
  "0.78",
  "0.789",
  "0.768",
  "0.768",
  "0.762",
  "0.768",
  "0.771",
  "0.768",
  "0.762",
  "0.762",
  "0.759",
  "0.768",
  "0.771",
  "0.777",
  "0.774",
  "0.762",
  "0.768",
  "0.774",
  "0.774",
  "0.771",
  "0.78",
  "0.783",
  "0.774",
  "0.792",
  "0.783",
  "0.78",
  "0.771",
  "0.777",
  "0.777",
  "0.774",
  "0.777",
  "0.777",
  "0.777",
  "0.78",
  "0.78",
  "0.789",
  "0.771",
  "0.774",
  "0.777",
  "0.78",
  "0.774",
  "0.771",
  "0.771",
  "0.777",
  "0.771",
  "0.771",
  "0.774",
  "0.762",
  "0.768",
  "0.765",
  "0.765",
  "0.762",
  "0.756",
  "0.753",
  "0.759",
  "0.741",
  "0.735",
  "0.723",
  "0.723",
  "0.723",
  "0.714",
  "0.708",
  "0.696",
  "0.69",
  "0.696",
  "0.687",
  "0.384",
  "0.744",
  "0.738",
  "0.735",
  "0.747",
  "0.744",
  "0.741",
  "0.75",
  "0.747",
  "0.789",
  "0.756",
  "0.741",
  "0.717",
  "0.72",
  "0.726",
  "0.711",
  "0.834",
  "1.044",
  "1.086",
  "1.299",
  "1.104",
  "1.11",
  "1.497",
  "1.953",
  "1.53",
  "1.572",
  "1.827",
  "1.953",
  "2.064",
  "1.86",
  "1.857",
  "2.025",
  "1.989",
  "1.992",
  "2.391",
  "2.55",
  "1.938",
  "3.024",
  "3.117",
  "3.147",
  "3.258",
  "3.327",
  "3.324",
  "0.261",
  "3.345",
  "3.234",
  "3.495",
  "0.465",
  "3.324",
  "3.417",
  "3.474",
  "3.483",
  "3.69",
  "3.768",
  "3.561",
  "3.804",
  "3.861",
  "1.467",
  "3.741",
  "3.783",
  "3.954",
  "4.065",
  "4.122",
  "3.231",
  "3.144",
  "4.038",
  "3.642",
  "4.107",
  "3.987",
  "4.032",
  "0",
  "3.972",
  "4.044",
  "3.663",
  "3.087",
  "3.372",
  "4.302",
  "4.269",
  "2.34",
  "4.248",
  "1.305",
  "4.254",
  "4.212",
  "4.332",
  "4.452",
  "3.411",
  "4.383",
  "3.219",
  "4.437",
  "3.063",
  "1.482",
  "3.093",
  "4.29",
  "0",
  "3.396",
  "3.024",
  "4.089",
  "3.036",
  "2.913",
  "2.907",
  "3.87",
  "1.482",
  "3.753",
  "3.78",
  "3.744",
  "3.702",
  "3.69",
  "3.651",
  "2.904",
  "3.201",
  "1.11",
  "3.318",
  "3.243",
  "2.997",
  "3.441",
  "3",
  "3.639",
  "2.967",
  "3.207",
  "3.222",
  "4.029",
  "3.495",
  "3.555",
  "3.129",
  "2.595",
  "3.012",
  "3.012",
  "0",
  "2.7",
  "2.763",
  "2.457",
  "2.43",
  "2.595",
  "2.202",
  "2.268",
  "2.598",
  "0",
  "2.484",
  "1.98",
  "1.869",
  "1.497",
  "1.425",
  "1.428",
  "1.17",
  "1.092",
  "0.951",
  "0.909",
  "0.822",
  "0.783",
  "0.879",
  "0.816",
  "0.9",
  "0.981",
  "1.02",
  "1.074",
  "1.143",
  "1.152",
  "1.338",
  "1.317",
  "0.702",
  "0.705",
  "0.507",
  "0.57",
  "0.555",
  "0.555",
  "0.561",
  "0.57",
  "0.588",
  "0.564",
  "0.573",
  "0.561",
  "0.564",
  "0.57",
  "0.57",
  "0.555",
  "0.57",
  "0.561",
  "0.561",
  "0.561",
  "0.558",
  "0.369",
  "0.378",
  "0.369",
  "0.378",
  "0.384",
  "0.378",
  "0.375",
  "0.375",
  "0.381",
  "0.378",
  "0.375",
  "0.378",
  "0.381",
  "0.384",
  "0.357",
  "0.378",
  "0.366",
  "0.393",
  "0.384",
  "0.384",
  "0.384",
  "0.372",
  "0.366",
  "0.384",
  "0.375",
  "0.438",
  "0.387",
  "0.399",
  "0.375",
  "0.375",
  "0.381",
  "0.396",
  "0.387",
  "0.393",
  "0.387",
  "0.378",
  "0.372",
  "0.393",
  "0.369",
  "0.387",
  "0.384",
  "0.381",
  "0.387",
  "0.375",
  "0.387",
  "0.378",
  "0.369",
];
const PL = [
  "0.49",
  "0.47",
  "0.47",
  "0.48",
  "0.47",
  "0.48",
  "0.47",
  "0.47",
  "0.48",
  "0.48",
  "0.47",
  "0.47",
  "0.47",
  "0.47",
  "0.47",
  "0.47",
  "0.47",
  "0.48",
  "0.48",
  "0.48",
  "0.49",
  "0.47",
  "0.5",
  "0.48",
  "0.47",
  "0.48",
  "0.48",
  "0.48",
  "0.48",
  "0.5",
  "0.48",
  "0.47",
  "0.48",
  "0.49",
  "0.48",
  "0.48",
  "0.48",
  "0.48",
  "0.47",
  "0.47",
  "0.48",
  "0.47",
  "0.47",
  "0.49",
  "0.47",
  "0.49",
  "0.49",
  "0.48",
  "0.47",
  "0.48",
  "0.48",
  "0.47",
  "0.47",
  "0.48",
  "0.47",
  "0.47",
  "0.48",
  "0.48",
  "0.48",
  "0.47",
  "0.48",
  "0.47",
  "0.47",
  "0.47",
  "0.47",
  "0.47",
  "0.46",
  "0.47",
  "0.47",
  "0.48",
  "0.48",
  "0.48",
  "0.46",
  "0.46",
  "0.46",
  "0.46",
  "0.45",
  "0.45",
  "0.22",
  "0.46",
  "0.45",
  "0.45",
  "0.45",
  "0.45",
  "0.45",
  "0.45",
  "0.22",
  "0.44",
  "0.45",
  "0.45",
  "0.46",
  "0.45",
  "0.45",
  "0.45",
  "0.45",
  "0.45",
  "0.45",
  "0.45",
  "0.45",
  "0.44",
  "0.45",
  "0.45",
  "0.45",
  "0.45",
  "0.45",
  "0.45",
  "0.6",
  "0.49",
  "0.73",
  "0.64",
  "0.61",
  "0.59",
  "0.59",
  "0.63",
  "0.64",
  "0.59",
  "0.2",
  "0.58",
  "0.59",
  "0.61",
  "0.22",
  "0.58",
  "0.61",
  "0.57",
  "0.63",
  "0.57",
  "0.78",
  "0.77",
  "0.78",
  "0.81",
  "0.22",
  "0.82",
  "0.89",
  "0.79",
  "0.8",
  "0.57",
  "0.62",
  "0.59",
  "0.6",
  "1.01",
  "1.15",
  "1.11",
  "1.17",
  "0.16",
  "1.09",
  "1.07",
  "1.08",
  "1",
  "1",
  "1",
  "1",
  "0.21",
  "0.93",
  "0.21",
  "0.89",
  "0.86",
  "0.86",
  "0.89",
  "0.88",
  "0.83",
  "0.82",
  "0.83",
  "0.83",
  "0.21",
  "0.83",
  "0.64",
  "0.46",
  "0.58",
  "0.68",
  "0.75",
  "0.68",
  "0.73",
  "0.69",
  "0.66",
  "0.18",
  "0.7",
  "0.7",
  "0.75",
  "0.62",
  "0.62",
  "0.71",
  "0.72",
  "0.7",
  "0.22",
  "0.7",
  "0.68",
  "0.77",
  "0.69",
  "0.78",
  "0.77",
  "0.78",
  "0.79",
  "0.8",
  "0.82",
  "0.83",
  "0.83",
  "0.81",
  "0.83",
  "0.85",
  "0.87",
  "0.52",
  "0.79",
  "0.75",
  "0.83",
  "0.8",
  "0.71",
  "0.77",
  "0.68",
  "0.71",
  "0.46",
  "0.55",
  "0.55",
  "0.51",
  "0.53",
  "0.52",
  "0.51",
  "0.52",
  "0.52",
  "0.5",
  "0.51",
  "0.52",
  "0.52",
  "0.45",
  "0.45",
  "0.46",
  "0.46",
  "0.46",
  "0.46",
  "0.46",
  "0.47",
  "0.46",
  "0.47",
  "0.46",
  "0.49",
  "0.49",
  "0.47",
  "0.5",
  "0.56",
  "0.58",
  "0.58",
  "0.6",
  "0.58",
  "0.59",
  "0.58",
  "0.56",
  "0.56",
  "0.55",
  "0.57",
  "0.56",
  "0.56",
  "0.55",
  "0.55",
  "0.54",
  "0.55",
  "0.47",
  "0.47",
  "0.47",
  "0.47",
  "0.47",
  "0.47",
  "0.47",
  "0.47",
  "0.47",
  "0.48",
  "0.47",
  "0.47",
  "0.48",
  "0.48",
  "0.48",
  "0.48",
  "0.48",
  "0.47",
  "0.47",
  "0.48",
  "0.48",
  "0.48",
  "0.49",
  "0.48",
  "0.47",
  "0.47",
  "0.47",
  "0.48",
  "0.48",
  "0.48",
  "0.48",
  "0.48",
  "0.49",
  "0.48",
  "0.48",
  "0.48",
  "0.48",
  "0.47",
  "0.47",
  "0.48",
  "0.48",
  "0.47",
  "0.48",
  "0.47",
  "0.48",
  "0.48",
];
const SAL = [
  "1.26",
  "1.27",
  "1.27",
  "1.28",
  "1.28",
  "1.29",
  "1.3",
  "1.3",
  "1.3",
  "1.29",
  "1.3",
  "1.32",
  "1.32",
  "1.32",
  "1.33",
  "1.34",
  "1.32",
  "1.33",
  "1.33",
  "1.33",
  "1.22",
  "1.23",
  "1.23",
  "1.24",
  "1.25",
  "1.26",
  "1.26",
  "1.26",
  "1.26",
  "1.28",
  "1.29",
  "1.3",
  "1.3",
  "1.31",
  "1.31",
  "1.31",
  "1.31",
  "1.32",
  "1.32",
  "1.31",
  "1.3",
  "1.31",
  "1.31",
  "1.3",
  "1.32",
  "1.31",
  "1.33",
  "1.33",
  "1.32",
  "1.32",
  "1.33",
  "1.34",
  "1.32",
  "1.32",
  "1.34",
  "1.33",
  "1.31",
  "1.29",
  "1.28",
  "1.25",
  "1.26",
  "1.24",
  "1.22",
  "1.22",
  "1.19",
  "1.18",
  "1.16",
  "1.15",
  "1.12",
  "1.13",
  "1.11",
  "1.08",
  "1.06",
  "1.03",
  "1.01",
  "0.88",
  "0.92",
  "0.91",
  "0.91",
  "0.91",
  "0.85",
  "0.91",
  "1.13",
  "1.37",
  "1.51",
  "1.75",
  "2.15",
  "2.39",
  "2.8",
  "2.72",
  "2.99",
  "3.14",
  "3.38",
  "3.68",
  "4.37",
  "4.28",
  "4.59",
  "4.86",
  "5.2",
  "4.81",
  "5.17",
  "5.29",
  "4.93",
  "6.43",
  "8.28",
  "7.69",
  "8.07",
  "7.03",
  "7.6",
  "8.18",
  "8.35",
  "7.96",
  "8.25",
  "8.8",
  "8.26",
  "8.57",
  "2.56",
  "9.86",
  "9.56",
  "9.71",
  "0.35",
  "11.43",
  "11.06",
  "11.06",
  "10.87",
  "11.06",
  "10.96",
  "11.33",
  "11.65",
  "11.6",
  "1.69",
  "11.64",
  "11.79",
  "11.77",
  "12.16",
  "12.18",
  "12.42",
  "12.45",
  "12.52",
  "12.45",
  "12.66",
  "12.37",
  "13.01",
  "7.1",
  "13",
  "12.97",
  "13.14",
  "13.12",
  "13.03",
  "13.12",
  "12.53",
  "0.65",
  "12.81",
  "3.17",
  "13.01",
  "12.58",
  "12.45",
  "12.95",
  "13.13",
  "13.1",
  "12.98",
  "12.74",
  "12.64",
  "4.02",
  "12.3",
  "13.04",
  "2.84",
  "11.96",
  "12.09",
  "11.93",
  "11.91",
  "11.61",
  "11.35",
  "11.86",
  "3.74",
  "11.58",
  "11.35",
  "11.1",
  "11.06",
  "10.77",
  "10.75",
  "10.64",
  "10.55",
  "4.21",
  "10.3",
  "10.31",
  "9.78",
  "9.78",
  "9.33",
  "9.38",
  "9.34",
  "8.93",
  "8.92",
  "8.57",
  "8.22",
  "8.44",
  "7.76",
  "7.56",
  "7.68",
  "6.92",
  "4.04",
  "7.02",
  "6.57",
  "6.28",
  "6.04",
  "6.05",
  "5.32",
  "5.08",
  "4.84",
  "3.04",
  "4.37",
  "4.27",
  "3.51",
  "3.83",
  "2.91",
  "2.53",
  "2.55",
  "2.53",
  "1.94",
  "1.71",
  "1.47",
  "1.52",
  "1.5",
  "1.36",
  "1.36",
  "1.15",
  "0.94",
  "1.03",
  "1.02",
  "1.24",
  "1.14",
  "1.17",
  "1.18",
  "1.18",
  "1.19",
  "1.16",
  "1.15",
  "1.17",
  "1.23",
  "1.22",
  "1.22",
  "1.24",
  "1.23",
  "1.2",
  "1.21",
  "1.23",
  "1.24",
  "1.25",
  "1.18",
  "1.2",
  "1.22",
  "1.22",
  "1.25",
  "1.23",
  "1.22",
  "1.28",
  "1.27",
  "1.25",
  "1.26",
  "1.26",
  "1.27",
  "1.27",
  "1.3",
  "1.3",
  "1.3",
  "1.31",
  "1.32",
  "1.35",
  "1.36",
  "1.34",
  "1.35",
  "1.37",
  "1.37",
  "1.38",
  "1.37",
  "1.36",
  "1.39",
  "1.27",
  "1.28",
  "1.28",
  "1.28",
  "1.29",
  "1.32",
  "1.33",
  "1.34",
  "1.3",
  "1.31",
  "1.33",
  "1.33",
  "1.33",
  "1.33",
  "1.34",
  "1.35",
  "1.35",
  "1.38",
  "1.38",
  "1.37",
  "1.39",
  "1.37",
  "1.27",
];
const ESL = [
  "0.41",
  "0.42",
  "0.2",
  "0.2",
  "0.21",
  "0.2",
  "0.21",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.21",
  "0.2",
  "0.21",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.21",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.21",
  "0.2",
  "0.2",
  "0.2",
  "0.21",
  "0.2",
  "0.2",
  "0.2",
  "0.21",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.21",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.19",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.19",
  "0.21",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.2",
  "0.34",
  "0.18",
  "0.17",
  "0.19",
  "0.19",
  "0.2",
  "0.22",
  "0.24",
  "0.26",
  "0.28",
  "0.29",
  "0.31",
  "0.32",
  "0.36",
  "0.36",
  "0.42",
  "0.46",
  "0.46",
  "0.46",
  "0.5",
  "0.58",
  "0.57",
  "0.64",
  "0.62",
  "0.68",
  "0.64",
  "0.64",
  "0.63",
  "0.61",
  "0.65",
  "0.68",
  "0.02",
  "0.76",
  "0.58",
  "0.68",
  "0.38",
  "0.69",
  "0.71",
  "0.71",
  "0.71",
  "0.79",
  "0.7",
  "0.7",
  "0.71",
  "0.79",
  "0.34",
  "0.71",
  "0.75",
  "0.79",
  "0.82",
  "0.81",
  "0.79",
  "0.79",
  "0.78",
  "0.82",
  "0.73",
  "0.88",
  "0.82",
  "0.25",
  "0.86",
  "0.77",
  "0.83",
  "0.85",
  "0.88",
  "0.81",
  "0.89",
  "0.56",
  "0.85",
  "0.43",
  "0.87",
  "0.87",
  "0.79",
  "0.81",
  "0.87",
  "0.92",
  "0.81",
  "0.74",
  "0.77",
  "0.41",
  "0.9",
  "0.74",
  "0.47",
  "0.75",
  "0.75",
  "0.8",
  "0.75",
  "0.99",
  "0.71",
  "0.95",
  "0.37",
  "0.72",
  "0.78",
  "0.79",
  "0.76",
  "0.75",
  "0.69",
  "0.82",
  "0.73",
  "0.18",
  "0.68",
  "0.72",
  "0.62",
  "0.64",
  "0.62",
  "0.64",
  "0.64",
  "0.63",
  "0.59",
  "0.65",
  "0.54",
  "0.64",
  "0.55",
  "0.57",
  "0.62",
  "0.64",
  "0.46",
  "0.74",
  "0.71",
  "0.97",
  "0.68",
  "0.61",
  "0.79",
  "0.68",
  "0.54",
  "0",
  "0.48",
  "0.26",
  "0.27",
  "0.25",
  "0.27",
  "0.26",
  "0.23",
  "0.21",
  "0.26",
  "0.27",
  "0.28",
  "0.21",
  "0.22",
  "0.25",
  "0.26",
  "0.22",
  "0.22",
  "0.24",
  "0.23",
  "0.24",
  "0.24",
  "0.41",
  "0.28",
  "0.35",
  "0.28",
  "0.29",
  "0.29",
  "0.32",
  "0.31",
  "0.37",
  "0.34",
  "0.41",
  "0.41",
  "0.41",
  "0.41",
  "0.41",
  "0.41",
  "0.52",
  "0.34",
  "0.3",
  "0.34",
  "0.2",
  "0.2",
  "0.29",
  "0.18",
  "0.15",
  "0.16",
  "0.43",
  "0.2",
  "0.15",
  "0.14",
  "0.14",
  "0.14",
  "0.14",
  "0.13",
  "0.14",
  "0.14",
  "0.14",
  "0.13",
  "0.14",
  "0.14",
  "0.13",
  "0.14",
  "0.13",
  "0.14",
  "0.13",
  "0.13",
  "0.13",
  "0.13",
  "0.14",
  "0.13",
  "0.14",
  "0.16",
  "0.14",
  "0.14",
  "0.14",
  "0.14",
  "0.14",
  "0.14",
  "0.14",
  "0.13",
  "0.13",
  "0.15",
  "0.14",
  "0.14",
  "0.42",
  "0.42",
  "0.42",
  "0.41",
  "0.42",
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
  "15:00:00",
  "15:05:00",
  "15:10:00",
  "15:15:00",
  "15:20:00",
  "15:25:00",
  "15:30:00",
  "15:35:00",
  "15:40:00",
  "15:45:00",
  "15:46:00",
  "15:50:00",
  "15:55:00",
  "16:00:00",
  "16:05:00",
  "16:10:00",
  "16:15:00",
  "16:20:00",
  "16:25:00",
  "16:26:00",
  "16:30:00",
  "16:35:00",
  "16:40:00",
  "16:45:00",
  "16:50:00",
  "16:55:00",
  "17:00:00",
  "17:05:00",
  "17:10:00",
  "17:15:00",
  "17:20:00",
  "17:25:00",
  "17:30:00",
  "17:35:00",
  "17:40:00",
  "17:45:00",
  "17:50:00",
  "17:55:00",
  "18:00:00",
  "18:05:00",
  "18:10:00",
  "18:15:00",
  "18:20:00",
  "18:25:00",
  "18:30:00",
  "18:35:00",
  "18:40:00",
  "18:45:00",
  "18:50:00",
  "18:55:00",
  "19:00:00",
  "19:05:00",
  "19:10:00",
  "19:15:00",
  "19:20:00",
  "19:25:00",
  "19:30:00",
  "19:35:00",
  "19:40:00",
  "19:45:00",
  "19:50:00",
  "19:55:00",
  "20:00:00",
  "20:05:00",
  "20:10:00",
  "20:15:00",
  "20:20:00",
  "20:25:00",
  "20:30:00",
  "20:35:00",
  "20:40:00",
  "20:45:00",
  "20:50:00",
  "20:55:00",
  "21:00:00",
  "21:05:00",
  "21:10:00",
  "21:15:00",
  "21:20:00",
  "21:25:00",
  "21:30:00",
  "21:35:00",
  "21:40:00",
  "21:45:00",
  "21:50:00",
  "21:55:00",
  "22:00:00",
  "22:05:00",
  "22:10:00",
  "22:15:00",
  "22:20:00",
  "22:25:00",
  "22:30:00",
  "22:35:00",
  "22:40:00",
  "22:45:00",
  "22:50:00",
  "22:55:00",
  "23:00:00",
  "23:05:00",
  "23:10:00",
  "23:15:00",
  "23:20:00",
  "23:25:00",
  "23:30:00",
  "23:35:00",
  "23:40:00",
  "23:45:00",
  "23:50:00",
  "23:55:00",
  "24:00:00",
];

export default function EEEView() {
  const navigate = useNavigate();
  return (
    <div>
      <LineChart
        height={500}
        series={[
          {
            data: AEL,
            label: "Applied Electronics Lab",
            area: true,
            stack: "total",
            showMark: false,
          },
          {
            data: EML,
            label: "Electrical Machines Lab",
            area: true,
            stack: "total",
            showMark: false,
          },
          {
            data: CL,
            label: "Computer Lab",
            area: true,
            stack: "total",
            showMark: false,
          },
          {
            data: PEL,
            label: "Power Electronics Lab",
            area: true,
            stack: "total",
            showMark: false,
          },
          {
            data: CSL,
            label: "Control System Lab",
            area: true,
            stack: "total",
            showMark: false,
          },
          {
            data: PL,
            label: "Project Lab",
            area: true,
            stack: "total",
            showMark: false,
          },
          {
            data: SAL,
            label: "Siemens Automation Lab",
            area: true,
            stack: "total",
            showMark: false,
          },
          {
            data: ESL,
            label: "Embedded System Lab",
            area: true,
            stack: "total",
            showMark: false,
          }
        ]}
        colors={[
          "red",
          "orangered",
          "pink",
          "yellow",
          "blue",
          "lime",
          "darkcyan",
          "darksalmon",
        ]}
        xAxis={[{ scaleType: "point", data: xLabels,label:"Time"}]}
        yAxis={[{label:"Predicted Day Ahead Demand Trend"}]}
        sx={{
          ".MuiLineElement-root": {
            display: "none",
          },
          border:4,
          borderColor:"antiquewhite"
        }}
      />
      <br />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-end",
          alignItems: "center",
          gap:10
        }}
      >
        <IconButton
          onClick={() => navigate("/eee-dept")}
          title="EEE Department Laboratories"
          size="large"
          sx={{backgroundColor:"red"}}
        >
          <InfoIcon />
        </IconButton>
        <IconButton
          onClick={() => navigate("/calculate")}
          title="Calculate"
          size="large"
          sx={{backgroundColor:"brown"}}
        >
          <CalculateIcon/>
        </IconButton>
        <Button variant="contained" onClick={() => navigate(-1)}>
          Back
        </Button>
      </div>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:20,marginTop:10}}>
        <div style={{border:"3px solid red",width:350,padding:16,textAlign:"center"}}>
          Estimated Consumption : KWh <br/>
          Actual Consumption : KWh
        </div>
        <div style={{border:"3px solid yellow",width:350,padding:16,textAlign:"center"}}>
          Estimated Consumption Cost : ₹/KWh <br/>
          Actual Consumption Cost : ₹/KWh
        </div>
        <div style={{border:"3px solid green",width:350,padding:16,textAlign:"center"}}>
          Estimated Consumption Cost : Ξ/KWh <br/>
          Actual Consumption Cost : Ξ/KWh
        </div>
      </div>
    </div>
  );
}
