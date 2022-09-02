import { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import screenName from "../../../utils/screenName";
import { useDispatch, useSelector } from "react-redux";
import { RegisterDetail } from "../../../services/redux/user/action";
import ValidationComponent from "../../../components/ValidationComponent";

function RegistrationForm() {
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
    navigate(screenName.detailsPage, {
      state: { item: item, index: index },
    });
  };
  const handleSubmit = () => {
    const errObject = ValidationComponent.RegisterValidation(
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
    dispatch(RegisterDetail(temp));

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
    <div className="form">
      <div className="form-body">
        <div className="username">
          <label className="form__label" for="firstName">
            First Name{" "}
          </label>
          <input
            className="form__label form__input"
            value={firstName}
            onChange={(val) => {
              setFirstName(val.target.value);
            }}
            type="text"
            id="firstName"
            placeholder="First Name"
          />
          <label className="error_name" for="firstName">
            {errorMessage.firstNameError}
          </label>
        </div>
        <div className="lastname">
          <label className="form__label" for="lastName">
            Last Name{" "}
          </label>
          <input
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
          <label className="error_name" for="lastName">
            {errorMessage.lastNameError}
          </label>
        </div>
        <div className="mobileNumber">
          <label className="form__label" for="mobileNumber">
            Mobile Number{" "}
          </label>
          <input
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
          <label className="error_name" for="mobileNumber">
            {errorMessage.mobileNumberError}
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
          <label className="error_name" for="email">
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
          <label className="error_name" for="password">
            {errorMessage.passwordError}
          </label>
        </div>
        <div className="confirm-password">
          <label className="form__label" for="confirmPassword">
            Confirm Password{" "}
          </label>
          <input
            className="form__label form__input"
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(val) => {
              setConfirmPassword(val.target.value);
            }}
          />
          <label className="error_name" for="confirmPassword">
            {errorMessage.confirmPasswordError}
          </label>
        </div>
      </div>
      <div class="footer">
        <button type="submit" onClick={handleSubmit} class="btn">
          Register
        </button>
      </div>
      <div class="footer">
        <nav>
          <Link to={screenName.login} onClick={handleLogin}>
            <label className="login_label" for="login">
              Have an account! Login
            </label>
          </Link>
        </nav>
      </div>
      {userLogin?.loginData &&
        userLogin?.loginData.map((item, index) => {
          return (
            <>
              <Link
                to={screenName.detailsPage}
                onClick={() => {
                  // navigate(screenName.detailsPage, {
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
        })}
    </div>
  );
}

export default RegistrationForm;
