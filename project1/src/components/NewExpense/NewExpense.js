import React , {useState} from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDataHandler = enterdExpenseData => {
        const expenseData = { // 여기에 들어오는 값은 submitHandler에서 만들었던 객체가 들어온다.
            ...enterdExpenseData,
            id : Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }
    const [isEditing,setIsEditing] = React.useState(false);
    function startEditingHandler(){
        setIsEditing(true);
    }
    function stopEditingHandler(){
        setIsEditing(false);
    }
    
    return ( 
        <div className="new-expense">
            {isEditing ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel = {stopEditingHandler}/> : <button onClick={startEditingHandler}>Add New Expense</button>}
        </div>
    );
}
export default NewExpense;
/*
    <ExpenseForm onSaveExpneseData/>
    여기서 onSaveExpenseData는 expenseForm에서 event 가 발생 했을 때 작동
    죽, expenseForme에서 submit이 작동 했을 때 실행!
*/