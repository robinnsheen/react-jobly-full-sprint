import { useEffect, useState } from "react";
import JoblyApi from "./api";
import JobCard from "./JobCard";
import SearchForm from "./SearchForm";
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
 * props: none
 *
 * Rendered at /jobs
 *
 */

function JobList() {
  const [jobs, setJobs] = useState(null);
  const [titleFilter, setTitleFilter] = useState(null);

  useEffect(function fetchJobsOnRender() {
    async function fetchJobs() {

      const result = await JoblyApi.getJobs(titleFilter);
      console.log("result", result);
      setJobs(result);

    }
    fetchJobs();
  }, [titleFilter]);

  //set TitleFilter to "filter"
  function search(filter) {
    setTitleFilter(filter);
  }

  if (jobs === null) return <i>Loading...</i>;

  return (
    <div className="JobList col-md-8 offset-md-2">
      <h2>Jobs</h2>
      <SearchForm search={search} />
      <div className="JobList-list ">
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );

}

export default JobList;
