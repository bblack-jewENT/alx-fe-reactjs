import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <h3 style={{ fontSize: "18px", fontFamily: "monospace" }}>
          Registration Form
        </h3>

        <Field as="input" type="text" name="username" placeholder="Username" />
        <ErrorMessage
          name="username"
          component="div"
          style={{ color: "red" }}
        />

        <Field as="input" type="email" name="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" style={{ color: "red" }} />

        <Field
          as="input"
          type="password"
          name="password"
          placeholder="Password"
        />
        <ErrorMessage
          name="password"
          component="div"
          style={{ color: "red" }}
        />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
