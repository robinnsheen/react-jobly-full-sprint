import { useState } from "react";
import userContext from "./userContext";
import { useContext } from "react";

function SignupForm({ submit }) {
  const { userDetails } = useContext(userContext);
  const [formData, setFormData] = useState(userDetails);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    submit(formData);
    console.log("is there token", formData);
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Preferences:</h2>
      username: <input name="username" value={formData.username} onChange={handleChange} />
      password: <input name="password" value={formData.password} onChange={handleChange} />
      firstname: <input name="firstName" value={formData.firstName} onChange={handleChange} />
      lastname: <input name="lastName" value={formData.lastName} onChange={handleChange} />
      email: <input name="email" value={formData.email} onChange={handleChange} />

      <button>Update!</button>
    </form>
  );
}

export default SignupForm;
