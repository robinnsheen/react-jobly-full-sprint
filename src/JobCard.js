/**
 * JobCard
 * Renders a indivdual JobCard
 * Jobly API
 *
 *
 *  jobList/CardDetails---> JobCard
 *
 */

function JobCard({job, company}) {
  //console.log("Job",job)

  return(
    <div>

      <p>{job.title}</p>
      <p>{!company ? job.companyName : null}</p>
      <p>salary: {job.salary}</p>
      <p>equity: {job.equity}</p>
    </div>
  )
}
export default JobCard
