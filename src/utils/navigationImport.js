import Route from "../navigation/Route";
import AuthStack from "../navigation/stack/AuthStack";
import TopNavigation from "../navigation/topNav/TopNavigation";
import LoginForm from "../screens/auth/Login";
import RegistrationForm from "../screens/auth/Registration";
import Dashboard from "../screens/home/Dashboard";
import DetailsPage from "../screens/home/DetailsPage";

export default {
  route: Route,
  authStack: AuthStack,
  loginScreen: LoginForm,
  registerScreen: RegistrationForm,
  topNavigation: TopNavigation,
  detailsScreen: DetailsPage,
  dashboardScreen: Dashboard,
};
