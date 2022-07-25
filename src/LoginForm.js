import { useState } from "react";
import userContext from "./userContext";
import { useContext } from "react";
import "./LoginForm.css"


/**
 * LoginForm component
 * Props:
 *  - auth: function for handleSubmit to register a user
 *
 * States:
 *  - formData: object showing values of input fields
 *  - errors: errors or ""
 *
 * Rendered at /login
 */
function LoginForm({ auth }) {
  const { userDetails } = useContext(userContext);
  const { username, password } = userDetails;
  const [formData, setFormData] = useState({ username, password });
  const [errors, setErrors] = useState("");
  //sets formData to value in input field
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  }

  //auth formdata on submit
  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      await auth(formData);
    } catch (err) {
      setErrors(err);
    }
  }


  return (
    <div className="LoginForm col-md-6 offset-md-3">
      {errors
        ? <div className="LoginErrors">error {errors.map(error => (<div>{error}</div>))}</div>
        : null}
      <form className="LoginForm" onSubmit={handleSubmit}>
        <h2>Login to Jobly</h2>

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

        <button className="btn btn-primary">Login!</button>
      </form>
    </div>
  );
}

export default LoginForm;
