import React, { useState } from "react";

/**
 * SearchForm component
 * Props:
 *  - search: function for handleSubmit
 *
 * States:
 *  - term: string showing value of input field
 *
 * JobList => SearchForm
 * CompanyList => SearchForm
 */
function SearchForm({ search }) {
  const [term, setTerm] = useState("");

  function handleChange(evt) {
    setTerm(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    search(term);
    setTerm("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={term} onChange={handleChange} />
      <button>Search!</button>
    </form>
  );
}


export default SearchForm;
