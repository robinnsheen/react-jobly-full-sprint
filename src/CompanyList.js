import { useEffect, useState } from "react";
import JoblyApi from "./api"
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";

function CompanyList() {
 const [companies,setCompanies]=useState("");
 const [nameFilter,setNameFilter]=useState("");

  useEffect(function fetchCompaniesOnRender(){
    async function fetchCompanies(){
      const result = JoblyApi.getCompanies(nameFilter)
      setCompanies(result);
    }
    fetchCompanies();
    },[nameFilter]);

    function search(filter){
      setNameFilter(filter);
    }

    if (companies==="") return <i>Loading...</i>

    return(
      <div>
        <SearchForm search = {search} />
        {companies.map(company => (
          <CompanyCard company ={company}/>
        ))}
      </div>
    )













  return <p>CompanyList</p>;
}

export default CompanyList;
