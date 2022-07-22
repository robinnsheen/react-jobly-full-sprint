import { useState } from "react";
import userContext from "./userContext";
import { useContext } from "react";
//TODO: change auth prop to update

/**
 * ProfileForm component
 * Props:
 *  - auth: function for handleSubmit to update a user
 *
 * States:
 *  - formData: object showing values of input fields
 *  - errors: errors or ""
 *
 * Rendered at /profile
 */
function ProfileForm({ auth }) {
  const { userDetails } = useContext(userContext);
  console.log(" IN PROFILE", userDetails);
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

    //TODO: clear error messages on second submit (same for all forms)
    try {
      await auth(formData);
    } catch (err) {
      setErrors(err);
    }

  }

  //TODO: Fix class names, line lengths

  return (
    <div className="SignUpForm">
      {errors
        ? <div className="signupErrors">error {errors.map(error => (<div>{error}</div>))}</div>
        : null}
      <form onSubmit={handleSubmit}>
        <h2>Profile Update:</h2>
        username: <input disabled name="username" value={formData.username} onChange={handleChange} />
        firstname: <input name="firstName" value={formData.firstName} onChange={handleChange} />
        lastname: <input name="lastName" value={formData.lastName} onChange={handleChange} />
        email: <input name="email" value={formData.email} onChange={handleChange} />

        <button>Update!</button>
      </form>
    </div>
  );
}

export default ProfileForm;