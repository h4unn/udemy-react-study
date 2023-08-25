import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmout] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');
    const [userInput,setUserInput] = useState({
        enteredTitle: '',
        enteredAmout: '',
        enteredDate:''
    })
    const titleChangeHandler = ev => {
        // console.log(ev.target.value);
         // console 창에서 ev만을 확인 했을 땐 input 그 자체만 나온다. 클릭해서 확인해보면 value 값에 트리거가 실행되었을때 값을 가지고 있는 것이 보이는데 ev.value로 확인 하지 말고 ev.target.value 로 확인
        // setEnteredTitle(ev.target.value);
        // setUserInput({
        //     ...userInput,
        //    // ...userInput 을 쓰는 이유는 위에서 보 듯이 state를 객체화 하면 한꺼번에 바꿔야함 하나만 바꾸려고 하면 바꾸는 key와 value 는 변경된 채 유지되지만 나머지는 사라진다. (오버라이드)
        //     enteredTitle: ev.target.value
        // });
        setUserInput(prevState => {
            return { ...prevState, enteredTitle: ev.target.value };
            /*
                위에서 setUserInput 방식 보다 이 방식이 더 안전하게 사용 할 수 있다.
                setUserInput 함수를 구체화해서  매개변수를 대입하면 기존 userInput이 매개변수 값으로 들어오고 
                return 에 ...provSate로 복사 후 변경하고 싶은 값은 따로 설정
             */
        });
        
    }
    const amountChangeHandler = ev => {
        setUserInput({
            ...userInput,
            enteredAmout: ev.target.value
        });
    }
    const dateChangeHandler = ev => {
        setUserInput({
            ...userInput,
            enteredDate: ev.target.value
        });
    }
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>상품</label>
                    <input type="text" onInput={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>가격</label>
                    <input type="number" min="0.01" step="0.01" onInput={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>날짜</label>
                    <input type="date" min="2019-01-01" step="2022-12-31" onInput={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">완료</button>
            </div>
        </form>
    );
}
/*
    onInput 
    값이 입력되거나 인풋에 변화가 생기면 수신할 이벤트 리스너
    장점 : 모든 인풋 타입에 같은 이벤트를 사용할 수 있다
    * 프로퍼티가 뒷단에서 DOM에 렌더링되는 input 요소에 이벤트 변화를 수신하는 이벤트 리스너를 추가해 준다.
*/