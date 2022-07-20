import { NavLink } from "react-router-dom";
import './Nav.css';

/** Nav Component
 *  Nav Links to go to routes
 */

function Nav() {
  return (
    <nav className="Nav navbar navbar-expand-md">
      <NavLink to="/">Jobly</NavLink>
      <ul className="navbar-nav ms-auto" >
      <NavLink className="nav-item me-4" to="/companies">Companies</NavLink>
      <NavLink className="nav-item me-4"  to="/jobs">Jobs</NavLink>
      </ul>
    </nav>
  );
}

export default Nav;
