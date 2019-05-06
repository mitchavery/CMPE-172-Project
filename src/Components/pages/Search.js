import React from "react";
import './Search.css';

const Search = props => (
  <div>
      <h1>Search For Employee</h1>
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="Employee Name" />
      <button >Search</button>
    </form>
  </div>
);

export default Search;