import { useState } from "react";
import userContext from "./userContext";
import { useContext } from "react";
import "./ProfileForm.css";
//TODO: change update prop to update

/**
 * ProfileForm component
 * Props:
 *  - update: function for handleSubmit to update a user
 *
 * States:
 *  - formData: object showing values of input fields
 *  - errors: errors or ""
 *
 * Rendered at /profile
 */
function ProfileForm({ update }) {
  const { userDetails } = useContext(userContext);
  const [formData, setFormData] = useState(userDetails);
  const [errors, setErrors] = useState("");

  //update state as input field changes
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  }
  //update form data on submit
  async function handleSubmit(evt) {
    evt.preventDefault();

    //TODO: clear error messages on second submit (same for all forms)
    try {
      await update(formData);
    } catch (err) {
      setErrors(err);
    }

  }

  //TODO: Fix class names, line lengths

  return (
    <div className="ProfileForm col-md-6 offset-md-3">
      {errors
        ? <div className="ProfileForm-errors">error {errors.map(error => (<div>{error}</div>))}</div>
        : null}
      <form onSubmit={handleSubmit}>
        <h2>Update your profile</h2>

        <div className="form-group mb-4">
          <label htmlFor="username">Username: </label>
          <input
            disabled
            className="form-control"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="firstName">First Name: </label>
          <input
            className="form-control"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="lastName">Last Name: </label>
          <input
            className="form-control"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="email">Email: </label>
          <input
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-primary">Update!</button>
      </form>
    </div>
  );
}

export default ProfileForm;
