import React from "react";
import { useLocation } from "react-router-dom";
import "./style.css";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import Utils from "../../../utils";
import TopNavigation from "../../../navigation/topNav/TopNavigation";

const DetailsPage = (props) => {
  const { state } = useLocation();
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    // <div className="form">
    //   <label className="name">{state.item.firstName}</label>
    //   <label className="name">{state.item.lastName}</label>
    //   <label className="emailpassword">{state.item.email}</label>
    //   <label className="password">{state.item.password}</label>
    //   <label className="name">{state.item.confirmPassword}</label>
    // </div>

    // <div>
    //   <TopNavigation />
    //   <h4>How to show and hide password in ReactJS?</h4>
    //   <InputLabel htmlFor="standard-adornment-password">
    //     Enter your Password
    //   </InputLabel>
    //   <Input
    //     type={values.showPassword ? "text" : "password"}
    //     onChange={handlePasswordChange("password")}
    //     value={values.password}
    //     endAdornment={
    //       <InputAdornment position="end">
    //         <IconButton
    //           onClick={handleClickShowPassword}
    //           onMouseDown={handleMouseDownPassword}
    //         >
    //           {values.showPassword ? (
    //             <img
    //               onClick={props.onClick}
    //               style={{ width: 20, marginLeft: 15 }}
    //               src={Utils.allImage.hideImage}
    //             />
    //           ) : (
    //             <img
    //               onClick={props.onClickView}
    //               style={{ width: 20, marginLeft: 15 }}
    //               src={Utils.allImage.viewImage}
    //             />
    //           )}
    //         </IconButton>
    //       </InputAdornment>
    //     }
    //   />
    // </div>

    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#MyNavbar"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="MyNavbar">
            <a className="left" href="home.php">
              <img src="img/serve.png" />
            </a>
            <ul className="nav navbar-nav navbar-left">
              <li className="active">
                <a href="dashboard">Home</a>
              </li>
              <li className="active">
                <a href="management.php">Management</a>
              </li>
              <li className="active">
                <a href="services.php">Services</a>
              </li>
              <li className="active">
                <a href="product.php">Products</a>
              </li>
              <li className="active">
                <a href="../../../Electricks-shop/index.php">Buy Here!</a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="active">
                <a>Contact Us</a>
              </li>
              <li className="active">
                <a
                  href="https://www.facebook.com/Serves-Web-Tech-Solution-and-Services-207908169756361/"
                  className="fa fa-facebook"
                ></a>
              </li>
              <li className="active">
                <a
                  href="https://twitter.com/mark_angelo503"
                  className="fa fa-twitter"
                ></a>
              </li>
              <li className="active">
                <a href="#" className="fa fa-google"></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DetailsPage;
