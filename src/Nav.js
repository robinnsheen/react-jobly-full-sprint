import { NavLink } from "react-router-dom";
import './Nav.css';

/** Nav Component
 *  Nav Links to go to routes
 */

function Nav() {
  return (
    <nav className="Nav">
      <NavLink to="/">Jobly</NavLink>
      <NavLink to="/companies">Companies</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
    </nav>
  );
}

export default Nav;
