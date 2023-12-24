import {React,useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
   const [enteredTitle,setEnteredTitle] = useState('');
   const [enteredAmout,setEnteredAmout] = useState('');
   const [enteredDate,setEnteredDate] = useState('');
   
   const enteredTitleChange = ev => { 
      setEnteredTitle(ev.target.value);
   }
   const enteredAmoutChange = ev => { 
      setEnteredAmout(ev.target.value);
   }
   const enteredDateChange = ev => { 
      setEnteredDate(ev.target.value);
   }

   const enteredDataSubmit = ev => {
      ev.preventDefault();
      const submitData = {
         title:enteredTitle,
         amount:enteredAmout,
         date:new Date(enteredDate)
      }
      props.saveExpenseData(submitData);
      setEnteredTitle('');
      setEnteredAmout('');
      setEnteredDate('');
   }
   return (
      <form onSubmit={enteredDataSubmit}>
         <div className="new-expense__controls">
            <div className="new-expense__control">
               <label>상품</label>
               <input type="text" value={enteredTitle} onChange={enteredTitleChange}/>
            </div>
            <div className="new-expense__control">
               <label>가격</label>
               <input type="number" min="10000" step="10000" value={enteredAmout} onChange={enteredAmoutChange}/>
            </div>               
            <div className="new-expense__control">
               <label>날짜</label>
               <input type="date" min="2019-01-01" step="2022-12-31" value={enteredDate} onChange={enteredDateChange}/>
            </div>
         </div>
         <div className="new-expense__actions">
            <button type="button">Cancel</button>
            <button type="submit">완료</button>
         </div>
      </form>
   )
}

export default ExpenseForm;