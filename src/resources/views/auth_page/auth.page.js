import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import AuthService from "../../../service/auth.service";
import useResponseHelper from "../../../helpers/custom_hooks/use_response.helper";

export const AUTH_TYPE = {
  login: "LOGIN",
  register: "SIGNUP",
};

const emailValidRule = Yup.string()
  .required("This field is required")
  .email("Enter a valid Email");

const passwordValidRule = Yup.string()
  .required("This field is required")
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
    "Must Contain a number, a special character and a capital letter"
  )
  .min(8, "Password must be minimum of 8");

const AuthPage = ({ type }) => {
  // =======================================
  // CUSTOM HOOKS
  // =======================================
  let { renderBusy } = useResponseHelper();
  // =======================================
  // NAVIGATION HANDLER
  // =======================================
  let navigate = useNavigate();

  // =======================================
  // FORMIK FORM ONSUBMIT AND STATE HANDLER
  // =======================================
  const signupForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: emailValidRule,
      password: passwordValidRule,
    }),
    onSubmit: async (values) => {
      renderBusy(true);
      await AuthService.register(values)
        .then(() => navigate("/home"))
        .catch((err) => console.log(err));
      renderBusy(false);
    },
  });

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: emailValidRule,
      password: Yup.string().required("This field is required"),
    }),
    onSubmit: async (values) => {
      renderBusy(true);
      await AuthService.login(values)
        .then(() => navigate("/home"))
        .catch((err) => console.log(err.message));
      renderBusy(false);
    },
  });

  // =======================================
  // LOGIN OR SIGNUP FUNCTIONALITY VARIABLE HANDLER
  // =======================================
  let submitHandler =
    type === AUTH_TYPE.login ? loginForm.handleSubmit : signupForm.handleSubmit;
  let input =
    type === AUTH_TYPE.login ? loginForm.handleChange : signupForm.handleChange;
  let values = type === AUTH_TYPE.login ? loginForm.values : signupForm.values;

  let validationError =
    type === AUTH_TYPE.login ? loginForm.errors : signupForm.errors;

  let displayEmailValidation =
    type === AUTH_TYPE.login
      ? loginForm.touched.email && loginForm.errors.email
      : signupForm.touched.email && signupForm.errors.email;

  let displayPasswordValidation =
    type === AUTH_TYPE.login
      ? loginForm.touched.password && loginForm.errors.password
      : signupForm.touched.password && signupForm.errors.password;

  return (
    <React.Fragment>
      <div className="h-screen">
        <br />
        <br />
        <br />
        <form
          onSubmit={submitHandler}
          className="lg:w-1/3 m-auto py-12 px-8 lg:border rounded"
        >
          <h1>{type}</h1>
          <br />
          <div>
            <label>Email</label>
            <input
              name="email"
              type="text"
              value={values.email}
              onChange={(e) => input(e)}
            />
            {displayEmailValidation ? (
              <span className="span-input-validation">
                {validationError?.email}
              </span>
            ) : null}
          </div>

          <br />
          <div>
            <label>Password</label>
            <input
              name="password"
              type="password"
              value={values.password}
              onChange={(e) => input(e)}
            />
            {displayPasswordValidation ? (
              <span className="span-input-validation">
                {validationError?.password}
              </span>
            ) : null}
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
