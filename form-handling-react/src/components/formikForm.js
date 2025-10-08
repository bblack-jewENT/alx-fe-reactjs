import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const initialValues = {
    name: "",
    email: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
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

        <Field as="input" type="text" name="name" placeholder="Name" />
        <ErrorMessage name="name" component="div" style={{ color: "red" }} />

        <Field as="input" type="email" name="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" style={{ color: "red" }} />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
