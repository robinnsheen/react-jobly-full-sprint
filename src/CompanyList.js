import { useEffect, useState } from "react";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import "./CompanyList.css";
import { Link } from "react-router-dom";
/**
 * CompanyList
 * Renders a list of CompanyCards for all companies or filtered by name from
 * Jobly API
 *
 * state:
 *  - companies: [{handle, description, name, logoUrl, numEmployees}, ...]
 *  - nameFilter: null or "search term"
 *
 * props: none
 *
 * Rendered at /companies
 *
 */
function CompanyList() {
  const [companies, setCompanies] = useState(null);
  const [nameFilter, setNameFilter] = useState(null);

  useEffect(function fetchCompaniesOnRender() {
    async function fetchCompanies() {

      const result = await JoblyApi.getCompanies(nameFilter);
      setCompanies(result);
    }
    fetchCompanies();
  }, [nameFilter]);

  //updates NameFilter with "filter"
  function search(filter) {
    setNameFilter(filter);
  }

  if (companies === null) return <i>Loading...</i>;

  return (
    <div className="CompanyList col-md-8 offset-md-2">
      <h2>Companies</h2>
      <SearchForm search={search} />
      <div className="Companies-list ">
        {companies.map(company => (


          <Link to={`/companies/${company.handle}`}>
            <CompanyCard key={company.handle} company={company} />
          </Link>


        ))}
      </div>
    </div>

  );

}

export default CompanyList;
