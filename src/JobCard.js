import "./JobCard.css";

/**
 *  JobCard
 *  Renders a individual JobCard from Jobly API
 *
 *  states: none
 *
 *  props: none
 *
 *  jobList/CardDetails---> JobCard
 */

function JobCard({ job, company }) {
  // console.log("Job",job)

  return (
    <div className="JobCard card">
      <div className="CardBody">
        <h3 className="Card-title">{job.title}</h3>
        <p>{!company ? job.companyName : null}</p>
        <p>salary: {job.salary}</p>
        <p>equity: {job.equity}</p>
      </div>
    </div>
  );
}
export default JobCard;
