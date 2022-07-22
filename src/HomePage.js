import "./HomePage.css";
import { useContext } from "react";
import userContext from "./userContext";

/** Renders HomePage with welcome text
 *
 *  Returns correct homepage for logged in vs logged out user
*/

function HomePage() {

  const { userDetails } = useContext(userContext);
  const loggedIn = userDetails.username !== "" ? true : false;

  return (
    <div className="HomePage">
      {loggedIn
        ? <h1>Welcome to Jobly {userDetails.firstName}!</h1>
        : <h1>Welcome to Jobly </h1>
      }
    </div>
  );
}

export default HomePage;