const StringValidation = (string) => {
  let i;
  let validate;
  let stringValidation = /^[a-zA-Z0-9]+$/;
  for (i = 0; i < string.length; i++) {
    if (stringValidation.test(string.charAt(i))) {
      validate = true;
      break;
    } else {
      validate = false;
    }
  }
  return validate;
};
const checkEmail = (value) => {
  const condition = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/);
  return condition.test(value);
};
const checkPassword = (value) => {
  const condition = new RegExp(/.{6,}$/); // /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/gm
  return condition.test(value);
};
const checkNumber = (value) => {
  const condition = new RegExp(/^[0-9-]{10}$/);
  return condition.test(value);
};
const checkNumeric = (value) => {
  const condition = new RegExp(/^[0-9]+$/);
  return condition.test(value);
};
const checkPswd = (value) => {
  const condition = new RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/);
  return condition.test(value);
};
const checkName = (value) => {
  const condition = new RegExp(/^[A-Za-z0-9 ]+$/);
  return condition.test(value);
};
const checkString = (value) => {
  const condition = new RegExp(/^[a-zA-Z ]+$/);
  return condition.test(value);
};
export {
  StringValidation,
  checkEmail,
  checkPassword,
  checkNumber,
  checkPswd,
  checkName,
  checkString,
  checkNumeric,
};
