import { useEffect, useState } from "react";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
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
function CompanyList() {
  const [companies, setCompanies] = useState("");
  const [nameFilter, setNameFilter] = useState(null);


  console.log("companies", companies);
  console.log("nameFilter", nameFilter);

  useEffect(function fetchCompaniesOnRender() {
    async function fetchCompanies() {

      const result = await JoblyApi.getCompanies(nameFilter);
      console.log("result", result);
      setCompanies(result);
    }
    fetchCompanies();
  }, [nameFilter]);

  function search(filter) {
    setNameFilter(filter);
  }

  if (companies === "") return <i>Loading...</i>;

  return (
    <div className="CompanyList">
      <SearchForm search={search} />
      {companies.map(company => (
        <CompanyCard key={company.handle} company={company} />
      ))}
    </div>
  );

}

export default CompanyList;
