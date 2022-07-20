import { useEffect, useState } from "react";
import JoblyApi from "./api";
import JobList from "./JobList";
import { useParams } from 'react-router-dom';
import "./CompanyList.css";

/**
 * CompanyList
 * Renders a list of CompanyCards for all companies or filtered by name from
 * Jobly API
 *
 * state:
 *  - companies: [{handle, description, name, logoUrl, numEmployees}, ...]
 *  - nameFilter: null or "search term"
 *
 * Rendered at /companies
 *
 */
function CompanyDetail() {
  const [company, setCompany] = useState({});
  const params = useParams();

  useEffect(function fetchCompanyOnRender() {
    async function fetchCompany() {

      const result = await JoblyApi.getCompany(params.company);
      console.log("GETCOMPANYRESULTS", result);
      setCompany(result);
    }
    fetchCompany();
  }, []);

  return (
    <div className="CompanyDetail">
      <div>
        <h2>{company.name}</h2>
        <p>{company.description}</p>
      </div>
      <JobList jobs={company.jobs}/>
    </div>
  );

}

export default CompanyDetail;