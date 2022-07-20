import { useEffect, useState } from "react";
import JoblyApi from "./api";
import JobCard from "./JobCard";
import SearchForm from "./SearchForm";
import { useParams } from 'react-router-dom';
import "./JobList.css";


/**
 * JobList
 * Renders a list of JobCards for all jobs or filtered by title from
 * Jobly API
 *
 * state:
 *  - jobs: [{companyHandle, companyName, equity, id, salary, title}, ...]
 *  - titleFilter: null or "search term"
 *
 * Rendered at /jobs
 *
 */

function JobList() {
  const [jobs, setJobs] = useState(null);
  const [titleFilter, setTitleFilter] = useState(null);
  // console.log("handle", params.company)
  // console.log("jobs", jobs);
  // console.log("titleFilter", titleFilter);


  useEffect(function fetchJobsOnRender() {
    async function fetchJobs() {

      const result = await JoblyApi.getJobs(titleFilter);
      console.log("result", result);
      setJobs(result);

    }
    fetchJobs();
  }, [titleFilter]);

  function search(filter) {
    setTitleFilter(filter);
  }

  if (jobs === null) return <i>Loading...</i>;

  return (
    <div className="CompanyList">
      <SearchForm search={search} />
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );

}

export default JobList;