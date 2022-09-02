import { useState } from "react";
import "react-modern-drawer/dist/index.css";
import { useLocation } from "react-router-dom";
import CustomDrawer from "../../../navigation/drawer/CustomDrawer";
import "./style.css";

function Dashboard(props) {
  const { state } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="form">
      <div className="form-body">
        <div className="showButton">
          <button onClick={toggleDrawer}>Show Drawer</button>
        </div>
        <CustomDrawer
          isOpen={isOpen}
          toggleDrawer={toggleDrawer}
          label={"Profile"}
          details={state?.item?.name}
          image={state?.item?.profile_pic}
        />
      </div>
    </div>
  );
}
export default Dashboard;
