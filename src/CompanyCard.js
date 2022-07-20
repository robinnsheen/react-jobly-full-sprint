/**
 * CompanyCard
 * renders individual company Card
 *
 * props: company = {company}
 *
 * CompanyList--> CompanyCard
 */

function CompanyCard({ company }) {

  return (
    <div className="CompanyCard">
      <p>{company.name}</p>
      <p>{company.description}</p>
      <img src={`/${company.logoURL}`} alt={company.name} />

    </div>
  );

}
export default CompanyCard;
