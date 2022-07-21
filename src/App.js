import './App.css';
import Nav from './Nav.js';
import RoutesList from './RoutesList';
import { BrowserRouter } from 'react-router-dom';
import userContext from "./userContext";
import { useEffect, useState } from "react";

const DEFAULT_USER_DETAILS = {fName: null, lName: null, username: null, email: null};

/** Renders App with Nav and Routes for Jobly */

function App() {
  const [userDetails, setUserDetails] = useState(DEFAULT_USER_DETAILS);

  function updateUserDetails(newUserDetails) {
    setUserDetails(newUserDetails);
  }

  return (
    <div className="App">
      <userContext.Provider value={{ user: null, userDetails }}>
        <BrowserRouter>
          <Nav />
          <RoutesList fxn={updateUserDetails}/>
        </BrowserRouter>
      </userContext.Provider>

    </div>
  );
}

export default App;
