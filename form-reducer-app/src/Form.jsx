import React, { useState, useReducer, useRef } from "react";
const initialState = {
  email: "",
  password: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "email":
      return {
        ...state,
        email: action.payload,
      };
    case "password":
      return {
        ...state,
        password: action.payload,
      };
    case "reset":
      return initialState;
    default:
      throw new Error("Invalid data");
  }
}
export function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [submitted, setSubmitted] = useState(false);
  const emailRef = useRef();
  const passRef = useRef();

  function formSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value.trim();
    const password = passRef.current.value.trim();
    if (email && password) {
      dispatch({ type: "email", payload: email });
      dispatch({ type: "password", payload: password });
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  }

  function formReset() {
    emailRef.current.value = "";
    passRef.current.value = "";
    dispatch({ type: "reset" });
    setSubmitted(false);
  }

  return (
    <>
      <h1>Form using rdeucer and useRef</h1>
      <form onSubmit={formSubmit}>
        <input type="email" placeholder="Enter the email" ref={emailRef} />
        <input type="password" placeholder="Enter the password" ref={passRef} />
        <button type="submit">Submit</button>
        <button onClick={formReset}>Reset</button>
      </form>
      <br />
      {!submitted ? (
        <div>No details found</div>
      ) : (
        <div>
          <div>User Email: {state.email}</div>
          <div>User Password: {state.password}</div>
        </div>
      )}
    </>
  );
}
