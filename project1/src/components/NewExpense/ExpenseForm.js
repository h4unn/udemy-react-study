import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput,setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmout: '',
    //     enteredDate:''
    // })
    const titleChangeHandler = ev => {
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: ev.target.value };
        // }); 
    /*
        setUserInput 을 함수형 으로하면 매개변수로 userInput에 있는 상태값이 들어오고,
        prevState를 전개연산자로 불러와서 기존 값을 복사 후 변화된 값을 적용 
    */
        setEnteredTitle(ev.target.value);
        console.log(ev.target.value);
    }
    const amountChangeHandler = ev => {
        setEnteredAmount(ev.target.value);
    }
    const dateChangeHandler = ev => {
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
    // } 위에 있는 함수를 합친 함수
    const submitHandler = ev => {
        ev.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
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
                    <input type="number" min="1" step="1" value={enteredAmount} onInput={amountChangeHandler}/>
                </div>                <div className="new-expense__control">
                    <label>날짜</label>
                    <input type="date" min="2019-01-01" step="2022-12-31" value={enteredDate} onInput={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick = {props.onCancel}>Cancel</button>
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

    inputChangeHandler() 사용 법
    <input type="text" onChange={ev => inputChangeHandler('title',ev.target.value)}/>

    onChange={inpurChangeHandler}를 했을 경우 원하는 inputChangeHandler에 매개변수로 있는
    identifier,value 값이 들어오지 않는다.
    그래서 익명함수로 ev 매개변수로 값과 키를 받아서 사용
*/