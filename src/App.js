import './App.css';
import Nav from './Nav.js';
import RoutesList from './RoutesList';
import { BrowserRouter } from 'react-router-dom';
import userContext from "./userContext";
import {  useState } from "react";

const DEFAULT_USER_DETAILS = {
  fName: "",
  lName: "",
  username: "",
  email: ""
};

/** Renders App with Nav and Routes for Jobly */

function App() {
  const [userDetails, setUserDetails] = useState(DEFAULT_USER_DETAILS);
  console.log("app.js userdetails = ", userDetails)

  function updateUserDetails(newUserDetails) {
    setUserDetails(newUserDetails);
    localStorage.setItem("token", newUserDetails.token);

  }

  return (
    <div className="App">
      <userContext.Provider value={{ user: null, userDetails }}>
        <BrowserRouter>
          <Nav />
          <RoutesList fxn={updateUserDetails} />
        </BrowserRouter>
      </userContext.Provider>

    </div>
  );
}

export default App;
