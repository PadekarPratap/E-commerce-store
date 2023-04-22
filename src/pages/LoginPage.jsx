import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { BsExclamationCircleFill } from "react-icons/bs";
import axios from "axios";
import { BASE_URL } from "../utils/api";
import { endpoints } from "../utils/endpoints";
import { NavLink, useNavigate } from "react-router-dom";

const initialValues = {
  email: '',
  password: ''
};

const LoginPage = () => {

    const [response, setResponse] =  useState({
        message: '', 
        isLoginSuccessfull: ''
    })

    const navigate = useNavigate()

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string().required("Please enter your account password")
  });

  const handleSubmit = (values) => {
    axios
      .post(BASE_URL + endpoints.LOGIN_USER, values)
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user', JSON.stringify(res.data.user))
        setResponse({...response, message: 'Login successful!', isLoginSuccessfull: true})
        setTimeout(() => {
            navigate("/")
        }, 1000);
      })
      .catch((err) => {
        setResponse({...response, message: err.response.data.message, isLoginSuccessfull: false})
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
                <Form noValidate>
                  <div className="mt-5 relative">
                    <label htmlFor="email" className="text-xl font-mono">
                      Email<sup className="text-red-500">*</sup>
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
                      component={"small"}
                      className="text-red-600"
                      name="email"
                    />
                  </div>
                  <div className="mt-5 relative">
                    <label htmlFor="password" className="text-xl font-mono">
                      Password<sup className="text-red-500">*</sup>
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
                      component={"small"}
                      className="text-red-600"
                      name="password"
                    />
                  </div>
                  <div className={`text-center mt-5 ${response.isLoginSuccessfull ? 'text-green-700' : 'text-red-500'}`}>
                    <small className="text-lg">{response.message}</small> 
                  </div>
                  <div className="mt-5 text-center">
                    <input
                      type="submit"
                      value="Login"
                      className="bg-blue-600 text-white rounded px-4 py-2 cursor-pointer"
                    />
                  </div>
                </Form>
              )}
            </Formik>
            <div className="mt-5 text-center">
              <span>New user? <NavLink to={"/register"}>Register</NavLink></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;