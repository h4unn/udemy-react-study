import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {

   const saveExpenseData = expenseUpdateData =>{
      const updateData = {
         ...expenseUpdateData,
         id:Math.random().toString()
      }
      props.addExpenseHandler(updateData);
   }

   return(
      <div className="new-expense">
         <ExpenseForm saveExpenseData={saveExpenseData}/>
      </div>
   )

}

export default NewExpense;