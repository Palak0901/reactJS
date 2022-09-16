import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Utils from "../../../utils";
import "./style.css";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [checkBox, setCheckBox] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorMessage, setErrorMessage] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.registerReducer);
  const handleSubmit = () => {
    const errObject = Utils.validation.loginValidation(email, password);
    if (!errObject?.emailError && !errObject?.passwordError) {
      setErrorMessage({});
      loginCall();
    } else {
      setErrorMessage(errObject);
    }
  };
  const loginCall = () => {
    // const data = new URLSearchParams();
    // data.append(Utils.services.params.email, email);
    // data.append(Utils.services.params.password, password);
    // Utils.services
    //   .doPost(
    //     "https://php8.appworkdemo.com/chopup/public/api/v1/login",
    //     data.toString()
    //   )
    //   .then((res) => {
    //     console.log("res", res);
    //     if (res.status == 1) {
    //       navigate(Utils.screenName.topNav);
    //       dispatch(Utils.services.loginDetail(res.data));
    //     }
    //   })
    //   .catch((e) => console.log("loginError", e));
    if (
      userLogin?.loginData[0]?.email === email &&
      userLogin?.loginData[0]?.password === password
    ) {
      dispatch(Utils.services.loginDetail(userLogin?.loginData));
      navigate(Utils.screenName.topNav);
    } else {
      alert("User not Registered");
    }
  };
  const handleLogin = () => {
    setEmail(null);
    setPassword(null);
  };
  return (
    <Utils.components.divComponent style={{ backgroundColor: "#141414" }}>
      <Utils.components.divComponent
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          marginLeft: 50,
        }}
      >
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
          <Utils.components.divComponent
            style={{
              backgroundColor: "lightblue",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Utils.components.labelComponent
              style={{
                fontSize: 40,
                fontWeight: "bold",
                color: "ButtonHighlight",
              }}
            >
              Welcome To Login Page
            </Utils.components.labelComponent>
          </Utils.components.divComponent>
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
            value={email}
            type={"email"}
            onChange={(res) => setEmail(res.target.value)}
            placeholder="Email ID"
          />
          <Utils.components.labelComponent
            style={{
              color: "#f00",
              fontSize: 13,
              marginLeft: 55,
            }}
          >
            {errorMessage.emailError}
          </Utils.components.labelComponent>
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
            value={password}
            type={"password"}
            onChange={(res) => setPassword(res.target.value)}
            placeholder="Password"
          />
          <Utils.components.divComponent>
            <Utils.components.labelComponent
              style={{
                color: "#f00",
                fontSize: 13,
                marginLeft: 55,
              }}
            >
              {errorMessage.passwordError}
            </Utils.components.labelComponent>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <div onClick={() => setCheckBox(!checkBox)}>
                {checkBox ? (
                  <img
                    src={Utils.allImage.checkImage}
                    style={{
                      height: 15,
                      width: 15,
                      marginLeft: 40,
                      marginTop: 5,
                    }}
                  />
                ) : (
                  <img
                    src={Utils.allImage.emptyImage}
                    style={{
                      height: 15,
                      width: 15,
                      marginLeft: 40,
                      marginTop: 5,
                    }}
                  />
                )}
              </div>
              <label
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  color: "#00000080",
                  flex: 1,
                  marginLeft: 5,
                }}
                onClick={() => setCheckBox(!checkBox)}
              >
                Remember Me?
              </label>
              <label
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  color: "#00000080",
                  marginRight: 40,
                }}
                onClick={() => {}}
              >
                Forgot Password?
              </label>
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
                Login
              </button>
            </div>
            <div className="footer">
              <nav>
                <Link to={Utils.screenName.registration} onClick={handleLogin}>
                  <label>Don't have an account! Register</label>
                </Link>
              </nav>
            </div>
          </Utils.components.divComponent>
          {/* <div className="rowRegister">
            <div
              className="col-1"
              style={{
                display: "flex",
                flex: 1,
                alignItems: "center",
              }}
            >
              <div style={{ flex: 1 }}>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <label style={{ fontSize: 30, color: "black" }}>
                      Login
                    </label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: 30,
                      justifyContent: "center",
                    }}
                  >
                    <input
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
                      className="form__input"
                      placeholder="Email"
                      value={email}
                      onChange={(val) => {
                        setEmail(val.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label className="error_label error_name">
                      {errorMessage.emailError}
                    </label>
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
                    className="form__input"
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
                    <label className="error_label error_name">
                      {errorMessage.passwordError}
                    </label>
                  </div>
                </div>{" "}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <div onClick={() => setCheckBox(!checkBox)}>
                    {checkBox ? (
                      <img
                        src={Utils.allImage.checkImage}
                        style={{
                          height: 15,
                          width: 15,
                          marginLeft: 40,
                          marginTop: 5,
                        }}
                      />
                    ) : (
                      <img
                        src={Utils.allImage.emptyImage}
                        style={{
                          height: 15,
                          width: 15,
                          marginLeft: 40,
                          marginTop: 5,
                        }}
                      />
                    )}
                  </div>
                  <label
                    style={{
                      fontSize: 12,
                      fontWeight: "bold",
                      color: "#00000080",
                      flex: 1,
                      marginLeft: 5,
                    }}
                    onClick={() => setCheckBox(!checkBox)}
                  >
                    Remember Me?
                  </label>
                  <label
                    style={{
                      fontSize: 12,
                      fontWeight: "bold",
                      color: "#00000080",
                      marginRight: 40,
                    }}
                    onClick={() => {}}
                  >
                    Forgot Password?
                  </label>
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
                    Login
                  </button>
                </div>
                <div className="footer">
                  <nav>
                    <Link
                      to={Utils.screenName.registration}
                      onClick={handleLogin}
                    >
                      <label>Don't have an account! Register</label>
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </div> */}
        </Utils.components.divComponent>
        {/* <div className="col-1"> */}
        <img
          // className="sideImage"
          style={{
            height: 590,
            width: "60%",
          }}
          src={Utils.allImage.welcome}
        />
        {/* </div> */}
      </Utils.components.divComponent>
    </Utils.components.divComponent>
  );
};
export default LoginForm;
