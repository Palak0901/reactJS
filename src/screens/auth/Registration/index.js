import { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Utils from "../../../utils";

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [mobileNumber, setMobileNumber] = useState(null);
  const [password, setPassword] = useState(null);
  const [addData, setAddData] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [errorMessage, setErrorMessage] = useState({});
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const goToDetails = (item, index) => {
    navigate(Utils.screenName.detailsPage, {
      state: { item: item, index: index },
    });
  };
  const handleSubmit = () => {
    const errObject = Utils.validation.registerValidation(
      firstName,
      lastName,
      mobileNumber,
      email,
      password,
      confirmPassword
    );
    if (
      !errObject?.firstNameError &&
      !errObject?.lastNameError &&
      !errObject?.mobileNumberError &&
      !errObject?.emailError &&
      !errObject?.passwordError &&
      !errObject?.confirmPasswordError
    ) {
      setErrorMessage({});
      registerCall();
    } else {
      setErrorMessage(errObject);
    }
  };
  const registerCall = () => {
    let temp = [...addData];
    temp.push({
      id: addData.length + 1,
      firstName: firstName,
      lastName: lastName,
      mobileNumber: mobileNumber,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    });
    setAddData(temp);
    setFirstName(null);
    setLastName(null);
    setMobileNumber(null);
    setEmail(null);
    setPassword(null);
    setConfirmPassword(null);
    dispatch(Utils.services.registerDetail(temp));
    navigate(Utils.screenName.login);
    // let obj = {
    //   firstName: firstName,
    //   lastName: lastName,
    //   email: email,
    //   password: password,
    //   confirmPassword: confirmPassword,
    // };
    // const newPostKey = push(child(ref(database), "posts")).key;
    // const updates = {};
    // updates["/" + newPostKey] = obj;
    // return update(ref(database), updates);
  };
  const handleLogin = () => {};
  return (
    // <div className="rowRegister">
    //   <div className="col-1">
    //     <div>
    //       <div
    //         style={{
    //           display: "flex",
    //           alignItems: "center",
    //           justifyContent: "center",
    //         }}
    //       >
    //         <Utils.components.labelComponent
    //           style={{ fontSize: 30, color: "black" }}
    //         >
    //           Registration
    //         </Utils.components.labelComponent>
    //       </div>
    //       <Utils.components.inputComponent
    //         style={{
    //           height: 40,
    //           width: "70%",
    //           borderRadius: 5,
    //           paddingLeft: 10,
    //           paddingRight: 10,
    //           borderColor: "transparent",
    //           fontFamily: "initial",
    //           fontSize: 18,
    //         }}
    //         value={firstName}
    //         onChange={(val) => {
    //           setFirstName(val.target.value);
    //         }}
    //         type="text"
    //         id="firstName"
    //         placeholder="First Name"
    //       />
    //       {/* <Utils.components.inputComponent
    //               container={{
    //                 display: "flex",
    //                 alignItems: "center",
    //                 marginTop: 30,
    //                 justifyContent: "center",
    //               }}
    //               style={{
    //                 height: 40,
    //                 width: "70%",
    //                 borderRadius: 5,
    //                 paddingLeft: 10,
    //                 paddingRight: 10,
    //                 borderColor: "transparent",
    //                 fontFamily: "initial",
    //                 fontSize: 18,
    //               }}
    //               className="form__input"
    //               value={firstName}
    //               onChange={(val) => {
    //                 setFirstName(val.target.value);
    //               }}
    //               type="text"
    //               id="firstName"
    //               placeholder="First Name"
    //             /> */}
    //       <div>
    //         <Utils.components.labelComponent style={{ color: "red" }}>
    //           {errorMessage.firstNameError}
    //         </Utils.components.labelComponent>
    //       </div>
    //       <Utils.components.inputComponent
    //         style={{
    //           height: 40,
    //           width: "70%",
    //           borderRadius: 5,
    //           paddingLeft: 10,
    //           paddingRight: 10,
    //           borderColor: "transparent",
    //           fontFamily: "initial",
    //           fontSize: 18,
    //         }}
    //         type="text"
    //         name=""
    //         id="lastName"
    //         className="form__label form__input"
    //         placeholder="LastName"
    //         value={lastName}
    //         onChange={(val) => {
    //           setLastName(val.target.value);
    //         }}
    //       />
    //       <div>
    //         <Utils.components.labelComponent style={{ color: "red" }}>
    //           {errorMessage.lastNameError}
    //         </Utils.components.labelComponent>
    //       </div>
    //       <Utils.components.inputComponent
    //         style={{
    //           height: 40,
    //           width: "70%",
    //           borderRadius: 5,
    //           paddingLeft: 10,
    //           paddingRight: 10,
    //           borderColor: "transparent",
    //           fontFamily: "initial",
    //           fontSize: 18,
    //         }}
    //         type="text"
    //         pattern="^[0-9\b]+$"
    //         name=""
    //         id="mobileNumber"
    //         className="form__label form__input"
    //         placeholder="Mobile Number"
    //         value={mobileNumber}
    //         maxLength={10}
    //         onChange={(val) => {
    //           setMobileNumber(val.target.value);
    //         }}
    //       />
    //       <div>
    //         <Utils.components.labelComponent style={{ color: "red" }}>
    //           {errorMessage.mobileNumberError}
    //         </Utils.components.labelComponent>
    //       </div>
    //       <Utils.components.inputComponent
    //         style={{
    //           height: 40,
    //           width: "70%",
    //           borderRadius: 5,
    //           paddingLeft: 10,
    //           paddingRight: 10,
    //           borderColor: "transparent",
    //           fontFamily: "initial",
    //           fontSize: 18,
    //         }}
    //         type="email"
    //         id="email"
    //         className="form__label form__input"
    //         placeholder="Email"
    //         value={email}
    //         onChange={(val) => {
    //           setEmail(val.target.value);
    //         }}
    //       />
    //       <div>
    //         <Utils.components.labelComponent style={{ color: "red" }}>
    //           {errorMessage.emailError}
    //         </Utils.components.labelComponent>
    //       </div>
    //       <Utils.components.inputComponent
    //         style={{
    //           height: 40,
    //           width: "70%",
    //           borderRadius: 5,
    //           paddingLeft: 10,
    //           paddingRight: 10,
    //           borderColor: "transparent",
    //           fontFamily: "initial",
    //           fontSize: 18,
    //         }}
    //         className="form__label form__input"
    //         type={showPassword ? "text" : "password"}
    //         id="password"
    //         placeholder="Password"
    //         value={password}
    //         onChange={(val) => setPassword(val.target.value)}
    //         hideImage
    //         show={showPassword}
    //         onClick={() => setShowPassword(!showPassword)}
    //         onClickView={() => setShowPassword(!showPassword)}
    //       />
    //       <div>
    //         <Utils.components.labelComponent style={{ color: "red" }}>
    //           {errorMessage.passwordError}
    //         </Utils.components.labelComponent>
    //       </div>
    //       <Utils.components.inputComponent
    //         style={{
    //           height: 40,
    //           width: "70%",
    //           borderRadius: 5,
    //           paddingLeft: 10,
    //           paddingRight: 10,
    //           borderColor: "transparent",
    //           fontFamily: "initial",
    //           fontSize: 18,
    //         }}
    //         className="form__label form__input"
    //         type={showConfirmPassword ? "text" : "password"}
    //         id="confirmPassword"
    //         placeholder="Confirm Password"
    //         value={confirmPassword}
    //         onChange={(val) => setConfirmPassword(val.target.value)}
    //         hideImage
    //         show={showConfirmPassword}
    //         onClick={() => setShowConfirmPassword(!showConfirmPassword)}
    //         onClickView={() => setShowConfirmPassword(!showConfirmPassword)}
    //       />
    //       <div>
    //         <Utils.components.labelComponent style={{ color: "red" }}>
    //           {errorMessage.confirmPasswordError}
    //         </Utils.components.labelComponent>
    //       </div>
    //     </div>
    //     <div className="footer">
    //       <button
    //         type="submit"
    //         style={{
    //           backgroundColor: "pink",
    //           height: 50,
    //           width: "60%",
    //           fontSize: 18,
    //           fontFamily: "monospace",
    //           color: "black",
    //           borderWidth: 0,
    //           borderRadius: 12,
    //           marginTop: 30,
    //           alignSelf: "center",
    //         }}
    //         onClick={() => handleSubmit()}
    //         className="btn"
    //       >
    //         Register
    //       </button>
    //     </div>
    //     <div className="footer" style={{ marginTop: 10, marginBottom: 20 }}>
    //       <nav>
    //         <Link to={Utils.screenName.login} onClick={() => handleLogin()}>
    //           <Utils.components.labelComponent
    //             style={{
    //               fontSize: 20,
    //               color: "purple",
    //             }}
    //           >
    //             Have an account! Login
    //           </Utils.components.labelComponent>
    //         </Link>
    //       </nav>
    //     </div>
    //   </div>
    // </div>

    <Utils.components.divComponent style={{ backgroundColor: "#141414" }}>
      <Utils.components.divComponent
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          marginLeft: 50,
        }}
      >
        <img
          // className="sideImage"
          style={{
            height: 590,
            width: "60%",
          }}
          src={Utils.allImage.welcome}
        />
        <Utils.components.divComponent
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "lightblue",
            borderRadius: 20,
            padding: 10,
            paddingTop: 30,
            paddingBottom: 30,
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Utils.components.labelComponent
                style={{ fontSize: 30, color: "black" }}
              >
                Registration
              </Utils.components.labelComponent>
            </div>
            <Utils.components.inputComponent
              style={{
                height: 40,
                width: "70%",
                borderRadius: 5,
                paddingLeft: 10,
                paddingRight: 10,
                borderColor: "transparent",
                fontFamily: "initial",
                fontSize: 18,
              }}
              value={firstName}
              onChange={(val) => {
                setFirstName(val.target.value);
              }}
              type="text"
              id="firstName"
              placeholder="First Name"
            />
            {/* <Utils.components.inputComponent
                   container={{
                     display: "flex",
                     alignItems: "center",
                     marginTop: 30,
                     justifyContent: "center",
                   }}
                   style={{
                     height: 40,
                     width: "70%",
                     borderRadius: 5,
                     paddingLeft: 10,
                     paddingRight: 10,
                     borderColor: "transparent",
                     fontFamily: "initial",
                     fontSize: 18,
                   }}
                   className="form__input"
                   value={firstName}
                   onChange={(val) => {
                     setFirstName(val.target.value);
                   }}
                   type="text"
                   id="firstName"
                   placeholder="First Name"
                 /> */}
            <div>
              <Utils.components.labelComponent style={{ color: "red" }}>
                {errorMessage.firstNameError}
              </Utils.components.labelComponent>
            </div>
            <Utils.components.inputComponent
              style={{
                height: 40,
                width: "70%",
                borderRadius: 5,
                paddingLeft: 10,
                paddingRight: 10,
                borderColor: "transparent",
                fontFamily: "initial",
                fontSize: 18,
              }}
              type="text"
              name=""
              id="lastName"
              className="form__label form__input"
              placeholder="LastName"
              value={lastName}
              onChange={(val) => {
                setLastName(val.target.value);
              }}
            />
            <div>
              <Utils.components.labelComponent style={{ color: "red" }}>
                {errorMessage.lastNameError}
              </Utils.components.labelComponent>
            </div>
            <Utils.components.inputComponent
              style={{
                height: 40,
                width: "70%",
                borderRadius: 5,
                paddingLeft: 10,
                paddingRight: 10,
                borderColor: "transparent",
                fontFamily: "initial",
                fontSize: 18,
              }}
              type="text"
              pattern="^[0-9\b]+$"
              name=""
              id="mobileNumber"
              className="form__label form__input"
              placeholder="Mobile Number"
              value={mobileNumber}
              maxLength={10}
              onChange={(val) => {
                setMobileNumber(val.target.value);
              }}
            />
            <div>
              <Utils.components.labelComponent style={{ color: "red" }}>
                {errorMessage.mobileNumberError}
              </Utils.components.labelComponent>
            </div>
            <Utils.components.inputComponent
              style={{
                height: 40,
                width: "70%",
                borderRadius: 5,
                paddingLeft: 10,
                paddingRight: 10,
                borderColor: "transparent",
                fontFamily: "initial",
                fontSize: 18,
              }}
              type="email"
              id="email"
              className="form__label form__input"
              placeholder="Email"
              value={email}
              onChange={(val) => {
                setEmail(val.target.value);
              }}
            />
            <div>
              <Utils.components.labelComponent style={{ color: "red" }}>
                {errorMessage.emailError}
              </Utils.components.labelComponent>
            </div>
            <Utils.components.inputComponent
              style={{
                height: 40,
                width: "70%",
                borderRadius: 5,
                paddingLeft: 10,
                paddingRight: 10,
                borderColor: "transparent",
                fontFamily: "initial",
                fontSize: 18,
              }}
              className="form__label form__input"
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              value={password}
              onChange={(val) => setPassword(val.target.value)}
              hideImage
              show={showPassword}
              onClick={() => setShowPassword(!showPassword)}
              onClickView={() => setShowPassword(!showPassword)}
            />
            <div>
              <Utils.components.labelComponent style={{ color: "red" }}>
                {errorMessage.passwordError}
              </Utils.components.labelComponent>
            </div>
            <Utils.components.inputComponent
              style={{
                height: 40,
                width: "70%",
                borderRadius: 5,
                paddingLeft: 10,
                paddingRight: 10,
                borderColor: "transparent",
                fontFamily: "initial",
                fontSize: 18,
              }}
              className="form__label form__input"
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(val) => setConfirmPassword(val.target.value)}
              hideImage
              show={showConfirmPassword}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              onClickView={() => setShowConfirmPassword(!showConfirmPassword)}
            />
            <div>
              <Utils.components.labelComponent style={{ color: "red" }}>
                {errorMessage.confirmPasswordError}
              </Utils.components.labelComponent>
            </div>
          </div>
          <div className="footer">
            <button
              type="submit"
              style={{
                backgroundColor: "pink",
                height: 50,
                width: "60%",
                fontSize: 18,
                fontFamily: "monospace",
                color: "black",
                borderWidth: 0,
                borderRadius: 12,
                marginTop: 30,
                alignSelf: "center",
              }}
              onClick={() => handleSubmit()}
              className="btn"
            >
              Register
            </button>
          </div>
          <div className="footer" style={{ marginTop: 10, marginBottom: 20 }}>
            <nav>
              <Link to={Utils.screenName.login} onClick={() => handleLogin()}>
                <Utils.components.labelComponent
                  style={{
                    fontSize: 20,
                    color: "purple",
                  }}
                >
                  Have an account! Login
                </Utils.components.labelComponent>
              </Link>
            </nav>
          </div>
        </Utils.components.divComponent>
      </Utils.components.divComponent>
    </Utils.components.divComponent>
  );
};

export default RegistrationForm;

{
  /* {userLogin?.loginData &&
                userLogin?.loginData.map((item, index) => {
                  return (
                    <>
                      <Link
                        to={Utils.screenName.detailsPage}
                        onClick={() => {
                          // navigate(Utils.screenName.detailsPage, {
                          //   state: { item: item, index: index },
                          // })
                        }}
                      >
                        <table>
                          <th>Name :</th>
                          <td>
                            {item.firstName} {item.lastName}
                          </td>
                        </table>
                        <table>
                          <th>Email :</th>
                          <td>{item.email}</td>
                        </table>
                      </Link>
                    </>
                  );
                })} */
}
