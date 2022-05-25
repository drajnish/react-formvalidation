import useValidate from "../hooks/useValidate";

import Button from "./UI/Button";
import Input from "./UI/input";

const RightContent = () => {
  const {
    value: enteredEmail,
    hasError: emailHasError,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    valueIsValid: emailIsValid,
    reset: emailReset,
  } = useValidate(
    (value) =>
      value.trim() !== "" &&
      value.match(
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  );

  const {
    value: enteredPassword,
    hasError: passwordHasError,
    changeHandler: passwordChangeHandler,
    blurHandler: passwordBlurHandler,
    valueIsValid: passwordIsValid,
    reset: passwordReset,
  } = useValidate(
    (value) =>
      value.trim() !== "" &&
      value.match(
        // eslint-disable-next-line no-useless-escape
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
      )
  );

  const {
    value: enteredConfirmPwd,
    hasError: confirmPwdHasError,
    changeHandler: confirmPwdChangeHandler,
    blurHandler: confirmPwdBlurHandler,
    valueIsValid: confirmPwdIsValid,
    reset: confirmPwdReset,
  } = useValidate(
    (value) =>
      value.trim() !== "" &&
      value.match(enteredPassword) &&
      value.length === enteredPassword.length
  );

  const {
    value: enteredFullname,
    hasError: fullnameHasError,
    changeHandler: fullnameChangeHandler,
    blurHandler: fullnameBlurHandler,
    valueIsValid: fullnameIsValid,
    reset: fullnameReset,
  } = useValidate((value) => value.trim() !== "");

  const {
    value: enteredNumber,
    hasError: numberHasError,
    changeHandler: numberChangeHandler,
    blurHandler: numberBlurHandler,
    valueIsValid: numberIsValid,
    reset: numberReset,
  } = useValidate((value) => value.trim() !== "" && value.match(/^\d{10}$/));

  let formIsValid = false;

  if (
    emailIsValid &&
    passwordIsValid &&
    confirmPwdIsValid &&
    fullnameIsValid &&
    numberIsValid
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      emailBlurHandler();
      passwordBlurHandler();
      confirmPwdBlurHandler();
      fullnameBlurHandler();
      numberBlurHandler();
      return;
    }

    console.log(enteredEmail, enteredPassword, enteredConfirmPwd);

    emailReset();
    passwordReset();
    confirmPwdReset();
    fullnameReset();
    numberReset();
  };

  const emailErrorClass = emailHasError ? "invalid" : "";
  const passwordErrorClass = passwordHasError ? "invalid" : "";
  const confirmPwdErrorClass = confirmPwdHasError ? "invalid" : "";
  const fullnameErrorClass = fullnameHasError ? "invalid" : "";
  const numberErrorClass = numberHasError ? "invalid" : "";

  return (
    <div className="main__right">
      <form onSubmit={formSubmitHandler}>
        <h1>Create an account</h1>
        <Input
          type="text"
          id="email"
          label="Your email address"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          hasError={emailHasError}
          errorMsg="Please enter valid email address."
          formClass={emailErrorClass}
        />
        <Input
          type="password"
          id="password"
          label="Your password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          hasError={passwordHasError}
          errorMsg="Please enter valid password (Must contain atleast 8 characters, one number, one special character)."
          formClass={passwordErrorClass}
        />
        <Input
          type="password"
          id="confirmPwd"
          label="Confirm your password"
          value={enteredConfirmPwd}
          onChange={confirmPwdChangeHandler}
          onBlur={confirmPwdBlurHandler}
          hasError={confirmPwdHasError}
          errorMsg="Password do not match."
          formClass={confirmPwdErrorClass}
        />
        <Input
          type="text"
          id="fullName"
          label="Your full name"
          value={enteredFullname}
          onChange={fullnameChangeHandler}
          onBlur={fullnameBlurHandler}
          hasError={fullnameHasError}
          errorMsg="Name can not be empty."
          formClass={fullnameErrorClass}
        />
        <Input
          type="text"
          id="phoneNum"
          label="Your phone number"
          value={enteredNumber}
          onChange={numberChangeHandler}
          onBlur={numberBlurHandler}
          hasError={numberHasError}
          errorMsg="Please enter valid phone number."
          formClass={numberErrorClass}
          className="phone-input"
        />

        <div className="form-checkbox">
          <input type="checkbox" id="termsCondition" />
          <label htmlFor="termsCondition">
            I read and agree Terms and Conditions
          </label>
        </div>
        <Button palceholder="Create Account" />
      </form>
    </div>
  );
};

export default RightContent;
