import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SvgIcon from "../../../assets/svgIcon";
import ValidationComponent from "../../../components/ValidationComponent";
import params from "../../../services/config/params";
import { doPost } from "../../../services/config/request";
import screenName from "../../../utils/screenName";
import "./style.css";

function LoginForm() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorMessage, setErrorMessage] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    const errObject = ValidationComponent.LoginValidation(email, password);
    if (!errObject?.emailError && !errObject?.passwordError) {
      setErrorMessage({});
      loginCall();
    } else {
      setErrorMessage(errObject);
    }
  };
  const loginCall = () => {
    const data = new URLSearchParams();
    data.append(params.email, email);
    data.append(params.password, password);
    doPost(
      "https://php8.appworkdemo.com/chopup/public/api/v1/login",
      data.toString()
    )
      .then((res) => {
        console.log("res", res);
        if (res.status == 1) {
          navigate(screenName.topNav, { state: { item: res.data } });
        }
      })
      .catch((e) => console.log("loginError", e));
  };
  const handleLogin = () => {
    setEmail(null);
    setPassword(null);
  };
  return (
    <div className="form">
      <div className="form-body">
        <SvgIcon.Home />
        <div style={{ display: "flex" }}>
          <label style={{ fontSize: 26, color: "black", alignSelf: "center" }}>
            Login
          </label>
        </div>
        <div className="email">
          <label className="form__label" for="email">
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            className="form__label form__input"
            placeholder="Email"
            value={email}
            onChange={(val) => {
              setEmail(val.target.value);
            }}
          />
          <label className="error_label error_name" for="email">
            {errorMessage.emailError}
          </label>
        </div>
        <div className="password">
          <label className="form__label" for="password">
            Password{" "}
          </label>
          <input
            className="form__label form__input"
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(val) => {
              setPassword(val.target.value);
            }}
          />
          <label className="error_label error_name" for="password">
            {errorMessage.passwordError}
          </label>
        </div>
      </div>
      <div class="footer">
        <button type="submit" onClick={handleSubmit} class="btn">
          Login
        </button>
      </div>
      <div class="footer">
        <nav>
          <Link to={screenName.registration} onClick={handleLogin}>
            <label className="login_label" for="login">
              Don't have an account! Register
            </label>
          </Link>
        </nav>
      </div>
    </div>
  );
}
export default LoginForm;
