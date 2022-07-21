import './App.css';
import Nav from './Nav.js';
import RoutesList from './RoutesList';
import { BrowserRouter } from 'react-router-dom';
import userContext from "./userContext";
import {  useState } from "react";
import JoblyApi from './api';

const DEFAULT_USER_DETAILS = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
};

/** Renders App with Nav and Routes for Jobly */

function App() {
  const [userDetails, setUserDetails] = useState(DEFAULT_USER_DETAILS);
  const [token, setToken] = useState(null);

  console.log("app.js userdetails = ", userDetails)

  async function createUserSetToken(formData) {
    try {
      const result = await JoblyApi.createNewUser(formData);
      console.log("AJAX TOKEN", result);
      setToken(result);
      setUserDetails(formData);

    } catch (err) {
      console.log(err[0]);
    }
  }

  return (
    <div className="App">
      <userContext.Provider value={{ userDetails }}>
        <BrowserRouter>
          <Nav />
          <RoutesList fxn={createUserSetToken}  />
        </BrowserRouter>
      </userContext.Provider>

    </div>
  );
}

export default App;
