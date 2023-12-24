import React from "react";

const ExpenseFilter = (props) => {
   // const dropDownChangeHandler = ev => { 
   //    console.log(ev.target.value);
   //    props.onChangeFilter(ev.target.value);
   // }
   return (
      <div className="expenses-filter">
         <div className="expenses-filter__control">
            <label>Filter by year</label>
            <select value={props.selected} onChange={ev =>{props.onChangeFilter(ev.target.value)}}>
               <option value="2020">2020</option>
               <option value="2021">2021</option>
               <option value="2022">2022</option>
               <option value="2023">2023</option>
            </select>
         </div>
      </div>
   );
}
export default ExpenseFilter;