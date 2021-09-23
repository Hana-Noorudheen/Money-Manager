import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card.js";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState(props.year);
  function filterChangeHandler(year)
   {
    setfilteredYear(year);
  }


  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
 

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
         <ExpenseChart expense={filteredExpenses}/>
         <ExpenseList items={filteredExpenses}/>
        
        
      </Card>
    </div>
  );
}

export default Expenses;
