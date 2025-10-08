import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
    else if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  const validate = () => {
    const errs = {};
    if (!username) errs.username = "Username is required";
    if (!email) errs.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))
      errs.email = "Invalid email address";
    if (!password) errs.password = "Password is required";
    else if (password.length < 6)
      errs.password = "Password must be at least 6 characters";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log({ username, email, password });
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
        value={username}
        onChange={handleChange}
      />

      {errors.email && <div className="error-message">{errors.email}</div>}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}
      />

      {errors.password && (
        <div className="error-message">{errors.password}</div>
      )}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;
