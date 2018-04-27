const validate = (value, rules, connectedValue) => {
  let isValid = true;
  for (let rule in rules) {
    switch (rule) {
      case "isEmail":
        isValid = isValid && emailValidator(value);
        break;
      case "minLength":
        isValid = isValid && minLengthValidator(value, rules[rule]);
        break;
      case "equalTo":
        isValid = isValid && equalToValidator(value, connectedValue[rule]);
        break;
      default:
        isValid = true;
    }
  }
  return isValid;
};

//[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?

const emailValidator = value =>
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
    value
  );

const minLengthValidator = (value, minLength) => value.length >= minLength;

const equalToValidator = (value, checkValue) => value === checkValue;

export default validate;
