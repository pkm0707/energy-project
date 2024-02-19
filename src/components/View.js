import { useNavigate } from "react-router-dom";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import Footer from "./Footer";
import SpeedeDial from "./SpeedDial";

export function View() {
  const navigate = useNavigate();
  const images = [
    {
      url: "https://images.unsplash.com/photo-1435575653489-b0873ec954e2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww",
      title: "Architecture",
      width: "15%",
      navigate: "/arch-dept",
    },
    {
      url: "https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Civil",
      width: "15%",
      navigate: "/civil-dept",
    },
    {
      url: "https://t4.ftcdn.net/jpg/05/63/41/63/360_F_563416386_ruJPhBmQZTDGN90VyCbDFMnVy5sbwkeb.jpg",
      title: "Chemistry",
      width: "15%",
      navigate: "/chem-dept",
    },
    {
      url: "https://images.unsplash.com/photo-1594729095022-e2f6d2eece9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbXB1dGVyJTIwc2NpZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "CSE",
      width: "15%",
      navigate: "/com-sci-dept",
    },
    {
      url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fENvbXB1dGVyJTIwU2NpZW5jZSUyMGFuZCUyMEJ1c2luZXNzJTIwU3lzdGVtc3xlbnwwfHwwfHx8MA%3D%3D",
      title: "CSBS",
      width: "15%",
      navigate: "/com-sci-bus",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1661544139432-c007a6b9b00b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29tcHV0ZXIlMjBBcHBsaWNhdGlvbnN8ZW58MHx8MHx8fDA%3D",
      title: "MCA",
      width: "15%",
      navigate: "/com-app",
    },
    {
      url: "https://www.pnnl.gov/sites/default/files/styles/hero_1600x1200/public/media/image/Applied-Mathematics_0.jpg?h=8f74817f&itok=ZdX2R_As",
      title: "AMCS",
      width: "15%",
      navigate: "/app-math-dept",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1683121713210-97667d2e83c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RWxlY3Ryb25pY3MlMjBhbmQlMjBDb21tdW5pY2F0aW9uJTIwRW5naW5lZXJpbmd8ZW58MHx8MHx8fDA%3D",
      title: "ECE",
      width: "15%",
      navigate: "/ece-dept",
    },
    {
      url: "https://images.unsplash.com/photo-1611599281058-94426d0618a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWxlY3RyaWNhbCUyMGVuZ2luZWVyaW5nfGVufDB8fDB8fHww",
      title: "EEE",
      width: "15%",
      navigate: "/eee-view",
    },
    {
      url: "https://images.unsplash.com/photo-1543109740-4bdb38fda756?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "English",
      width: "15%",
      navigate: "/english",
    },
    {
      url: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5mb3JtYXRpb24lMjB0ZWNobm9sb2d5fGVufDB8fDB8fHww",
      title: "IT",
      width: "15%",
      navigate: "/it-dept",
    },
    {
      url: "https://images.unsplash.com/photo-1632571401005-458e9d244591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWF0aGVtYXRpY3N8ZW58MHx8MHx8fDA%3D",
      title: "Mathematics",
      width: "15%",
      navigate: "/maths-dept",
    },
    {
      url: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVjaGFuaWNhbCUyMGVuZ2luZWVyaW5nfGVufDB8fDB8fHww",
      title: "Mechanical",
      width: "15%",
      navigate: "/mech-dept",
    },
    {
      url: "https://media.istockphoto.com/id/606703118/photo/mechanical-engineering-automation.webp?b=1&s=170667a&w=0&k=20&c=kf075rITPcatG77UAnEbdWLU_lK-ZAf0bIvAmTIlDTA=",
      title: "Mechatronics",
      width: "15%",
      navigate: "/mechat-dept",
    },
    {
      url: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGh5c2ljc3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Physics",
      width: "15%",
      navigate: "/physics",
    },
  ];

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    height: 150,
    [theme.breakpoints.down("sm")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &.Mui-focusVisible": {
      zIndex: 1,
      "& .MuiImageBackdrop-root": {
        opacity: 0.15,
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
    backgroundPosition: "center 15%",
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
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent:"center",
          alignItems:"center",
          gap:3,
          minWidth: 150,
          width: "100%",
          padding:2
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
                  fontWeight:"bolder",
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
      <Footer/>
      <SpeedeDial/>
    </div>
  );
}
