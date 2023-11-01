import React from "react";
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = props => {
   let expensesContents = null;
   if (props.items.length > 0) {
      expensesContents = props.items.map((item, idx) => {
         return <ExpenseItem key={idx} expense={item} />;
      });
   } else {
      expensesContents = <p>No expense found.</p>;
   }
   return(
      <ul className="expenses-list">
         {expensesContents} 
      </ul>
   );
}

export default ExpensesList;