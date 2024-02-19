import * as React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export function EEE() {
  const navigate = useNavigate();
  const images = [
    {
      url: "https://www.tce.edu/sites/default/files/styles/height_600_700/public/2022-03/APPLIED-ELECTRONICS-LABORATORY-1.jpg.webp?itok=bOf9bBFZ",
      title: "Applied Electronics Laboratory",
      width: "20%",
      navigate: "/app-elec-lab",
    },
    {
      url: "https://www.tce.edu/sites/default/files/styles/height_600_700/public/2022-03/Electrical-Machines-Lab.JPG.webp?itok=HufSFDXn",
      title: "Electrical Machines Laboratory",
      width: "20%",
      navigate: "/elec-mach-lab",
    },
    {
      url: "https://www.tce.edu/sites/default/files/styles/height_600_700/public/2022-03/Embedded-Systems-Lab.JPG.webp?itok=U5-Sw2-b",
      title: "Embedded Systems Laboratory",
      width: "20%",
      navigate: "/emb-sys-lab",
    },
    {
      url: "https://www.tce.edu/sites/default/files/styles/height_600_700/public/2022-03/Siemens-Automation-lab.JPG.webp?itok=M6AF_ftd",
      title: "Siemens Automation Laboratory",
      width: "20%",
      navigate: "/sim-auto-lab",
    },
    {
      url: "https://www.tce.edu/sites/default/files/styles/height_600_700/public/2022-03/Project-Lab.JPG.webp?itok=aoovcZgD",
      title: "Project Laboratory",
      width: "20%",
      navigate: "/proj-lab",
    },
    {
      url: "https://www.tce.edu/sites/default/files/styles/height_600_700/public/2022-03/Computer-Laboratory.jpg.webp?itok=_gwD8L5a",
      title: "Computer Laboratory",
      width: "20%",
      navigate: "/comp-lab",
    },
    {
      url: "https://www.tce.edu/sites/default/files/styles/height_600_700/public/2022-03/Power-Electronics-LAB.jpg.webp?itok=Kp3n2LDJ",
      title: "Power Electronics Laboratory",
      width: "20%",
      navigate: "/pow-elec-lab",
    },
    {
      url: "https://www.tce.edu/sites/default/files/styles/height_600_700/public/2022-03/Control-Systems-Lab.jpg.webp?itok=qqloDpja",
      title: "Control System Laboratory",
      width: "20%",
      navigate: "/con-sys-lab",
    },
  ];

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    height: 200,
    [theme.breakpoints.down("sm")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &.Mui-focusVisible": {
      zIndex: 1,
      "& .MuiImageBackdrop-root": {
        opacity: 0.2,
      },
      "& .MuiImageMarked-root": {
        opacity: 0,
      },
      "& .MuiTypography-root": {
        border: "4px solid currentColor",
      },
    },
  }));

  const ImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 20%",
  });

  const Image = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  }));

  const ImageBackdrop = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  }));

  const ImageMarked = styled("span")(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  }));
  return (
    <div>
      <div>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
            minWidth: 200,
            width: "100%",
            padding: 2,
          }}
        >
          {images.map((image) => (
            <ImageButton
              focusRipple
              key={image.title}
              style={{
                width: image.width,
              }}
            >
              <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: "relative",
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    fontWeight: "bolder",
                  }}
                  onClick={() => navigate(image.navigate)}
                >
                  {image.title}
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </Image>
            </ImageButton>
          ))}
        </Box>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
          <a href="https://metamask.io/" target="_blank" rel="noreferrer" title="It will Navigate to MetaMask official Page, Please try to install the MetaMask for Make a Payment !"><Button variant="contained">Make a Payment</Button></a><br/><br/>
        </div>
      </div>
    </div>
  );
}
