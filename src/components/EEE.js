import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function EEE() {
  const navigate = useNavigate();
  const data = [
    {
      name: "Applied Electronics Laboratory",
      navigation: "/app-elec-lab",
      image:
        "https://www.tce.edu/sites/default/files/styles/height_600_700/public/2022-03/APPLIED-ELECTRONICS-LABORATORY-1.jpg.webp?itok=bOf9bBFZ",
    },
    {
      name: "Electrical Machines Laboratory",
      navigation: "/elec-mach-lab",
      image:
        "https://www.tce.edu/sites/default/files/styles/height_600_700/public/2022-03/Electrical-Machines-Lab.JPG.webp?itok=HufSFDXn",
    },
    {
      name: "Embedded Systems Laboratory",
      navigation: "/emb-sys-lab",
      image:
        "https://www.tce.edu/sites/default/files/styles/height_600_700/public/2022-03/Embedded-Systems-Lab.JPG.webp?itok=U5-Sw2-b",
    },
    {
      name: "Siemens Automation Laboratory",
      navigation: "/sim-auto-lab",
      image:
        "https://www.tce.edu/sites/default/files/styles/height_600_700/public/2022-03/Siemens-Automation-lab.JPG.webp?itok=M6AF_ftd",
    },
    {
      name: "Project Laboratory",
      navigation: "/proj-lab",
      image:
        "https://www.tce.edu/sites/default/files/styles/height_600_700/public/2022-03/Project-Lab.JPG.webp?itok=aoovcZgD",
    },
    {
      name: "Computer Laboratory",
      navigation: "/comp-lab",
      image:
        "https://www.tce.edu/sites/default/files/styles/height_600_700/public/2022-03/Computer-Laboratory.jpg.webp?itok=_gwD8L5a",
    },
    {
      name: "Power Electronics Laboratory",
      navigation: "/pow-elec-lab",
      image:
        "https://www.tce.edu/sites/default/files/styles/height_600_700/public/2022-03/Power-Electronics-LAB.jpg.webp?itok=Kp3n2LDJ",
    },
    {
      name: "Control System Laboratory",
      navigation: "/con-sys-lab",
      image:
        "https://www.tce.edu/sites/default/files/styles/height_600_700/public/2022-03/Control-Systems-Lab.jpg.webp?itok=qqloDpja",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: 25,
      }}
    >
      {data.map((item, index) => {
        return (
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.name}
                onClick={() => navigate(item.navigation)}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="p"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  {item.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </div>
  );
}
