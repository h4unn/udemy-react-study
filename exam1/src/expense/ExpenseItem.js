import React from 'react';
import './ExpenseItem.css';
import ExpenseData from './ExpenseData';
const ExpenseItem = (props) => {
   return(
      <div className="expense-item">   
         <div className="expense-item__description">
            <ExpenseData date = {props.item.date}/>
            <h2>{props.item.title}</h2>
            <div className="expense-item__price">${props.item.amount}</div>
         </div>
      </div>
   )
}

export default ExpenseItem;