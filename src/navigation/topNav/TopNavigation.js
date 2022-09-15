import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Utils from "../../utils";

const TopNavigation = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    // <>
    //   <Utils.components.customTop />
    //   <Routes>
    //     <Route
    //       exact
    //       path={Utils.screenName.dashboard}
    //       element={<Utils.navigationImport.dashboardScreen />}
    //     />
    //     <Route
    //       path={Utils.screenName.detailsPage}
    //       element={<Utils.navigationImport.detailsScreen />}
    //     />
    //   </Routes>
    // </>

    <Box
      sx={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab
          value={1}
          label="DASHBOARD"
          onClick={() => navigate(Utils.screenName.dashboard)}
        />
        <Tab
          value={2}
          label="DETAILS"
          onClick={() => navigate(Utils.screenName.detailsPage)}
        />
      </Tabs>
    </Box>
  );
};

export default TopNavigation;
