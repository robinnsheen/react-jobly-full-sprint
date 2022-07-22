import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobList from './JobList';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ProfileForm from './ProfileForm';



//TODO: refactor return: one return statement that returns ternary(look into fragment)

/** List of routes and the components they render
 *  Props:
 *   - register function
 *   - login function
 *   - update function
 *
 *  States: none
 *
 *  Returns correct routes for logged in vs logged out users
*/
function RoutesList({ register,login,update}) {


  const istoken = window.localStorage.getItem("token") !== null ? true : false;
  console.log("istoken",istoken)

  if (istoken) {
    return (
      <Routes>
        <Route path="/" element={<HomePage  />} />
        <Route path="/companies" element={<CompanyList />} />
        <Route path="companies/:company" element={<CompanyDetail />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/profile" element={<ProfileForm auth={update} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<HomePage  />} />
        <Route path="/login" element={<LoginForm auth={login}/>} />
        <Route path="/signup" element={<SignupForm auth={register}   />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }

}

export default RoutesList;
