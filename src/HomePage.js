import "./HomePage.css";
import { useContext } from "react";
import userContext from "./userContext";
import { Link } from "react-router-dom";

/** Renders HomePage with welcome text
 *
 *  Returns correct homepage for logged in vs logged out user
*/

function HomePage() {

  const { userDetails } = useContext(userContext);
  const loggedIn = userDetails.username !== "" ? true : false;

  return (
    <div className="HomePage px-4 py-5 my-5 text-center">
      {loggedIn
        ? <h1 className="display-5 fw-bold">
          Welcome back, {userDetails.firstName}!
        </h1>
        : <div>
            <h1 className="display-5 fw-bold">
              Welcome to Jobly!
            </h1>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-4">
              <Link className="btn btn-primary btn-lg px-4 gap-3" to="/login">
                Login
              </Link>
              <Link className="btn btn-outline-secondary btn-lg px-4" to="/signup">
                Signup
              </Link>
            </div>
          </div>
      }
      <div className="col-lg-6 mx-auto">

      </div>
    </div>
  );
}

export default HomePage;