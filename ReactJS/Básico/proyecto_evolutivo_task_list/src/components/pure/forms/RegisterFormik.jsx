import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
//?Models
// import { User } from "../../../models/userClass";
import { ROLES } from "../../../models/rolesEnums";

const submit = async (values) => {
  await new Promise((res) => {
    setTimeout(res, 1000);
  });
  alert(JSON.stringify(values, null, 2));
};

//Component
const RegisterFormik = () => {
  // const user = new User();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm: "",
    role: ROLES.USER,
  };

  //Define schema de registro
  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, "username must be 6 letters at least")
      .max(12, "username too long")
      .required("username is required"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    role: Yup.string()
      .oneOf([ROLES.USER, ROLES.ADMIN], "Need select a role")
      .required("Role is required"),

    password: Yup.string()
      .min(6, "password to short")
      .required("Password is required"),

    confirm: Yup.string()
      .when("password", {
        is: (value) => (value && value.lenght > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")], "password doesn't match")
        //Yup.ref accedemos al valor de una propiedad recibe un array de opciones a verificar
      })
      .required("Need confirm password")
  });

  // const submit = (values) => {
  //   alert("Register user");
  // };

  return (
    <>
      <h4>Register Formik</h4>
      <Formik
        initialValues={initialValues}
        onSubmit={submit}
        validationSchema={registerSchema}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <label htmlFor="username">Username: </label>
            <Field id="username" type="text" name="username" placeholder="Your name"/>
            { errors.username && touched.username && (<ErrorMessage name="username" component="div"></ErrorMessage>) }

            <label htmlFor="email">Email: </label>
            <Field id="email" type="email" name="email" placeholder="example@email.com"/>
            { errors.email && touched.email && (<ErrorMessage name="email" component="div"></ErrorMessage>) }

            {/* <label htmlFor="role">Role: </label>
            <Field id="role" type="text" name="role" placeholder="Select your role"/> */}

            <label htmlFor="password">Password: </label>
            <Field id="password" type="password" name="password" placeholder="Password"/>
            { errors.password && touched.password && (<ErrorMessage name="password" component="div"></ErrorMessage>) }

            <label htmlFor="confirm">Validate Password: </label>
            <Field id="confirm" type="password" name="confirm" placeholder="Confirm password"/>
            { errors.confirm && touched.confirm && (<ErrorMessage name="confirm" component="div"></ErrorMessage>) }

            <button type="submit">Register Account</button>
            {isSubmitting ? (<p>Sending your credentials...</p>) : null}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterFormik;
