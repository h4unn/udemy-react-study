import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
   return (
      <Card className="expense-item">
         <ExpenseDate date={props.expense.date}/>
         <div className="expense-item__description">
            <h2>{props.expense.title}</h2>
            <div className="expense-item__price">${props.expense.amount}</div>
         </div>
      </Card>
   );
}
export default ExpenseItem;
/*
   react hook
   1. hook 은 use로 시작
   2. component function 안에서만 사용 가능
   3. return안에서 사용 불가(?)
*/