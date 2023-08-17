import Expenses from "./components/expenses/Expenses";

function App() {
  const expenses = [
    { id: "e1", title: "Toilet Paper", amount: 94.12, date: new Date(2020, 7, 14),},
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    { id: "e3", title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28),},
    { id: "e4", title: "New Desk (Wooden)", amount: 450, date: new Date(2022, 5, 12),}
  ];
  // expenseDate 는 객체이기 때문에 .toISOString()를 해줘야 한다. (알아보기)
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      {/* 
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/> 
        아래처럼 단일 props 를  expenseItem 전달하는 방식은 
        전달은 편리하지만 하위 component에선 분리를 시켜 사용해야 한다.
        ex) props.expense.title >> 전달 key(?)가 expense
      */}
      {/* <ExpenseItem expense={expenses[0]}/>
      <ExpenseItem expense={expenses[1]}/>
      <ExpenseItem expense={expenses[2]}/>
      <ExpenseItem expense={expenses[3]}/> */}
      <Expenses items={expenses}/>
    </div>
  );
}
/*
  component tree
  <app/>
  <header/><tasks/>
  ~~~~~
  
  가장 상위에 있는 컴포넌트만이 리액트 돔이 index.html 에 직접 랜더링이 된다.
  
*/

export default App;