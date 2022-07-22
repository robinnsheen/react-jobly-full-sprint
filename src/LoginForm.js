import { useState } from "react";
import userContext from "./userContext";
import { useContext } from "react";


//TODO: docstring, rename prop to authenticate, add classname loginform for css
function LoginForm({ submit }) {
  const { userDetails } = useContext(userContext);
  const { username, password } = userDetails;
  const [formData, setFormData] = useState({ username, password });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  }
//move trycatch into handlesubmit add and update error state
  function handleSubmit(evt) {
    evt.preventDefault();
    submit(formData);
    console.log("is there token", formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login:</h2>
      username: <input name="username" value={formData.username} onChange={handleChange} />
      password: <input name="password" value={formData.password} onChange={handleChange} />
      <button>login!</button>
    </form>

  );
}

export default LoginForm;
