import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);

  const enteredValueIsValid = validateValue(enteredValue);
  const enteredValueIsInvalid = !enteredValueIsValid && enteredValueTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueBlurHandler = (event) => {
    setEnteredValueTouched(true);
  };

  const resetHandler = () => {
    setEnteredValue("");
    setEnteredValueTouched(false);
  };

  return {
    value: enteredValue,
    isValid: enteredValueIsValid,
    isInvalid: enteredValueIsInvalid,
    changeHandler: valueChangeHandler,
    blurHandler: valueBlurHandler,
    resetHandler: resetHandler,
  };
};

export default useInput;
