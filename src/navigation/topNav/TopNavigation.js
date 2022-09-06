import { Route, Routes } from "react-router-dom";
import Utils from "../../utils";

const TopNavigation = () => {
  return (
    <>
      <Utils.components.customTop />
      <Routes>
        <Route
          exact
          path={Utils.screenName.dashboard}
          element={<Utils.navigationImport.dashboardScreen />}
        />
        <Route
          path={Utils.screenName.detailsPage}
          element={<Utils.navigationImport.detailsScreen />}
        />
      </Routes>
    </>
  );
};

export default TopNavigation;
