import { NavLink } from "react-router-dom";
import { useContext } from "react";
import userContext from "./userContext";
import './Nav.css';

/** Nav Component
 *  Nav Links to go to routes
 *
 *  Props:
 *  - logout
 *
 *  States: none
 *
 *  Return correct navbar depending on logged in vs logged out user
 */
//TODO: change ptag to button/link
function Nav({ logout }) {
  const { userDetails } = useContext(userContext);
  const loggedIn = userDetails.username !== "" ? true : false;
  if (loggedIn) {
    return (
      <nav className="Nav navbar navbar-expand-md mb-4">
        <NavLink to="/">Jobly</NavLink>
        <ul className="navbar-nav ms-auto" >
          <NavLink className="nav-item" to="/companies">Companies</NavLink>
          <NavLink className="nav-item" to="/jobs">Jobs</NavLink>
          <NavLink className="nav-item" to="/profile">Profile</NavLink>
          <p onClick={logout}>logout {userDetails.username}</p>
        </ul>
      </nav>
    );

  } else {
    return (
      <nav className="Nav navbar navbar-expand-md mb-4">
        <NavLink to="/">Jobly</NavLink>
        <ul className="navbar-nav ms-auto" >
          <NavLink className="nav-item" to="/login">login</NavLink>
          <NavLink className="nav-item" to="/signup">signup</NavLink>
        </ul>
      </nav>
    );

  }

}

export default Nav;
