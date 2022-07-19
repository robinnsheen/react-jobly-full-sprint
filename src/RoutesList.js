import {  Route, Routes } from 'react-router-dom';



function RoutesList(){
  return(
    <Routes>
    <Route path="/" element={<HomePage  />} />
    <Route path="/companies" element={<CompanyList  />} />
    <Route path="companies/apple" element={<CompanyDetail company={company} />} />
    <Route path="/jobs" element={<JobList  />} />
    </Routes>


  )
}
