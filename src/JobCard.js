import "./JobCard.css";

/**
 *  JobCard
 *  Renders a individual JobCard from Jobly API
 *
 *  states: none
 *
 *  props: job company
 *
 *  jobList/CardDetails---> JobCard
 */

function JobCard({ job, company }) {


  return (
    <div className="JobCard card">
      <div className="CardBody">
        <h4 className="Card-title">{job.title}</h4>
        <p>{!company ? job.companyName : null}</p>
        <p>salary: {job.salary}</p>
        <p>equity: {job.equity}</p>
      </div>
    </div>
  );
}
export default JobCard;
