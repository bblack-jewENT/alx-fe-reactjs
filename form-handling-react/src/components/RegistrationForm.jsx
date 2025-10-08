import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validate = (data) => {
    const errs = {};
    if (!data.username) errs.username = "Username is required";
    if (!data.email) errs.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email))
      errs.email = "Invalid email address";
    if (!data.password) errs.password = "Password is required";
    else if (data.password.length < 6)
      errs.password = "Password must be at least 6 characters";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 style={{ fontSize: "18px", fontFamily: "monospace" }}>
        Registration Form
      </h3>
      {errors.username && (
        <div className="error-message">{errors.username}</div>
      )}
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />

      {errors.email && <div className="error-message">{errors.email}</div>}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      {errors.password && (
        <div className="error-message">{errors.password}</div>
      )}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;
