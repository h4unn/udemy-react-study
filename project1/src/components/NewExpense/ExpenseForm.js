import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput,setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmout: '',
    //     enteredDate:''
    // })
    const titleChangeHandler = ev => {
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: ev.target.value
        // });
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: ev.target.value };
        // });
        setEnteredTitle(ev.target.value);
    }
    const amountChangeHandler = ev => {
        // setUserInput({
        //     ...userInput,
        //     enteredAmout: ev.target.value
        // });
        setEnteredAmount(ev.target.value);
    }
    const dateChangeHandler = ev => {
        // setUserInput({
        //     ...userInput,
        //     enteredDate: ev.target.value
        // });
        setEnteredDate(ev.target.value);
    }

    // const inputChangeHandler = (identifier, value) => {
    //     if (identifier === 'title') {
    //         setEnteredTitle(value);
    //     } else if (identifier === 'date') {
    //         setEnteredDate(value);
    //     } else if (identifier === 'amount') {
    //         setEnteredAmount(value);
    //     }
    // }// 위에 있는 함수를 합친 함수
    const submitHandler = (ev) => {
        ev.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>상품</label>
                    <input type="text" value={enteredTitle} onInput={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>가격</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onInput={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>날짜</label>
                    <input type="date" min="2019-01-01" step="2022-12-31" value={enteredDate} onInput={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">완료</button>
            </div>
        </form>
    );
}
export default ExpenseForm;
/*
    onInput 
    값이 입력되거나 인풋에 변화가 생기면 수신할 이벤트 리스너
    장점 : 모든 인풋 타입에 같은 이벤트를 사용할 수 있다
    * 프로퍼티가 뒷단에서 DOM에 렌더링되는 input 요소에 이벤트 변화를 수신하는 이벤트 리스너를 추가해 준다.
    
    input에 value 를 넣는 이유
    현재 form submit 기능을 막아둔 상태
    submit기능 해제로 새로고침 현상이 없어서 submit 후 값이 그대로 있는 상태이다.
    그걸 해결하기 위해 위에서 setentered~() 해서 값을 초기화 해준다음 value 값에 넣는 것.
*/