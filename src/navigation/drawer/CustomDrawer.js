import {
  Avatar,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  LocationOn,
  PieChart,
  Home,
  StickyNote2,
  Settings,
} from "@mui/icons-material";
import Drawer from "react-modern-drawer";
import Utils from "../../utils";

const CustomDrawer = (props) => {
  return (
    <Drawer
      open={props.isOpen}
      onClose={props.toggleDrawer}
      direction="left"
      className="drawer"
      size={300}
      overlayOpacity={0.5}
    >
      <Utils.components.divComponent style={{ backgroundColor: "#f5f6fa" }}>
        <Utils.components.divComponent style={{ display: "flex" }}>
          <Utils.components.divComponent
            style={{ width: 300, backgroundColor: "#fff", paddingTop: 30 }}
          >
            <Utils.components.divComponent
              style={{
                display: "flex",
              }}
            >
              <Utils.components.labelComponent
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: 25,
                  fontWeight: "600",
                  flex: 1,
                }}
              >
                {props.details}
              </Utils.components.labelComponent>
              <Utils.components.divComponent onClick={props.toggleClose}>
                <Utils.components.imageComponent
                  src={Utils.allImage.menu}
                  style={{
                    height: 20,
                    width: 20,
                    marginRight: 20,
                  }}
                />
              </Utils.components.divComponent>
            </Utils.components.divComponent>
            <List
              sx={{ width: 240, bgcolor: "background.paper", paddingLeft: 5 }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton style={{ marginTop: 15 }}>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <PieChart />
                </ListItemIcon>
                <ListItemText primary="Overview" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <LocationOn />
                </ListItemIcon>
                <ListItemText primary="Map" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <StickyNote2 />
                </ListItemIcon>
                <ListItemText primary="History" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </List>
            <Utils.components.divComponent
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Utils.components.divComponent
                style={{
                  backgroundColor: "#f5eefd",
                  height: 200,
                  width: 180,
                  borderRadius: 10,
                }}
              >
                <Utils.components.divComponent
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Utils.components.imageComponent
                    src={Utils.allImage.login}
                    style={{ height: 110, width: 180 }}
                  />
                </Utils.components.divComponent>
                <Utils.components.divComponent
                  style={{
                    marginTop: 10,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Utils.components.labelComponent>
                    Get mobile App
                  </Utils.components.labelComponent>
                </Utils.components.divComponent>
                <Utils.components.divComponent>
                  <Utils.components.divComponent
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: 15,
                    }}
                  >
                    <IconButton
                      style={{
                        backgroundColor: "#fff",
                        height: 35,
                        width: 35,
                        marginRight: 5,
                      }}
                    >
                      <Avatar
                        src={Utils.allImage.playstore}
                        style={{ height: 20, width: 20, marginLeft: 2 }}
                      />
                    </IconButton>
                    <IconButton
                      style={{
                        backgroundColor: "#fff",
                        height: 35,
                        width: 35,
                        marginRight: 5,
                      }}
                    >
                      <Avatar
                        src={Utils.allImage.apple}
                        style={{ height: 20, width: 20 }}
                      />
                    </IconButton>
                  </Utils.components.divComponent>
                </Utils.components.divComponent>
              </Utils.components.divComponent>
            </Utils.components.divComponent>
          </Utils.components.divComponent>
        </Utils.components.divComponent>
      </Utils.components.divComponent>
    </Drawer>
  );
};
export default CustomDrawer;
