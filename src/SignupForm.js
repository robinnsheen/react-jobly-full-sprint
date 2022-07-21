import { useState } from "react";
import userContext from "./userContext";
import { useContext } from "react";
import JoblyApi from "./api";

function SignupForm({ submit }) {
  const { userDetails } = useContext(userContext);
  const [formData, setFormData] = useState({data:userDetails,errors:null});

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    createUser();
    if(formData.errors===null){
      submit(formData.data);
    }


  }
  // creates user returns token
  async function createUser() {
    try {
      const result = await JoblyApi.createNewUser(formData.data);
      setFormData({data:{ ...formData.data, token: result.token },errors:null});

    }catch (err) {
      setFormData({
        ...formData,
        errors: err
      });
    }
    }




    return (
      <form onSubmit={handleSubmit}>
        <h2>Preferences:</h2>
        username: <input name="username" value={formData.username} onChange={handleChange} />
        password: <input name="password" value={formData.password} onChange={handleChange} />
        firstname: <input name="fname" value={formData.fname} onChange={handleChange} />
        lastname: <input name="lname" value={formData.lname} onChange={handleChange} />
        email: <input name="email" value={formData.email} onChange={handleChange} />

        <button>Update!</button>
      </form>
    );
  }

  export default SignupForm;
