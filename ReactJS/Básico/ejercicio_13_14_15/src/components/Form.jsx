import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const submit = async (values) => {
  await new Promise((res) => {
    setTimeout(res, 1000);
  });
  alert(JSON.stringify(values, null, 2));
};

const styles = {

  forForm: {
    width: '350px',
    padding: '16px',
    borderRadius: '10px',
    margin: 'auto',
    backgroundColor: '#ccc'
  },

  forInput: {
    width: '180px',
    padding:'3px 10px',
    border:'1px solid #f6f6f6',
    borderRadius:'3px',
    backgroundColor:'#f6f6f6',
    margin:'8px 0',
    display:'inlineBlock'
  },

  forLabel: {
    width: '72px',
    fontWeight: 'bold',
    display: 'inlineBlock'
  },

  forSubmit: {
    width: '100%',
    padding: '8px 16px',
    marginTop: '32px',
    border: '1px solid #000',
    borderRadius: '5px',
    display: 'block',
    color: '#fff',
    backgroundColor: '#000'
  }
}

const FormRegisterFormik = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm: "",
  };

  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, "username must be 6 letters at least")
      .max(12, "username too long")
      .required("username is required"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "password to short")
      .required("Password is required"),

    confirm: Yup.string()
      .test('passwords-match', 'Passwords must match', function(value) {return this.parent.password === value})
      .required("Need confirm password")
  });
  return (
    <>
      <h1 style={ {'textAlign': 'center'} }>Registrer Form with Formik and Yup</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={submit}
        validationSchema={registerSchema}>

        {({touched,errors,isSubmitting}) => (
          <Form style={ styles.forForm }>
            <label style={ styles.forLabel } htmlFor="username">Username: </label>
            <Field  style={styles.forInput} id="username" type="text" name="username" placeholder="Your name"/>
            { errors.username && touched.username && (<ErrorMessage name="username" component="div"></ErrorMessage>) }
            <br/>
            <label style={ styles.forLabel } htmlFor="email">Email: </label>
            <Field  style={styles.forInput} id="email" type="email" name="email" placeholder="example@email.com"/>
            { errors.email && touched.email && (<ErrorMessage name="email" component="div"></ErrorMessage>) }
            <br/>
            <label style={ styles.forLabel } htmlFor="password">Password: </label>
            <Field style={styles.forInput} id="password" type="password" name="password" placeholder="Password"/>
            { errors.password && touched.password && (<ErrorMessage name="password" component="div"></ErrorMessage>) }
            <br/>
            <label style={ styles.forLabel } htmlFor="confirm">Validate Password: </label>
            <Field style={styles.forInput} id="confirm" type="password" name="confirm" placeholder="Confirm password"/>
            { errors.confirm && touched.confirm && (<ErrorMessage name="confirm" component="div"></ErrorMessage>) }
            <br/>
            <button style={styles.forSubmit} type="submit">Register </button>
            {isSubmitting ? (<p>Sending your credentials...</p>) : null}
          </Form>
        )}

      </Formik>
    </>

  )
};

export default FormRegisterFormik;
