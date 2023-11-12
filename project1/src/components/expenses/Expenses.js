import React,{useState} from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


import "./Expenses.css"
import './ExpensesFilter.css';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022');
    let filterInfoText = '2019, 2021 & 2022';
    if(filteredYear === '2019'){
        filterInfoText = '2020,2021 & 2022';
    }else if(filteredYear === '2020'){
        filterInfoText = '2019,2021 & 2022';
    }else if(filteredYear === '2021'){
        filterInfoText = '2019,2020 & 2022';
    }

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(item => {
        return item.date.getFullYear().toString() == filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter = {filterChangeHandler}/>
                <p>Data for years {filterInfoText} is hidden.</p>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
}
export default Expenses;
{/* {filteredExpenses.length === 0 ? (<p>No expneses found.</p>)
        :
        (filteredExpenses.map((item,idx)=>{
            return <ExpenseItem key={idx} expense={item}/>
        }))
    } */}
