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
  password: ""
};

/** Renders App with Nav and Routes for Jobly
 *
 * Props: none
 *
 * States:
 * - userDetails
 * - token
 *
 * functions for:
 * - fetchUserOnSignupLogin
 * - createUserSetToken
 * - userLogin
 * - userLogOut
 * - profileUpdate
*/

function App() {
  const [userDetails, setUserDetails] = useState(DEFAULT_USER_DETAILS);
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  /**updates userDetails when token changes with axios call from JoblyApi: if this
  fails sets token to null and userdetails to default value, sets token in JoblyApi
   class */
  //TODO: destructure username out of token
  useEffect(function fetchUserOnSignupLogin() {
    async function fetchUser() {
      try {
        JoblyApi.token = token;
        const decodedToken = jwt_decode(token);
        const result = await JoblyApi.getUser(decodedToken.username);
        setUserDetails(result);
        window.localStorage.setItem("token", token);

      } catch (err) {
        setUserDetails(DEFAULT_USER_DETAILS);
        setToken(null);
        delete window.localStorage["token"];
      }
    }
    fetchUser();
  }, [token]);

  // Get user info from JoblyApi using valid username and token
  async function createUserSetToken(formData) {
    const result = await JoblyApi.createNewUser(formData);
    setToken(result);
  }

  // Auth and login user to JoblyApi
  async function userLogin(formData) {
    const result = await JoblyApi.loginUser(formData);
    setToken(result);
  }
  //TODO: dont need a second getUser call and therefore dont need to decode token!
  // Auth and update user info (firstName, lastName, email) in JoblyApi
  async function profileUpdate(formData) {
    const { firstName, lastName, email } = formData;
    const updateData = { firstName, lastName, email };
    const result = await JoblyApi.updateUser(userDetails.username, updateData);
    setUserDetails(result);
  }

  // Log out user from site
  function userLogOut() {
    setUserDetails(DEFAULT_USER_DETAILS);
    setToken(null);
    delete window.localStorage["token"];
  }

  //TODO: isLoading state
  if (token && userDetails.username === "") {
    return <p> LOADING ... </p>;
  }

  return (
    <div className="App">
      <userContext.Provider value={{ userDetails }}>
        <BrowserRouter>
          <Nav logout={userLogOut} />
          <RoutesList register={createUserSetToken} login={userLogin} logout={userLogOut} update={profileUpdate} />
        </BrowserRouter>
      </userContext.Provider>

    </div>
  );
}






export default App;
