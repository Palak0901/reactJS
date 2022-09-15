import { useState } from "react";
import "react-modern-drawer/dist/index.css";
import { useSelector } from "react-redux";
import Utils from "../../../utils";
import "./style.css";
import { Avatar, Badge, IconButton, Paper, Divider } from "@mui/material";
import {
  Search,
  Notifications,
  Settings,
  Cake,
  CardTravel,
  Label,
} from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import TopNavigation from "../../../navigation/topNav/TopNavigation";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Dashboard = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const userLogin = useSelector((state) => state.userReducer);
  const dashboardData = [
    {
      name: "CPU Traffic",
      data: "10%",
      icon: Settings,
    },
    {
      name: "Likes",
      data: "41410",
      icon: Cake,
    },
    {
      name: "Sales",
      data: "760",
      icon: CardTravel,
    },
    {
      name: "New Members",
      data: "2000",
      icon: Settings,
    },
  ];
  const data = [
    {
      name: "January",
      Inpatients: 65,
      Outpatients: 25,
      amt: 2400,
    },
    {
      name: "February",
      Inpatients: 60,
      Outpatients: 45,
      amt: 2210,
    },
    {
      name: "March",
      Inpatients: 80,
      Outpatients: 30,
      amt: 2290,
    },
    {
      name: "April",
      Inpatients: 75,
      Outpatients: 20,
      amt: 2000,
    },
    {
      name: "May",
      Inpatients: 80,
      Outpatients: 60,
      amt: 2181,
    },
    {
      name: "June",
      Inpatients: 50,
      Outpatients: 30,
      amt: 2500,
    },
    {
      name: "July",
      Inpatients: 40,
      Outpatients: 90,
      amt: 2500,
    },
  ];
  const progressData = [
    {
      name: "Add Products to Cart",
      value: 80,
      done: 160,
      total: 200,
      color: "info",
    },
    {
      name: "Complete Purchase",
      value: 75,
      done: 310,
      total: 400,
      color: "error",
    },
    {
      name: "Visit Premium Page",
      value: 60,
      done: 480,
      total: 800,
      color: "success",
    },
    {
      name: "Send Inquiries",
      value: 50,
      done: 250,
      total: 500,
      color: "inherit",
    },
  ];
  const LinearProgressWithLabel = (props) => {
    return (
      <Box sx={{ flex: 1, marginTop: 3 }}>
        <Box sx={{ flexDirection: "row", display: "flex" }}>
          <Utils.components.labelComponent style={{ flex: 1, fontSize: 18 }}>
            {props.name}
          </Utils.components.labelComponent>
          <Typography variant="body1" color="text.primary">
            {`${Math.round(props.done)}/${Math.round(props.total)}`}
          </Typography>
        </Box>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress
            variant="determinate"
            color={props.color}
            value={`${Math.round(props.value)}/${Math.round(props.total)}`}
            sx={{ height: 15 }}
            {...props}
          />
        </Box>
      </Box>
    );
  };

  return (
    <Utils.components.divComponent>
      <TopNavigation />
      <Utils.components.divComponent>
        <Utils.components.divComponent
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <Utils.components.imageComponent
            src={Utils.allImage.menu}
            style={{
              height: 25,
              width: 25,
              marginLeft: 15,
            }}
          />
        </Utils.components.divComponent>
        <Utils.components.customDrawer
          isOpen={isOpen}
          toggleDrawer={() => setIsOpen((prevState) => !prevState)}
          label={"Profile"}
          details={userLogin?.loginData[0]?.firstName}
          image={userLogin?.loginData[0]?.profile_pic}
          toggleClose={() => setIsOpen((prevState) => !prevState)}
        />
      </Utils.components.divComponent>
      <Utils.components.divComponent
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <Utils.components.divComponent
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: 10,
            justifyContent: "center",
          }}
        >
          <Search color="action" />
          <Utils.components.inputComponent
            style={{
              width: 730,
              borderWidth: 0,
              fontSize: 18,
              marginLeft: 5,
            }}
            placeholder="Search"
          />
        </Utils.components.divComponent>
        <Utils.components.divComponent
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <IconButton>
            <Badge badgeContent={2} color="error">
              <Notifications />
            </Badge>
          </IconButton>
          <Avatar
            style={{ marginLeft: 15, marginRight: 15 }}
            src="/static/images/avatar/3.jpg"
          />
          <Utils.components.labelComponent style={{ color: "gray" }}>
            Emma Kwan
          </Utils.components.labelComponent>
          <IconButton>
            <KeyboardArrowDownIcon />
          </IconButton>
        </Utils.components.divComponent>
      </Utils.components.divComponent>
      <Utils.components.divComponent className="row">
        {dashboardData.map((item, index) => {
          return (
            <Utils.components.divComponent className="row">
              <Utils.components.divComponent className="col-2">
                <Paper elevation={2} style={{ padding: 10, minWidth: 200 }}>
                  <Utils.components.divComponent style={{ display: "flex" }}>
                    <IconButton>
                      <item.icon
                        style={{
                          height: 35,
                          width: 35,
                          backgroundColor: "#4AA2B8",
                          color: "white",
                          padding: 5,
                          borderRadius: 5,
                        }}
                      />
                    </IconButton>
                    <Utils.components.divComponent
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Utils.components.divComponent>
                        <Utils.components.labelComponent
                          style={{ fontSize: 18, fontWeight: "600" }}
                        >
                          {item.name}
                        </Utils.components.labelComponent>
                      </Utils.components.divComponent>
                      <Utils.components.divComponent>
                        <Utils.components.labelComponent
                          style={{ fontSize: 18, fontWeight: "600" }}
                        >
                          {item.data}
                        </Utils.components.labelComponent>
                      </Utils.components.divComponent>
                    </Utils.components.divComponent>
                  </Utils.components.divComponent>
                </Paper>
              </Utils.components.divComponent>
            </Utils.components.divComponent>
          );
        })}
      </Utils.components.divComponent>
      <Paper elevation={2}>
        <Utils.components.divComponent className="row">
          <Utils.components.divComponent className="col-2">
            <Utils.components.divComponent>
              <Utils.components.divComponent className="card-header">
                <Utils.components.labelComponent className="card-title">
                  Monthly Recap Report
                </Utils.components.labelComponent>
              </Utils.components.divComponent>
              <Utils.components.divComponent>
                <Utils.components.labelComponent>
                  Show
                </Utils.components.labelComponent>
              </Utils.components.divComponent>
            </Utils.components.divComponent>
            <Divider />
            <Utils.components.divComponent>
              <Utils.components.labelComponent className="text-center">
                Sales: 1 Jan, 2014 - 30 Jul, 2014
              </Utils.components.labelComponent>
            </Utils.components.divComponent>
            <AreaChart width={700} height={200} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area dataKey="Outpatients" fill="#37d89e" />
              <Area dataKey="Inpatients" fill="#742bde" />
            </AreaChart>
          </Utils.components.divComponent>
          <Utils.components.divComponent className="col-2">
            {progressData?.map((item, index) => {
              return (
                <LinearProgressWithLabel
                  value={item.value}
                  done={item.done}
                  total={item.total}
                  name={item.name}
                  color={item.color}
                />
              );
            })}
          </Utils.components.divComponent>
        </Utils.components.divComponent>
      </Paper>
    </Utils.components.divComponent>

    //  <Utils.components.divComponent
    //  className="col"
    //  style={{ display: "flex", alignItems: "center", padding: 30 }}
    //     >
    //       <Paper
    //         elevation={2}
    //         style={{ height: 300, width: "100%", marginLeft: 30 }}
    //       >
    //         <Utils.components.divComponent
    //           style={{ display: "flex", alignItems: "center", padding: 8 }}
    //         >
    //           <Utils.components.divComponent style={{ flex: 1 }}>
    //             <Utils.components.labelComponent
    //               style={{ fontWeight: "bold", marginLeft: 10 }}
    //             >
    //               Monthly Recap Report
    //             </Utils.components.labelComponent>
    //           </Utils.components.divComponent>
    //           <Utils.components.divComponent
    //             style={{ alignItems: "center", display: "flex" }}
    //           >
    //             <Utils.components.labelComponent
    //               style={{ marginRight: 5, color: "gray", fontSize: 15 }}
    //             >
    //               Show
    //             </Utils.components.labelComponent>
    //           </Utils.components.divComponent>
    //         </Utils.components.divComponent>
    //         <Divider />
    //         <Utils.components.divComponent
    //           style={{
    //             flex: 1,
    //             alignItems: "center",
    //             justifyContent: "center",
    //             display: "flex",
    //             padding: 10,
    //           }}
    //         >
    //           <Utils.components.labelComponent
    //             style={{
    //               fontWeight: "bold",
    //               marginLeft: 10,
    //               textAlign: "center",
    //             }}
    //           >
    //             Sales: 1 Jan, 2014 - 30 Jul, 2014
    //           </Utils.components.labelComponent>
    //         </Utils.components.divComponent>
    //         <AreaChart width={700} height={200} data={data}>
    //           <CartesianGrid strokeDasharray="3 3" />
    //           <XAxis dataKey="name" />
    //           <YAxis />
    //           <Tooltip />
    //           <Legend />
    //           <Area dataKey="Outpatients" fill="#37d89e" />
    //           <Area dataKey="Inpatients" fill="#742bde" />
    //         </AreaChart>
    //       </Paper>
    //     </Utils.components.divComponent>
    //   </Utils.components.divComponent> */}

    //         <Paper elevation={2} style={styles.pageSecondRowEndDiv}>
    //           <Utils.components.divComponent
    //             style={{//     display: "flex",
    //     alignItems: "center",
    //     padding: 19,}}
    //           >
    //             <Utils.components.labelComponent style={{//     fontWeight: "bold",}}>
    //               Patients by Gender
    //             </Utils.components.labelComponent>
    //           </Utils.components.divComponent>
    //           <Divider />
    //           <Utils.components.SecondChart />
    //         </Paper>
    //       </Utils.components.divComponent>
    //       <Utils.components.divComponent style={{//     display: "flex",
    //     alignItems: "center",
    //     padding: 30,}}>
    //         <Paper elevation={2} style={styles.pageThirdRowStartDiv}>
    //           <Utils.components.divComponent
    //             style={styles.pageThirdRowStartDivTitle}
    //           >
    //             <Utils.components.divComponent
    //               style={styles.pageThirdRowStartDivLable}
    //             >
    //               <Utils.components.labelComponent
    //                 style={styles.timeAddmitedLable}
    //               >
    //                 Time Admitted
    //               </Utils.components.labelComponent>
    //             </Utils.components.divComponent>
    //             <Utils.components.labelComponent style={{//     fontSize: 16,
    //     fontWeight: "500",}}>
    //               Today
    //             </Utils.components.labelComponent>
    //             <IconButton>
    //               <KeyboardArrowDownIcon />
    //             </IconButton>
    //           </Utils.components.divComponent>
    //           <Divider />
    //           <Utils.components.ThirdChart />
    //         </Paper>
    //         <Paper elevation={2} style={styles.pageThirdRowCenterDiv}>
    //           <Utils.components.divComponent
    //             style={styles.pageThirdRowCenterDivTitle}
    //           >
    //             <Utils.components.divComponent
    //               style={styles.pageThirdRowCenterDivLable}
    //             >
    //               <Utils.components.labelComponent
    //                 style={styles.partientsDivisionLable}
    //               >
    //                 Patients by Division
    //               </Utils.components.labelComponent>
    //             </Utils.components.divComponent>
    //             <IconButton>
    //               <KeyboardArrowDownIcon />
    //             </IconButton>
    //           </Utils.components.divComponent>
    //           <Divider />
    //           <Utils.components.divComponent style={styles.bottomListDiv}>
    //             <List sx={{//     width: 190,
    //     height: 100,
    //     bgcolor: "background.paper",}} component="nav">
    //               <ListItemButton>
    //                 <ListItemIcon>
    //                   <Home />
    //                 </ListItemIcon>
    //                 <ListItemText
    //                   primary="DIVISION"
    //                   style={{color: "gray",}}
    //                 />
    //                 <ListItemText primary="PT." style={{//     marginLeft: 120,
    //     color: "gray",}} />
    //               </ListItemButton>
    //               <ListItemButton>
    //                 <ListItemIcon>
    //                   <Favorite />
    //                 </ListItemIcon>
    //                 <ListItemText
    //                   primary="Cardiology"
    //                   style={{color: "gray",}}
    //                 />
    //                 <ListItemText primary="247" style={{marginLeft:120}} />
    //               </ListItemButton>
    //               <ListItemButton>
    //                 <ListItemIcon>
    //                   <PsychologyAlt />
    //                 </ListItemIcon>
    //                 <ListItemText
    //                   primary="Neurology"
    //                   style={{color: "gray",}}
    //                 />
    //                 <ListItemText primary="164" style={{marginLeft:120}} />
    //               </ListItemButton>
    //               <ListItemButton>
    //                 <ListItemIcon>
    //                   <ContentCut />
    //                 </ListItemIcon>
    //                 <ListItemText
    //                   primary="Surgery"
    //                   style={{color: "gray",}}
    //                 />
    //                 <ListItemText primary="86" style={{marginLeft:120}} />
    //               </ListItemButton>
    //             </List>
    //           </Utils.components.divComponent>
    //         </Paper>
    //         <Paper elevation={2} style={styles.pageThirdRowEndDiv}>
    //           <Utils.components.divComponent style={styles.fourthChartDiv}>
    //             <Utils.components.labelComponent
    //               style={styles.fourthChartLable}
    //             >
    //               3,240
    //             </Utils.components.labelComponent>
    //             <Utils.components.divComponent>
    //               <Utils.components.labelComponent
    //                 style={styles.fourthChartSecondLable}
    //               >
    //                 Patients this month
    //               </Utils.components.labelComponent>
    //             </Utils.components.divComponent>
    //           </Utils.components.divComponent>
    //           <Utils.components.FourthChart />
    //         </Paper>
    //       </Utils.components.divComponent>
    //     </Utils.components.divComponent>
  );
};
export default Dashboard;

//   pageSecondRowEndDiv: {
//     height: 300,
//     width: 220,
//     marginLeft: 30,
//   },
//   pageThirdRowStartDiv: {
//     height: 270,
//     width: 460,
//     marginLeft: 30,
//   },
//   pageThirdRowStartDivTitle: {
//     display: "flex",
//     alignItems: "center",
//     padding: 8,
//   },
//   pageThirdRowStartDivLable: {
//     flex: 1,
//   },
//   timeAddmitedLable: {
//     fontWeight: "bold",
//     marginLeft: 10,
//   },
//   pageThirdRowCenterDiv: {
//     height: 270,
//     width: 230,
//     marginLeft: 30,
//   },
//   pageThirdRowCenterDivTitle: {
//     display: "flex",
//     alignItems: "center",
//     padding: 8,
//   },
//   pageThirdRowCenterDivLable: {
//     flex: 1,
//   },
//   partientsDivisionLable: {
//     fontWeight: "bold",
//     marginLeft: 10,
//   },
//   pageThirdRowEndDiv: {
//     height: 210,
//     width: 160,
//     marginLeft: 30,
//     backgroundColor: "#742bde",
//     padding: 30,
//   },
//   fourthChartDiv: {
//     marginBottom: 60,
//   },
//   fourthChartLable: {
//     fontSize: 30,
//     fontWeight: "bold",
//     color: "#fff",
//   },
//   fourthChartSecondLable: {
//     color: "#fff",
//     fontSize: 14,
//   },
//   bottomListDiv: {
//     width: 100,
//     backgroundColor: "#fff",
//   },
