import "./App.css";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FcAbout } from "react-icons/fc";
import { SlEnergy } from "react-icons/sl";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { useNavigate } from "react-router-dom";
import { FaDatabase } from "react-icons/fa6";
import { GiElectric } from "react-icons/gi";
import { Route, Routes } from "react-router-dom";
import { About } from "./components/About";
import { View } from "./components/View";
import { EEE } from "./components/EEE";
import { AEL } from "./components/EEE-Dept/AEL";
import { EML } from "./components/EEE-Dept/EML";
import { CL } from "./components/EEE-Dept/CL";
import { CSL } from "./components/EEE-Dept/CSL";
import { ESL } from "./components/EEE-Dept/ESL";
import { PEL } from "./components/EEE-Dept/PEL";
import { PL } from "./components/EEE-Dept/PL";
import { SAL } from "./components/EEE-Dept/SAL";

const drawerWidth = 240;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function App() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [laboratoryclick, setLaboratoryClick] = React.useState(false);
  const handleClickLaboratories = () => {
    setLaboratoryClick(!laboratoryclick);
  };
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="fixed" open={open}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ fontFamily: "monospace",cursor:"pointer" }}
                onClick={()=>navigate("/")}
              >
                Day Ahead Energy Trend
              </Typography>
              <IconButton onClick={()=>navigate("/")}>
                <SlEnergy color="yellow" />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
              <IconButton
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              <ListItem>
                <ListItemButton onClick={()=>navigate("/about")}>
                  <ListItemIcon>
                    <FcAbout size={25} />
                  </ListItemIcon>
                  <ListItemText primary="About" />
                </ListItemButton>
              </ListItem>
            </List>
            <Divider />
            <List
              sx={{ minWidth: 180, bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              title="Kids Fashion (available for both boys and girls)"
            >
              <ListItemButton onClick={handleClickLaboratories}>
                <ListItemIcon>
                  <FaDatabase size={20} color="green" />
                </ListItemIcon>
                <ListItemText primary="Data Collection" />
                {laboratoryclick ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={laboratoryclick} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => {
                      navigate("/eee-dept");
                    }}
                  >
                    <ListItemIcon>
                      <GiElectric size={25} color="red" />
                    </ListItemIcon>
                    <ListItemText primary="EEE" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </Drawer>
          <Main open={open}>
            <DrawerHeader />
            <Routes>
              <Route path="/" element={<View/>} />
              <Route path="/about" element={<About />} />
              {/* EEE-Department */}
              <Route path="/eee-dept" element={<EEE/>} />
              <Route path="/app-elec-lab" element={<AEL/>} />
              <Route path="/elec-mach-lab" element={<EML/>} />
              <Route path="/comp-lab" element={<CL/>} />
              <Route path="/con-sys-lab" element={<CSL/>} />
              <Route path="/emb-sys-lab" element={<ESL/>} />
              <Route path="/pow-elec-lab" element={<PEL/>} />
              <Route path="/proj-lab" element={<PL/>} />
              <Route path="/sim-auto-lab" element={<SAL/>} />
            </Routes>
          </Main>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
