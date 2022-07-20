import "./CompanyCard.css";

/**
 * CompanyCard
 * renders individual company Card
 *
 * states: none
 *
 * props: company = {company}
 *
 * CompanyList--> CompanyCard
 */
//TODO: only render img if present
function CompanyCard({ company }) {

  return (
    <div className="CompanyCard">
      <h3>{company.name}</h3>
      <p>{company.description}</p>
      <img src={`${company.logoUrl}`} alt={company.name} />

    </div>
  );

}
export default CompanyCard;
