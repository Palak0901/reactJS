import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "../../screens/auth/Login";
import RegistrationForm from "../../screens/auth/Registration";
import Dashboard from "../../screens/home/Dashboard";
import DetailsPage from "../../screens/home/DetailsPage";
import screenName from "../../utils/screenName";
import TopNavigation from "../topNav/TopNavigation";

function AuthStack() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path={screenName.registration}
          element={<RegistrationForm />}
        />
        <Route exact path={screenName.login} element={<LoginForm />} />
        <Route exact path={screenName.topNav} element={<TopNavigation />} />
        <Route exact path={screenName.dashboard} element={<Dashboard />} />
        <Route exact path={screenName.detailsPage} element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AuthStack;
