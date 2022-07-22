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
function CompanyCard({ company }) {

  return (
    <div className="CompanyCard card">
      <div className="CardBody">
      <h3 className="Card-title">{company.name}</h3>
      {company.logoUrl
      ? <img className="float-end ms-5" src={`${company.logoUrl}`} alt={company.name} />
      : null}
      <p>{company.description}</p>


    </div>
    </div>
  );

}
export default CompanyCard;
