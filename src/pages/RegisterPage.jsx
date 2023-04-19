import React from "react";
import Navbar from "../components/Navbar";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup'
import YupPassword from "yup-password";

const initialValues = {
  firstName: "",
  email: "",
  number: "",
  password: "",
  c_password: "",
};

const RegisterPage = () => {
    YupPassword(Yup)

    const validationSchema = Yup.object({
        firstName: Yup.string().required("Name is a required field").min(3, "Minimum length should be 3 characters").max(20, "Max length should be 20 characters").matches(/^[^\s]+$/, "Name cannot contain blank spaces").matches(/^[^\d]+$ /, "Name cannot contain numbers"),
        email: Yup.string().required("Email is a required field").email("Email is not valid"),
        number: Yup.string().required("Phone Number is a required field"),
        password: Yup.string().required("Password is a required field").minLowercase(1, "Password must contain atleast on lowercase character").minUppercase(1, "Password must contain atleast one uppercase character").minNumbers(1, "Password must contain atleast one number").min(8, "Password must contain atleast 8 characters"),
        c_password: Yup.string().required("Confirm your password")

    })

  const handleSubmit = async (values) => {
    console.log(values);
  };
  return (
    <div>
      <Navbar />
      <div className="w-full register-background-height overflow-hidden bg-gray-200">
        <div className="container mx-auto px-5 my-[1rem]">
          <div className="max-w-[450px] mx-auto px-5 py-[1.5rem] rounded bg-white">
            <div className="mb-8">
              <h2 className="text-3xl font-bold font-mono">Register</h2>
              <hr className="bg-black/20 h-[2px]" />
            </div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
              {(formik) => (
                <Form>
                  <div>
                    <label htmlFor="firstName" className="text-xl font-mono">
                      First Name
                    </label>
                    <Field
                      type="text"
                      id="firstName"
                      className="rounded border-2 border-black w-full px-4 py-1 text-xl focus:outline-none"
                      placeholder="Enter first name"
                      name="firstName"
                    />
                    <ErrorMessage name="firstName" />
                  </div>
                  <div className="mt-5">
                    <label htmlFor="email" className="text-xl font-mono">
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      placeholder="Enter email address"
                      className="rounded border-2 border-black w-full px-4 py-1 text-xl focus:outline-none"
                      name="email"
                    />
                    <ErrorMessage name="email" />
                  </div>
                  <div className="mt-5">
                    <label htmlFor="number" className="text-xl font-mono">
                      Phone No.
                    </label>
                    <Field
                      type="number"
                      id="number"
                      placeholder="Enter phone number"
                      className=" rounded border-2 border-black w-full px-4 py-1 text-xl focus:outline-none"
                      name="number"
                    />
                    <ErrorMessage name="number" />
                  </div>
                  <div className="mt-5">
                    <label htmlFor="password" className="text-xl font-mono">
                      Password
                    </label>
                    <Field
                      type="password"
                      id="password"
                      placeholder="Enter password"
                      className=" rounded border-2 border-black w-full px-4 py-1 text-xl focus:outline-none"
                      name="password"
                    />
                    <ErrorMessage name="password" />
                  </div>
                  <div className="mt-5">
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
                      className=" rounded border-2 border-black w-full px-4 py-1 text-xl focus:outline-none"
                      name="c_password"
                    />
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
