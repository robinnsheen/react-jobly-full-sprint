import { useState } from "react";
import userContext from "./userContext";
import { useContext } from "react";

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
    <div className="SignUpForm">
      {errors
        ? <div className="signupErrors">error {errors.map(error => (<div>{error}</div>))}</div>
        : null}
      <form onSubmit={handleSubmit}>
        <h2>Register:</h2>
        username: <input name="username" value={formData.username} onChange={handleChange} />
        password: <input name="password" value={formData.password} onChange={handleChange} />
        firstname: <input name="firstName" value={formData.firstName} onChange={handleChange} />
        lastname: <input name="lastName" value={formData.lastName} onChange={handleChange} />
        email: <input name="email" value={formData.email} onChange={handleChange} />

        <button>Register!</button>
      </form>
    </div>
  );
}

export default SignupForm;
