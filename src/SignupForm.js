import { useState } from "react";
import userContext from "./userContext";
import { useContext } from "react";
import "./SignupForm.css";

/**
 * SignupForm component
 * Props:
 *  - auth: function for handleSubmit to register a user
 *
 * States:
 *  - formData: object showing values of input fields
 *  - errors: errors or ""
 *
 * Rendered at /signup
 */
function SignupForm({ auth }) {
  const { userDetails } = useContext(userContext);
  const [formData, setFormData] = useState(userDetails);
  const [errors, setErrors] = useState("");

  //update state as input field changes
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  }
  //auth form data on submit
  async function handleSubmit(evt) {
    evt.preventDefault();
    //TODO: clear errors on second submit
    try {
      await auth(formData);
    } catch (err) {
      setErrors(err);
    }

  }

  return (
    <div className="SignupForm col-md-6 offset-md-3">
      {errors
        ? <div className="SignupErrors">error {errors.map(error => (<div>{error}</div>))}</div>
        : null}
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>

        <div className="form-group mb-4">
          <label htmlFor="username">Username: </label>
          <input
            className="form-control"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="username"
          />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="password">Password: </label>
          <input
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="password"
          />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="firstName">First Name: </label>
          <input
            className="form-control"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="first name"
          />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="lastName">Last Name: </label>
          <input
            className="form-control"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="last name"
          />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="email">Email: </label>
          <input
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email"
          />
        </div>
        <button className="btn btn-primary">Register!</button>
      </form>
    </div>
  );
}

export default SignupForm;
