import { useFormik } from "formik";
import React from "react";

export const AUTH_TYPE = {
  login: "LOGIN",
  register: "SIGNUP",
};

const AuthPage = ({ type }) => {
  const signupForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {},
  });

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {},
  });

  let input =
    type === AUTH_TYPE.login ? loginForm.handleChange : signupForm.handleChange;

  return (
    <React.Fragment>
      <div className="h-screen">
        <br />
        <br />
        <br />
        <form className="lg:w-1/3 m-auto py-12 px-8 lg:border rounded">
          <h1>{type}</h1>
          <br />
          <div>
            <label>Email</label>
            <input name="email" type="text" onChange={(e) => input} />
            <span className="span-input-validation">Invalid input</span>
          </div>

          <br />
          <div>
            <label>Password</label>
            <input name="password" type="password" onChange={(e) => input} />
            <span className="span-input-validation">Invalid input</span>
          </div>
          <br />
          <br />
          <button>{type}</button>

          {type === AUTH_TYPE.register ? (
            <br />
          ) : (
            <div className="w-full text-center">
              <br />
              <p className="cursor-pointer hover:underline">Forgot password?</p>
            </div>
          )}
        </form>
      </div>
    </React.Fragment>
  );
};

export default AuthPage;
