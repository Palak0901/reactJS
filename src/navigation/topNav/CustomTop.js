import React from "react";
import { Link } from "react-router-dom";
import Utils from "../../utils";

const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: "pink",
        flexDirection: "row",
        marginTop: 20,
        paddingLeft: 30,
      }}
    >
      <div style={{ display: "flex" }}>
        <li style={{ fontSize: 30 }}>
          <Link to={Utils.screenName.dashboard}>Dashboard</Link>
        </li>
        <li style={{ fontSize: 30 }}>
          <Link to={Utils.screenName.detailsPage}>Details</Link>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
