import { useState } from "react";



function LoginForm({submit}) {
  const [formData, setFormData] = useState({});


  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    submit(formData);
    console.log("is there token", formData);
  }

  return(
    <form onSubmit={handleSubmit}>
    <h2>Login:</h2>
    username: <input name="username" value={formData.username} onChange={handleChange} />
    password: <input name="password" value={formData.password} onChange={handleChange} />
    <button>Update!</button>
    </form>

  )
}

export default LoginForm;
