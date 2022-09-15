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
    <div className="loginform">
      <div className="form-body">
        <div>
          <div
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
                  <label style={{ fontSize: 30, color: "black" }}>Login</label>
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
                  <label className="error_label error_name" for="email">
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
                  <label className="error_label error_name" for="password">
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
              <div class="footer">
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
                  class="btn"
                >
                  Login
                </button>
              </div>
              <div class="footer">
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
          <div style={{ flex: 1 }}>
            <img style={{ width: "100%" }} src={Utils.allImage.image} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
