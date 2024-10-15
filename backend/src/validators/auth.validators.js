const validateEmail = (email) => {
  const emailValidatorRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return emailValidatorRegex.test(email);
};

const validateMobileNumber = (number) => {
  const mobileNumberValidatorRegex = /^[6-9]\d{9}$/;

  const numberIsLessThanSix = /\b([0-5])\b/;
  if (numberIsLessThanSix.test(number[0])) {
    return false;
  }

  if (number.length >= 10) {
    return mobileNumberValidatorRegex.test(number);
  }
  return true;
};

const validatePassword = (password) => {
  const passwordValidatorRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

  return passwordValidatorRegex.test(password);
};

module.exports = {
  validateEmail,
  validateMobileNumber,
  validatePassword,
};
