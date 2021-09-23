import React from "react";
import "./ExpenseFilter.css";

function ExpenseFilter(props) {
  function filterHandler(event) {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label className="expenses-filter__label">Filter by year</label>
        <select className="expenses-filter__select" onChange={filterHandler}>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
          <option>2018</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
