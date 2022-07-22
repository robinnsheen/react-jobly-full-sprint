import { useState } from "react";
import userContext from "./userContext";
import { useContext } from "react";


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
    <div className="LoginForm">
      {errors
        ? <div className="loginErrors">error {errors.map(error => (<div>{error}</div>))}</div>
        : null}
      <form className="LoginForm" onSubmit={handleSubmit}>
        <h2>Login:</h2>
        username: <input name="username" value={formData.username} onChange={handleChange} />
        password: <input name="password" value={formData.password} onChange={handleChange} />
        <button>login!</button>
      </form>
    </div>
  );
}

export default LoginForm;
