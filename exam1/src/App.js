import React,{useState} from 'react';
import Expenses from './expense/Expenses';
import NewExpense from './form/NewExpense';

function App() {
  const expensesData = [
    { id: "e1", title: "Toilet Paper", amount: 94.12, date: new Date(2020, 7, 14),},
    { id: "e2", title: "Toilet Paper", amount: 100.12, date: new Date(2020, 8, 14),},
    { id: "e3", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    { id: "e4", title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28),},
    { id: "e5", title: "New Desk (Wooden)", amount: 240, date: new Date(2022, 5, 12),},
    { id: "e6", title: "New Desk", amount: 799.49, date: new Date(2022, 6, 12),},
    { id: "e7", title: "New product", amount: 299.19, date: new Date(2023, 9, 12),},
    { id: "e8", title: "New Desk (Wooden)", amount: 450, date: new Date(2023, 6, 12),}
  ];
  const [expenses,setExpenses] = useState(expensesData);

  const addExpenseHandler = expense => {
    setExpenses(prevExpense  => { 
      return [expense, ...prevExpense];
    });
  }
  return (
    <div>
      <NewExpense addExpenseHandler = {addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
