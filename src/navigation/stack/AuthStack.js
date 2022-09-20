import { BrowserRouter, Route, Routes } from "react-router-dom";
import Utils from "../../utils";

const AuthStack = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path={Utils.screenName.registration}
          element={<Utils.navigationImport.registerScreen />}
        />
        <Route
          exact
          path={Utils.screenName.login}
          element={<Utils.navigationImport.loginScreen />}
        />
        <Route
          exact
          path={Utils.screenName.topNav}
          element={<Utils.navigationImport.topNavigation />}
        />
        <Route
          path={Utils.screenName.dashboard}
          element={<Utils.navigationImport.dashboardScreen />}
        />
        <Route
          path={Utils.screenName.detailsPage}
          element={<Utils.navigationImport.detailsScreen />}
        />
        <Route
          path={Utils.screenName.clothingDashboard}
          element={<Utils.navigationImport.clothingDashboard />}
        />
        <Route
          path={Utils.screenName.productDetails}
          element={<Utils.navigationImport.productDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AuthStack;
