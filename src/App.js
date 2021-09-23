import React,{ useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';


const DUMMY_EXPENSES=
[



  {  id:'e1',title:'Car Insurance',amount:294.67,date:new Date (2020,2,28)},
  {  id:'e2',title:'vegetables',amount:150.31,date:new Date (2020,3,5)},
  {  id:'e3', title:'Newspaper',amount:100.67,date:new Date (2020,4,9)},
  {  id:'e4', title:'Loan',     amount:350.54, date:new Date (2020,7,8)}


];






function App()
 {
  
   const [expenses,setExpenses]=useState(DUMMY_EXPENSES);

   const addExpenseHandler = (expense) => {
      setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses];
      });
    };


   return(

    <div>
      <h1>MONEY MANAGER</h1>
       <NewExpense  onAddExpense={addExpenseHandler}/>
       <Expenses items={expenses}/>
   </div>
   );
};

export default App;








