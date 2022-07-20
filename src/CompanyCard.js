function CompanyCard({company}) {

  return(
    <div>
      <p>{company.name}</p>
      <p>{company.description}</p>
      <img src={`/${company.logoURL}`} alt ={company.name}/>



    </div>
  )



}
export default CompanyCard
