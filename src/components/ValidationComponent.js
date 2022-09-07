import Utils from "../utils";

const LoginValidation = (email, password) => {
  const validationObj = { emailError: null, passwordError: null };
  if (!email) {
    validationObj.emailError = Utils.validationMessage.validationEmail;
  } else if (!Utils.validationImport.checkEmail(email)) {
    validationObj.emailError = Utils.validationMessage.validationValidEmail;
  }
  if (!password) {
    validationObj.passwordError = Utils.validationMessage.validationPassword;
  } else if (!Utils.validationImport.checkPassword(password)) {
    validationObj.passwordError =
      Utils.validationMessage.validationValidPassword;
  }
  return validationObj;
};
const RegisterValidation = (
  firstName,
  lastName,
  mobileNumber,
  email,
  password,
  confirmPassword
) => {
  const validationObj = {
    firstNameError: null,
    lastNameError: null,
    mobileNumberError: null,
    emailError: null,
    passwordError: null,
    confirmPasswordError: null,
  };
  if (!firstName) {
    validationObj.firstNameError = "Please enter First Name";
  } else if (!Utils.validationImport.checkString(firstName)) {
    validationObj.firstNameError = "Please enter valid First Name";
  }
  if (!lastName) {
    validationObj.lastNameError = "Please enter Last Name";
  } else if (!Utils.validationImport.checkString(lastName)) {
    validationObj.lastNameError = "Please enter valid Last Name";
  }
  if (!mobileNumber) {
    validationObj.mobileNumberError = "Please enter Mobile Number";
  } else if (!Utils.validationImport.checkNumber(mobileNumber)) {
    validationObj.mobileNumberError = "Please enter valid Mobile Number";
  }
  if (!email) {
    validationObj.emailError = "Please enter Email";
  } else if (!Utils.validationImport.checkEmail(email)) {
    validationObj.emailError = "Please enter valid Email";
  }
  if (!password) {
    validationObj.passwordError = "Please enter Password";
  } else if (!Utils.validationImport.checkPassword(password)) {
    validationObj.passwordError = "Please enter valid Password";
  }
  if (!confirmPassword) {
    validationObj.confirmPasswordError = "Please enter Confirm Password";
  } else if (!Utils.validationImport.checkPassword(confirmPassword)) {
    validationObj.confirmPasswordError = "Please enter valid Confirm Password";
  } else if (password != confirmPassword) {
    validationObj.confirmPasswordError =
      "Password and Confirm Password does not match";
  }
  return validationObj;
};

export { LoginValidation, RegisterValidation };
