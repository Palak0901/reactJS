import "./App.css";
import Route from "./navigation/Route";
import store from "./services/redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}

export default App;
