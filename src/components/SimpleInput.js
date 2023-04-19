import React from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    isInvalid: enteredNameIsInvalid,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    resetHandler: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    isInvalid: enteredEmailIsInvalid,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    resetHandler: emailReset,
  } = useInput((value) => value.includes("@"));

  // const [enteredName, setEnteredName] = useState("");
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // const enteredNameIsValid = enteredName.trim() !== "";
  // const enteredNameIsInvalid = !enteredNameIsValid && enteredNameTouched;

  // const enteredEmailIsValid = enteredEmail.includes("@");
  // const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const formIsValid = enteredNameIsValid && enteredEmailIsValid ? true : false;

  // const nameChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };

  // const nameBlurHandler = (event) => {
  //   setEnteredNameTouched(true);
  // };

  // const emailChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  // };

  // const emailBlurHandler = (event) => {
  //   setEnteredEmailTouched(true);
  // };

  const submitHandler = (event) => {
    event.preventDefault();

    // setEnteredNameTouched(true);
    // setEnteredEmailTouched(true);
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    nameReset();
    emailReset();
    // setEnteredName("");
    // setEnteredEmail("");
    // setEnteredNameTouched(false);
    // setEnteredEmailTouched(false);
  };

  const nameInputClasses = enteredNameIsInvalid
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = enteredEmailIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {enteredNameIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {enteredEmailIsInvalid && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
