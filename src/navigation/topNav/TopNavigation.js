import { Route, Routes } from "react-router-dom";
import Dashboard from "../../screens/home/Dashboard";
import DetailsPage from "../../screens/home/DetailsPage";
import screenName from "../../utils/screenName";
import Navbar from "./CustomTop";

function TopNavigation() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path={screenName.dashboard} element={<Dashboard />} />
        <Route path={screenName.detailsPage} element={<DetailsPage />} />
      </Routes>
    </>
  );
}

export default TopNavigation;
