import "./App.css";
import store from "./services/redux/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import Utils from "./utils";

const App = () => {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Utils.navigationImport.route />
      </PersistGate>
    </Provider>
  );
};

export default App;
