import React,{useState} from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import ExpenseChart from './ExpenseChart';

import './Expenses.css';

const Expenses = (props) => {
   const [filterDate,setFilterDate]  = useState('2020');

   const filterDateFunc = selectedYear => {
      setFilterDate(selectedYear);
   }

   const filteredMatchs = props.items.filter(item => {
      return item.date.getFullYear().toString() == filterDate;
   });

   return(
      <Card className="expenses">
         <ExpenseChart items = {filteredMatchs}/>
         <ExpensesFilter selected={filterDate} changeFilterDate={filterDateFunc}/>
         {filteredMatchs.map((obj,idx)=>{
            return <ExpenseItem item={obj} key={idx}/>
         })}
      </Card>
   )
}
export default Expenses;