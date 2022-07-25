import React, { useState } from "react";
import "./SearchForm.css";

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
    <form className="SearchForm mb-4" onSubmit={handleSubmit}>
      <input
        value={term}
        onChange={handleChange}
        placeholder="search" />
      <button className="btn btn-primary mx-2">Search!</button>
    </form>
  );
}


export default SearchForm;
