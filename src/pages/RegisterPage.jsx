import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { BsExclamationCircleFill } from "react-icons/bs";
import axios from "axios";
import { BASE_URL } from "../utils/api";
import { endpoints } from "../utils/endpoints";

const initialValues = {
  firstName: "",
  email: "",
  mobile: "",
  password: "",
  c_password: "",
};

const RegisterPage = () => {
  YupPassword(Yup);

  const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(false);

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("Name is a required field")
      .min(3, "Minimum length should be 3 characters")
      .max(20, "Max length should be 20 characters")
      .matches(/^[^\s]+$/, "Name cannot contain blank spaces")
      .matches(/^([^0-9]*)$/, "Name cannot contain numbers"),
    email: Yup.string()
      .required("Email is a required field")
      .email("Email is not valid"),
    mobile: Yup.string().required("Phone Number is a required field"),
    password: Yup.string()
      .required("Password is a required field")
      .minLowercase(1, "Password must contain atleast on lowercase character")
      .minUppercase(1, "Password must contain atleast one uppercase character")
      .minNumbers(1, "Password must contain atleast one number")
      .min(8, "Password must contain atleast 8 characters")
      .matches(/^[^\s]+$/, "Password cannot contain blank spaces"),
    c_password: Yup.string()
      .required("Confirm your password")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const handleSubmit = (values, {resetForm}) => {
    axios
      .post(BASE_URL + endpoints.REGISTER_USER, values)
      .then((res) => {
        console.log(res);
        setIsAlreadyRegistered(false)
        resetForm()
      })
      .catch((err) => {
        console.log(err.message)
        setIsAlreadyRegistered(true);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="w-full register-background-height overflow-hidden bg-gray-200">
        <div className="container mx-auto px-5 my-[1rem]">
          <div className="max-w-[450px] mx-auto px-5 py-[1.5rem] rounded bg-white">
            <div className="mb-8">
              <h2 className="text-3xl font-bold font-mono">Register</h2>
              <hr className="bg-black/20 h-[1.1px] mt-1" />
            </div>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {(formik) => (
                <Form>
                  <div className="relative">
                    <label htmlFor="firstName" className="text-xl font-mono">
                      First Name
                    </label>
                    <Field
                      type="text"
                      id="firstName"
                      className={
                        formik.touched.firstName && formik.errors.firstName
                          ? "rounded border border-red-500 w-full px-4 py-1 text-xl focus:outline-none focus:bg-blue-50"
                          : "rounded border border-black w-full px-4 py-1 text-xl focus:outline-none focus:bg-blue-50"
                      }
                      placeholder="Enter first name"
                      name="firstName"
                    />
                    {formik.touched.firstName && formik.errors.firstName && (
                      <BsExclamationCircleFill
                        className="absolute right-2 top-9"
                        size={20}
                        color="red"
                      />
                    )}
                    <ErrorMessage
                      component={"div"}
                      className="text-red-600"
                      name="firstName"
                    />
                  </div>
                  <div className="mt-5 relative">
                    <label htmlFor="email" className="text-xl font-mono">
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      placeholder="Enter email address"
                      className={
                        formik.touched.email && formik.errors.email
                          ? "rounded border border-red-500 w-full px-4 py-1 text-xl focus:outline-none focus:bg-blue-50"
                          : "rounded border border-black w-full px-4 py-1 text-xl focus:outline-none focus:bg-blue-50"
                      }
                      name="email"
                    />
                    {formik.touched.email && formik.errors.email && (
                      <BsExclamationCircleFill
                        className="absolute right-2 top-9"
                        size={20}
                        color="red"
                      />
                    )}
                    <ErrorMessage
                      component={"div"}
                      className="text-red-600"
                      name="email"
                    />
                  </div>
                  <div className="mt-5 relative">
                    <label htmlFor="number" className="text-xl font-mono">
                      Phone No.
                    </label>
                    <Field
                      type="number"
                      id="number"
                      placeholder="Enter phone number"
                      className={
                        formik.touched.mobile && formik.errors.mobile
                          ? "rounded border border-red-500 w-full px-4 py-1 text-xl focus:outline-none focus:bg-blue-50"
                          : "rounded border border-black w-full px-4 py-1 text-xl focus:outline-none focus:bg-blue-50"
                      }
                      name="mobile"
                    />
                    {formik.touched.mobile && formik.errors.mobile && (
                      <BsExclamationCircleFill
                        className="absolute right-2 top-9"
                        size={20}
                        color="red"
                      />
                    )}
                    <ErrorMessage
                      component={"div"}
                      className="text-red-600"
                      name="mobile"
                    />
                  </div>
                  <div className="mt-5 relative">
                    <label htmlFor="password" className="text-xl font-mono">
                      Password
                    </label>
                    <Field
                      type="password"
                      id="password"
                      placeholder="Enter password"
                      className={
                        formik.touched.password && formik.errors.password
                          ? "rounded border border-red-500 w-full px-4 py-1 text-xl focus:outline-none focus:bg-blue-50"
                          : "rounded border border-black w-full px-4 py-1 text-xl focus:outline-none focus:bg-blue-50"
                      }
                      name="password"
                    />
                    {formik.touched.password && formik.errors.password && (
                      <BsExclamationCircleFill
                        className="absolute right-2 top-9"
                        size={20}
                        color="red"
                      />
                    )}
                    <ErrorMessage
                      component={"div"}
                      className="text-red-600"
                      name="password"
                    />
                  </div>
                  <div className="mt-5 relative">
                    <label
                      htmlFor="confirm-password"
                      className="text-xl font-mono"
                    >
                      Confirm Password
                    </label>
                    <Field
                      type="password"
                      id="confirm-password"
                      placeholder="Confirm password"
                      className={
                        formik.touched.c_password && formik.errors.c_password
                          ? "rounded border border-red-500 w-full px-4 py-1 text-xl focus:outline-none focus:bg-blue-50"
                          : "rounded border border-black w-full px-4 py-1 text-xl focus:outline-none focus:bg-blue-50"
                      }
                      name="c_password"
                    />
                    {formik.touched.c_password && formik.errors.c_password && (
                      <BsExclamationCircleFill
                        className="absolute right-2 top-9"
                        size={20}
                        color="red"
                      />
                    )}
                    <ErrorMessage
                      component={"div"}
                      className="text-red-600"
                      name="c_password"
                    />
                  </div>
                  <div className="text-center mt-5">
                  {isAlreadyRegistered && <span className="text-red-500">This Email is already registered.</span>}
                  </div>
                  <div className="mt-5 text-center">
                    <input
                      type="submit"
                      value="Sign Up"
                      className="bg-blue-600 text-white rounded px-4 py-2 cursor-pointer"
                    />
                  </div>
                </Form>
              )}
            </Formik>
            <div className="mt-5 text-center">
              <span>Already have an Account? Login</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
