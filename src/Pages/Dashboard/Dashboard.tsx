import React, { useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  Grid,
  Tabs,
  Tab,
  IconButton,
  InputAdornment,
  Input,
  Button,
  Popover,
  Avatar
} from "@mui/material";
import "./dashboard.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import PersonIcon from "@mui/icons-material/Person";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import TuneIcon from "@mui/icons-material/Tune";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins:{
    legend: {
     display: false
    }
   }
};

const labels = ['Mon', 'Tue', 'Web', 'Thu', 'Fri', 'Sat',];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      data:[3,5,9,5,10],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Dashboard = () => {
  const [selectFilter, setSelectFilter] = useState("");
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Box p={"35px 25px"}>
        <Box className="pageHead">
          <Box className="pageHead__heading">
            <Typography variant="h5" className="pageHead__title">
              Dashboard
            </Typography>
            <Typography className="pageHead__text">
              <b>Hey Karan</b>, here's an overview on how's it going
            </Typography>
          </Box>
          <div className="pageHead__fields">
            <FormControl className="searchBox" variant="standard">
              {/* <InputLabel htmlFor="standard-adornment-password">
                Search
              </InputLabel> */}
              <Input
                placeholder="Search"
                id="standard-adornment-password"
                type="text"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Box className="filterBlock">
              <Button
                className="filterBlock__btn"
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
              >
                Filter <TuneIcon />
              </Button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <Typography sx={{ p: 2 }}>
                  The content of the Popover.
                </Typography>
              </Popover>
            </Box>
          </div>
        </Box>
        <div className="mt-10">
          <Grid container spacing={2}>
            <Grid item xs={12} lg={7}>
              <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                  <Box className="dashboardCard" bgcolor={"#f3f0ff"}>
                    <Box className="dashboardCard__icon"></Box>
                    <Box className="dashboardCard__content">
                      <Typography variant="h5" className="dashboardCard__title">
                        Total Team Member
                      </Typography>
                      <Typography variant="h4" className="dashboardCard__text">
                        15
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Box className="dashboardCard" bgcolor={"#e8f9ff"}>
                    <Box className="dashboardCard__icon"></Box>
                    <Box className="dashboardCard__content">
                      <Typography variant="h5" className="dashboardCard__title">
                        Team Members At Works
                      </Typography>
                      <Typography variant="h4" className="dashboardCard__text">
                        12
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Box className="dashboardCard" bgcolor={"#f8edeb"}>
                    <Box className="dashboardCard__icon"></Box>
                    <Box className="dashboardCard__content">
                      <Typography variant="h5" className="dashboardCard__title">
                        Completed Tasks This Month
                      </Typography>
                      <Typography variant="h4" className="dashboardCard__text">
                        62
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Box className="dashboardCard" bgcolor={"#edf9ef"}>
                    <Box className="dashboardCard__icon"></Box>
                    <Box className="dashboardCard__content">
                      <Typography variant="h5" className="dashboardCard__title">
                        Team Member with no task
                      </Typography>
                      <Typography variant="h4" className="dashboardCard__text">
                        3
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Box className="dashboardTabs" mt={"16px"}>
                <Box sx={{ borderBottom: 1, borderColor: "#eee" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab
                      label={
                        <Box className="TabContentBtn">
                          <Box
                            className="TabContentBtn__status"
                            bgcolor={"#fdf5ef"}
                            borderColor={"$fce1ce"}
                            color={"#fe842d"}
                          >
                            <TextSnippetIcon /> 24
                          </Box>
                          <Typography className="TabContentBtn__text">
                            <span>Tasks</span> In Backlogs
                          </Typography>
                        </Box>
                      }
                      {...a11yProps(0)}
                    />
                    <Tab
                      label={
                        <Box className="TabContentBtn">
                          <Box
                            className="TabContentBtn__status"
                            bgcolor={"#f3f0ff"}
                            color={"#551fff"}
                          >
                            <ImportExportIcon /> 24
                          </Box>
                          <Typography className="TabContentBtn__text">
                            <span>Tasks</span> In Progress
                          </Typography>
                        </Box>
                      }
                      {...a11yProps(1)}
                    />
                    <Tab
                      label={
                        <Box className="TabContentBtn">
                          <Box
                            className="TabContentBtn__status"
                            bgcolor={"#f1fbff"}
                            color={"#00b7fe"}
                          >
                            <PersonIcon /> 24
                          </Box>
                          <Typography className="TabContentBtn__text">
                            <span>No. of</span> Clients
                          </Typography>
                        </Box>
                      }
                      {...a11yProps(2)}
                    />
                    <Tab
                      label={
                        <Box className="TabContentBtn">
                          <Box
                            className="TabContentBtn__status"
                            bgcolor={"#f3f0ff"}
                            color={"#551fff"}
                          >
                            <ImportExportIcon /> 24
                          </Box>
                          <Typography className="TabContentBtn__text">
                            <span>Tasks</span> In Progress
                          </Typography>
                        </Box>
                      }
                      {...a11yProps(2)}
                    />
                  </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                  <Box className="taskListBlock">
                    <Box className="taskCard">
                      <Box className="taskCard__btn">
                        <Button>
                          <ArrowDropUpRoundedIcon />
                          Design Crop.
                        </Button>
                      </Box>
                      <Box className="taskCard__info">
                        <Box className="taskCard__heading">
                          <Typography className="taskCard__title">
                            Create a marketing Funnel for X
                          </Typography>
                          <Typography className="taskCard__text">
                            Create a marketing Funnel for X
                          </Typography>
                        </Box>
                        <Box className="taskCard__status">
                          <Typography className="taskCard__time">
                            <CalendarMonthOutlinedIcon />
                            03 Nov <span>(3 days Until deadline)</span>
                          </Typography>
                          <Button className="taskCard__assignBtn">
                            Assign to a Team Member
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="taskCard">
                      <Box className="taskCard__btn">
                        <Button>
                          <ArrowDropUpRoundedIcon />
                          Design Crop.
                        </Button>
                      </Box>
                      <Box className="taskCard__info">
                        <Box className="taskCard__heading">
                          <Typography className="taskCard__title">
                            Create a marketing Funnel for X
                          </Typography>
                          <Typography className="taskCard__text">
                            Create a marketing Funnel for X
                          </Typography>
                        </Box>
                        <Box className="taskCard__status">
                          <Typography className="taskCard__time">
                            <CalendarMonthOutlinedIcon />
                            03 Nov <span>(3 days Until deadline)</span>
                          </Typography>
                          <Button className="taskCard__memberBtn">
                            Assign to <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="taskCard">
                      <Box className="taskCard__btn">
                        <Button>
                          <ArrowDropUpRoundedIcon />
                          Design Crop.
                        </Button>
                      </Box>
                      <Box className="taskCard__info">
                        <Box className="taskCard__heading">
                          <Typography className="taskCard__title">
                            Create a marketing Funnel for X
                          </Typography>
                          <Typography className="taskCard__text">
                            Create a marketing Funnel for X
                          </Typography>
                        </Box>
                        <Box className="taskCard__status">
                          <Typography className="taskCard__time">
                            <CalendarMonthOutlinedIcon />
                            03 Nov <span>(3 days Until deadline)</span>
                          </Typography>
                          <Button className="taskCard__assignBtn">
                            Assign to a Team Member
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  No. of Clients
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                  In clients
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                  Tasks In Progress
                </CustomTabPanel>
              </Box>
            </Grid>
            <Grid item xs={12} lg={5}>
              <Box className="chartCard">
                <Box className="chartCard__head">
                  <Box className="chartCard__heading">
                    <Typography className="chartCard__title">
                      Weekly Tasks Sprint
                    </Typography>
                    <Typography className="chartCard__head-text">
                      Total task complete this week <span>33</span>
                    </Typography>
                  </Box>
                  <Box className="chartCard__head-action">
                    <Button
                      aria-describedby={id}
                      variant="contained"
                      onClick={handleClick}
                    >
                      <MoreVertIcon />
                    </Button>
                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                    >
                      <Typography sx={{ p: 2 }}>
                        The content of the Popover.
                      </Typography>
                    </Popover>
                  </Box>
                </Box>
                <Box className="chartCard__body">
                <Line options={options} data={data} />

                </Box>
              </Box>
              <Box className="chartCard" mt={"16px"}>
                <Box className="chartCard__head">
                  <Box className="chartCard__heading">
                    <Typography className="chartCard__title">
                      Revenue Stats
                    </Typography>
                  </Box>
                </Box>
                <Box className="chartCard__body"></Box>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
};

export default Dashboard;
