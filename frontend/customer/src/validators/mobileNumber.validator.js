const mobileNumberValidatorRegex = /^[6-9]\d{9}$/;

const validateMobileNumber = (number) => {
  const numberIsLessThanSix = /\b([0-5])\b/;
  if (numberIsLessThanSix.test(number[0])) {
    return false;
  }

  if (number.length >= 10) {
    return mobileNumberValidatorRegex.test(number);
  }
  return true;
};

export default validateMobileNumber;
