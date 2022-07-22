import './App.css';
import Nav from './Nav.js';
import RoutesList from './RoutesList';
import { BrowserRouter } from 'react-router-dom';
import userContext from "./userContext";
import { useEffect, useState } from "react";
import JoblyApi from './api';
import jwt_decode from "jwt-decode";

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


  useEffect(function fetchUserOnSignupLogin() {
    async function fetchUser() {
      try {
        JoblyApi.token = token;
        const decodedToken = jwt_decode(token)
        console.log("decodedtoken", decodedToken)
        const result = await JoblyApi.getUser(decodedToken.username);
        setUserDetails(result);
      } catch (err) {
        console.log(err);
      }

    }
    fetchUser();
    console.log("after use effect details:", userDetails);
  }, [token]);


  console.log("app.js userdetails = ", userDetails);

  async function createUserSetToken(formData) {
    try {
      const result = await JoblyApi.createNewUser(formData);
      console.log("AJAX TOKEN", result);
      setToken(result);


    } catch (err) {
      err.map(e => console.log(e));
    }
  }

  async function userLogin(formData) {
    try {
      const result = await JoblyApi.userLogin(formData);
      console.log(" Login AJAX TOKEN", result);
      setToken(result);

    } catch (err) {
      err.map(e => console.log(e));
    }
  }
  return (
    <div className="App">
      <userContext.Provider value={{ userDetails }}>
        <BrowserRouter>
          <Nav />
          <RoutesList register={createUserSetToken} login={userLogin} />
        </BrowserRouter>
      </userContext.Provider>

    </div>
  );
}






export default App;
