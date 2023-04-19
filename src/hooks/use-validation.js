import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputReducer = (state, action) => {
  switch (action.type) {
    case "SET_VALUE":
      return { value: action.payload, isTouched: state.isTouched };
    case "SET_TOUCHED":
      return { value: state.value, isTouched: action.payload };
    default:
      return initialInputState;
  }
};

const useValidation = (validateValue) => {
  const [inputState, dispatchInput] = useReducer(
    inputReducer,
    initialInputState
  );

  //   const [enteredValue, setEnteredValue] = useState("");
  //   const [enteredValueTouched, setEnteredValueTouched] = useState(false);

  const valueIsValid = validateValue(inputState.value);
  const valueIsInvalid = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatchInput({ type: "SET_VALUE", payload: event.target.value });
    // setEnteredValue(event.target.value);
  };
  const valueBlurHandler = (event) => {
    dispatchInput({ type: "SET_TOUCHED", payload: true });
    // setEnteredValueTouched(true);
  };
  const valueReset = () => {
    // setEnteredValue("");
    //   setEnteredValueTouched(false);
    dispatchInput({ type: "SET_VALUE", payload: "" });
    dispatchInput({ type: "SET_TOUCHED", payload: false });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    isInvalid: valueIsInvalid,
    changeHandler: valueChangeHandler,
    blurHandler: valueBlurHandler,
    resetValue: valueReset,
  };
};

export default useValidation;
