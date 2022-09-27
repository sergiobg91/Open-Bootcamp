// Componente que va a contener un formulario para autenticacion de ususarios
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
//ibreria Yup valida esquemas y formatos de campos

//? Crea schema
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const initialCredentials = {
  email: "",
  password: "",
};

const submmit = async (values) => {
  await new Promise((res) => {
    setTimeout(res, 1000);
  });
  alert(JSON.stringify(values, null, 2));
  localStorage.setItem('credentials', values) //Persistencia de datos
};

const LoginFormik = () => {
  return (
    <>
      <h4>Login with Formik</h4>
      <Formik initialValues={initialCredentials} onSubmit={submmit} validationSchema={loginSchema}>

        {/* Usa props de Formik para manejo de erroes*/}
        {( {values, touched, errors, isSubmitting, handleChange, handleBlur} ) => (
          <Form>
              <label htmlFor="email">Email: </label>
              <Field id="email" type="email" name="email" placeholder="example@email.com"/>

              {/* Muestra errores en el email en caso de tenerlos */}
              { errors.email && touched.email && (<ErrorMessage name="email" component="div"></ErrorMessage>) }

              <br />
              <label htmlFor="password">Password: </label>
              <Field id="password" type="password" name="password" placeholder="Password"/>

              {/* Muestra errores en la password encaso de tenerlos */}
              { errors.password && touched.password && (<ErrorMessage name="password" component="div"></ErrorMessage>) }

              <br />
              <button type="submit">Submit</button>

              {isSubmitting ? (<p>Login your credentials...</p>) : null}

            </Form>
        )}

      </Formik>
    </>
  );
};

export default LoginFormik;
