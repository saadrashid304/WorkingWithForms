import useValidation from "../hooks/use-validation";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    isInvalid: firstNameIsInvalid,
    changeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler,
    resetValue: resetFirstName,
  } = useValidation((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    isInvalid: lastNameIsInvalid,
    changeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler,
    resetValue: resetLastName,
  } = useValidation((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    isInvalid: emailIsInvalid,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    resetValue: resetEmail,
  } = useValidation((value) => value.includes("@"));

  // const [enteredFirstName, setEnteredFirstName] = useState("");
  // const [enteredFirstNameTouched, setEnteredFirstNameTouched] = useState(false);

  // const [enteredLastName, setEnteredLastName] = useState("");
  // const [enteredLastNameTouched, setEnteredLastNameTouched] = useState(false);

  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // const firstNameIsValid = enteredFirstName.trim() !== "";
  // const firstNameIsInvalid = !firstNameIsValid && enteredFirstNameTouched;

  // const lastNameIsValid = enteredLastName.trim() !== "";
  // const lastNameIsInvalid = !lastNameIsValid && enteredLastNameTouched;

  // const emailIsValid = enteredEmail.includes("@");
  // const emailIsInvalid = !emailIsValid && enteredEmailTouched;

  const formIsValid =
    firstNameIsValid && lastNameIsValid && emailIsValid ? true : false;

  // const firstNameChangeHandler = (event) => {
  //   setEnteredFirstName(event.target.value);
  // };
  // const firstNameBlurHandler = (event) => {
  //   setEnteredFirstNameTouched(true);
  // };

  // const lastNameChangeHandler = (event) => {
  //   setEnteredLastName(event.target.value);
  // };
  // const lastNameBlurHandler = (event) => {
  //   setEnteredLastNameTouched(true);
  // };

  // const emailChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  // };
  // const emailBlurHandler = (event) => {
  //   setEnteredEmailTouched(true);
  // };

  const submitHandler = (event) => {
    event.preventDefault();

    // setEnteredFirstNameTouched(true);
    // setEnteredLastNameTouched(true);
    // setEnteredEmailTouched(true);

    if (!firstNameIsValid || !lastNameIsValid || !emailIsValid) {
      return;
    }

    console.log(
      "FirstName = " + enteredFirstName,
      "LastName = " + enteredLastName,
      "Email = " + enteredEmail
    );

    resetFirstName();
    resetLastName();
    resetEmail();

    // setEnteredFirstName("");
    // setEnteredFirstNameTouched(false);
    // setEnteredLastName("");
    // setEnteredLastNameTouched(false);
    // setEnteredEmail("");
    // setEnteredEmailTouched(false);
  };

  const firstNameClasses = firstNameIsInvalid
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = lastNameIsInvalid
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailIsInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          {firstNameIsInvalid && (
            <p className="error-text">First name must not be empty.</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameIsInvalid && (
            <p className="error-text">Last name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailIsInvalid && (
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

export default BasicForm;
