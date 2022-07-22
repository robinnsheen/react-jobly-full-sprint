import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobList from './JobList';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import userContext from "./userContext";
import { useContext } from "react";

//TODO: pass down update function

/** List of routes and the components they render */
function RoutesList({ register,login }) {
  const { userDetails } = useContext(userContext);

  const loggedIn = userDetails.username !== "" ? true : false;

  if (loggedIn) {
    return (
      <Routes>
        <Route path="/" element={<HomePage  />} />
        <Route path="/companies" element={<CompanyList />} />
        <Route path="companies/:company" element={<CompanyDetail />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<HomePage  />} />
        <Route path="/login" element={<LoginForm submit={login}/>} />
        <Route path="/signup" element={<SignupForm submit={register}   />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }

}

export default RoutesList;
