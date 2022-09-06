import { useState } from "react";
import "react-modern-drawer/dist/index.css";
import { useSelector } from "react-redux";
import CustomDrawer from "../../../navigation/drawer/CustomDrawer";
import "./style.css";

function Dashboard(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const userLogin = useSelector((state) => state.userReducer);
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
          details={userLogin?.loginData?.name}
          image={userLogin?.loginData?.profile_pic}
        />
      </div>
    </div>
  );
}
export default Dashboard;
