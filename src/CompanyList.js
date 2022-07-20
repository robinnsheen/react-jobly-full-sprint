import { useEffect, useState } from "react";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import "./CompanyList.css";

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
        <CompanyCard company={company} />
      ))}
    </div>
  );













  return <p>CompanyList</p>;
}

export default CompanyList;
